import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/send-contact", formData);
      if (response.data.success) {
        document.querySelector(".hidden").classList.remove("hidden");
        document.querySelector(".hidden").classList.add("block");
      }
    } catch (error) {
      alert("Error sending email:" + error.message);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="flex flex-col gap-2 lg:gap-0 items-center justify-around my-8 w-10/12 min-w-[350px] min-h-1/4 mx-auto shadow px-8 py-10 text-tertiary bg-primary rounded-xl">
      <h1 className="text-lg lg:text-3xl font-extrabold self-start">Contact Us</h1>

      <p className="text-sm lg:text-lg self-start font-light text-tertiary">
        Get in touch and let us know how we can help you.
      </p>

      <form className="flex flex-col justify-evenly w-full gap-5" onSubmit={handleFormSubmit}>
        <div className="flex flex-col lg:flex-row w-full items-center justify-between">
          <input
            type="text"
            className="w-full lg:w-[45%]"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            autoComplete="name"
            required
          />
          <input
            type="email"
            className="w-full lg:w-[45%]"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            autoComplete="name"
            required
          />
        </div>

        <textarea
          name="description"
          className="bg-primary border-2 rounded-md p-2 focus:outline-none focus:rounded-2xl"
          value={formData.description}
          onChange={handleChange}
          cols={100}
          rows={6}
          placeholder="Description"
          required
        ></textarea>

        <div>
          <button
            type="submit"
            value="Send Message"
            className="bg-tertiary text-primary transition p-4 font-semibold rounded-lg self-start hover:bg-primary hover:text-tertiary hover:underline"
          >
            Send Message
          </button>

          <h2 className="hidden mt-2">Email has been sent!</h2>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
