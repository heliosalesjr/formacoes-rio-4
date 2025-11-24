"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'

const EvaluationTypes = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('ma-intro');
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
    <div ref={ref} id="ma-intro" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-12">
      
      {/* Título Principal */}
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
            Autoavaliação e Avaliação entre Pares como processos reflexivos
          </h1>
          
        </div>
        
        {/* Parágrafo Introdutório */}
        <div className="space-y-6 max-w-5xl mx-auto">
          <p className="text-slate-700 text-lg leading-relaxed">
            Nos módulos anteriores, já discutimos os <strong>três tipos principais de avaliação</strong>: <strong>diagnóstica, formativa e somativa</strong>.
          </p>
        </div>
      </div>

      {/* Seção - Retomando os tipos de avaliação */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Retomando os tipos de avaliação
          </h2>
        </div>

        {/* Card - Introdução */}
        <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-6 space-y-6">
          <p className="text-slate-700 leading-relaxed text-center">
            Até aqui, vimos três tipos de avaliação que se complementam:
          </p>
        </div>

        {/* Cards dos três tipos de avaliação */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Diagnóstica */}
          <div className="bg-white rounded-lg p-6 shadow-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                •
              </div>
              <h4 className="font-bold text-blue-700">Diagnóstica</h4>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              acontece antes do início do projeto. Ajuda a identificar o que os estudantes já sabem, suas dúvidas, suas experiências com o tema.
            </p>
          </div>
          
          {/* Formativa */}
          <div className="bg-white rounded-lg p-6 shadow-lg border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                •
              </div>
              <h4 className="font-bold text-green-700">Formativa</h4>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              é realizada ao longo do projeto. Permite acompanhar o desenvolvimento dos estudantes e ajustar o percurso conforme necessário.
            </p>
          </div>
          
          {/* Somativa */}
          <div className="bg-white rounded-lg p-6 shadow-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                •
              </div>
              <h4 className="font-bold text-purple-700">Somativa</h4>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              é feita no fim, para analisar os resultados alcançados em relação aos objetivos propostos.
            </p>
          </div>
        </div>

        {/* Card - Conclusão */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200 p-6 space-y-6">
          <p className="text-slate-700 leading-relaxed">
            Agora queremos olhar com mais calma para a avaliação reflexiva, que ajuda a entender como o processo foi vivido.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EvaluationTypes