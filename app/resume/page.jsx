export default function ResumePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Resume</h1>
      
      {/* Experience Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Experience</h2>
        
        <div style={styles.experienceItem}>
          <h3 style={styles.jobTitle}>Web Application Developer</h3>
          <p style={styles.company}>SportsWzrd | Los Angeles, CA</p>
          <p style={styles.date}>February 2026 - Present</p>
          <ul style={styles.bulletPoints}>
            <li>Collaborated with a small team on the independent web app SportsWzrd using Next.js and Supabase</li>
            <li>Added front-end/back-end functionality to existing NBA Player Comparison tool, adding MLB player comparison</li>
            <li>Maintained and updated front-end UI</li>
            <li>Implemented trial countdown timer and notification logic and UI for website and extension to give users a call to action to subscribe</li>
          </ul>
        </div>

        <div style={styles.experienceItem}>
          <h3 style={styles.jobTitle}>Teaching Assistant</h3>
          <p style={styles.company}>CSUMB | Seaside, CA</p>
          <p style={styles.date}>January 2021 - May 2022</p>
          <ul style={styles.bulletPoints}>
            <li>Instructional Student Assistant for: Introduction to Software Design</li>
            <li>Instructional Student Assistant for: Internet Programming</li>
            <li>Assisted in lab activities</li>
            <li>Held office hours for course related questions or issues</li>
            <li>Graded student assignments</li>
            <li>Created tutorial videos to be used as class materials</li>
          </ul>
        </div>

        <div style={styles.experienceItem}>
          <h3 style={styles.jobTitle}>Software QA Engineer</h3>
          <p style={styles.company}>Apple Inc. | Sunnyvale, CA</p>
          <p style={styles.date}>June 2019 - October 2019</p>
          <ul style={styles.bulletPoints}>
            <li>Collaborated with the QA team to conduct testing on the iCloud Quota Service notification system</li>
            <li>Conducted automation testing using Quick to reduce testing time, and hence path to production</li>
            <li>Conducted functional testing in Apple server environments</li>
            <li>Responsible for device configuration: iOS devices, Mac computers and laptops</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Education</h2>
        
        <div style={styles.educationItem}>
          <h3 style={styles.degree}>B.S. Computer Science - Concentration: Software Engineering</h3>
          <p style={styles.school}>CSUMB | Seaside, CA</p>
          <p style={styles.date}>May 2022</p>
        </div>

        <div style={styles.educationItem}>
          <h3 style={styles.degree}>Associate in Science in Computer Science</h3>
          <p style={styles.school}>Cabrillo College | Soquel, CA</p>
          <p style={styles.date}>May 2020</p>
        </div>
      </section>

      {/* Projects Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>
        
        <div style={styles.experienceItem}>
          <h3 style={styles.jobTitle}>Backend Developer Capstone Project: SportsWZRD Website</h3>
          <ul style={styles.bulletPoints}>
            <li>Added a game weekly schedule grid feature to the existing website to allow users to navigate games per week throughout the season</li>
            <li>Implemented database access logic functionality using Python and Django QuerySets (MySQL) to reduce page load time</li>
          </ul>
        </div>

        <div style={styles.experienceItem}>
          <h3 style={styles.jobTitle}>Frontend Developer 3D Printing Job Request/Response Android Mobile Device Application</h3>
          <ul style={styles.bulletPoints}>
            <li>Created Android activities for login, registering, and creating/viewing/searching projects</li>
            <li>Created API interfaces in Java to query backend database for user and project information</li>
            <li>Created drawable files for activities using XML for displaying activities in the Android application</li>
          </ul>
        </div>

        <div style={styles.experienceItem}>
          <h3 style={styles.jobTitle}>Frontend Developer Hotel and Resort Website</h3>
          <ul style={styles.bulletPoints}>
            <li>Implemented random image generator code logic for events page using JavaScript and jQuery</li>
            <li>Designed look and feel of overall website and individual pages using CSS and Bootstrap</li>
            <li>Created routes for individual website pages using JavaScript</li>
          </ul>
        </div>
      </section>

      {/* Awards Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Awards And Certifications</h2>
        
        <div style={styles.educationItem}>
          <h3 style={styles.degree}>Dean's List</h3>
          <p style={styles.school}>CSUMB | Seaside, CA</p>
          <p style={styles.date}>Fall 2020, Spring 2021, Fall 2021, Spring 2022</p>
        </div>
      </section>

      {/* Download Resume Button */}
      <div style={styles.downloadSection}>
        <a href="/James_Campbell_Resume_2026.pdf" download style={styles.downloadButton}>
          Download Resume (PDF)
        </a>
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
