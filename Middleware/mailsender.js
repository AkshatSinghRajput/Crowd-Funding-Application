const nodemailer = require("nodemailer");

function mailsend(user, url) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  var mailOptions = {
    from: process.env.MAIL_USER,
    to: user,
    subject: "Email Verification",
    html: `
    <div style="background-color: black;
    color: #fff;
    max-width: 500px;
    padding: 40px 20px;
    border-radius: 10px;">
    <div class="card-body">
        <img src="https://cdn-icons-png.flaticon.com/512/4630/4630926.png" alt="email-image" style="display: block;
        width: 15%;
        height: 15%;
        margin-top: 3%;
        margin-left: auto;
        margin-right: auto;" />
        <h2 style="color: rgb(140, 96, 245); text-align: center;">Verify Yor Email</h2>
        <p style="font-size: 12px; text-align: center;">Amost there! We've send a verification email to ${user} <br /> You need to verify your email address to log into Storybook for Teams.</p>
        <a href=${url} style="cursor: pointer;"><button  style="display: block;
        margin-left: auto;
        margin-right: auto;
        width: 37%;
        background-color: rgb(140, 96, 245);
        border: none;
        padding: 10px 20px;
        border-radius: 10rem;">Verify Email</button></a>
    </div>
        `,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return err;
    } else {
      return info;
    }
  });
}

module.exports = mailsend;