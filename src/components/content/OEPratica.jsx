"use client";

import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight, FaLightbulb, FaUsers, FaComments, FaStar, FaRocket } from 'react-icons/fa';

const OEPratica = () => {
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (index) => {
    setOpenAccordions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const accordionItems = [
    {
      title: "Revisitar os objetivos lá do começo:",
      content: "Vale reler com a turma aquilo que foi planejado no início: o que a gente queria entender, investigar ou transformar? Isso ajuda os estudantes a perceberem o quanto caminharam e a reconhecer o que foi construído, mesmo que parte do projeto tenha mudado de rumo no caminho.",
      icon: FaLightbulb,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Fazer uma autoavaliação com sentido:",
      content: "Em vez de algo genérico, proponha perguntas mais diretas, que façam sentido para a idade e para o grupo. Pode ser no caderno, em um formulário, ou até oralmente:",
      subItems: [
        '"O que eu aprendi nesse projeto?"',
        '"Como eu ajudei meu grupo?"',
        '"Qual foi o meu maior desafio?"'
      ],
      icon: FaStar,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Avaliar em grupo também ajuda:",
      content: "Estimule que os estudantes conversem sobre como foi trabalhar juntos(as), o que funcionou bem, o que gerou conflitos, como se organizaram. Isso pode acontecer em rodas de conversa, em murais de feedback ou até por meio de bilhetes escritos entre colegas.",
      icon: FaUsers,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Promova uma conversa com a turma toda:",
      content: "É um bom momento para escutar o que eles e elas sentiram ao longo do projeto. Perguntas como \"O que foi mais difícil?\", \"O que surpreendeu?\", \"O que pode melhorar nos próximos projetos?\" ajudam a turma a elaborar o que viveu — e também trazem bons insights para o(a) professor(a).",
      icon: FaComments,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "E por fim, organizem uma culminância com cara de fechamento:",
      content: "Isso não precisa ser algo grandioso. Pode ser um mural na escola, uma conversa com outra turma, uma apresentação breve para os responsáveis ou um post no Padlet. A ideia é dar visibilidade ao que foi feito e marcar que aquele processo teve começo, meio e fim.",
      icon: FaRocket,
      color: "from-red-500 to-red-600"
    }
  ];

  const ref = useRef();
      const { markAsViewed } = useSidebar();
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              markAsViewed('oepratica');
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
    <div ref={ref} id="oepratica" className="scroll-mt-20 bg-gradient-to-br from-white to-slate-50 rounded-xl p-8 shadow-2xl border border-slate-100 space-y-8">
      {/* Título Principal */}
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
            O que isso significa na prática?
          </h1>
          <div className="w-8 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
        </div>
      </div>

      {/* Texto Introdutório */}
      <div className="space-y-6 max-w-5xl mx-auto">
        <p className="text-slate-700 text-lg leading-relaxed">
          Vamos supor que sua turma trabalhou um projeto sobre consumo consciente. Eles pesquisaram, debateram, criaram campanhas, organizaram ações na escola e, aos poucos, foram repensando seus próprios hábitos. Chegando nessa etapa final, é crucial ter esse momento de reflexão, para que a turma tenha esse espaço de olhar para o que foi feito e pensar sobre o que ficou de aprendizado disso tudo.
        </p>
        
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border-l-4 border-blue-500 p-6">
          <p className="text-slate-700 text-lg leading-relaxed font-medium">
            Algumas ações simples, mas significativas, ajudam bastante nesse processo:
          </p>
        </div>
      </div>

      {/* Accordion de Ações */}
      <div className="space-y-4 max-w-5xl mx-auto">
        {accordionItems.map((item, index) => {
          const IconComponent = item.icon;
          const isOpen = openAccordions[index];
          
          return (
            <div key={index} className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
              {/* Header do Accordion */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-md`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {item.title}
                  </h3>
                </div>
                
                <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}>
                  {isOpen ? (
                    <FaChevronDown className="w-5 h-5 text-slate-600" />
                  ) : (
                    <FaChevronRight className="w-5 h-5 text-slate-600" />
                  )}
                </div>
              </button>

              {/* Conteúdo do Accordion */}
              {isOpen && (
                <div className="px-6 pb-6 border-t border-slate-100 bg-slate-50">
                  <div className="pt-4 space-y-4">
                    <p className="text-slate-700 leading-relaxed">
                      {item.content}
                    </p>
                    
                    {/* Sub-items para autoavaliação */}
                    {item.subItems && (
                      <div className="ml-4 space-y-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <div key={subIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-slate-700 italic">
                              {subItem}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200 p-6 text-center space-y-4">
        <h3 className="text-xl font-bold text-blue-700">
          Pronto para seguir?
        </h3>
        <p className="text-slate-700 leading-relaxed max-w-3xl mx-auto">
          Na próxima etapa, vamos explorar formas possíveis de fazer essa avaliação — com foco na escuta, na reflexão e na valorização do processo.
        </p>
      </div>
    </div>
  );
};

export default OEPratica;