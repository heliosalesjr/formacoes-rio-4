'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { FaPlus, FaArrowLeft } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const MARubrica = () => {

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('rubrica');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);

  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      ref={ref} 
      id="rubrica"
      layout
      className="scroll-mt-20 relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl"
      transition={{ duration: 1.2 }}
    >
      {/* Imagem e camada escura */}
      <AnimatePresence>
        {!expanded && (
          <>
            <motion.div
              className="absolute inset-0 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/rubrica.jpg"
                alt="Aprendizagem baseada em projetos"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-blue-800/70 z-10" />
            </motion.div>

            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
            >
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Lembrando da rubrica

                </h2>
                <p className='text-lg'>
                    <strong>Antes de entrarmos na autoavaliação, vale retomar uma ferramenta apresentada no módulo anterior: a rubrica.
                    </strong>A rubrica é uma tabela com critérios claros que descreve o que se espera em diferentes níveis de desempenho. Quando usada com os estudantes, ela torna mais visível o que está sendo avaliado e ajuda cada um a compreender com mais clareza onde está e o que ainda pode desenvolver.

                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Texto alternativo com fundo azul */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white bg-blue-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="max-w-3xl">

              <div className="text-base md:text-lg font-medium text-white pb-8 space-y-4">
                <p className='font-bold'>
                    Quando falamos de avaliação formativa e reflexiva, a rubrica pode ser uma ferramenta muito útil.
                </p>

                <ul className="list-disc list-inside space-y-2">
                    <li>
                    <span className="font-semibold">Para o(a) professor(a):</span> a rubrica funciona como um guia para observar o que os alunos já conseguem fazer e o que ainda estão desenvolvendo. Ela ajuda a acompanhar o progresso sem depender apenas de notas ou provas.
                    </li>
                    <li>
                    <span className="font-semibold">Para os estudantes:</span> a rubrica funciona como um mapa: mostra onde estão no processo de aprendizagem e o que ainda precisam desenvolver. Isso facilita na hora de refletirem sobre o próprio desempenho e pensarem em como avançar.
                    </li>
                </ul>

                <p className='font-bold pt-4'>
                    Isso é especialmente importante em momentos de autoavaliação ou quando os alunos avaliam colegas, temas que vamos ver a seguir.
                </p>
                </div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão flutuante com efeito bounce */}
      <motion.button
        onClick={() => setExpanded(!expanded)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-4 right-4 z-30 bg-white text-blue-600 hover:bg-blue-100 rounded-full p-3 shadow-xl transition-all"
        aria-label={expanded ? 'Voltar' : 'Expandir'}
      >
        {expanded ? <FaArrowLeft className="text-lg" /> : <FaPlus className="text-lg" />}
      </motion.button>
    </motion.div>
  )
}

export default MARubrica