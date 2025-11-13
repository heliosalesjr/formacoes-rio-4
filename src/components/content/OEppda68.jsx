"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react';
import { FaSearch, FaBook, FaCogs, FaPlay, FaCheckCircle, FaTrophy } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const OEppda68 = () => {
  const etapas = [
    {
      id: '01',
      title: 'Traçar o perfil da turma, destacando cuidados e potenciais, e identificar desafios a serem superados.',
      icon: FaSearch,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: '02',
      title: 'Descrever os principais conteúdos de Matemática e habilidades da BNCC a serem trabalhados.',
      icon: FaBook,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: '03',
      title: 'Planejar o PPDA escolhendo estratégias e ferramentas que incitem a participação dos estudantes.',
      icon: FaCogs,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      id: '04',
      title: 'Executar as atividades planejadas.',
      icon: FaPlay,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      id: '05',
      title: 'Avaliar os resultados, verificando até que ponto os objetivos propostos foram alcançados.',
      icon: FaCheckCircle,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200'
    },
    {
      id: '06',
      title: 'Planejar a Culminância das conquistas ao fim do programa, comunicando os resultados.',
      icon: FaTrophy,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      highlighted: true
    }
  ];

  const ref = useRef();
    const { markAsViewed } = useSidebar();
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            markAsViewed('oeppda68');
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
    <div ref={ref} id="oeppda68" className="scroll-mt-20 bg-gradient-to-br from-white to-slate-50 rounded-xl p-8 shadow-2xl border border-slate-100 space-y-8">
      {/* Título com ícone */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
          <div className="text-2xl">✏️</div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent py-4">
            Etapas de desenvolvimento do projeto
          </h2>
          <div className="w-8 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
        </div>
        
        {/* Subtítulo PPDA */}
        <div className="pt-4">
          <h3 className="text-xl font-bold text-slate-800">
            PPDA do 6º ao 8º ano:
          </h3>
        </div>
      </div>

      {/* Grid de etapas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {etapas.map((etapa, index) => {
          const IconComponent = etapa.icon;
          
          return (
            <div key={etapa.id} className="relative group">
              {/* Seta conectora - apenas para desktop */}
              {index < etapas.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-white border-2 border-slate-300 rounded-full flex items-center justify-center group-hover:border-blue-400 transition-colors duration-300">
                    <FiArrowRight className="w-3 h-3 text-slate-600 group-hover:text-blue-500 transition-colors duration-300" />
                  </div>
                </div>
              )}
              
              {/* Card da etapa */}
              <div className={`
                relative bg-white rounded-lg border-2 p-6 h-full transition-all duration-300
                hover:shadow-xl hover:scale-105 cursor-pointer
                ${etapa.highlighted ? 'border-red-400 ring-2 ring-red-200 shadow-lg' : etapa.borderColor}
                ${etapa.highlighted ? 'bg-red-50' : etapa.bgColor}
              `}>
                {/* Número da etapa */}
                <div className={`
                  absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg
                  bg-gradient-to-r ${etapa.color}
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  {etapa.id}
                </div>

                {/* Ícone */}
                <div className="flex justify-center mb-4 mt-4">
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center
                    bg-gradient-to-r ${etapa.color}
                    group-hover:rotate-12 transition-transform duration-300
                  `}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="space-y-3">
                  <p className="text-slate-700 leading-relaxed text-sm font-medium text-center">
                    {etapa.title}
                  </p>
                </div>

                {/* Indicador de destaque para a etapa 06 */}
                {etapa.highlighted && (
                  <div className="absolute top-2 right-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Seção PDA do 9º ano */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-800">
            PDA do 9º ano:
          </h3>
        </div>
        
        {/* Container da imagem */}
        <div className="w-full">
          <img 
            src="/ppda9o.png" 
            alt="PDA do 9º ano" 
            className="w-full h-auto rounded-lg shadow-lg border border-slate-200"
          />
        </div>
      </div>
    </div>
  );
};

export default OEppda68;