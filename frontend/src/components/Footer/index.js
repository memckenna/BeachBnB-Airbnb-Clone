import React from "react";
import { NavLink, Link } from "react-router-dom";
import './footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="bottom-footer">
                <ul className="about-me">
                    <li className="copy">
                        <div>@2022 BeachBnB</div>
                    </li>
                    <li className="name">
                        <div>Megan McKenna</div>
                    </li>
                    <li className="github">
                        <Link className="github" scr="https://github.com/memckenna" alt="github">GitHub: memckenna</Link>
                    </li>
                    <li className="linkedin">
                        <Link className="linkedin" scr="https://www.linkedin.com/in/meganmckenna1/" alt="linkedin">LinkedIn: meganmckenna1</Link>
                    </li>
                </ul>
                <div>
                    {/* <p>@2022 BeachBnB</p>
                    <p className="name">Megan McKenna</p>
                    <div>
                        <Link className="github" scr="https://github.com/memckenna">GitHub: memckenna</Link>
                    </div>
                    <div>
                        <Link className="linkedin" scr="https://www.linkedin.com/in/meganmckenna1/">LinkedIn: meganmckenna1</Link>
                    </div> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer;
