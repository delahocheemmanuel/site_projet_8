import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleCaptchaChange = (value) => {
    // This function will be called when the captcha is solved
    setCaptchaValue(value);
    setIsCaptchaVerified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the captcha is verified before sending the form
    if (!isCaptchaVerified) {
      alert('Please verify the captcha before submitting the form.');
      return;
    }

    // Process the form submission here, e.g., send data to the server or trigger an email

    // Reset the form fields after submission
    setEmail('');
    setMessage('');
    setCaptchaValue('');
    setIsCaptchaVerified(false);

    alert('Form submitted successfully!');
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={handleMessageChange} required />
        </div>
        <div>
          <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={handleCaptchaChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
