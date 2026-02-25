# Deployment Guide

## Initial Deploy (Vercel subdomain)

1. Create a GitHub repository and push this code to it
2. Go to [vercel.com](https://vercel.com) and sign up for a free account (or log in)
3. Click "New Project" and import your GitHub repository
4. Vercel will auto-detect the Next.js framework — accept the default settings
5. Click "Deploy"
6. Your site will be live at `https://[project-name].vercel.app`
7. Every push to `main` will automatically redeploy the site

## Connecting mcgillptplab.com

1. Log in to Vercel → Project Settings → Domains → Add `mcgillptplab.com`
2. Vercel will show you two DNS records to add (a CNAME and/or A record)
3. Log in to your domain registrar (wherever mcgillptplab.com is registered)
4. Add the DNS records Vercel specifies
5. DNS propagation takes up to 48 hours; usually much faster
6. Vercel will automatically provision an SSL certificate

## Environment Notes

- The site is fully static and requires no server-side configuration
- The Formspree form endpoint needs to be configured (see `src/app/support/page.tsx`)
- Social media links in the footer may need to be updated with the lab's actual profile URLs
