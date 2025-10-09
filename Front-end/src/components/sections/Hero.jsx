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
          <p className={`${style.Frase}`}>
           " Da concepção ao código, construo soluções front-end que unem
            funcionalidade, usabilidade e experiência de usuário "
          </p>
          <div className={style.LinhaCentralizada}></div>
          <p className={`${style.Descricao}`}>
Este é meu Website e Portfólio oficial. Todos os detalhes dos
            trabalhos desenvolvidos por mim estarão aqui.
          </p>
        </div>
        <div className={style.BottomLimiter}>
          <div>


          </div>
        </div>
      </div>

      <div className={style.RightContainer}>
        <div className={style.ImageContainer}></div>
      </div>
    </section>
  );
}
