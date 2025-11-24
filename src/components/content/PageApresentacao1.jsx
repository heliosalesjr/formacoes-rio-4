"use client";
import { useEffect, useRef } from 'react';
import React from 'react'
import Image from 'next/image'

const PageApresentacao1 = () => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // markAsViewed('apresentacao-1');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} id="apresentacao-1" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-8">
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        {/* Conteúdo - 2/3 da largura */}
        <div className="md:col-span-2 space-y-6 flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <div className="w-1 h-12 bg-gradient-to-b from-slate-500 to-blue-500 rounded-full"></div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
              Apresentação do Módulo 4
            </h2>
          </div>
          
          <p className="text-slate-700 text-lg leading-relaxed">
            Sejam bem-vindos e bem-vindas ao Módulo 4 da nossa formação.
          </p>

          <p className="text-slate-700 text-lg leading-relaxed">
            Chegamos à etapa final do percurso, e talvez esse seja um bom momento para refletirmos com mais calma sobre tudo que foi feito até aqui: os caminhos percorridos, os ajustes no meio do caminho e, claro, as descobertas feitas com os estudantes.
          </p>
          
          <p className="text-slate-700 text-lg leading-relaxed">
            Aqui, conversaremos sobre como avaliar os resultados dos projetos. Mas não no sentido de dar nota ou encerrar um ciclo com apenas um número. A ideia é outra: pensar em formas de organizar o que foi aprendido, de valorizar os avanços, mesmo os pequenos, e de escutar como os próprios estudantes enxergam o que viveram. Por isso, vamos apresentar aqui algumas propostas de autoavaliação e avaliação entre pares, que ajudam a ampliar o olhar sobre o processo e a criar espaços de conversa e escuta.
          </p>
          
          <p className="text-slate-700 text-lg leading-relaxed">
            Também falaremos sobre culminância, que é aquele momento em que tudo se junta: as ideias, as produções, as experiências e as aprendizagens.
          </p>
        </div>
        
        {/* Imagem - 1/3 da largura */}
        <div className="flex items-center justify-center h-full">
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-full min-h-96">
            <Image
              src="/4_e_5_books.png"
              alt="Imagem ilustrativa"
              fill
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Novo Bloco de Texto Destacado */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-blue-500/10 rounded-xl blur-xl"></div>
        <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 shadow-lg border-2 border-slate-200/50 hover:border-blue-300/50 transition-all duration-300">
          <div className="flex gap-4">
           
            <div className="space-y-4">
              <p className="text-slate-700 text-lg leading-relaxed italic">
                Este último módulo é um convite para celebrar o percurso e reconhecer o valor das experiências vividas ao longo da formação. Avaliar e culminar não significam apenas concluir, mas compreender o que foi construído, identificar os aprendizados que permanecem e projetar os próximos passos. Que este momento seja de troca, de reconhecimento mútuo e de inspiração para seguir aprimorando a prática pedagógica com propósito e significado.
              </p>
              
            </div>
          </div>
        </div>
      </div>

      {/* Seção do Vídeo */}
      <div className="space-y-6 items-center">
        <h3 className="text-3xl font-bold text-slate-700 justify-center text-center py-8">
          Vídeo de Apresentação
        </h3>
        
        <div className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/42BVLPl0xw8"
            title="Resumo Módulo 1"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default PageApresentacao1