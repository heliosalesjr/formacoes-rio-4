"use client";
import { useEffect, useRef } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import React from "react";
import Image from "next/image";
import { FaCheckSquare } from "react-icons/fa";

const CulmAprofundando = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed("culminancia-aprofundando");
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div
      ref={ref}
      id="culminancia-aprofundando"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-16"
    >
      {/* Título Principal */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="w-1 h-12 bg-gradient-to-b from-slate-500 to-blue-500 rounded-full"></div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
            Aprofundando
          </h1>
          <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-slate-500 rounded-full"></div>
        </div>
        <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed">
          Para aprofundar o que já foi apresentado até aqui, seguem algumas
          formas de expandir essas ideias e explorar ao máximo o potencial das
          culminâncias simples:
        </p>
      </div>

      {/* Lista de aprofundamento */}
      <div className="space-y-8 max-w-5xl mx-auto">
        <div>
          <h2 className="font-bold text-xl text-slate-800">
            Apresentações na própria sala
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Os grupos podem apresentar suas produções para os colegas,
            explicando como chegaram até ali, quais escolhas fizeram e o que
            descobriram no processo. Os outros escutam, fazem perguntas, trocam
            ideias. É uma forma de valorizar o trabalho de todos e estimular a
            escuta e a reflexão entre pares.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl text-slate-800">
            Mural coletivo na escola ou na sala
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Com cartazes, registros fotográficos, frases escritas pelos alunos,
            produções textuais, desenhos, gráficos… Esse mural pode contar um
            pouco da trajetória do projeto. Ele serve tanto como fechamento para
            a turma quanto como forma de dar visibilidade para os outros alunos
            e professores da escola.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl text-slate-800">
            Produção final individual ou em grupo
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Pode ser um texto, uma carta aberta, um cartaz-resumo, um vídeo
            simples gravado com celular, uma tirinha em quadrinhos… O importante
            é que represente, de algum modo, o que foi vivido no projeto. Essa
            produção ajuda os estudantes a organizarem suas ideias e expressarem
            o que aprenderam.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl text-slate-800">
            Roda de conversa de fechamento
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Mesmo sem nenhuma apresentação formal, uma roda para conversar sobre
            o processo já pode funcionar como culminância. Os alunos
            compartilham o que foi mais marcante, o que aprenderam, o que fariam
            diferente numa próxima vez.
          </p>
        </div>
      </div>

      {/* Seção extra: O papel do professor (imagem + checklist estilizado) */}
      <div className="space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-slate-800">
            O papel do(a) professor(a) na{" "}
            <span className="text-blue-600">culminância</span>
          </h2>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            "Atua como mediador(a), ajudando os estudantes a organizarem suas apresentações de maneira clara e coerente.",
            "Orienta na escolha das melhores estratégias para expor o que foi aprendido, considerando o público e os recursos disponíveis.",
            "Cuida da gestão do tempo e da escuta entre os grupos, garantindo que todos tenham espaço para se expressar.",
            "Incentiva a participação de todos os integrantes, estimulando o protagonismo e o trabalho em equipe.",
            "Propõe perguntas que favorecem a reflexão sobre o processo de aprendizagem e os conteúdos desenvolvidos.",
            "Observa tanto o conteúdo quanto a forma da apresentação, oferecendo sugestões construtivas quando necessário.",
            "Evita assumir o protagonismo, adotando uma postura de apoio, escuta ativa e valorização do percurso do grupo.",
            "Ajuda a transformar a culminância em um momento de síntese, partilha e reconhecimento do que foi construído coletivamente.",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <FaCheckSquare className="text-blue-500 text-2xl flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CulmAprofundando;
