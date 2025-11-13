"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react'

const MAApplicacao = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('ma-aplicacao');
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
    <div ref={ref} id="ma-aplicacao" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-12">
      
      {/* Título Principal */}
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <div className="w-1 h-12 bg-gradient-to-b from-slate-500 to-blue-500 rounded-full"></div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
            Como aplicar a autoavaliação?
          </h1>
          <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-slate-500 rounded-full"></div>
        </div>
        
        {/* Parágrafo Introdutório */}
        <div className="space-y-6 max-w-5xl mx-auto">
          <p className="text-slate-700 text-lg leading-relaxed">
            A autoavaliação pode acontecer de diferentes formas, e a escolha vai depender do tempo disponível, da maturidade da turma e da cultura de avaliação já construída. Abaixo, listamos algumas formas possíveis de conduzir esse momento:
          </p>
        </div>
      </div>

      {/* Accordion com as diferentes formas */}
      <div className="space-y-8">
        <Accordion type="single" collapsible className="w-full space-y-4">
          
          {/* Roda de conversa */}
          <AccordionItem value="item-1" className="bg-white rounded-lg shadow-lg border border-slate-200">
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <span className="text-xl font-bold text-blue-700">Roda de conversa</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Uma opção simples é abrir um espaço de conversa com a turma, em que cada estudante possa falar um pouco sobre sua experiência.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-3">Algumas perguntas que podem ajudar:</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">–</span>
                    <p className="text-slate-700">Qual foi a sua principal contribuição para o projeto?</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">–</span>
                    <p className="text-slate-700">Se tivesse mais tempo, o que você faria diferente?</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Formulário com perguntas abertas */}
          <AccordionItem value="item-2" className="bg-white rounded-lg shadow-lg border border-slate-200">
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <span className="text-xl font-bold text-green-700">Formulário com perguntas abertas</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Se preferir um momento mais individual e silencioso, pode propor que os estudantes respondam por escrito, no caderno ou em uma folha.
              </p>
              
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <h4 className="font-semibold text-green-800 mb-3">Perguntas que ajudam nessa reflexão:</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">–</span>
                    <p className="text-slate-700">O que você aprendeu com este projeto?</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">–</span>
                    <p className="text-slate-700">O que achou mais difícil?</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">–</span>
                    <p className="text-slate-700">Como se organizou para cumprir as tarefas?</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">–</span>
                    <p className="text-slate-700">Como foi trabalhar em grupo?</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Quadro de metacognição */}
          <AccordionItem value="item-3" className="bg-white rounded-lg shadow-lg border border-slate-200">
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <span className="text-xl font-bold text-purple-700">Quadro de metacognição</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Essa é uma ferramenta visual simples: os estudantes preenchem uma folha dividida em três colunas.
              </p>
              
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-3 text-center border border-purple-200">
                    <span className="text-purple-600 font-bold">–</span>
                    <p className="text-slate-700 font-medium">O que aprendi</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center border border-purple-200">
                    <span className="text-purple-600 font-bold">–</span>
                    <p className="text-slate-700 font-medium">O que fiz bem</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center border border-purple-200">
                    <span className="text-purple-600 font-bold">–</span>
                    <p className="text-slate-700 font-medium">O que posso melhorar</p>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-700 leading-relaxed">
                É uma forma direta de incentivar a autorreflexão, principalmente com turmas mais jovens.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Escala avaliativa */}
          <AccordionItem value="item-4" className="bg-white rounded-lg shadow-lg border border-slate-200">
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <span className="text-xl font-bold text-orange-700">Escala avaliativa</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Outra possibilidade é montar uma escala de 1 a 5 para que os estudantes avaliem a si mesmos em alguns aspectos combinados previamente:
              </p>
              
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">–</span>
                    <p className="text-slate-700">Participação nas atividades</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">–</span>
                    <p className="text-slate-700">Organização</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">–</span>
                    <p className="text-slate-700">Colaboração com o grupo</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">–</span>
                    <p className="text-slate-700">Clareza ao apresentar o que aprendeu</p>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-700 leading-relaxed">
                Depois da escala, vale pedir que escrevam brevemente o motivo de suas escolhas.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Card com links e conclusão */}
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
            <p className="text-slate-700 leading-relaxed text-center">
              <span className="font-medium">Veja um modelo de autoavaliação</span> <a href="https://docs.google.com/spreadsheets/d/1MiURYq-POgLMpV0m1FziWequAOgn8HHyyAvb_upzepQ/copy" className="text-blue-600 hover:text-blue-800 underline font-medium">clicando aqui!</a>
            </p>
          </div>
          
          <blockquote className="border-l-4 border-green-500 pl-6 italic text-slate-600 bg-slate-50 rounded-r-lg p-4">
            <strong>Essas práticas não precisam ser usadas todas de uma vez.</strong> O mais importante é criar um ambiente em que o estudante possa parar, pensar e se perceber no processo.
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default MAApplicacao