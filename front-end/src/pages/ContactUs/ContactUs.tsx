import { useState, useEffect, ChangeEvent, FormEvent, useRef } from "react"
import Title from "../../components/Title"
import FSC from "../../components/FSC"
import useWindowSize from "../../hooks/useWindowSize"
import {
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
   Button,
   Backdrop,
   CircularProgress,
} from "@mui/material"
import { usePopup } from "../../context/popupContext"

export default function ContactUs() {
   const mobileWidth = !useWindowSize(450)
   const [open, setOpen] = useState(false)
   const [loading, setLoading] = useState(false)
   const { openPopup } = usePopup()

   const formRef = useRef<HTMLFormElement>(null)

   const handleClickOpen = () => {
      setOpen(true)
   }

   const handleClose = () => {
      setOpen(false)
   }

   const [form, setForm] = useState({
      name: "",
      contact: "",
      email: "",
      comments: "",
   })
   const [errors, setErrors] = useState({
      name: "",
      contact: "",
      email: "",
   })

   const [touched, setTouched] = useState({
      name: false,
      contact: false,
      email: false,
   })

   useEffect(() => {
      validateForm()
   }, [form])

   const validateForm = () => {
      let tempErrors = { name: "", contact: "", email: "" }
      let formIsValid = true

      if (form.name === "") {
         tempErrors.name = "Name is required"
         formIsValid = false
      } else if (!/^[a-zA-Z\s]*$/.test(form.name)) {
         tempErrors.name = "Name can only contain letters"
         formIsValid = false
      }

      if (form.contact === "") {
         tempErrors.contact = "Contact No. is required"
         formIsValid = false
      } else if (!/^\+?[1-9]\d{1,14}$/.test(form.contact)) {
         tempErrors.contact = "Contact No. should be a telephone no."
         formIsValid = false
      }

      if (form.email === "") {
         tempErrors.email = "Email is required"
         formIsValid = false
      } else if (!/\S+@\S+\.\S+/.test(form.email)) {
         tempErrors.email = "Email is not valid"
         formIsValid = false
      }

      setErrors(tempErrors)
      return formIsValid
   }

   const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const { name, value } = e.target

      if (name === "contact") {
         setForm((prev) => ({
            ...prev,
            [name]: "+" + value.replace(/^\+/, ""),
         }))
      } else {
         setForm((prev) => ({
            ...prev,
            [name]: value,
         }))
      }
   }

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (validateForm()) {
         setLoading(true)
         fetch("https://eco-gecko-backend.onrender.com/send-email", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
         })
            .then((response) => response.json())
            .then((data) => {
               console.log(data)
               setLoading(false)
               openPopup(
                  "Form submitted successfully!",
                  <p>We will get back to you soon :)</p>
               )
            })
            .catch((error) => {
               console.error("Error:", error)
               openPopup(
                  "Sorry...",
                  <div>
                     <p>Something went wrong, the message was not sent.</p>
                     <br />
                     <p>Try again later, please!</p>
                  </div>
               )
            })
      }
      if (mobileWidth) {
         handleClickOpen()
      }
   }

   return (
      <section className={`flex gap-x-3 ${mobileWidth ? "mt-24" : ""}`}>
         {loading && (
            <Backdrop open={loading} style={{ color: "#fff", zIndex: 1500 }}>
               <CircularProgress color="inherit" />
            </Backdrop>
         )}
         <div className="w-full">
            <Title centered={false} addStyles="mb-2">
               Contact Us
            </Title>

            <div className="flex">
               <form
                  ref={formRef}
                  className={`bg-green-main-30 rounded-lg ${
                     mobileWidth ? "w-full mb-56" : "w-1/2"
                  } p-6 flex flex-col items-start`}
                  onSubmit={handleSubmit}
               >
                  <input
                     className="bg-white rounded-lg mb-2 placeholder-green-main p-3 text-sm font-semibold w-full"
                     type="text"
                     name="name"
                     placeholder="Name"
                     value={form.name}
                     onChange={handleChange}
                     onBlur={() =>
                        setTouched((prev) => ({ ...prev, name: true }))
                     }
                  />

                  <input
                     className="bg-white rounded-lg mb-2 placeholder-green-main p-3 text-sm font-semibold w-full"
                     type="tel"
                     name="contact"
                     placeholder="Contact No."
                     value={form.contact}
                     onChange={handleChange}
                     onBlur={() =>
                        setTouched((prev) => ({ ...prev, contact: true }))
                     }
                  />

                  <input
                     className="bg-white rounded-lg mb-2 placeholder-green-main p-3 text-sm font-semibold w-full"
                     type="email"
                     name="email"
                     placeholder="Email"
                     value={form.email}
                     onChange={handleChange}
                     onBlur={() =>
                        setTouched((prev) => ({ ...prev, email: true }))
                     }
                  />

                  <textarea
                     className="bg-white rounded-lg mb-2 placeholder-green-main p-2 text-sm font-medium w-full resize-none h-32"
                     name="comments"
                     placeholder="Comments (optional)"
                     value={form.comments}
                     onChange={handleChange}
                  />

                  <button
                     className="bg-green-main text-off-white font-extrabold rounded-lg self-end px-8 py-2 hover:bg-white hover:text-green-main transition-colors duration-75"
                     type="submit"
                  >
                     Submit
                  </button>
               </form>

               {mobileWidth ? null : (
                  <div
                     className="text-sm flex flex-col gap-y-8 mt-9 ml-8"
                     style={{
                        color: "red",
                     }}
                  >
                     <p
                        style={{
                           minHeight: "20px",
                           transition: "opacity 0.3s",
                           opacity: touched.name ? 1 : 0,
                        }}
                     >
                        {errors.name}
                     </p>
                     <p
                        style={{
                           minHeight: "20px",
                           transition: "opacity 0.3s",
                           opacity: touched.contact ? 1 : 0,
                        }}
                     >
                        {errors.contact}
                     </p>
                     <p
                        style={{
                           minHeight: "20px",
                           transition: "opacity 0.3s",
                           opacity: touched.email ? 1 : 0,
                        }}
                     >
                        {errors.email}
                     </p>
                  </div>
               )}
            </div>
         </div>

         {mobileWidth ? null : <FSC topVal={"top-34"} leftVal={"left-[70%]"} />}

         {mobileWidth && (
            <Dialog open={open} onClose={handleClose}>
               <DialogTitle>{"Submit Form"}</DialogTitle>
               <DialogContent>
                  <DialogContentText>
                     {Object.values(errors).some((error) => error !== "")
                        ? Object.values(errors).map((error, index) => (
                             <p key={index}>{error}</p>
                          ))
                        : "Form submitted successfully!"}
                  </DialogContentText>
               </DialogContent>
               <DialogActions>
                  <Button onClick={handleClose}>Close</Button>
               </DialogActions>
            </Dialog>
         )}
      </section>
   )
}
