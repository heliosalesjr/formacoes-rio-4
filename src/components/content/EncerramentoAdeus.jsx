"use client";

import React, {  useEffect, useRef } from 'react'

import { useSidebar } from '@/contexts/SidebarContext';

import { FaAward, FaBook, FaUsers } from "react-icons/fa";

export default function EncerramentoAdeus() {

    const ref = useRef();
      const { markAsViewed } = useSidebar();
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              markAsViewed('encerramento-obrigado');
            }
          },
          { threshold: 1 }
        );
    
        if (ref.current) {
          observer.observe(ref.current);
        }
    
        return () => observer.disconnect();
      }, [markAsViewed]);

  const etapas = [
    {
      icon: <FaUsers className="w-8 h-8 text-blue-600" />,
      titulo: "Diagnóstico Inicial",
      descricao: "Realizamos o diagnóstico inicial da turma, analisando perfis, necessidades e potencialidades"
    },
    {
      icon: <FaBook className="w-8 h-8 text-blue-600" />,
      titulo: "Monitoramento e Plano de Ação",
      descricao: "Desenvolvemos o monitoramento contínuo das ações e estruturamos o plano de ação com base nas metas estabelecidas"
    },
    {
      icon: <FaAward className="w-8 h-8 text-blue-600" />,
      titulo: "Avaliação e Culminância",
      descricao: "Abordamos a avaliação e a culminância como momentos fundamentais de síntese, devolutiva e visibilidade das aprendizagens"
    }
  ];

  return (
    <div className=" rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 md:p-12 shadow-2xl border border-slate-100">
      {/* Título Principal */}
      <div  ref={ref} id="encerramento-obrigado"  className="scroll-mt-20 text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r pb-8 from-blue-700 to-green-700 bg-clip-text text-transparent">
          Parabéns por Concluir esta Jornada!
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg  text-slate-700 leading-relaxed">
            <strong>Chegar até aqui é, por si só, um grande marco</strong>! Ao longo deste percurso, você <strong>revisitou práticas, explorou novas formas de avaliação e vivenciou o potencial da Aprendizagem Baseada em Projetos</strong> para transformar o cotidiano escolar. Cada reflexão, registro e experiência compartilhada contribuiu para fortalecer uma <strong>educação mais significativa, colaborativa e conectada</strong> à realidade dos estudantes.
          </p>
        </div>
      </div>

      {/* Imagem Inspiracional */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
        <img 
          src="./proud.png" 
          alt="Educadores em formação"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Seção com Cards das Etapas */}
      <div className="mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8">
          Etapas

        </h3>

        {/* Texto Complementar sobre as Etapas */}
        <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-slate-700 leading-relaxed text-center">
            Nesta formação, <strong>percorremos etapas centrais para a implementação qualificada do projeto</strong>: realizamos o <strong>diagnóstico inicial</strong> da turma, analisando perfis, necessidades e potencialidades; desenvolvemos o <strong>monitoramento contínuo das ações</strong>, acompanhando como os desafios eram vivenciados pelos estudantes; <strong>estruturamos o plano de ação </strong>com base nas metas estabelecidas; utilizamos o <strong>Diário de Bordo</strong> como instrumento de registro e análise; e, por fim, abordamos a <strong>avaliação e a culminância</strong> como momentos fundamentais de síntese, devolutiva e visibilidade das aprendizagens. Cada etapa foi pensada para apoiar o trabalho docente de forma <strong>prática, sistematizada e alinhada às diretrizes pedagógicas da rede</strong>.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {etapas.map((etapa, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 rounded-full p-4">
                  {etapa.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-800 text-center mb-3">
                {etapa.titulo}
              </h4>
              <p className="text-slate-600 text-center leading-relaxed">
                {etapa.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>

      

      {/* Mensagem Final */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-10 border-2 border-blue-200">
        <div className="text-center">
          <div className="inline-block bg-blue-600 rounded-full p-3 mb-6">
            <FaAward className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
            Agradecimento Especial
          </h3>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
            A equipe da <span className="font-bold text-blue-700">BEĨ Educação</span>, junto com a <span className="font-bold text-blue-700">SME RJ – Secretaria Municipal de Educação do Rio de Janeiro</span>, parabeniza e agradece sua dedicação, sensibilidade e compromisso com a construção de práticas inovadoras. Que os aprendizados deste curso continuem orientando suas decisões pedagógicas e ampliando o impacto do seu trabalho na escola e na vida dos alunos.
          </p>
        </div>
      </div>
    </div>
  );
}