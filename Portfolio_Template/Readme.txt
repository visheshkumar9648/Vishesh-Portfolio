====================================
  MY PORTFOLIO WEBSITE - README
====================================

Project Name: =Vishesh-Portfolio
Author: [Vishesh Kumar]
Website Type: Personal Portfolio

------------------------------------
📌 Description:
------------------------------------
This portfolio website template includes two versions:

1. ASP.NET WebForms Version - Contact form data is sent to Gmail.

2. HTML Version - Contact form data is sent to WhatsApp.

------------------------------------------------------------------------

1️⃣ ASP.NET WebForms Version

Features:

✅ Contact form sends data to Gmail.
✅ Built using ASP.NET WebForms.
✅ Responsive design.
✅ Well-structured code.

Installation Steps:

1. Extract the Portfolio_Template.zip file.

2. Open the WebForms_Version folder.

3. Open the project in Visual Studio.

4. Modify the Default.aspx.cs file:

5. Update SMTP settings with your email credentials.

Example:

SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);
smtp.Credentials = new NetworkCredential("your-email@gmail.com", "your-password");

Run the project and test the contact form.

------------------------------------------------------------------------

2️⃣ HTML Version

Features:

✅ Contact form sends data to WhatsApp.
✅ Pure HTML, CSS, and JavaScript.
✅ Easy to integrate with any hosting platform.
✅ Mobile-friendly design.

Installation Steps:

1. Extract the Portfolio_Template.zip file.

2. Open the HTML_Version folder.

3. Edit Index.js file:

4. Update the phone number in the script:

var phoneNumber = "+91XXXXXXXXXX";

Open index.html in a browser and test the contact form.

-Each version is placed in a separate folder, making it easy to choose the preferred implementation.

------------------------------------
📂 File & Folder Structure:
------------------------------------
Portfolio_Template/
│── WebForms_Version/       --> ASP.NET WebForms version
│   ├── Default.aspx
│   ├── Default.aspx.cs
│   ├── index.js
│   ├── index.css
│   ├── file/resume
│   ├── manifest.json --PWA File
│   ├── sw.js		--Pwa file
│── HTML_Version/           --> Pure HTML version
│   ├── Index.html
│   ├── index.js
│   ├── index.css
│   ├── file/resume
│   ├── manifest.json --PWA File
│   ├── sw.js		--Pwa file
│── README_Main.txt         --> General documentation

------------------------------------
🛠️ Features:
------------------------------------
- Mobile-friendly and responsive design.
- Progressive Web App (PWA) support.
- Contact form with Gmail & WhatsApp integration.
- SEO Optimized for better search visibility.

------------------------------------
📧 Support & Contact:
------------------------------------
For any queries or support, contact me at:
📩 Email: your-email@example.com
🌐 Website: your-portfolio-link.com

------------------------------------
🔥 Additional Notes
------------------------------------

Make sure to replace the placeholders in the code with actual values before deploying.

Follow Envato Market’s file naming conventions for preview images and descriptions.

------------------------------------
📜 License:
------------------------------------

This website template is licensed for personal and commercial use. You are allowed to:
✔ Modify and customize the template as per your needs.
✔ Use the template for personal and client projects.

You are NOT allowed to:
❌ Resell or redistribute this template as your own.
❌ Claim ownership of this code.
❌ Upload or sell this template on other marketplaces without permission.

For any queries, contact: katiyarmonu9648@gmail.com.com