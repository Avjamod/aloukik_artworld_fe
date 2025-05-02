// import emailjs from "@emailjs/browser";
// import React, { useState } from "react";

// const Contact = () => {
//   const [from_email, setFromEmail] = useState("");
//   const [contact_number, setContactNumber] = useState("");
//   const [from_name, setFromName] = useState("");
//   const [type_of_inquiry, setTypeOfInquiry] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [showToast, setShowToast] = useState(false);

//   const to_name = "Aloukik Artwolrd";

//   const emailSend = (e) => {
//     try {
//       setError("");
//       e.preventDefault();
//       if (!from_name) throw new Error("Name is required");
//       if (!contact_number) throw new Error("Contact number is required");
//       if (contact_number.length !== 10 || !/^[0-9]+$/.test(contact_number))
//         throw new Error("Contact number is invalid");
//       if (!from_email) throw new Error("Email is required");
//       if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from_email))
//         throw new Error("Invalid email format");
//       if (!type_of_inquiry) throw new Error("Inquiry type is required");
//       if (!subject) throw new Error("Subject is required");
//       if (!message) throw new Error("Message is required");

//       if (contact_number.length != 10)
//         throw new Error("Conatct Number is invalid");
//       var templateParams = {
//         from_email,
//         contact_number,
//         from_name,
//         type_of_inquiry,
//         to_name,
//         subject,
//         message,
//       };

//       emailjs
//         .send("service_5rub8ck", "template_d9v2a2q", templateParams, {
//           publicKey: "nMAMCPj-K09Pb6xPE",
//         })
//         .then(
//           () => {
//             console.log("SUCCESS!");
//             setFromEmail("");
//             setContactNumber("");
//             setFromName("");
//             setTypeOfInquiry("");
//             setSubject("");
//             setMessage("");
//             setShowToast(true);
//             setTimeout(() => {
//               setShowToast(false);
//             }, 3000);
//           },
//           (error) => {
//             console.log("FAILED...", error.text);
//           }
//         );
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div>
//       <div className="px-4 md:pt-18 pt-16">
//         <h1 className="text-center bg-base-200 p-20 rounded-b-2xl font-bold text-5xl uppercase mb-8 ">
//           Contact
//         </h1>
//       </div>
//       <p className="md:text-3xl text-2xl font-bold text-center uppercase m-4 my-10 max-w-3xl mx-auto">
//         "We're here to help — <br />
//         Reach out and let's bring your
//         <span className="text-[#00638F] "> vision</span> to life!"
//       </p>
//       <div className="md:flex mb-20">
//         <fieldset className="fieldset md:w-[55%] bg-base-200 border border-base-300 p-4 rounded-box mx-4 mb-6">
//           <legend className="fieldset-legend uppercase text-xl font-bold">
//             Leave a message
//           </legend>
//           <div className="flex mb-5">
//             <input
//               type="text"
//               className="input w-[50%] mr-5"
//               required
//               placeholder="NAME"
//               value={from_name}
//               onChange={(e) => setFromName(e.target.value)}
//             />

//             <input
//               type="text"
//               className="input w-[50%] "
//               placeholder="Mobile Number"
//               required
//               value={contact_number}
//               onChange={(e) => setContactNumber(e.target.value)}
//             />
//           </div>
//           <div className="flex mb-4">
//             <input
//               type="email"
//               className="input w-[50%] font-bold  mr-4"
//               placeholder="Email"
//               required
//               value={from_email}
//               onChange={(e) => setFromEmail(e.target.value)}
//             />

//             <select
//               className="select w-[50%]"
//               value={type_of_inquiry}
//               onChange={(e) => setTypeOfInquiry(e.target.value)}
//               required
//             >
//               <option disabled value="">
//                 --SELECT CATEGORY--
//               </option>
//               <option>Business Enquiry</option>
//               <option>General Enquiry</option>
//               <option>Other</option>
//             </select>
//           </div>
//           <input
//             type="text"
//             className="input w-full font-bold  mr-4 mb-4"
//             placeholder="Subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             required
//           />

//           <textarea
//             className="textarea w-full font-bold  mb-5"
//             placeholder="Query"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           ></textarea>
//           <p className="text-red-400">{error}</p>

//           <button className="btn bg-[#00A7D4] uppercase" onClick={emailSend}>
//             Send Message
//           </button>
//         </fieldset>

