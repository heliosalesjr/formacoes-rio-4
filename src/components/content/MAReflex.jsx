"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'

const MAReflex = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('ma-reflex');
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
    <div ref={ref} id="ma-reflex" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-12">
      
      {/* Título Principal */}
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
            O que significa "avaliar de forma reflexiva"?
          </h1>
          
        </div>
        
        {/* Parágrafo Introdutório */}
        <div className="space-y-6 max-w-5xl mx-auto">
          <p className="text-slate-700 text-lg leading-relaxed">
            Avaliar de forma reflexiva é sair da lógica do "acertou ou errou" e se perguntar:
          </p>
        </div>
      </div>

      {/* Seção - Perguntas reflexivas */}
      <div className="space-y-8">
        {/* Card - Perguntas */}
        <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-700">
                Como o estudante pensou?
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-700">
                Que caminhos ele seguiu?
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-700">
                O que ele usou do que foi estudado para resolver uma situação?
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-700">
                O que ele conseguiu mudar em suas atitudes ou forma de pensar?
              </p>
            </div>
          </div>
        </div>

        

        {/* Card - Como acontece */}
        <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-6 space-y-6">
          <p className="text-slate-700 leading-relaxed">
            Esse tipo de avaliação <strong>exige observação, escuta e registro.</strong> Ela não acontece só nas apresentações finais. Pelo contrário, se constrói no cotidiano da sala, a partir da observação e do registro de situações comuns, mas cheias de significado.
          </p>
        </div>

        {/* Card - Envolvimento dos estudantes */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200 p-6 space-y-6">
          <h3 className="text-xl font-bold text-green-700">
            Envolvimento dos estudantes no processo
          </h3>
          
          <p className="text-slate-700 leading-relaxed">
            Faz sentido, nesse momento, envolver os próprios estudantes na análise do que viveram. A autoavaliação e a avaliação entre pares ajudam a dar forma a esse processo. Elas permitem que cada um pense sobre o que aprendeu, como participou e o que poderia ter feito de outra forma.
          </p>
          
          <div className="bg-white rounded-lg p-5 shadow-md border border-green-100">
            <p className="text-slate-700 text-sm leading-relaxed">
              Com isso, a avaliação passa a incluir diferentes pontos de vista, o que contribui para uma compreensão mais completa do percurso realizado.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MAReflex