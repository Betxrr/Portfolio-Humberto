import React from "react";
import style from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={style.section} id="hero">
      <div className={style.LeftContainer}>
        <div className={style.TopperLimiter}>
          <div className={style.CaixaDeDialogo}>
            Olá! eu sou
            <div className={style.TrianguloDialogo}></div>
          </div>
          <h1 className={style.NomePrincipal}>{"<"} Humberto</h1>
          <h1 className={style.NomeSecundario}>Rodrigues .. {">"}</h1>
          <h3 className={style.Cargo}>Desenvolvedor Front-end</h3>
          <h3 className={style.Tags}>
            {" "}
            <span style={{ color: "var(--color-primary)" }}>Web </span> |{" "}
            <span style={{ color: "var(--color-primary)" }}>Mobile</span>
          </h3>
          <p className={style.Descricao}>
            Da concepção ao código, construo soluções front-end que unem
            funcionalidade, usabilidade e experiência de usuário
          </p>
          <div className={style.LinhaCentralizada}></div>
        </div>
        <div className={style.BottomLimiter}>
          <div className="flex justify-center items-center margin w-full">
            <button className="w-1/2 px-6 py-2 rounded-lg bg-cyan-600 text-white font-semibold shadow hover:bg-cyan-700 transition">
              Bt exemplo / Baixar CV
            </button>
            <button className="w-1/2 px-6 py-2 rounded-lg bg-cyan-600 text-white font-semibold shadow hover:bg-cyan-700 transition">
              Bt exemplo / Vamos conversar
            </button>
          </div>
        </div>
      </div>

      <div className={style.RightContainer}>
        <div className={style.ImageContainer}></div>
      </div>
    </section>
  );
}