//         <div className="md:w-[40%]">
//           <fieldset className="fieldset bg-base-100 border border-base-100 p-4 rounded-box">
//             <legend className="fieldset-legend uppercase font-bold text-xl">
//               Get in touch
//             </legend>
//             <div className="font-bold textarea-md uppercase">Botad</div>
//             <div className="text-sm flex items-center mb-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 width="30"
//                 height="30"
//                 className="fill-current mr-2"
//               >
//                 <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
//               </svg>
//               310, Simandhar Complex, Panjarapol Road, Tower Rd, Botad, Gujarat
//               364710
//             </div>
//             <div className="text-sm flex items-center mb-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 width="24"
//                 height="24"
//                 className="fill-current mr-2"
//               >
//                 <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.05-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1v3.61a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1h3.61a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.24 1.05l-2.32 2.16z" />
//               </svg>
//               +91 9737951547
//             </div>
//             <div className="text-sm flex items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 width="25"
//                 height="25"
//                 className="fill-current mr-2"
//               >
//                 <path d="M12 1a11 11 0 1 0 11 11A11.013 11.013 0 0 0 12 1zm0 20a9 9 0 1 1 9-9 9.01 9.01 0 0 1-9 9zm.5-13h-1a1 1 0 0 0-1 1v5a1 1 0 0 0 .553.894l3 1.5a1 1 0 0 0 .894-1.788L12.5 13.382V9a1 1 0 0 0-1-1z" />
//               </svg>
//               Mon - Fri: 9:00 - 19:00
//             </div>
//           </fieldset>

//           <fieldset className="fieldset bg-base-100 border border-base-100 p-4 rounded-box">
//             <legend className="fieldset-legend uppercase font-bold text-xl">
//               Our Social Media
//             </legend>
//             <div className="flex">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 width="30"
//                 height="30"
//                 className="fill-current m-1 cursor-pointer"
//               >
//                 <path d="M19 0h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-14a5 5 0 0 0-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zm13.5 11.25h-3v-5.5c0-1.32-.03-3.01-1.84-3.01-1.85 0-2.13 1.44-2.13 2.92v5.59h-3v-10h2.89v1.36h.04c.4-.76 1.37-1.56 2.83-1.56 3.02 0 3.57 1.99 3.57 4.58v5.62z" />
//               </svg>

//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 width="33"
//                 height="33"
//                 className="fill-current m-1"
//               >
//                 <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM4.5 7.75A3.25 3.25 0 0 1 7.75 4.5h8.5A3.25 3.25 0 0 1 19.5 7.75v8.5a3.25 3.25 0 0 1-3.25 3.25h-8.5A3.25 3.25 0 0 1 4.5 16.25v-8.5Zm7.5 1.25a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm4.75-3.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
//               </svg>

//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 width="30"
//                 height="30"
//                 className="m-1 fill-current"
//               >
//                 <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.511l-8 5.333-8-5.333V6h16Zm0 12H4V8.489l8 5.333 8-5.333V18Z" />
//               </svg>
//             </div>
//           </fieldset>
//         </div>
//       </div>

