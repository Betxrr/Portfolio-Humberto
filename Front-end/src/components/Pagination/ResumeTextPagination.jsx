import { motion } from "framer-motion";
import React from "react";
import style from "./ResumeTextPagination.module.css";

export default function TextPagination() {
  return (
    <div className={style.paginationContainer}>
      <div className={style.TextContainer}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
          className={style.TextArea}
        >
          <div>
            <h4 className={style.title}>Meu resumo Pessoal / Profissional:</h4>
            <p className={style.paragraph}>
              Sou um desenvolvedor Web com foco no ecosistema React, formado em
              análise e desenvolvimento de sistemas.
            </p>
            <p className={style.paragraph}>
              Trabalhei 3 anos e meio como Desenvolvedor júnior, eu era responsável
              por criar documentações e planilhas em HTML, CSS, JavaScript e SQL
              Server. Eu também era responsável por fazer envio direto de atualizações
              para produção e possuía contato direto com os clientes. Participava de
              reuniões, negociações de prazos, análise de demandas, colaboração nas
              resoluções técnicas e acompanhamento de tarefas utilizando metodologias
              ágeis Kanban (MOVIDESK).
            </p>
            <p className={style.paragraph}>
              Apesar de que meu trabalho era apenas em HTML puro e com poucas
              interações com implementações diretas no sistema, ainda assim eu
              consegui consolidar bons conhecimentos sólidos sobre estruturas HTML/CSS
              e uma boa visão de resolução de problemas em SQL Server.
            </p>
            <p className={style.paragraph}>
              Agora há mais de 1 ano eu tenho me dedicado estritamente a me tornar um
              desenvolvedor Web completo, com foco em React e Node.js, com React Native CLI
              (Android) sendo um diferencial mobile, Busco aplicar rigor técnico,
              Clean Code e arquiteturas modernas, para a entrega de soluções robustas
              e escaláveis.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
