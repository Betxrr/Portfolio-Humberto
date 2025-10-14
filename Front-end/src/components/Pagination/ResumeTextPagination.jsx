import React, { useState } from "react";
import style from "./ResumeTextPagination.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TextPagination() {
  const PageText = [
    <div key="page-1">
      <h4 className={style.title}>Meu resumo Pessoal / Profissional:</h4>
      <p className={style.paragraph}>
        Sou um desenvolvedor Front-end e Mobile com foco em React e React Native
        CLI, formado em análise e desenvolvimento de sistemas.
      </p>
      <p className={style.paragraph}>
        Trabalhei 3 anos e meio como Desenvolvedor júnior, eu era responsável
        por criar documentações e planilhas em HTML, CSS, JavaScript e SQL
        Server. Eu também era responsável por fazer envio direto de atualizações
        para produção e possuía contato constante com o cliente. Participava de
        reuniões, negociações de prazos, análise de demandas, proposição de
        soluções técnicas e acompanhamento de tarefas utilizando metodologias
        ágeis Kanban (MOVIDESK) de desenvolvimento.
      </p>
      <p className={style.paragraph}>
        Apesar de que meu trabalho era apenas em HTML puro e com poucas
        interações com implementações diretas no sistema, ainda assim eu
        consegui consolidar bons conhecimentos sobre estruturas HTML/CSS e uma
        boa visão de resolução de problemas em SQL também.
      </p>
      <p className={style.paragraph}>
        Agora há quase 1 ano eu tenho me dedicado estritamente a me tornar um
        desenvolvedor Web/Mobile Front-end completo, com foco em React e React
        Native CLI, baseando meus conhecimentos e estudos na visão de outros
        profissionais já consolidados na área que são próximos a mim, e tentando
        cada vez mais mostrar que eu possuo sim uma visão profissional
        atualizada, prática e técnica sobre a minha área de estudo, buscando
        sempre ser um profissional melhor a cada dia e valorizar cada vez mais a
        minha mão de obra.
      </p>
    </div>,

    <div key="page-2">
      <h4 className={`${style.title}`}>
        <em>Seção Bônus: "Uma visão pessoal sobre mim mesmo"</em>
      </h4>
      <p className={style.paragraph}>
        Eu sempre fui muito ligado no processo criativo de tudo, eu sou uma
        pessoa que desenha muito bem, já fui músico em orquestra, e sempre
        gostei de colocar muito empenho em coisas bobas, voltadas ao objetivo de
        deixar pessoas felizes, e foi em um momento de incerteza que eu
        enxerguei em programação esse mesmo processo criativo e acabei
        desenvolvendo um interesse pela área.
      </p>
      <p className={style.paragraph}>
        Com isso, eu penso bastante na possibilidade de um dia eu me tornar um
        profissional de UI/UX Design. Não por conveniência, mas por ter o
        interesse genuíno em pensar na forma como as pessoas irão interagir com
        uma criação minha. Me colocando no lugar do usuário.
      </p>
    </div>,
  ];

  const [Page, SetPage] = useState(0);
  const totalPages = PageText.length;

  const PrevButtonClasses = Page === 0 ? style.Disabled : "";
  const NextButtonClasses = Page === totalPages - 1 ? style.Disabled : "";


  return (
    <div className={style.paginationContainer}>
      <div className={style.TextContainer}>
        <div className={style.TextArea}>{PageText[Page]}</div>
      </div>

      {/* Agrupamos os controles em um div para garantir que fiquem juntos */}
      <div className={style.controlsContainer}>
        <div className={style.Divider} />
        <div className={style.BottomNav}>
          <button
            className={`${style.NavButton} ${PrevButtonClasses}`}
            onClick={() => SetPage(Page > 0 ? Page - 1 : 0)}
            disabled={Page === 0}
            aria-label="Página anterior"
            title="Página anterior"
          >
            <FaChevronLeft size={18} /> Voltar
          </button>

          <span className={style.PageInfo}>
            Página {Page + 1} de {PageText.length}
          </span>

          <button
            className={`${style.NavButton} ${NextButtonClasses}`}
            onClick={() =>
              SetPage(Page < totalPages - 1 ? Page + 1 : totalPages - 1)
            }
            disabled={Page === totalPages - 1}
            aria-label="Próxima página"
            title="Avançar"
          >
            Avançar <FaChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}