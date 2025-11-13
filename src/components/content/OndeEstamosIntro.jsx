"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'

const OndeEstamosIntro = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('onde-estamos-projeto');
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
    <div ref={ref} id="onde-estamos-projeto" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-12">
      
      {/* Título Principal */}
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <div className="w-1 h-12 bg-gradient-to-b from-slate-500 to-blue-500 rounded-full"></div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
            Onde estamos no projeto?
          </h1>
          <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-slate-500 rounded-full"></div>
        </div>
        
        {/* Parágrafos de Introdução */}
        <div className="space-y-6 max-w-5xl mx-auto">
          <p className="text-slate-700 text-lg leading-relaxed">
            Ao longo dos módulos anteriores, você organizou seu planejamento, iniciou a aplicação do projeto com os estudantes, acompanhou o andamento das ações e pôde observar como eles foram se envolvendo com os conteúdos e desafios propostos. Agora, neste Módulo 4, entramos em uma nova etapa do processo: <strong>é hora de avaliar os resultados do projeto e organizar a culminância.</strong>
          </p>
          
          <blockquote className="border-l-4 border-blue-500 pl-6 italic text-slate-600 bg-slate-50 rounded-r-lg p-4">
            Agora, entramos na etapa 6 do nosso planejamento, que aparece tanto no PPDA (usado com os anos finais do 6º ao 8º) quanto no PDA (9º ano). Essa é a <strong>fase dedicada à avaliação dos resultados e à culminância do projeto.</strong>
          </blockquote>
          
          <p className="text-slate-700 text-lg leading-relaxed">
            Mas o que exatamente isso significa?
          </p>
        </div>
      </div>

      {/* Seção - O que significa essa etapa? */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            O que significa essa etapa?
          </h2>
        </div>

        {/* Card - O que significa essa etapa */}
        <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-6 space-y-6">
          <p className="text-slate-700 leading-relaxed">
            A etapa 6 marca o momento de:
          </p>
          
          <div className="space-y-3 ml-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-700">
                parar e <strong>olhar com cuidado para o que foi vivido</strong>;
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-700">
                entender o que os <strong>estudantes aprenderam</strong>;
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-700">
                e organizar uma forma de <strong>apresentar esse percurso</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Card - Dois focos principais */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200 p-6 space-y-6">
          <h3 className="text-xl font-bold text-green-700">
            Essa etapa tem dois focos principais:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5 shadow-md border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h4 className="font-semibold text-blue-700">Avaliação dos resultados alcançados</h4>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                ou seja, em que medida os objetivos propostos no projeto foram cumpridos;
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-5 shadow-md border border-green-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h4 className="font-semibold text-green-700">A culminância do projeto</h4>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                o momento em que os estudantes compartilham o que fizeram e o que aprenderam, seja por meio de uma apresentação, exposição, roda de conversa ou outro formato escolhido.
              </p>
            </div>
          </div>
        </div>

        {/* Card - Diferenças entre PPDA e PDA */}
        <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-6 space-y-6">
          <h3 className="text-xl font-bold text-purple-700 border-b border-purple-100 pb-3">
            E o que muda entre o PPDA e o PDA?
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* PPDA */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg">
                <h4 className="font-bold">PPDA (6º ao 8º)</h4>
              </div>
              
              <p className="text-slate-700 text-sm">
                Nos anos do <strong>PPDA (6º ao 8º)</strong>, essa etapa geralmente envolve:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700 text-sm">
                    <strong>Avaliar se os objetivos</strong> do projeto foram alcançados;
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700 text-sm">
                    <strong>Planejar uma culminância</strong> que faça sentido com o que foi feito;
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700 text-sm">
                    <strong>Envolver os estudantes</strong> nesse fechamento, com escuta e participação.
                  </p>
                </div>
              </div>
            </div>
            
            {/* PDA */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg">
                <h4 className="font-bold">PDA (9º ano)</h4>
              </div>
              
              <p className="text-slate-700 text-sm leading-relaxed">
                No <strong>PDA do 9º ano</strong>, essa fase se conecta diretamente com o final do Ciclo Coletivo do Projeto: é hora de <strong>socializar os resultados, comunicar o que foi produzido e criar um espaço</strong> para que os estudantes possam <strong>reconhecer suas próprias conquistas</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OndeEstamosIntro