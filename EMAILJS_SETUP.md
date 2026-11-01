# EmailJS setup guide

This project uses EmailJS so the contact form can send messages directly without opening Outlook, Gmail, or another mail app.

## 1. Create an EmailJS account

1. Open [emailjs.com](https://www.emailjs.com/).
2. Create an account and sign in.
3. Open the **Email Services** page.

## 2. Connect Gmail

1. Click **Add New Service**.
2. Choose **Gmail**.
3. Sign in with the Gmail account that should receive portfolio messages.
4. Complete the authorization flow.
5. Copy the generated **Service ID**.

EmailJS handles the connection. Do not put your Gmail password in this project.

## 3. Create the email template

1. Open the **Email Templates** page.
2. Create a new template.
3. Set the recipient to the Gmail account connected above.
4. Use these variables in the template:

```text
{{name}}
{{email}}
{{subject}}
{{message}}
```

Example template:

```text
New portfolio message from {{name}}

Reply-to: {{email}}
Subject: {{subject}}

{{message}}
```

5. Save the template and copy its **Template ID**.

## 4. Copy the public key

1. Open **Account** or **Integration** settings in EmailJS.
2. Copy the **Public Key**.

The EmailJS public key is intended for browser use. Never expose a private key or Gmail password.

## 5. Add local environment variables

From the `portfolio-website-v2` directory, copy the example file:

```powershell
Copy-Item .env.example .env
```

Open `.env` and replace the placeholders:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Do not add quotes unless the value itself contains quotes. The `.env` file is ignored by Git.

## 6. Run and test

Restart Vite after changing `.env`:

```powershell
npm.cmd run dev
```

Open the local URL, fill out the contact form, and submit it. The form should show **Message sent successfully** and the email should arrive in the connected Gmail inbox. If that Gmail account is connected to Outlook, it will also be available there.

If the form says the email service is not configured, check that the variable names match exactly and that Vite was restarted.
