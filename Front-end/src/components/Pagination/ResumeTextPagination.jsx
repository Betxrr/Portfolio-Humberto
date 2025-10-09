import React, { useState } from "react";
import style from "./ResumeTextPagination.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TextPagination() {
  const PageText = [
    // Seção 1: Minha Jornada Profissional
    <div>
      <h4 className={style.title}>Minha Jornada Profissional</h4>
        <p className={style.paragraph}>
          {" "}
          Minha jornada como desenvolvedor é marcada pela proatividade e pela
          paixão em construir experiências.
        </p>
        <p className={style.paragraph}>
          Minha base profissional foi estabelecida em uma startup de
          desenvolvimento, onde a autonomia era essencial. Ali, desenvolvi a
          disciplina de resolver meus próprios problemas, realizar CRUDs
          complexos em SQL Server, e atuar com HTML, CSS e JavaScript
          diretamente no envio de atualizações para produção. Trabalhar com
          metodologias ágeis (Kanban) me ensinou o valor da comunicação clara e
          da responsabilidade pela entrega de ponta a ponta.{" "}
        </p>
    </div>,

    // Seção 2: O Salto para o Front-end e Mobile
    <div>
      <h4 className={style.title}>Do Processo Criativo ao Código</h4>
      <p className={style.paragraph}>
        Motivado pela busca por soluções mais modernas e eficientes, direcionei
        meu aprendizado para o desenvolvimento **Front-end e Mobile** com foco
        em **React** e **React Native CLI**. Em projetos práticos, adquiri
        competência na integração com **APIs REST** e na criação de interfaces
        intuitivas.
        <br />
        Hoje, utilizo essa base técnica robusta para transformar design em
        código funcional e responsivo.
      </p>
    </div>,

    // Seção 3: Minha Filosofia de Trabalho
    <div>
      <h4 className={style.title}>Minha Filosofia de Trabalho</h4>
      <p className={style.paragraph}>
        Sou motivado pelo interesse genuíno em me colocar no lugar do usuário,
        pensando em como as pessoas irão interagir e se sentir com as minhas
        criações.
        <br />
        Busco sempre aplicar os princípios de **Clean Code** e **Clean
        Architecture**, garantindo que minhas soluções sejam não apenas
        eficazes, mas também limpas, escaláveis e fáceis de dar manutenção.
      </p>
    </div>,

    // Seção 4: Olhando para o Futuro
    <div>
      <h4 className={style.title}>Olhando para o Futuro</h4>
      <p className={style.paragraph}>
        Meu objetivo é continuar crescendo como desenvolvedor Front-end,
        buscando oportunidades que me permitam aprofundar meus conhecimentos e
        atuar em projetos desafiadores de nível pleno.
        <br />A longo prazo, pretendo me tornar um profissional completo em
        **UI/UX Design**, unindo minha base técnica com uma visão focada em
        experiência do usuário para criar soluções de ponta a ponta.
      </p>
    </div>,
  ];

  const [Page, SetPage] = useState(0);

  return (
    <>
      <div className={style.TextContainer}>
        <div className={style.TextArea}>{PageText[Page]}</div>
      </div>

      {/* divisor superior dos controles */}
      <div className={style.Divider} />

      {/* controles inferiores */}
      <div className={style.BottomNav}>
        <button
          className={style.NavButton}
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
          className={style.NavButton}
          onClick={() =>
            SetPage(Page < PageText.length - 1 ? Page + 1 : PageText.length - 1)
          }
          disabled={Page === PageText.length - 1}
          aria-label="Próxima página"
          title="Avançar"
        > Avançar
          <FaChevronRight size={18} />
        </button>
      </div>
    </>
  );
}