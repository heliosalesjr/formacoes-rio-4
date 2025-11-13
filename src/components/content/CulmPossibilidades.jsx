"use client";
import { useEffect, useRef } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import React from "react";
import {
  FaBookOpen,
  FaUsers,
  FaCamera,
  FaGlobe,
  FaChalkboardTeacher,
  FaLaptop,
  FaComments,
  FaUserGraduate,
  FaChalkboard,
} from "react-icons/fa";

const CulmPossibilidades = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed("culminancia-exemplos");
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
      id="culminancia-exemplos"
      className="scroll-mt-20 rounded-xl bg-white shadow-2xl border border-slate-200"
    >
      {/* Header */}
      <div className="bg-blue-500 text-white rounded-t-xl p-6 text-center">
        <h1 className="text-3xl font-bold">Possibilidades de culminância</h1>
        <p className="mt-2 text-base">
          A culminância é a <span className="font-semibold">etapa final de um projeto</span>.
        </p>
        <p className="mt-1">
          Veja abaixo <span className="font-semibold">alguns exemplos</span> para trabalhar a apresentação de resultados:
        </p>
      </div>

      {/* Conteúdo */}
      <div className="divide-y divide-slate-200">
        {/* Portfólio */}
        <div className="flex items-start gap-4 p-6">
          <FaBookOpen className="text-blue-500 text-3xl flex-shrink-0" />
          <div>
            <h2 className="font-bold text-slate-800 uppercase">Portfólio</h2>
            <p className="text-slate-600 leading-relaxed">
              Criar um portfólio com os registros do projeto. Este portfólio poderá ser físico ou digital.
            </p>
          </div>
        </div>

        {/* Evento */}
        <div className="flex items-start gap-4 p-6">
          <FaUsers className="text-blue-500 text-3xl flex-shrink-0" />
          <div>
            <h2 className="font-bold text-slate-800 uppercase">Evento</h2>
            <p className="text-slate-600 leading-relaxed">
              Celebração da conclusão em um evento que apresente o projeto, e que pode incluir depoimentos orais,
              imagens, e vídeos para a comunidade escolar.
            </p>
          </div>
        </div>

        {/* Mostra de vídeos */}
        <div className="flex items-start gap-4 p-6">
          <FaCamera className="text-blue-500 text-3xl flex-shrink-0" />
          <div>
            <h2 className="font-bold text-slate-800 uppercase">Mostra de vídeos ou produções digitais</h2>
            <p className="text-slate-600 leading-relaxed">
              Criação de uma Mostra Fotográfica com os registros em imagens do desenvolvimento do projeto.
            </p>
          </div>
        </div>

        {/* Sites e redes sociais */}
        <div className="flex items-start gap-4 p-6">
          <FaGlobe className="text-blue-500 text-3xl flex-shrink-0" />
          <div>
            <h2 className="font-bold text-slate-800 uppercase">Sites e redes sociais</h2>
            <p className="text-slate-600 leading-relaxed">
              Toda forma de dar visibilidade à culminância é essencial. É importante divulgar por meio de notícias em sites
              e redes sociais da Escola, Secretaria de Educação, Município etc.
            </p>
          </div>
        </div>

        {/* Apresentação oral */}
        <div className="flex items-start gap-4 p-6">
          <FaChalkboardTeacher className="text-blue-500 text-3xl flex-shrink-0" />
          <div>
            <h2 className="font-bold text-slate-800 uppercase">Apresentação oral ou dramatizada</h2>
            <p className="text-slate-600 leading-relaxed">
              Pode envolver teatro, roda de conversa, contação de histórias, entrevistas simuladas, entre outros formatos em
              que os estudantes se colocam como protagonistas.
            </p>
          </div>
        </div>

        {/* Publicação virtual */}
        <div className="flex items-start gap-4 p-6">
          <FaLaptop className="text-blue-500 text-3xl flex-shrink-0" />
          <div>
            <h2 className="font-bold text-slate-800 uppercase">Publicação em ambiente virtual</h2>
            <p className="text-slate-600 leading-relaxed">
              Como um Padlet, blog da turma ou redes sociais da escola, com registros escritos, visuais ou sonoros.
            </p>
          </div>
        </div>
      </div>

      {/* Nova Seção: Encontro */}
      <div className="bg-slate-50 p-8 rounded-b-xl">
        <div className="text-center mb-6">
          <FaComments className="text-blue-500 text-4xl mx-auto mb-2" />
          <h2 className="text-2xl font-bold text-slate-800">Encontro</h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            Após o evento de divulgação, deve-se organizar um <span className="font-semibold">último encontro</span> para a
            discussão de desafios e aprendizados do trajeto.
          </p>
        </div>

        {/* Cards de alunos e professores */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Alunos */}
          <div className="bg-white border border-slate-200 shadow-md rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaUserGraduate className="text-blue-500 text-2xl" />
              <h3 className="font-bold text-slate-800">Alunos</h3>
            </div>
            <ul className="text-slate-600 space-y-2 ">
              <li>• Estratégias para melhorar a comunicação do projeto;</li>
              <li>• Quais foram os aprendizados referentes a conteúdos escolares;</li>
              <li>• Quais competências e habilidades foram aprendidas para a vida além da escola.</li>
            </ul>
          </div>

          {/* Professores */}
          <div className="bg-white border border-slate-200 shadow-md rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaChalkboard className="text-green-600 text-2xl" />
              <h3 className="font-bold text-slate-800">Professores</h3>
            </div>
            <ul className="text-slate-600 space-y-2 ">
              <li>• Maneiras de apresentar o planejamento para a comunidade;</li>
              <li>• Revisão de estratégias de processos para uma aplicação futura;</li>
              <li>• Vislumbrar novas aplicações do programa.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulmPossibilidades;
