"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'

const MAPorQue = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('ma-porque');
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
    <div ref={ref} id="ma-porque" className="scroll-mt-20 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-indigo-50 p-10 shadow-2xl border-0 space-y-14 relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-2xl"></div>
      
      {/* Título Principal */}
      <div className="text-center space-y-8 relative">
        <div className="flex items-center justify-center gap-4">
          <div className="w-1.5 h-16 bg-gradient-to-b from-green-500 to-blue-500 rounded-full shadow-lg"></div>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent tracking-tight">
            O que é e por quê fazer autoavaliação?
          </h1>
          <div className="w-1.5 h-16 bg-gradient-to-b from-green-400 to-blue-400 rounded-full shadow-lg"></div>
        </div>
        
        {/* Definição principal com design moderno */}
        <div className="max-w-6xl mx-auto">
          
            
            <p className="text-slate-700 text-xl leading-relaxed relative z-10">
              A autoavaliação é uma forma de o estudante pensar sobre como participou do projeto, olhar para o próprio envolvimento e reconhecer o que foi feito, o que ainda pode melhorar e como se organizou ao longo do processo.
            </p>
          
        </div>
      </div>

      {/* Seção de Perguntas Reflexivas */}
      <div className="space-y-10 relative">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 tracking-tight">
            Algumas perguntas podem ajudar nessa reflexão:
          </h2>
        </div>

        {/* Grid moderno de perguntas */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-indigo-100/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <p className="text-slate-700 font-medium text-lg leading-relaxed">
                O que eu aprendi?
              </p>
            </div>
          </div>
          
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-blue-100/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <p className="text-slate-700 font-medium text-lg leading-relaxed">
                Em que momentos me esforcei mais?
              </p>
            </div>
          </div>
          
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-cyan-100/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <p className="text-slate-700 font-medium text-lg leading-relaxed">
                Onde eu poderia ter participado melhor?
              </p>
            </div>
          </div>
          
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-teal-100/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <p className="text-slate-700 font-medium text-lg leading-relaxed">
                Como foi meu jeito de lidar com as tarefas?
              </p>
            </div>
          </div>
        </div>

        {/* Seção de Relevância Profissional */}
        <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50 rounded-2xl border border-indigo-200/30 p-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-200/20 to-transparent rounded-full blur-2xl"></div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-16 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full shadow-lg"></div>
              <h3 className="text-2xl font-bold text-indigo-800">
                Relevância para a vida profissional
              </h3>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
              <p className="text-slate-700 text-lg leading-relaxed">
                A autoavaliação, além de ser uma ferramenta importante durante a vida escolar, tem um papel ainda mais relevante quando pensamos no futuro profissional dos estudantes. No ambiente de trabalho, é comum que as pessoas precisem revisar suas próprias entregas, identificar pontos de melhoria e buscar formas de se desenvolver sem depender exclusivamente do olhar de um gestor.
              </p>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-xl p-6 border border-blue-200/30">
              <p className="text-slate-700 text-lg leading-relaxed font-medium">
                Por isso, ao propor momentos de reflexão em sala de aula, o professor contribui para a formação de um hábito que será essencial ao longo da vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MAPorQue