import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.photoPlaceholder}>
            <span style={styles.photoText}>Personal Photo</span>
          </div>
          <div style={styles.heroText}>
            <h1 style={styles.name}>James Campbell</h1>
            <h2 style={styles.title}>Full Stack Software Engineer | React & Node.js</h2>
            <p style={styles.tagline}>
              Building elegant interactive experiences and scalable web applications
            </p>
            <div style={styles.ctaButtons}>
              <Link href="/projects" style={styles.primaryButton}>
                View Projects
              </Link>
              <Link href="/contact" style={styles.secondaryButton}>
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <p style={styles.aboutText}>
          I am a passionate Full-Stack Software Developer with expertise in building modern web applications.
          My technical philosophy focuses on creating clean, maintainable code and delivering exceptional user experiences.
          I specialize in React, Next.js, and Node.js ecosystems, with a strong foundation in both frontend and backend development.
        </p>
      </section>

      {/* Technical Skills */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Technical Stack</h2>
        <div style={styles.skillsGrid}>
          <div style={styles.skillCategory}>
            <h3 style={styles.skillTitle}>Languages</h3>
            <ul style={styles.skillList}>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
            </ul>
          </div>
          <div style={styles.skillCategory}>
            <h3 style={styles.skillTitle}>Frontend</h3>
            <ul style={styles.skillList}>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div style={styles.skillCategory}>
            <h3 style={styles.skillTitle}>Backend</h3>
            <ul style={styles.skillList}>
              <li>Node.js</li>
              <li>Express</li>
              <li>FastAPI</li>
            </ul>
          </div>
          <div style={styles.skillCategory}>
            <h3 style={styles.skillTitle}>Databases & DevOps</h3>
            <ul style={styles.skillList}>
              <li>PostgreSQL</li>
              <li>Docker</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '60px',
    padding: '60px 20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
  },
  photoPlaceholder: {
    width: '200px',
    height: '200px',
    backgroundColor: '#e0e0e0',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '3px solid #0070f3',
  },
  photoText: {
    color: '#666',
    fontSize: '14px',
  },
  heroText: {
    maxWidth: '600px',
  },
  name: {
    fontSize: '48px',
    margin: '0 0 10px 0',
    color: '#333',
  },
  title: {
    fontSize: '24px',
    margin: '0 0 15px 0',
    color: '#666',
    fontWeight: '400',
  },
  tagline: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  ctaButtons: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#0070f3',
    padding: '12px 24px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '600',
    border: '2px solid #0070f3',
  },
  section: {
    marginBottom: '60px',
    padding: '40px 20px',
  },
  sectionTitle: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#333',
    borderBottom: '2px solid #0070f3',
    paddingBottom: '10px',
  },
  aboutText: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#555',
    maxWidth: '800px',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '30px',
  },
  skillCategory: {
    backgroundColor: '#f9f9f9',
    padding: '25px',
    borderRadius: '8px',
  },
  skillTitle: {
    fontSize: '20px',
    marginBottom: '15px',
    color: '#333',
  },
  skillList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
};