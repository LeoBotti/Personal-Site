import React from "react";

const Contact = (props) => {
  return(
    <div className="Contact" id='contact'>
      <h2>CONTACT</h2>
      EMAIL: <a href="mailto:me@nicachan.dev">me@nicachan.dev</a> <br/>
      GITHUB: <a href="https://github.com/NicAChan" target="_blank" rel="noopener noreferrer">github.com/NicAChan</a> <br/>
      LINKEDIN: <a href="https://linkedin.com/in/nicholas-a-chan" target='_blank' rel="noopener noreferrer">linkedin.com/in/nicholas-a-chan</a>
    </div>
  )
}

export default Contact;