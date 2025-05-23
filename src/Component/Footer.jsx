import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <section className="bg-[url('/more/13.jpg')] bg-cover bg-center py-26 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo1.png" alt="Logo" className="h-12" />
              <h2 className="text-5xl font-bold text-primary rancho">
                Espresso Emporium
              </h2>
            </div>
            <p className="text-gray-700 mb-6 max-w-md">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-primary text-3xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-primary text-3xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-primary text-3xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-primary text-3xl">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-center gap-2">
                <MdPhone className="text-xl text-primary" />
                <span>+88 01533 333 333</span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail className="text-xl text-primary" />
                <span>info@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MdLocationOn className="text-xl text-primary" />
                <span>72, Wall street, King Road, Dhaka</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h3 className="text-4xl font-semibold text-primary mb-6 rancho">
              Connect with Us
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full input input-bordered rounded-none border-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full input input-bordered rounded-none border-none"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full textarea textarea-bordered rounded-none"
              ></textarea>
              <button className="btn bg-transparent text-primary border-primary hover:bg-primary hover:text-white rancho">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
