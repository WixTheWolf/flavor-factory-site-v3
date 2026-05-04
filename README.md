# Flavor Factory Site

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Unzip this project.
2. Push the folder to a new GitHub repo.
3. In Vercel, click **Add New > Project**.
4. Import the GitHub repo.
5. Accept the default Next.js settings.
6. Click **Deploy**.

## Notes

- Images live in 'C:\Users\Matt\flavor-factory-site-v3-main\public\images\flavor-factory'
- Sample requests post to `/api/sample-request` and send to `samples@flavorfactory.net` when `RESEND_API_KEY` is configured.
- Optional email environment variables: `SAMPLE_REQUEST_TO` and `SAMPLE_REQUEST_FROM`.
- Without an email provider key, the form falls back to opening an addressed email draft.
