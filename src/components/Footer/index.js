import React from 'react';

function Footer() {   
    return (
    <footer className="footer bg-dark fixed-bottom">
        <a href="https://github.com/Boris-Veselov" target="_blank" rel="noreferrer"><img src={require("../../assets/github.png")} alt="Github icon"></img></a>
        <a href="https://www.linkedin.com/in/veselavalava/" target="_blank" rel="noreferrer"><img src={require("../../assets/linkedin.png")} alt="LinkedIn icon"></img></a>
        <a href="mailto:borisveselov@yahoo.com" target="_blank" rel="noreferrer"><img src={require("../../assets/email.png")} alt="Email icon"></img></a>
    </footer>
    )
}

export default Footer;