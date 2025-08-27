# 🚀 Render Deployment Guide

## Step-by-Step Deployment Instructions

### 1. Prepare Your Local Repository

```bash
# Ensure all files are committed
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### 2. Get Your DeepSeek API Key

1. Go to [DeepSeek Platform](https://platform.deepseek.com/)
2. Sign up/Login
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key (you'll need it for Render)

### 3. Deploy on Render

#### Step 1: Create Render Account
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Sign up with GitHub (recommended)

#### Step 2: Create New Web Service
1. Click **"New +"** button
2. Select **"Web Service"**
3. Connect your GitHub repository

#### Step 3: Configure the Service

**Basic Configuration:**
- **Name**: `saudi-stocks-assistance`
- **Environment**: `Node`
- **Region**: Choose closest to your users
- **Branch**: `main`

**Build & Deploy Settings:**
- **Build Command**: `npm install`
- **Start Command**: `npm start`

#### Step 4: Set Environment Variables

Click **"Environment"** tab and add:

| Key | Value | Description |
|-----|-------|-------------|
| `DEEPSEEK_API_KEY` | `your_actual_api_key_here` | Your DeepSeek API key |
| `NODE_ENV` | `production` | Production environment |
| `PORT` | `10000` | Render sets this automatically |

#### Step 5: Deploy
1. Click **"Create Web Service"**
2. Wait for build and deployment (5-10 minutes)
3. Your app will be available at: `https://your-app-name.onrender.com`

### 4. Update CORS Configuration

After deployment, update the CORS settings in `server/server.js`:

```javascript
const corsOptions = {
    origin: NODE_ENV === 'production' 
        ? ['https://your-actual-app-name.onrender.com', 'http://localhost:3000']
        : ['http://localhost:3000', 'http://127.0.0.1:3000'],
    // ... rest of config
};
```

Replace `your-actual-app-name.onrender.com` with your actual Render URL.

### 5. Test Your Deployment

1. **Main App**: `https://your-app-name.onrender.com`
2. **Saudi AI**: `https://your-app-name.onrender.com/saudi-ai`
3. **Stock Monitor**: `https://your-app-name.onrender.com/stock-monitor`
4. **Health Check**: `https://your-app-name.onrender.com/api/health`

### 6. Troubleshooting

#### Common Issues:

**Build Fails:**
- Check `package.json` has correct scripts
- Ensure all dependencies are listed
- Verify Node.js version compatibility

**App Won't Start:**
- Check environment variables are set correctly
- Verify API key is valid
- Check Render logs for errors

**CORS Errors:**
- Update CORS origin with your actual Render URL
- Ensure credentials are properly configured

**API Not Working:**
- Verify `DEEPSEEK_API_KEY` is set correctly
- Check API key has sufficient credits
- Test API key manually

### 7. Monitoring & Maintenance

#### Render Dashboard Features:
- **Logs**: View real-time application logs
- **Metrics**: Monitor performance and usage
- **Deployments**: View deployment history
- **Environment**: Manage environment variables

#### Health Check Endpoint:
Visit `https://your-app-name.onrender.com/api/health` to verify:
- Server is running
- API is configured
- Environment is correct

### 8. Production Considerations

#### Security:
- ✅ Environment variables for sensitive data
- ✅ CORS properly configured
- ✅ Input validation implemented
- ✅ Error handling in place

#### Performance:
- ✅ Static file serving optimized
- ✅ API timeouts configured
- ✅ Error logging implemented

#### Scalability:
- ✅ Stateless application design
- ✅ Environment-based configuration
- ✅ Health check endpoints

### 9. Custom Domain (Optional)

1. Go to your Render service settings
2. Click **"Custom Domains"**
3. Add your domain
4. Configure DNS records as instructed

### 10. Auto-Deploy

Render automatically deploys when you push to your main branch. Each deployment includes:
- Automatic build process
- Environment variable injection
- Health checks
- Zero-downtime deployment

---

## 🎯 Quick Deploy Checklist

- [ ] Repository is up to date on GitHub
- [ ] DeepSeek API key is ready
- [ ] Render account created
- [ ] Web service configured
- [ ] Environment variables set
- [ ] CORS updated with actual URL
- [ ] All endpoints tested
- [ ] Health check passes

## 🆘 Support

If you encounter issues:
1. Check Render logs in dashboard
2. Verify environment variables
3. Test API key manually
4. Check CORS configuration
5. Review this deployment guide

---

**Your Saudi Stock Exchange app should now be live on Render! 🚀**
