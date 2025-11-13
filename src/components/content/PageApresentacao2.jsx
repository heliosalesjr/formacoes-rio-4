"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react';
import Image from 'next/image';

const PageApresentacao2 = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('ao-final');
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
    <div
      ref={ref}
      id="ao-final"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100"
    >
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        {/* Imagem - 1/3 da largura e altura total */}
        <div className="relative w-full h-full min-h-[300px] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/check.jpg"
            alt="Imagem ilustrativa"
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Conteúdo - 2/3 da largura */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Ao final deste módulo, você será capaz de:
            </h2>
          </div>

          <p className="text-slate-700 text-lg leading-relaxed">
            Entender o papel da avaliação na ABP;
          </p>
          <p className="text-slate-700 text-lg leading-relaxed">
            Planejar estratégias de autoavaliação e avaliação entre pares;
          </p>
          <p className="text-slate-700 text-lg leading-relaxed">
            Organizar a culminância do projeto com base nas aprendizagens desenvolvidas;
          </p>
          <p className="text-slate-700 text-lg leading-relaxed">
            Usar registros como apoio à avaliação e à devolutiva final.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default PageApresentacao2;
