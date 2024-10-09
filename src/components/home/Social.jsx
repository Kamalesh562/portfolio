import React from "react";
import { FaTelegram } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://t.me/Kamalesh3964" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <FaTelegram />
            </a>
            <a href="https://github.com/Kamalesh562" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/kamalesh-v-" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
            </a>
        </div>
    ); 
}

export default Social;
