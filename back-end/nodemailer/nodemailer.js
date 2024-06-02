const nodemailer = require("nodemailer")

let testEmailAccount = await nodemailer.createTestAccount()

let transporter = nodemailer.createTransport({
   host: "smtp.ethereal.email",
   port: 587,
   secure: false,
   auth: {
      user: "keagan32@ethereal.email",
      pass: "G8z6AM35x4NTGJex71",
   },
})

let result = await transporter.sendMail({
   from: "",
   to: "sales@eco-gecko.com",
   subject: "Message from Node js",
   text: "This message was sent from Node js server.",
   html: "This <i>message</i> was sent from <strong>Node js</strong> server.",
})

console.log(result)
