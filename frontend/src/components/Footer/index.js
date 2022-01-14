import React from "react";
import { NavLink, Link } from "react-router-dom";
import './footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="bottom-footer">
                <div>
                    <div className="about-me">
                        <p>@2022 BeachBnB</p>
                        <p className="name">Megan McKenna</p>
                    </div>
                    <Link className="github" scr="https://github.com/memckenna">GitHub: memckenna</Link>
                    <Link className="linkedin" scr="https://www.linkedin.com/in/meganmckenna1/">LinkedIn: meganmckenna1</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
