# Silverius Calvin Portfolio

React, Vite, Tailwind CSS, and EmailJS portfolio website.

## Run locally

Use `npm.cmd` in PowerShell if the `npm` command is blocked by the Windows execution policy:

```powershell
cd "C:\Users\silverius.calvin\Documents\Calvin's\Portofolio-Website\portfolio-website-v2"
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## EmailJS setup

The contact form sends directly through EmailJS to the email account connected to the EmailJS service. It does not open Outlook or Gmail, and no Gmail password is stored in this project.

For the full configuration walkthrough, see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md).

1. Create an account at [emailjs.com](https://www.emailjs.com/).
2. Add an email service and connect the Gmail account that should receive portfolio messages.
3. Create an email template with these variables:
   - `name`
   - `email`
   - `subject`
   - `message`
4. Copy `.env.example` to `.env`.
5. Fill in the EmailJS Service ID, Template ID, and Public Key.
6. Restart Vite after changing `.env`:

```powershell
npm.cmd run dev
```

The `.env` file is ignored by Git. Never commit it.
