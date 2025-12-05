import React from 'react';
import './contactus.css';

import msg_icon from '../../assets/msg_icon.png';
import mail_icon from '../../assets/mail_icon.png';
import phone_icon from '../../assets/call_icon.png';
import location_icon from '../../assets/location_icon.png';

const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "62bf726a-b8f1-4d5e-a10c-3f8c814efd1c"); // Replace with your Web3Forms access key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult(data.message || "Something went wrong.");
    }
  };

  return (
    <div className='contactus'>
      <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon} alt="Message Icon" /></h3>
        <p>
          We’re here to help you! Whether you're a prospective student, parent, alumni, or just
          interested in learning more about our campus, feel free to get in touch.
        </p>

        <ul>
          <li><img src={mail_icon} alt="Mail Icon" /> info@edusity.edu</li>
          <li><img src={phone_icon} alt="Phone Icon" /> 011-1254-456</li>
          <li><img src={location_icon} alt="Location Icon" /> Edusity, Malabe, Colombo, Sri Lanka</li>
        </ul>
      </div>

      <div className="contact-col">
        <form className="contact-form" onSubmit={onSubmit}>
          <h2>Send Us a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Write your message here..."
            required
          ></textarea>

          <button className='btn dark-btn' type="submit">Send Message</button>
          <span style={{ marginTop: '10px', display: 'block' }}>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
