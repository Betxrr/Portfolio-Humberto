import React from "react";

export default function Hero() {
    return (
        <section id="hero" style={{ minHeight: '100vh', padding: '4rem 2rem' }}>
            <div>
                <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-gray-900 leading-none">
                    Humberto
                </h1>
                <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-gray-900 leading-none">
                    Rodrigues
                </h1>
            </div> 
            <p>Desenvolvedor Frontend especializado em React</p>
        </section>
    );
}