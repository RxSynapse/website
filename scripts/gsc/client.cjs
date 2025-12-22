/**
 * Google Search Console API Client
 *
 * This module provides a reusable client for interacting with the
 * Google Search Console API using service account authentication.
 */

const { google } = require('googleapis');
const path = require('path');

class GSCClient {
  constructor(credentialsPath, siteUrl) {
    this.credentialsPath = credentialsPath;
    this.siteUrl = siteUrl;
    this.searchconsole = null;
    this.auth = null;
  }

  /**
   * Initialize the Google Search Console API client
   */
  async initialize() {
    try {
      // Load service account credentials
      const auth = new google.auth.GoogleAuth({
        keyFile: this.credentialsPath,
        scopes: ['https://www.googleapis.com/auth/webmasters'],
      });

      this.auth = await auth.getClient();
      this.searchconsole = google.searchconsole({ version: 'v1', auth: this.auth });

      console.log('✓ Google Search Console API client initialized successfully');
      return true;
    } catch (error) {
      console.error('✗ Failed to initialize GSC client:', error.message);
      throw error;
    }
  }

  /**
   * Get list of sites accessible to this service account
   */
  async listSites() {
    try {
      const response = await this.searchconsole.sites.list();
      return response.data.siteEntry || [];
    } catch (error) {
      console.error('Error listing sites:', error.message);
      throw error;
    }
  }

  /**
   * Query search analytics data
   *
   * @param {Object} options - Query options
   * @param {string} options.startDate - Start date in YYYY-MM-DD format
   * @param {string} options.endDate - End date in YYYY-MM-DD format
   * @param {Array<string>} options.dimensions - Dimensions to group by (query, page, country, device, searchAppearance)
   * @param {number} options.rowLimit - Maximum number of rows to return (default: 1000)
   * @param {string} options.type - Search type: web, image, video (default: web)
   */
  async querySearchAnalytics(options) {
    const {
      startDate,
      endDate,
      dimensions = ['query'],
      rowLimit = 1000,
      type = 'web'
    } = options;

    try {
      const response = await this.searchconsole.searchanalytics.query({
        siteUrl: this.siteUrl,
        requestBody: {
          startDate,
          endDate,
          dimensions,
          rowLimit,
          type,
        },
      });

      return response.data.rows || [];
    } catch (error) {
      console.error('Error querying search analytics:', error.message);
      throw error;
    }
  }

  /**
   * Get site indexing status
   */
  async getSiteIndexStatus() {
    try {
      const response = await this.searchconsole.sites.get({
        siteUrl: this.siteUrl,
      });
      return response.data;
    } catch (error) {
      console.error('Error getting site index status:', error.message);
      throw error;
    }
  }

  /**
   * Get sitemaps for the site
   */
  async listSitemaps() {
    try {
      const response = await this.searchconsole.sitemaps.list({
        siteUrl: this.siteUrl,
      });
      return response.data.sitemap || [];
    } catch (error) {
      console.error('Error listing sitemaps:', error.message);
      throw error;
    }
  }

  /**
   * Submit a sitemap
   *
   * @param {string} feedpath - Path to the sitemap (e.g., 'sitemap.xml')
   */
  async submitSitemap(feedpath) {
    try {
      await this.searchconsole.sitemaps.submit({
        siteUrl: this.siteUrl,
        feedpath: feedpath,
      });
      console.log(`✓ Sitemap submitted: ${feedpath}`);
      return true;
    } catch (error) {
      console.error('Error submitting sitemap:', error.message);
      throw error;
    }
  }

  /**
   * Get sitemap details
   *
   * @param {string} feedpath - Path to the sitemap (e.g., 'sitemap.xml')
   */
  async getSitemap(feedpath) {
    try {
      const response = await this.searchconsole.sitemaps.get({
        siteUrl: this.siteUrl,
        feedpath: feedpath,
      });
      return response.data;
    } catch (error) {
      console.error('Error getting sitemap:', error.message);
      throw error;
    }
  }
}

module.exports = GSCClient;
