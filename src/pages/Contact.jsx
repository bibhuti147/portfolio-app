import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB_FORM_API_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="py-32 bg-[#F0EBE3]">
      <h1 class="text-3xl text-center font-bold pb-10">
        <span class="border-b-4 border-[#FF5F00]">Contact Me</span>
      </h1>
      <p className="text-center text-gray-800 text-xl font-serif px-56 pb-10">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible.
      </p>
      <div className="py-14 mx-60 px-16 bg-[#DDDDDD] shadow-xl">
        <form
          onSubmit={onSubmit}
          class="w-full mx-auto flex flex-col justify-center "
          noValidate
        >
          <div class="flex flex-col space-y-5">
            <div class="flex flex-col md:flex-row space-y-5 md:space-y-0 gap-4">
              <div class="w-full md:w-1/2 ">
                <label
                  htmlFor="name"
                  class="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                >
                  Your Name (required)
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                  class="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
              </div>
              <div class="w-full md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
                <label
                  htmlFor="email"
                  class="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                >
                  Your Email (required)
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  class="py-2 px-4 md:px-5 w-full appearance-none marker:border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
              </div>
            </div>
            <div class="relative">
              <label
                htmlFor="subject"
                class="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter Your Subject"
                class="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                autoComplete="off"
                spellCheck="false"
                aria-invalid="false"
              />
            </div>
            <div class="relative mb-4">
              <label
                htmlFor="message"
                class="block text-gray-600 font-semibold text-sm leading-none mb-3"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="px-4 py-3 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:ring-0 bg-white border border-gray-300 focus:shadow focus:outline-none focus:border-heading placeholder-body"
                autoComplete="off"
                spellCheck="false"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here"
              ></textarea>
            </div>
            <div class="relative">
              <button
                data-variant="flat"
                class="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
