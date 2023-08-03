const nodemailer = require('nodemailer');


 const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    // user: 'jayasudhanjai.try@gmail.com',
    user:'trackitofficial.track@gmail.com',
    // pass: 'zplzpqeklsxkxlkl'
    pass:'hftyimdrxivpetfm'
  }
});
 // user: 'jayasudhanjai.try@gmail.com',
 // pass: 'zplzpqeklsxkxlkl'


 const sendmail =function(mail,data){
    const mailOptions = {
        from: 'trackitofficial.track@gmail.com',
        to:mail,
        subject: 'TrackIt ✅Diet Schedule🗓️',
        text: data
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Send',info);
        }
    });
}
module.exports=sendmail;