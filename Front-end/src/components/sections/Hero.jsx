import React from "react";
import style from "./Hero.module.css";
import LinkBottoms from "../UI/LinkBottoms";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  const cvPath = "/curriculo-humberto.pdf"; 

  return (
    <section className={style.section} id="hero">
      <div className={style.LeftContainer}>
        <div className={style.TopperLimiter}>
          <div className={style.CaixaDeDialogo}>
            Olá! eu sou
            <div className={style.TrianguloDialogo}></div>
          </div>
          

          <h1 className={style.NomePrincipal}>
            <span className={style.typingEffect}>{"<"} Humberto Rodrigues .. </span>{">"}
          </h1>
          
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
          <p className={style.DescricaoBemVindo}>
            Bem-vindo ao meu website e portfólio oficial!
          </p>
          <div className={style.BottomLimiter}>
            <LinkBottoms href={cvPath} download Icon={FaDownload} bottomStyle={1}>
              Baixar CV
            </LinkBottoms>
            
            <LinkBottoms href="mailto:humbertorodrigues473@gmail.com">
              Vamos conversar!
            </LinkBottoms>
          </div>
        </div>
      </div>
      <div className={style.RightContainer}>
        {/* Futuramente, o conteúdo do RightContainer virá aqui */}
      </div>
    </section>
  );
}