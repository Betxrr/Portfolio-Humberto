import React from "react";

export default function SocialIcons() {
    return (
        <>
            {/* Ícones do lado esquerdo */}
            <div className="social-icons-left">
                <a 
                    href="https://github.com/seugithub" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    title="GitHub"
                >
                    <span>🐙</span>
                </a>
                <a 
                    href="https://linkedin.com/in/seuperfil" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    title="LinkedIn"
                >
                    <span>💼</span>
                </a>
            </div>

        
        </>
    );
}