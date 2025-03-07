using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Net.Mail;


public partial class _Default :  System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void SubmitForm(object sender, EventArgs e)
    {
        try
        {
            string name = txtName.Text;
            string email = txtEmail.Text;
            string subject = txtSubject.Text;
            string message = txtMessage.Text;

            MailMessage mail = new MailMessage();
            mail.From = new MailAddress(email);
            mail.To.Add("Name@gmail.com");
            mail.Subject = txtSubject.Text;
            mail.Body = string.Format(@"
    <html>
        <body>
            <p><strong>Name:</strong> {0}</p>
            <p><strong>Email:</strong> {1}</p>
            <p><strong>Subject:</strong> {2}</p>
            <p><strong>Message:</strong></p>
            <p>{3}</p>
        </body>
    </html>", name, email, subject, message);
            mail.IsBodyHtml = true;

            SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);
            smtp.Credentials = new System.Net.NetworkCredential("Name@gmail.com", "Password");
            smtp.EnableSsl = true;
            smtp.Send(mail);
            Response.Write("<script>alert('Your message has been sent successfully!');</script>");
            txtName.Text = "";
            txtEmail.Text = "";
            txtSubject.Text = "";
            txtMessage.Text = "";
        }
        catch (Exception ex)
        {
            Response.Write("<script>alert('An error occurred: " + ex.Message + "');</script>");
        }
    }
}   