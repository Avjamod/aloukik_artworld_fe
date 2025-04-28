import emailjs from "@emailjs/browser";
import React, { useState } from "react";

const Contact = () => {
  const [from_email, setFromEmail] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [from_name, setFromName] = useState("");
  const [type_of_inquiry, setTypeOfInquiry] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const to_name = "Aloukik Artwolrd";

  const emailSend = (e) => {
    try {
      setError("");
      e.preventDefault();
      if (!from_name) throw new Error("Name is required");
      if (!contact_number) throw new Error("Contact number is required");
      if (contact_number.length !== 10 || !/^[0-9]+$/.test(contact_number))
        throw new Error("Contact number is invalid");
      if (!from_email) throw new Error("Email is required");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from_email))
        throw new Error("Invalid email format");
      if (!type_of_inquiry) throw new Error("Inquiry type is required");
      if (!subject) throw new Error("Subject is required");
      if (!message) throw new Error("Message is required");

      if (contact_number.length != 10)
        throw new Error("Conatct Number is invalid");
      var templateParams = {
        from_email,
        contact_number,
        from_name,
        type_of_inquiry,
        to_name,
        subject,
        message,
      };

      emailjs
        .send("service_5rub8ck", "template_d9v2a2q", templateParams, {
          publicKey: "nMAMCPj-K09Pb6xPE",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setFromEmail("");
            setContactNumber("");
            setFromName("");
            setTypeOfInquiry("");
            setSubject("");
            setMessage("");
            setShowToast(true);
            setTimeout(() => {
              setShowToast(false);
            }, 3000);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="px-4 md:pt-18 pt-16">
        <h1 className="text-center bg-base-200 md:p-20 rounded-b-2xl font-bold md:text-5xl text-3xl uppercase mb-6 ">
          Contact
        </h1>
      </div>
      <div className="md:flex mb-20">
        <fieldset className="fieldset md:w-[55%] bg-base-200 border border-base-300 p-4 rounded-box mx-4 mb-6">
          <legend className="fieldset-legend uppercase text-xl font-bold">
            Leave a message
          </legend>
          <div className="flex mb-5">
            <input
              type="text"
              className="input w-[50%] mr-5"
              required
              placeholder="NAME"
              value={from_name}
              onChange={(e) => setFromName(e.target.value)}
            />

            <input
              type="text"
              className="input w-[50%] "
              placeholder="Mobile Number"
              required
              value={contact_number}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <div className="flex mb-4">
            <input
              type="email"
              className="input w-[50%] font-bold  mr-4"
              placeholder="Email"
              required
              value={from_email}
              onChange={(e) => setFromEmail(e.target.value)}
            />

            <select
              className="select w-[50%]"
              value={type_of_inquiry}
              onChange={(e) => setTypeOfInquiry(e.target.value)}
              required
            >
              <option disabled value="">
                --SELECT CATEGORY--
              </option>
              <option>Business Enquiry</option>
              <option>General Enquiry</option>
              <option>Other</option>
            </select>
          </div>
          <input
            type="text"
            className="input w-full font-bold  mr-4 mb-4"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          <textarea
            className="textarea w-full font-bold  mb-5"
            placeholder="Query"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <p className="text-red-400">{error}</p>

          <button className="btn bg-[#00A7D4] uppercase" onClick={emailSend}>
            Send Message
          </button>
        </fieldset>

        <div className="md:w-[40%]">
          <fieldset className="fieldset bg-base-100 border border-base-100 p-4 rounded-box">
            <legend className="fieldset-legend uppercase font-bold text-xl">
              Get in touch
            </legend>
            <div className="font-bold textarea-md uppercase">Botad</div>
            <div className="text-sm flex items-center mb-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6948/6948631.png"
                className="w-7 h-7 mr-3"
              />
              310, Simandhar Complex, Panjarapol Road, Tower Rd, Botad, Gujarat
              364710
            </div>
            <div className="text-sm flex items-center mb-2">
              <img
                src="https://cdn-icons-png.freepik.com/256/11714/11714617.png"
                className="w-6 h-6 mr-3"
              />
              +91 9737951547
            </div>
            <div className="text-sm flex items-center">
              <img
                src="https://media.lordicon.com/icons/wired/flat/45-clock-time.svg"
                className="w-7 h-7 mr-3"
              />
              Mon - Fri: 9:00 - 19:00
            </div>
          </fieldset>

          <fieldset className="fieldset bg-base-100 border border-base-100 p-4 rounded-box">
            <legend className="fieldset-legend uppercase font-bold text-xl">
              Our Social Media
            </legend>
            <div className="flex">
              <img
                className="md:w-10 w-7 h-7 mr-5"
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
              />
              <img
                className="md:w-7  w-7 h-7 mr-5"
                src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
              />
            </div>
          </fieldset>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1371.1102849670835!2d71.66611800309344!3d22.171268050420302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958dd0da74a2c3d%3A0x58bc2bd93b81714b!2sAloukik%20Art%20World!5e1!3m2!1sen!2sin!4v1697779812479!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="md:min-h-screen p-4"
        ></iframe>
      </div>
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
