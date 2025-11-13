"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'

const MAAvPares = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('ma-av-pares');
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
    <div  className="rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-12">
      
      {/* Título Principal */}
      <div ref={ref} id="ma-av-pares" className="scroll-mt-20 text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <div className="w-1 h-12 bg-gradient-to-b from-slate-500 to-blue-500 rounded-full"></div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
            Avaliação entre pares: como fazer?
          </h1>
          <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-slate-500 rounded-full"></div>
        </div>
      </div>

      {/* Seção Introdutória com Imagem */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className="text-slate-700 text-lg leading-relaxed">
            A avaliação entre pares é uma etapa importante para que os estudantes compreendam o valor do feedback como parte do processo de aprendizagem. Ao observar e comentar o trabalho do colega, buscando fazer isso com respeito e objetividade, começam a desenvolver a capacidade de argumentar, justificar suas observações e acolher diferentes pontos de vista.
          </p>
          
          <blockquote className="border-l-4 border-blue-500 pl-6 italic text-slate-600 bg-slate-50 rounded-r-lg p-4">
            Assim, a prática da avaliação entre pares se torna também um exercício de preparação para os desafios da vida adulta e do mundo do trabalho.
          </blockquote>
        </div>
        
        {/* Imagem com gradiente sobreposto */}
        <div className="relative rounded-xl overflow-hidden shadow-lg border border-blue-200">
          <img 
            src="alunes.jpg" 
            alt="Estudantes trabalhando em grupo" 
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 to-green-500/50"></div>
        </div>
      </div>

      {/* Seção Ambiente Necessário */}
      <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-6 space-y-6">
        <h3 className="text-xl font-bold text-purple-700 border-b border-purple-100 pb-3">
          Criando o ambiente adequado
        </h3>
        
        <p className="text-slate-700 leading-relaxed">
          Para que essa estratégia funcione bem, é importante que a turma já tenha desenvolvido uma cultura de respeito mútuo, escuta atenta e confiança. Quando esse ambiente está minimamente estabelecido, os estudantes tendem a acolher melhor os comentários e sugestões dos colegas, percebendo esse momento não como uma crítica, mas como parte do aprendizado coletivo.
        </p>
        
        <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
          <p className="text-slate-700 leading-relaxed">
            No entanto, sabemos que isso não acontece de forma automática. É necessário orientar os estudantes sobre qual é a proposta da avaliação entre pares e como ela deve ser conduzida.
          </p>
        </div>
      </div>

      {/* Cuidados e Orientações */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200 p-6 space-y-6">
        <h3 className="text-xl font-bold text-green-700">
          Cuidados para garantir um processo produtivo e respeitoso:
        </h3>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-5 shadow-md border border-blue-100">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-700">
                <strong>Esclareça o objetivo:</strong> não é julgar, e sim contribuir para o crescimento do colega.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-5 shadow-md border border-green-100">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-700">
                <strong>Definam juntos os critérios:</strong> como clareza na fala, pontualidade, cooperação e escuta.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-5 shadow-md border border-purple-100">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="space-y-3">
                <p className="text-slate-700">
                  <strong>Ofereça frases de apoio para guiar a devolutiva com cuidado, como:</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">–</span>
                    <p className="text-slate-700">"Achei interessante quando você…"</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">–</span>
                    <p className="text-slate-700">"Senti falta de…"</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">–</span>
                    <p className="text-slate-700">"Uma sugestão seria…"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exemplo de Aplicação */}
      <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-6 space-y-6">
        <h3 className="text-xl font-bold text-orange-700 border-b border-orange-100 pb-3">
          Exemplo de aplicação
        </h3>
        
        <p className="text-slate-700 leading-relaxed">
          Após uma apresentação de grupo, cada estudante pode receber uma ficha simples com três perguntas:
        </p>
        
        <div className="bg-orange-50 rounded-lg p-6 border border-orange-100">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <p className="text-slate-700 font-medium">O que o colega fez bem?</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <p className="text-slate-700 font-medium">O que poderia ser aprimorado?</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <p className="text-slate-700 font-medium">De que forma ele(a) contribuiu para o trabalho em grupo?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ferramentas que podem ajudar */}
      <div className="bg-gradient-to-r from-indigo-50 to-teal-50 rounded-lg border border-indigo-200 p-6 space-y-6">
        <h3 className="text-3xl font-bold text-blue-600 text-center">
          Ferramentas que podem ajudar:
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-5 shadow-md border border-indigo-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">Padlet</h4>
                <p className="text-slate-700 text-sm">
                  para escrever e trocar feedbacks de forma anônima ou assinada.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-5 shadow-md border border-green-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Formulário Google</h4>
                <p className="text-slate-700 text-sm">
                  com escalas + perguntas abertas.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-5 shadow-md border border-blue-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Diário de bordo</h4>
                <p className="text-slate-700 text-sm">
                  com seção específica para autorreflexão e comentários do grupo.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-5 shadow-md border border-teal-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Entrevistas entre colegas</h4>
                <p className="text-slate-700 text-sm">
                  guiadas por roteiro simples.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MAAvPares