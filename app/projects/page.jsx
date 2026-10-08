export default function ProjectsPage() {
  const projects = [
    {
      title: 'Project Title 1',
      description: 'A brief description of what this project does and the problem it solves.',
      techStack: ['React', 'Node.js', 'PostgreSQL'],
      githubLink: '#',
      liveLink: '#',
    },
    {
      title: 'Project Title 2',
      description: 'A brief description of what this project does and the problem it solves.',
      techStack: ['Next.js', 'TypeScript', 'AWS'],
      githubLink: '#',
      liveLink: '#',
    },
    {
      title: 'Project Title 3',
      description: 'A brief description of what this project does and the problem it solves.',
      techStack: ['Python', 'FastAPI', 'Docker'],
      githubLink: '#',
      liveLink: '#',
    },
    {
      title: 'Project Title 4',
      description: 'A brief description of what this project does and the problem it solves.',
      techStack: ['React', 'MongoDB', 'Express'],
      githubLink: '#',
      liveLink: '#',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Featured Projects</h1>
      
      <div style={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <div style={styles.projectImage}>
              <span style={styles.imagePlaceholder}>Project Image</span>
            </div>
            <div style={styles.projectContent}>
              <h2 style={styles.projectTitle}>{project.title}</h2>
              <p style={styles.projectDescription}>{project.description}</p>
              <div style={styles.techStack}>
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} style={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              <div style={styles.projectLinks}>
                <a href={project.githubLink} style={styles.linkButton}>
                  GitHub
                </a>
                <a href={project.liveLink} style={styles.linkButton}>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
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
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
  },
  projectCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  projectImage: {
    width: '100%',
    height: '200px',
    backgroundColor: '#e0e0e0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    color: '#666',
    fontSize: '16px',
  },
  projectContent: {
    padding: '25px',
  },
  projectTitle: {
    fontSize: '24px',
    marginBottom: '15px',
    color: '#333',
  },
  projectDescription: {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '20px',
  },
  techTag: {
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '4px',
    fontSize: '14px',
  },
  projectLinks: {
    display: 'flex',
    gap: '15px',
  },
  linkButton: {
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
  },
};
