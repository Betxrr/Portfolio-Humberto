import React from "react";
import { useState } from "react";
import style from "./ResumeTextPagination.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TextPagination() {
  const PageText = [
    <div>
      <h4>TitleAboutText1</h4>
      <p>AboutTextPage1</p>
    </div>,
    <div>
      <h4>Do Processo Criativo ao Código</h4>
      <p>
        Sempre fui muito ligado ao processo criativo — seja desenhando ou
        tocando instrumento —, e me dediquei a pequenos detalhes para gerar
        experiências positivas.
        <br />
        Foi na programação que enxerguei a oportunidade de aplicar essa paixão
        em grande escala.
      </p>
    </div>,
    <div>
      <h4>Foco Atual</h4>
      <p>
        Hoje meu foco é o <strong>Desenvolvimento Front-end e Mobile</strong>{" "}
        com React e React Native CLI.
        <br />
        Minha ambição é ir além do código: pretendo me tornar um profissional de
        UI/UX Design.
        <br />
        Sou motivado pelo interesse genuíno em me colocar no lugar do usuário,
        pensando em como as pessoas irão interagir e se sentir com as minhas
        criações.
      </p>
    </div>,
    <div>
      <h4>Onde Estou e Para Onde Vou</h4>
      <p>
        Busco vagas que me permitam aplicar e aprofundar meus conhecimentos
        atuais em React, React Native, e APIs REST/Node.js, caminhando em
        direção a uma atuação de nível pleno.
        <br />
        Estou sempre buscando oportunidades para colocar minhas ideias em
        prática e crescer, unindo minha base técnica robusta com a minha visão
        focada no usuário.
      </p>
    </div>,
  ];

  const [Page, SetPage] = useState(0);

  return (
    <>
      <div className={style.TextContainer}>
        <div className={style.LeftButton}>
          <button
            style={{
              background: "rgba(0, 0, 0, 0.767)",
              borderRadius: "8px",
              padding: "8px 12px",
              border: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <FaChevronLeft color="#fff" size={32} />
          </button>
        </div>
        <div className={style.TextArea}>{PageText[Page]}</div>
        <div className={style.RightButton}>
          <button
            style={{
              background: "rgba(0, 0, 0, 0.767)",
              borderRadius: "8px",
              padding: "8px 12px",
              border: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <FaChevronRight color="#fff" size={32} />
          </button>
        </div>
      </div>
      <div className={style.PageInfoContainer}>
        <p className={style.PageInfo}>
          Página {Page + 1} de {PageText.length}
        </p>
      </div>
    </>
  );
}
