"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

import React from 'react'
import { GiTeacher, GiToolbox, GiTrophyCup } from 'react-icons/gi'

const objetivos = [
  {
    icon: <GiTeacher size={32} className="text-blue-600" />,
    
    description: 'Mais do que uma “entrega final”, a culminância é uma chance de reconhecer o que foi construído juntos, de dar visibilidade ao trabalho feito e de fechar o ciclo com clareza e sentido.'
  },
  {
    icon: <GiToolbox size={32} className="text-red-500" />,
    
    description: 'Por fim, vamos retomar os registros, como o Diário de Bordo e o Padlet, e ver como eles ajudam a acompanhar o desenvolvimento dos estudantes, e da prática docente também.'
  },
  {
    icon: <GiTrophyCup size={32} className="text-green-500" />,
    
    description: 'A proposta aqui é justamente isso: olhar para trás entendendo o que foi feito; e olhar pra frente já pensando no que pode continuar a partir disso.'
  },
  
]

const Modulo3Objetivos = () => {

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('modulo-3-objetivos');
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
    <div ref={ref} id="modulo-3-objetivos" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100">
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
        <h2 className="text-4xl font-bold text-center text-slate-700">
          Objetivos do Módulo 4
        </h2>
        
        <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-slate-500 rounded-full"></div>
        
      </div>
      <p className='text-center text-lg my-4'>Bons estudos, e seguimos juntos.</p>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {objetivos.map((obj, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center "
          >
            <div className="mb-4 p-3 rounded-full bg-slate-50">{obj.icon}</div>
            <h3 className="text-lg font-bold text-slate-800 mb-3">{obj.title}</h3>
            <p className="text-slate-700 leading-relaxed">{obj.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Modulo3Objetivos