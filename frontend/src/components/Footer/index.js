import React from "react";
import { NavLink, Link } from "react-router-dom";
import './footer.css';


const Footer = () => {
    return (
        <div className="footer-container">
            <div className="content-wrap">
                <div>
                    <ul className="about-me">
                        <li className="copy">
                            <div>@2022 BeachBnB</div>
                        </li>
                        <li className="name">
                            <div>Megan McKenna</div>
                        </li>
                        <li className="github">
                            <a className="github" href="https://github.com/memckenna" alt="github">
                                <i className="fab fa-github-square"></i>
                            </a>
                        </li>
                        <li className="linkedin">
                            <a className="linkedin" href="https://www.linkedin.com/in/meganmckenna1/" alt="linkedin">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="bottom-footer">
                        <li>React</li>
                        <li>Redux</li>
                        <li>JavaScript</li>
                        <li>Express</li>
                        <li>JSON API</li>
                        <li>PostgreSQL</li>
                        <li>Sequelize</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>
            <footer className="footer"></footer>
        </div>
    )
}

export default Footer;