//       <div>
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1371.1102849670835!2d71.66611800309344!3d22.171268050420302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958dd0da74a2c3d%3A0x58bc2bd93b81714b!2sAloukik%20Art%20World!5e1!3m2!1sen!2sin!4v1697779812479!5m2!1sen!2sin"
//           width="100%"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           className="md:min-h-screen p-4"
//         ></iframe>
//       </div>
//       {showToast && (
//         <div className="toast">
//           <div className="alert alert-info">
//             <span>Message sent successfully.</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    from_name: "",
    contact_number: "",
    from_email: "",
    type_of_inquiry: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const to_name = "Aloukik Artworld";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const {
      from_name,
      contact_number,
      from_email,
      type_of_inquiry,
      subject,
      message,
    } = form;

    if (!from_name) return "Name is required";
    if (!contact_number) return "Contact number is required";
    if (!/^\d{10}$/.test(contact_number)) return "Contact number is invalid";
    if (!from_email) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from_email))
      return "Invalid email format";
    if (!type_of_inquiry) return "Inquiry type is required";
    if (!subject) return "Subject is required";
    if (!message) return "Message is required";

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    const templateParams = { ...form, to_name };

    emailjs
      .send("service_5rub8ck", "template_d9v2a2q", templateParams, {
        publicKey: "nMAMCPj-K09Pb6xPE",
      })
      .then(() => {
        console.log("SUCCESS!");
        setForm({
          from_name: "",
          contact_number: "",
          from_email: "",
          type_of_inquiry: "",
          subject: "",
          message: "",
        });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        setError("");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setError("Failed to send message. Please try again later.");
      });
  };

  return (
    <div>
      {/* Header Section */}
      <div className="px-4 md:pt-18 pt-16">
        <h1 className="text-center bg-base-200 p-20 rounded-b-2xl font-bold text-5xl uppercase mb-8">
          Contact
        </h1>
      </div>

      {/* Tagline */}
      <p className="md:text-3xl text-2xl font-bold text-center uppercase my-10 max-w-3xl mx-auto">
        "We're here to help — <br />
        Reach out and let's bring your
        <span className="text-[#00638F]"> vision</span> to life!"
      </p>

      {/* Contact Form & Info */}
      <div className="md:flex mb-20">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="fieldset md:w-[55%] bg-base-200 border border-base-300 p-4 rounded-box mx-4 mb-6"
        >
          <legend className="fieldset-legend uppercase text-xl font-bold">
            Leave a message
          </legend>
          <div className="flex mb-5">
            <input
              type="text"
              name="from_name"
              className="input w-[50%] mr-5"
              placeholder="NAME"
              value={form.from_name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="contact_number"
              className="input w-[50%]"
              placeholder="Mobile Number"
              value={form.contact_number}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex mb-4">
            <input
              type="email"
              name="from_email"
              className="input w-[50%] mr-4"
              placeholder="Email"
              value={form.from_email}
              onChange={handleChange}
              required
            />
            <select
              name="type_of_inquiry"
              className="select w-[50%]"
              value={form.type_of_inquiry}
              onChange={handleChange}
              required
            >
              <option value="">--SELECT CATEGORY--</option>
              <option>Business Enquiry</option>
              <option>General Enquiry</option>
              <option>Other</option>
            </select>
          </div>

          <input
            type="text"
            name="subject"
            className="input w-full mb-4"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            className="textarea w-full mb-5"
            placeholder="Query"
            value={form.message}
            onChange={handleChange}
            required
          />

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <button type="submit" className="btn bg-[#00A7D4] uppercase">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="md:w-[40%] space-y-4">
          <fieldset className="fieldset bg-base-100 border p-4 rounded-box">
            <legend className="fieldset-legend uppercase font-bold text-xl">
              Get in touch
            </legend>
            <div className="font-bold">Botad</div>
            <div className="text-sm flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                className="fill-current mr-2"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>{" "}
              310, Simandhar Complex, Panjarapol Road, Botad, Gujarat 364710
            </div>
            <div className="text-sm flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-current mr-2"
              >
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.05-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1v3.61a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1h3.61a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.24 1.05l-2.32 2.16z" />
              </svg>{" "}
              +91 9737951547
            </div>
            <div className="text-sm flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="25"
                height="25"
                className="fill-current mr-2"
              >
                <path d="M12 1a11 11 0 1 0 11 11A11.013 11.013 0 0 0 12 1zm0 20a9 9 0 1 1 9-9 9.01 9.01 0 0 1-9 9zm.5-13h-1a1 1 0 0 0-1 1v5a1 1 0 0 0 .553.894l3 1.5a1 1 0 0 0 .894-1.788L12.5 13.382V9a1 1 0 0 0-1-1z" />
              </svg>{" "}
              Mon - Fri: 9:00 - 19:00
            </div>
          </fieldset>

          <fieldset className="fieldset bg-base-100 border p-4 rounded-box">
            <legend className="fieldset-legend uppercase font-bold text-xl">
              Our Social Media
            </legend>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/aloukik-artworld-64b720264/"
                aria-label="LinkedIn"
                className="text-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                  className="fill-current m-1 cursor-pointer"
                >
                  <path d="M19 0h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-14a5 5 0 0 0-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zm13.5 11.25h-3v-5.5c0-1.32-.03-3.01-1.84-3.01-1.85 0-2.13 1.44-2.13 2.92v5.59h-3v-10h2.89v1.36h.04c.4-.76 1.37-1.56 2.83-1.56 3.02 0 3.57 1.99 3.57 4.58v5.62z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ll_jamod._.9_ll/"
                aria-label="Instagram"
                className="text-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="33"
                  height="33"
                  className="fill-current m-1"
                >
                  <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM4.5 7.75A3.25 3.25 0 0 1 7.75 4.5h8.5A3.25 3.25 0 0 1 19.5 7.75v8.5a3.25 3.25 0 0 1-3.25 3.25h-8.5A3.25 3.25 0 0 1 4.5 16.25v-8.5Zm7.5 1.25a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm4.75-3.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
                </svg>
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpcchpxdSlNWKjMPFCjrHMqFlqSRZlJwlDqmrkgztppQvdTqCnTTWLbXSWlzPbGLbbMnbv"
                aria-label="Email"
                className="text-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                  className="m-1 fill-current"
                >
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.511l-8 5.333-8-5.333V6h16Zm0 12H4V8.489l8 5.333 8-5.333V18Z" />
                </svg>
              </a>
            </div>
          </fieldset>
        </div>
      </div>

      {/* Google Map */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1371.1102849670835!2d71.66611800309344!3d22.171268050420302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958dd0da74a2c3d%3A0x58bc2bd93b81714b!2sAloukik%20Art%20World!5e1!3m2!1sen!2sin!4v1697779812479!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="md:min-h-screen p-4"
        />
      </div>

      {/* Toast */}
      {showToast && (
        <div className="toast">
          <div className="alert alert-info">
            <span>Message sent successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
