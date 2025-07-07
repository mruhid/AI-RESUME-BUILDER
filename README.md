# 🧠 AI Resume Builder

AI Resume Builder is a modern web application that allows users to create personalized resume with smart suggestions, customizable themes, AI features, and admin control. Built with Next.js and powered by OpenAI, Clerk, Stripe, and Prisma.

---

## 🔗 Live Demo

- **AI Resume Builder:** [https://ai-resume-builder-red-nine.vercel.app/]

---

## 🚀 Overview

This project includes:

- A **user-facing app** for building and printing peronal resume .
- A **secure dashboard** for resume management
- **AI-based suggestions**, **authentication**, and **billing integration**

---

## 🛠️ Technologies Used

- **Next.js** – React framework for full-stack web apps
- **Tailwind CSS** – Utility-first CSS styling
- **TypeScript** – Type-safe JavaScript
- **Prisma** – Database ORM
- **Clerk** – Authentication provider
- **Stripe** – Payment & subscription handling
- **OpenAI** – AI-generated resume content

---

## 📦 Installation

Clone the repository:

````bash
git clone https://github.com/your-username/ai-resume-builder.git
cd ai-resume-builder
Install dependencies:
```bash
npm install  # or yarn install,also if you see some error you must use --legacy-peer-deps keywords
````

---

## 🔐 Environment Configuration

To run the app correctly on any device, create a `.env` file in the root of your project and fill in the following values. Here's how to get each one:

````env
# ======================================
# PostgreSQL Database (Prisma & Vercel)
# ======================================
DATABASE_URL=your_postgres_url
DATABASE_URL_UNPOOLED=your_postgres_url
PGHOST=your_postgres_host
PGHOST_UNPOOLED=your_postgres_host
PGUSER=your_postgres_user
PGDATABASE=your_postgres_db_name
PGPASSWORD=your_postgres_password
POSTGRES_URL=your_postgres_url
POSTGRES_URL_NON_POOLING=your_postgres_url
POSTGRES_USER=your_postgres_user
POSTGRES_HOST=your_postgres_host
POSTGRES_PASSWORD=your_postgres_password
POSTGRES_DATABASE=your_postgres_db_name
POSTGRES_URL_NO_SSL=your_postgres_url
POSTGRES_PRISMA_URL=your_postgres_url

# How to get it:
# 👉 Use Vercel Postgres: https://vercel.com/docs/storage/vercel-postgres
# 👉 After creating a DB, click "Connect" and copy the connection URL

# ================================
# Clerk (Authentication)
# ================================
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=https://your-clerk-app.clerk.accounts.dev/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=https://your-clerk-app.clerk.accounts.dev/sign-up

# How to get it:
# 👉 Go to https://clerk.dev and create an app
# 👉 Copy the secret and publishable keys from the Dashboard
# 👉 Enable dev URLs like http://localhost:3000

# ================================
# OpenAI (AI Resume Suggestions)
# ================================
OPENAI_API_KEY=your_openai_api_key

# How to get it:
# 👉 Sign in at https://platform.openai.com/account/api-keys
# 👉 Click "Create new secret key" and paste here

# ================================
# Stripe (Billing)
# ================================
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_MONTHLY=price_id_for_pro
NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_PLUS_MONTHLY=price_id_for_pro_plus

# How to get it:
# 👉 Go to https://dashboard.stripe.com/test/products
# 👉 Create 2 products: "Pro Monthly" & "Pro Plus Monthly"
# 👉 Copy each product’s Price ID
# 👉 Get API keys from Developers > API keys
# 👉 Create a webhook and copy the secret

# ================================
# Vercel Blob (Media Storage)
# ================================
BLOB_READ_WRITE_TOKEN=your_blob_rw_token

# How to get it:
# 👉 Go to https://vercel.com/docs/storage/vercel-blob
# 👉 Enable Blob for your project and generate an RW token

# ================================
# Base URL (for public client-side access)
# ================================
NEXT_PUBLIC_BACE_URL=http://localhost:3000
> ⚠️ For **Stripe webhooks** and **billing features**, HTTPS is required — even in development.

### ✅ How to enable HTTPS locally

You have two options:

---
**Option 1: Use VSCode Dev Tunnels (Ports)**

If you're using **VSCode**, you can expose your local project securely:

Open your terminal inside VSCode and create POST with github account.

 **Option 2: Use Stripe CLI with Local Tunnel**

Stripe provides a local tunneling tool for testing webhooks securely:

```bash
stripe listen --forward-to localhost:3000/api/webhook
````

It will give you a secure HTTPS link like:

> 📚 More info: [Stripe CLI docs](https://stripe.com/docs/stripe-cli)

---

> ⚠️ Make sure all values are filled correctly. Missing or incorrect variables may break the app during development or production.

## 🧰 Application Setup (Running)

Before running the development server, make sure to generate Prisma client:

```bash
npx prisma generate
```

Then run the development server:

```bash
npm run dev  # or yarn dev
```

The application will be available at:

```
http://localhost:3000
```

> ✅ Ensure your `.env` file is properly configured before starting the server.

## 📬 Contact

For any inquiries or feedback, feel free to reach out!  
📧 Email: [ruhidmammadzade@gmail.com]  
🔗 LinkedIn: [https://www.linkedin.com/in/ruhid-mammadzade/]
