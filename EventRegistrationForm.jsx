import React, { useState } from 'react';

function EventRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send formData to a server here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={styles.successBox}>
        <h2>Registration Successful!</h2>
        <p>Thank you, {formData.name}, for registering for the event.</p>
        <button onClick={() => setSubmitted(false)}>Register Another</button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Event Registration</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <select
          name="event"
          value={formData.event}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Event --</option>
          <option value="music">Music Concert</option>
          <option value="tech">Tech Talk</option>
          <option value="workshop">Workshop</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

// 🎨 Basic inline styles
const styles = {
  container: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  successBox: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '8px',
    backgroundColor: '#e0f7e9',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
};

export default EventRegistrationForm;
