import React, { useState } from 'react';

function Contact() {
  // State to manage form submission status
  const [submitted, setSubmitted] = useState(false);

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Perform form submission actions here (e.g., sending data to server)

    // Update state to show confirmation message
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      {/* Check if form has been submitted */}
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      ) : (
        // Show confirmation message after form submission
        <div className="confirmation-message">
          <h3>Thank you for reaching out!</h3>
          <p>We have received your message and will get back to you shortly.</p>
        </div>
      )}
    </section>
  );
}

export default Contact;
