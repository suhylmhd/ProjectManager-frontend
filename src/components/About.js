import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Our Project Manager</h1>
      <p style={styles.text}>
        Welcome to our Project Manager application! This tool is designed to help teams and individuals manage projects efficiently. Whether you are a solo entrepreneur or part of a large organization, our Project Manager provides the features you need to keep your projects on track.
      </p>

      <h2 style={styles.subtitle}>Features</h2>
      <ul style={styles.list}>
        <li>Task Management: Create, assign, and track tasks with ease.</li>
        <li>Team Collaboration: Collaborate with your team in real-time.</li>
        <li>Project Tracking: Monitor the progress of your projects at a glance.</li>
        <li>Reporting: Generate detailed reports to analyze project performance.</li>
        <li>Integration: Seamlessly integrate with other tools you use daily.</li>
      </ul>

      <h2 style={styles.subtitle}>Our Mission</h2>
      <p style={styles.text}>
        Our mission is to empower teams to achieve more by providing a simple yet powerful tool to manage their projects. We believe that effective project management is key to success, and our goal is to make that process as smooth as possible for you and your team.
      </p>

      <h2 style={styles.subtitle}>Contact Us</h2>
      <p style={styles.text}>
        If you have any questions, feedback, or need support, feel free to reach out to us at <a href="mailto:support@projectmanager.com" style={styles.link}>support@projectmanager.com</a>.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  title: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '28px',
    marginBottom: '10px',
    marginTop: '30px',
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.6',
  },
  list: {
    paddingLeft: '20px',
    listStyleType: 'disc',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default About;
