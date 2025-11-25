"use client";
import { useEffect, useRef } from 'react';
import React from 'react'
import { useSidebar } from '@/contexts/SidebarContext';

const MAHabilidades = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('habilidades-autoavaliacao');
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
    <div ref={ref} id="habilidades-autoavaliacao" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-12">
      
      {/* Título Principal */}
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-4xl font-bold text-center leading-tight">
            <span className="text-slate-600">Habilidades Desenvolvidas</span><br />
            <span className="text-slate-600">na </span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Autoavaliação</span>
            <span className="text-slate-600"> e Relação</span><br />
            <span className="text-slate-600">com a </span>
            <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Vida Profissional</span>
          </h1>
        </div>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-tl-lg shadow-lg">
                <h2 className="text-xl font-bold text-center">Autoavaliação</h2>
              </th>
              <th className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-4 rounded-tr-lg shadow-lg">
                <h2 className="text-xl font-bold text-center">Vida Profissional</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Linha 1 */}
            <tr>
              <td className="p-4 align-top">
                <div className="bg-white rounded-lg p-5 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Reflexão crítica sobre o próprio desempenho</h4>
                    </div>
                  </div>
                </div>
              </td>
              <td className="p-4 align-top">
                <div className="bg-white rounded-lg p-5 shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-700 mb-2">Identificar pontos de melhoria e avaliar continuamente</h4>
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            {/* Linha 2 */}
            <tr>
              <td className="p-4 align-top">
                <div className="bg-white rounded-lg p-5 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Reconhecimento de pontos fortes e fracos</h4>
                    </div>
                  </div>
                </div>
              </td>
              <td className="p-4 align-top">
                <div className="bg-white rounded-lg p-5 shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-700 mb-2">Saber no que se destaca e buscar capacitação</h4>
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            {/* Linha 3 */}
            <tr>
              <td className="p-4 align-top">
                <div className="bg-white rounded-lg p-5 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Comprometimento com metas e evolução pessoal</h4>
                    </div>
                  </div>
                </div>
              </td>
              <td className="p-4 align-top">
                <div className="bg-white rounded-lg p-5 shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-400 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-700 mb-2">Profissionais comprometidos são valorizados, pois demonstram responsabilidade com seu próprio desenvolvimento</h4>
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            {/* Linha 4 */}
            <tr>
              <td className="p-4 align-top">
                <div className="bg-white rounded-lg p-5 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Desenvolvimento da autonomia e protagonismo</h4>
                    </div>
                  </div>
                </div>
              </td>
              <td className="p-4 align-top">
                <div className="bg-white rounded-lg p-5 shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-700 mb-2">A autonomia é cada vez mais valorizada em equipes ágeis e ambientes que exigem iniciativa e autogestão</h4>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MAHabilidades