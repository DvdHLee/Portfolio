import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer>
        <div className="footer__content">
            <div className="footer__logocontainer">
                <a href="#" className="footer__anchor">
                    <img src="assets/footerlogo.png" className="footer__logo" alt="footer logo"></img>
                    <span className="footer__logo__popper">
                        Top
                        <i className="fas fa-arrow-up"></i>
                    </span>
                </a>
            </div>
            <ul className="footer__social-links">
                <li className="footer__social-link">
                    <a href="https://linkedin.com/in/dvdhyelee/" target="_blank">LinkedIn</a>
                </li>
                <li className="footer__social-link">
                    <a href="https://github.com/DvdHLee" target="_blank">GitHub</a>
                </li>
                <li className="footer__social-link">
                    <a href="assets/resume.pdf" target="_blank">Resume</a>
                </li>
            </ul>
            <p className="copyright">Copyright © 2024 David Hyesung Lee</p>
        </div>
    </footer>
  )
}

export default Footer