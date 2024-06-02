const PORT = process.env.PORT || 3000

const express = require("express")
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post("/send-email", async (req, res) => {
   let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
         user: "keagan32@ethereal.email",
         pass: "G8z6AM35x4NTGJex71",
      },
   })

   let mailOptions = {
      from: req.body.email,
      to: "tebesski@gmail.com",
      // sales@eco-gecko.com
      subject: "Message from " + req.body.name,
      html: `<div>
            <p>
               <strong>req.body.contact</strong>
            </p>
            <br />
            <p>req.body.comments</p>
         </div>`,
   }

   let result = await transporter.sendMail(mailOptions)
   console.log(result)
   res.send(result)
})

app.listen(PORT, (error) => {
   if (!error) {
      console.log(`Server is running on port ${PORT}`)
   } else {
      console.log("Error occurred, server can't start", error)
   }
})
