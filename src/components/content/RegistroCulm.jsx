"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import Image from "next/image";
import React from 'react';

const RegistroCulm = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('depois-culminancia');
        }
      },
      { threshold: 1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div className=" rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-12">
      
      {/* Título Principal */}
      <div ref={ref} id="depois-culminancia"  className="scroll-mt-20 text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
            E depois da culminância?
          </h1>
          
        </div>
        
        {/* Parágrafo Introdutório */}
        <div className="space-y-6 max-w-5xl mx-auto">
          <p className="text-slate-700 text-lg leading-relaxed">
            A culminância marca o fim de uma etapa, mas não o fim do projeto. É depois dela que começam outras camadas igualmente importantes: dar visibilidade ao que foi vivido, transformar o aprendido em memória e, sobretudo, alimentar novos caminhos a partir da experiência construída.
          </p>
        </div>
      </div>

      {/* Seções das perguntas reflexivas */}
      <div className="space-y-8">
        
        {/* O que se faz com o que foi vivido? */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-6 space-y-4">
            <h3 className="text-xl font-bold text-blue-700 border-b border-blue-100 pb-3">
              O que se faz com o que foi vivido?
            </h3>
            
            <p className="text-slate-700 leading-relaxed">
              Alguns registros podem ser arquivados, mas será que precisam ser esquecidos? Uma roda de conversa com a turma, uma devolutiva pública com a comunidade, uma reinterpretação do projeto em formato de portfólio ou mural permanente na escola… Tudo isso ajuda a tornar os aprendizados mais duradouros, vivos e significativos.
            </p>
            
            <blockquote className="border-l-4 border-blue-500 pl-6 italic text-slate-600 bg-blue-50 rounded-r-lg p-4">
              Mais do que um encerramento, o pós-culminância pode ser um espaço de fortalecimento da autoria dos alunos e da coletividade.
            </blockquote>
          </div>

          {/* Imagem ao lado direito */}
          <div className="w-full flex justify-center">
            <Image 
              src="/stu.png"
              alt="ilustração"
              width={600}
              height={400}
              className="rounded-lg object-contain w-full h-auto"
            />
          </div>

        </div>

        {/* O que ficou? O que segue? O que reverbera? — imagem à esquerda */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Imagem à esquerda */}
          <div className="w-full flex justify-center order-1 md:order-1">
            <Image 
              src="/grow.png"
              alt="ilustração"
              width={600}
              height={400}
              className="rounded-lg object-contain w-full h-auto"
            />
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 p-6 space-y-4 order-2 md:order-2">
            <h3 className="text-xl font-bold text-green-700 border-b border-green-100 pb-3">
              O que ficou? O que segue? O que reverbera?
            </h3>
            
            <p className="text-slate-700 leading-relaxed">
              É nesse momento que os conteúdos escolares ganham outra espessura: não só o que se aprendeu, mas como se aprendeu. O grupo pode resgatar as habilidades desenvolvidas ao longo do caminho, colaboração, autonomia, escuta, organização, e nomeá-las.
            </p>
            
            <div className="bg-white rounded-lg p-4 border border-green-100 shadow-sm">
              <p className="text-slate-700 leading-relaxed">
                Ao fazer isso, a turma aprende também a reconhecer seus próprios processos de crescimento.
              </p>
            </div>
          </div>

        </div>

        {/* E como isso chega a outras pessoas? */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-6 space-y-4">
            <h3 className="text-xl font-bold text-purple-700 border-b border-purple-100 pb-3">
              E como isso chega a outras pessoas?
            </h3>
            
            <p className="text-slate-700 leading-relaxed">
              A comunicação sobre o projeto (com outras turmas, com as famílias, com a comunidade escolar) é mais do que um relatório ou uma postagem: é uma forma de ampliar o impacto do que foi feito.
            </p>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
              <p className="text-slate-700 leading-relaxed">
                Ao compartilhar, a turma reafirma o valor do percurso e contribui para inspirar novas práticas.
              </p>
            </div>
          </div>

          {/* Imagem ao lado direito */}
          <div className="w-full flex justify-center">
            <Image 
              src="/manda.png"
              alt="ilustração"
              width={600}
              height={400}
              className="rounded-lg object-contain w-full h-auto"
            />
          </div>

        </div>

        {/* Conclusão destacada */}
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200 p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-slate-700 text-xl leading-relaxed italic font-medium">
              <em>Ou seja: depois da culminância, vem a continuidade.</em>
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mt-4">
              Não a repetição do que foi feito, mas a expansão do que foi aprendido.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RegistroCulm;
