import "../style/main.scss";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="heading-text">
        Want to get in touch or watch my resume? <br /> Here you go!
      </h1>
      <div className="link-container">
        <div className="contact-links">
          <a
            className="resume-link"
            href="../assets/ENGwilmawikerCV.pdf"
            target="_blank"
          >
            Resume
          </a>
          <p>or</p>
          <a
            className="link"
            href="../assets/ENGwilmawikerCV.pdf"
            target="_blank"
          >
            <i className="bi bi-envelope"></i>
            wikerwilma@gmail.com
          </a>
        </div>
        <div className="social-media-links">
          <a className="link" href="" target="_blank">
            <i className="bi bi-linkedin"></i>
            LinkedIn
          </a>
          <a className="link" href="" target="_blank">
            <i className="bi bi-github"></i>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
