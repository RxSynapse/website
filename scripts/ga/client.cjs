/**
 * Google Analytics 4 (GA4) Data API Client
 *
 * This module provides a reusable client for interacting with the
 * Google Analytics Data API (v1beta) using service account authentication.
 *
 * NOTE: The same service account JSON used for GSC can be used here.
 * You just need to:
 * 1. Add the service account email to your GA4 property as a Viewer
 * 2. Get your GA4 Property ID (found in GA4 Admin > Property Settings)
 */

const { google } = require('googleapis');
const path = require('path');

class GA4Client {
  constructor(credentialsPath, propertyId) {
    this.credentialsPath = credentialsPath;
    this.propertyId = propertyId;
    this.analyticsData = null;
    this.analyticsAdmin = null;
    this.auth = null;
  }

  /**
   * Initialize the Google Analytics Data API client
   */
  async initialize() {
    try {
      // Load service account credentials
      const auth = new google.auth.GoogleAuth({
        keyFile: this.credentialsPath,
        scopes: [
          'https://www.googleapis.com/auth/analytics.readonly',
          'https://www.googleapis.com/auth/analytics',
        ],
      });

      this.auth = await auth.getClient();

      // Initialize both Data API (for reports) and Admin API (for property management)
      this.analyticsData = google.analyticsdata({ version: 'v1beta', auth: this.auth });
      this.analyticsAdmin = google.analyticsadmin({ version: 'v1alpha', auth: this.auth });

      console.log('✓ Google Analytics 4 Data API client initialized successfully');
      return true;
    } catch (error) {
      console.error('✗ Failed to initialize GA4 client:', error.message);
      throw error;
    }
  }

  /**
   * List all GA4 properties accessible to this service account
   */
  async listProperties() {
    try {
      const response = await this.analyticsAdmin.properties.list();
      return response.data.properties || [];
    } catch (error) {
      console.error('Error listing properties:', error.message);
      throw error;
    }
  }

  /**
   * Run a GA4 report
   *
   * @param {Object} options - Report options
   * @param {string} options.startDate - Start date (YYYY-MM-DD, 'yesterday', 'today', or 'NdaysAgo')
   * @param {string} options.endDate - End date (YYYY-MM-DD, 'yesterday', 'today', or 'NdaysAgo')
   * @param {Array<Object>} options.metrics - Metrics to query (e.g., [{name: 'activeUsers'}])
   * @param {Array<Object>} options.dimensions - Dimensions to group by (e.g., [{name: 'country'}])
   * @param {number} options.limit - Maximum number of rows (default: 10)
   * @param {Array<Object>} options.orderBys - Order by clauses (e.g., [{metric: {metricName: 'activeUsers'}, desc: true}])
   */
  async runReport(options) {
    const {
      startDate = '7daysAgo',
      endDate = 'today',
      metrics = [{ name: 'activeUsers' }],
      dimensions = [],
      limit = 10,
      orderBys = [],
    } = options;

    try {
      const response = await this.analyticsData.properties.runReport({
        property: `properties/${this.propertyId}`,
        requestBody: {
          dateRanges: [{ startDate, endDate }],
          metrics,
          dimensions,
          limit,
          orderBys: orderBys.length > 0 ? orderBys : undefined,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error running GA4 report:', error.message);
      throw error;
    }
  }

  /**
   * Get realtime report
   *
   * @param {Object} options - Realtime report options
   * @param {Array<Object>} options.metrics - Metrics to query
   * @param {Array<Object>} options.dimensions - Dimensions to group by
   * @param {number} options.limit - Maximum number of rows
   */
  async getRealtimeReport(options = {}) {
    const {
      metrics = [{ name: 'activeUsers' }],
      dimensions = [],
      limit = 10,
    } = options;

    try {
      const response = await this.analyticsData.properties.runRealtimeReport({
        property: `properties/${this.propertyId}`,
        requestBody: {
          metrics,
          dimensions,
          limit,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error getting realtime report:', error.message);
      throw error;
    }
  }

  /**
   * Get batch reports (run multiple reports at once)
   *
   * @param {Array<Object>} requests - Array of report request objects
   */
  async batchRunReports(requests) {
    try {
      const response = await this.analyticsData.properties.batchRunReports({
        property: `properties/${this.propertyId}`,
        requestBody: {
          requests,
        },
      });

      return response.data.reports || [];
    } catch (error) {
      console.error('Error running batch reports:', error.message);
      throw error;
    }
  }

  /**
   * Helper: Parse report rows into readable format
   */
  parseReportRows(report) {
    if (!report.rows) return [];

    return report.rows.map(row => {
      const result = {};

      // Add dimensions
      if (row.dimensionValues) {
        report.dimensionHeaders.forEach((header, index) => {
          result[header.name] = row.dimensionValues[index].value;
        });
      }

      // Add metrics
      if (row.metricValues) {
        report.metricHeaders.forEach((header, index) => {
          const value = row.metricValues[index].value;
          // Try to parse as number if possible
          result[header.name] = isNaN(value) ? value : parseFloat(value);
        });
      }

      return result;
    });
  }
}

module.exports = GA4Client;
