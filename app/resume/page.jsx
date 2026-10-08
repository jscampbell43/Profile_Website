export default function ResumePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Resume</h1>
      
      {/* Experience Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Experience</h2>
        
        <div style={styles.experienceItem}>
          <h3 style={styles.jobTitle}>Senior Software Engineer</h3>
          <p style={styles.company}>Company Name | Location</p>
          <p style={styles.date}>Start Date - Present</p>
          <ul style={styles.bulletPoints}>
            <li>Placeholder for key achievement or responsibility</li>
            <li>Placeholder for key achievement or responsibility</li>
            <li>Placeholder for key achievement or responsibility</li>
          </ul>
        </div>

        <div style={styles.experienceItem}>
          <h3 style={styles.jobTitle}>Software Engineer</h3>
          <p style={styles.company}>Previous Company | Location</p>
          <p style={styles.date}>Start Date - End Date</p>
          <ul style={styles.bulletPoints}>
            <li>Placeholder for key achievement or responsibility</li>
            <li>Placeholder for key achievement or responsibility</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Education</h2>
        
        <div style={styles.educationItem}>
          <h3 style={styles.degree}>Degree Name</h3>
          <p style={styles.school}>University Name | Location</p>
          <p style={styles.date}>Graduation Date</p>
        </div>
      </section>

      {/* Download Resume Button */}
      <div style={styles.downloadSection}>
        <button style={styles.downloadButton}>Download Resume (PDF)</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '900px',
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
  section: {
    marginBottom: '50px',
  },
  sectionTitle: {
    fontSize: '32px',
    marginBottom: '25px',
    color: '#333',
  },
  experienceItem: {
    marginBottom: '30px',
    padding: '25px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  jobTitle: {
    fontSize: '24px',
    marginBottom: '5px',
    color: '#333',
  },
  company: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '5px',
  },
  date: {
    fontSize: '16px',
    color: '#888',
    marginBottom: '15px',
    fontStyle: 'italic',
  },
  bulletPoints: {
    margin: 0,
    paddingLeft: '20px',
    color: '#555',
    lineHeight: '1.8',
  },
  educationItem: {
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  degree: {
    fontSize: '22px',
    marginBottom: '5px',
    color: '#333',
  },
  school: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '5px',
  },
  downloadSection: {
    textAlign: 'center',
    marginTop: '40px',
  },
  downloadButton: {
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
