'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Placeholder functionality)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Me</h1>
      
      <div style={styles.contactGrid}>
        {/* Contact Information */}
        <div style={styles.contactInfo}>
          <h2 style={styles.sectionTitle}>Get in Touch</h2>
          
          <div style={styles.contactItem}>
            <h3 style={styles.contactLabel}>Name</h3>
            <p style={styles.contactValue}>James Campbell</p>
          </div>

          <div style={styles.contactItem}>
            <h3 style={styles.contactLabel}>Email</h3>
            <p style={styles.contactValue}>your.email@example.com</p>
          </div>

          <div style={styles.contactItem}>
            <h3 style={styles.contactLabel}>Phone</h3>
            <p style={styles.contactValue}>+1 (555) 123-4567</p>
          </div>

          <div style={styles.socialLinks}>
            <h3 style={styles.contactLabel}>Connect</h3>
            <div style={styles.socialButtons}>
              <a href="#" style={styles.socialButton}>GitHub</a>
              <a href="#" style={styles.socialButton}>LinkedIn</a>
              <a href="#" style={styles.socialButton}>Twitter</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div style={styles.formContainer}>
          <h2 style={styles.sectionTitle}>Send a Message</h2>
          
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Your name"
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="your.email@example.com"
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={styles.textarea}
                placeholder="Your message..."
                rows="6"
              />
            </div>

            <button type="submit" style={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Calendly Placeholder */}
      <div style={styles.calendlySection}>
        <h2 style={styles.sectionTitle}>Schedule a Meeting</h2>
        <p style={styles.calendlyText}>
          Prefer to chat? Schedule a quick call with me.
        </p>
        <button style={styles.calendlyButton}>
          Schedule via Calendly
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  title: {
    fontSize: '48px',
    marginBottom: '40px',
    color: '#333',
    borderBottom: '3px solid #0070f3',
    paddingBottom: '15px',
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    marginBottom: '60px',
  },
  contactInfo: {
    backgroundColor: '#f9f9f9',
    padding: '30px',
    borderRadius: '8px',
  },
  sectionTitle: {
    fontSize: '28px',
    marginBottom: '25px',
    color: '#333',
  },
  contactItem: {
    marginBottom: '25px',
  },
  contactLabel: {
    fontSize: '18px',
    marginBottom: '8px',
    color: '#666',
  },
  contactValue: {
    fontSize: '20px',
    color: '#333',
    margin: 0,
  },
  socialLinks: {
    marginTop: '30px',
  },
  socialButtons: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  socialButton: {
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
  },
  formContainer: {
    backgroundColor: '#f9f9f9',
    padding: '30px',
    borderRadius: '8px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
  },
  input: {
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  textarea: {
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
    fontFamily: 'inherit',
    resize: 'vertical',
  },
  submitButton: {
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '15px 30px',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    marginTop: '10px',
  },
  calendlySection: {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  calendlyText: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '20px',
  },
  calendlyButton: {
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '15px 30px',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
  },
};
