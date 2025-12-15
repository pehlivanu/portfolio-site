# Google OAuth Setup Guide

To enable the login functionality for the CV Generator, you need to configure Google OAuth credentials. Follow these steps:

## 1. Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Click on the project dropdown in the top bar and select **"New Project"**.
3. Give your project a name (e.g., "Portfolio Auth") and click **"Create"**.
4. Once created, select the project from the dropdown.

## 2. Configure OAuth Consent Screen

1. In the left (hamburger) menu, navigate to **APIs & Services** > **OAuth consent screen**.
2. Select **External** as the User Type and click **Create**.
3. Fill in the required fields:
   - **App name**: Portfolio Site
   - **User support email**: Your email address
   - **Developer contact information**: Your email address
4. Click **Save and Continue**.
5. Skipping scopes is fine for now (just basic profile is needed), so click **Save and Continue**.
6. Under **Test users**, click **Add Users** and add your specific email address (`pehlivanu@gmail.com`) so you can log in while the app is in "Testing" mode.
7. Click **Save and Continue**.

## 3. Create Credentials

1. In the left menu, click on **Credentials**.
2. Click **+ CREATE CREDENTIALS** at the top and select **OAuth client ID**.
3. For **Application type**, select **Web application**.
4. Name it (e.g., "Portfolio Localhost").
5. Under **Authorized JavaScript origins**, add:
   - `http://localhost:3000`
6. Under **Authorized redirect URIs**, add:
   - `http://localhost:3000/api/auth/callback/google`
7. Click **Create**.

## 4. Get Credentials

1. A popup will appear with your **Client ID** and **Client Secret**.
2. Copy these values.

## 5. Update `.env.local`

Open your `.env.local` file in the project root and update the following lines:

```bash
# Authentication
AUTH_SECRET="your-generated-secret-here"
AUTH_GOOGLE_ID="paste-your-client-id-here"
AUTH_GOOGLE_SECRET="paste-your-client-secret-here"
```

### Generating a Secure AUTH_SECRET

You can generate a strong random string for `AUTH_SECRET` by running this command in your terminal:

```bash
openssl rand -base64 32
```

Or just type a long random string.

## 6. Restart Server

After saving the `.env.local` file, you must restart your development server for the changes to take effect:

```bash
npm run dev
```
