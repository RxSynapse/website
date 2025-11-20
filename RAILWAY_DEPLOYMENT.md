# Railway Deployment Guide

This project is configured to deploy on [Railway](https://railway.app) - a modern platform for deploying applications with zero configuration.

## Quick Start

### 1. Prerequisites
- A [Railway account](https://railway.app) (free tier available)
- This GitHub repository connected to your Railway account

### 2. Deploy to Railway

#### Option A: Deploy via Railway Dashboard
1. Log in to [Railway](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose this repository: `RxSynapse/website`
5. Railway will automatically detect the configuration and start deploying
6. Once deployed, Railway will provide you with a URL (e.g., `your-app.railway.app`)

#### Option B: Deploy via Railway CLI
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Link to your project (first time only)
railway link

# Deploy
railway up
```

## Configuration Files

### `railway.json`
Defines the build and deployment configuration:
- **Build Command**: `npm ci && npm run build` - Installs dependencies and builds the project
- **Start Command**: `npx serve dist -s -p $PORT` - Serves static files with SPA support
- **Restart Policy**: Automatically restarts on failure (max 10 retries)

### `nixpacks.toml`
Nixpacks configuration for Railway's build system:
- Uses Node.js 20
- Installs dependencies with `npm ci`
- Builds with `npm run build`
- Serves with `serve` package

### `.railwayignore`
Excludes unnecessary files from deployment to reduce build time and size.

## Custom Domain Setup

### Connecting Your Domain (rxsynapse.com)

1. **In Railway Dashboard**:
   - Go to your project settings
   - Click on "Settings" → "Domains"
   - Click "Add Domain"
   - Enter your custom domain: `rxsynapse.com`
   - Railway will provide DNS records

2. **Update DNS Records**:
   Add the following records in your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: <your-railway-app>.railway.app

   Type: A (or ALIAS/ANAME)
   Name: @
   Value: <Railway's IP or CNAME>
   ```

3. **Verify Domain**:
   - Wait for DNS propagation (can take up to 48 hours, usually faster)
   - Railway will automatically provision SSL certificates

## Environment Variables

Railway automatically provides:
- `PORT` - The port your application should listen on
- `RAILWAY_ENVIRONMENT` - Current environment (production/staging)

No additional environment variables are required for this static site.

## Build Process

1. **Install Phase**: `npm ci` installs exact versions from package-lock.json
2. **Build Phase**: `tsc -b && vite build` compiles TypeScript and builds Vite project
3. **Deploy Phase**: Static files from `dist/` are served via `serve` package

## Monitoring & Logs

- **View Logs**: Click on your deployment in Railway dashboard to see real-time logs
- **Metrics**: Railway provides CPU, memory, and network usage metrics
- **Deployments**: View all deployment history and rollback if needed

## Automatic Deployments

Railway automatically deploys when you push to the `main` branch:
1. Push code to GitHub
2. Railway detects the change
3. Automatically builds and deploys
4. Zero downtime during deployment

## Troubleshooting

### Build Fails
- Check Railway logs for specific error messages
- Ensure `package.json` and `package-lock.json` are committed
- Verify Node.js version compatibility (using Node 20)

### Site Not Loading
- Ensure the `serve` package is properly serving SPA routes with `-s` flag
- Check that PORT environment variable is being used
- Verify domain DNS records are correctly configured

### Performance Issues
- Railway free tier has resource limits
- Consider upgrading to paid plan for production workloads
- Check build size warnings and optimize bundle size

## Migration from OCI

Previous deployment was on Oracle Cloud Infrastructure (OCI) using:
- GitHub Actions workflow
- SCP file transfer
- Nginx web server

Railway deployment is simpler:
- ✅ No server management required
- ✅ Automatic SSL certificates
- ✅ Built-in CDN
- ✅ Zero-downtime deployments
- ✅ Automatic scaling

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run start
```

## Support

- **Railway Documentation**: https://docs.railway.app
- **Railway Discord**: https://discord.gg/railway
- **Railway Status**: https://status.railway.app

## Costs

- **Free Tier**: $5 of free credits per month
- **Hobby Plan**: $5/month + usage
- **Pro Plan**: $20/month + usage

This static site should run comfortably on the free tier for development/staging.
