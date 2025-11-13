"use client";
import { useEffect, useRef, useState } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'

const RegistroAvaliacao = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('registros-avaliacao');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Modal overlay
  if (isModalOpen) {
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
        <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-lg overflow-hidden">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-75 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            src="/registro.png" 
            alt="Exemplo de Padlet expandido" 
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
            <p className="text-center font-medium">Exemplo de Padlet</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} id="registros-avaliacao" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-12">
      
      {/* Título Principal */}
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <div className="w-1 h-12 bg-gradient-to-b from-slate-500 to-blue-500 rounded-full"></div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
            Registros e avaliação do percurso
          </h1>
          <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-slate-500 rounded-full"></div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="space-y-8">
        {/* Primeiro parágrafo */}
        <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-6 space-y-4">
          <p className="text-slate-700 leading-relaxed">
            Ao longo do desenvolvimento do projeto, é crucial que o(a) professor(a) mantenha registros do percurso vivido pelos estudantes, não apenas dos resultados finais, mas especialmente dos processos, dos avanços e dos desafios enfrentados ao longo do caminho. Esses registros não precisam ser formais ou burocráticos: podem ser feitos por meio de:
          </p>
          
          {/* Lista de tipos de registros */}
          <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <p className="text-slate-700">anotações simples</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <p className="text-slate-700">fotos das atividades</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <p className="text-slate-700">fragmentos de falas dos alunos</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <p className="text-slate-700">produções escritas ou registros em áudio e vídeo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Segundo parágrafo */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200 p-6">
          <p className="text-slate-700 leading-relaxed">
            Esse acompanhamento constante permite observar como os alunos estão se envolvendo, quais aprendizagens estão se consolidando, e como se transformam suas posturas, atitudes e níveis de engajamento. Além disso, os registros funcionam como base para a avaliação final do projeto e ajudam o(a) professor(a) a planejar com mais intencionalidade as próximas propostas pedagógicas.
          </p>
        </div>

        {/* Terceiro parágrafo */}
        <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-6">
          <p className="text-slate-700 leading-relaxed">
            Sempre que possível, vale convidar os próprios alunos a participarem dessa construção, seja escrevendo pequenas reflexões ao final das aulas, desenhando algo que represente a vivência do dia ou gravando vídeos em que compartilham o que sentiram e aprenderam.
          </p>
        </div>

        {/* Imagem do Padlet */}
        <div className="w-full">
          <div 
            className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200 cursor-pointer hover:shadow-xl transition-shadow duration-300 group"
            onClick={openModal}
          >
            <img 
              src="/registro.png" 
              alt="Exemplo de Padlet" 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />

            {/* Overlay verde no hover */}
            <div className="absolute inset-0 bg-green-600/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-semibold text-lg text-center">
                Clique para ampliar o exemplo de padlet
              </p>
            </div>

            {/* Ícone de expansão */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Último parágrafo sobre Padlet */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200 p-6">
          <p className="text-slate-700 leading-relaxed">
            Uma forma prática e interessante de organizar esses registros é usar o <strong>Padlet</strong>, que costuma ser nossa principal sugestão. Ele funciona como um mural virtual onde alunos e professores podem postar textos, imagens, vídeos e reflexões ao longo do projeto. Isso torna o acompanhamento mais visual, colaborativo e acessível, e ainda cria uma linha do tempo rica das experiências vividas pela turma.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegistroAvaliacao
