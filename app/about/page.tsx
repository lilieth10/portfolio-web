"use client";

import React from 'react';
import { motion } from "framer-motion";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Card } from "@/components/ui/card";
import { FaCode, FaLaptopCode, FaMobileAlt, FaServer } from "react-icons/fa";

export default function About() {
  const skills = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description: "React, Next.js, Vue.js, Angular, TypeScript, Tailwind CSS, HTML5, CSS3"
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description: "Node.js, Nest.js, Express, MongoDB, PostgreSQL, RESTful APIs, Supabase, Firebase"
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Development",
      description: "Flutter, React Native, Responsive Design"
    },
    {
      icon: FaLaptopCode,
      title: "Herramientas & Otros",
      description: "Git, GitHub, Docker, AWS, Testing"
    }
  ];

  return (
    <main className="min-h-screen w-full pt-20">
      <ParticlesBackground />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6">
            Sobre Mí
          </h1>
          <p className="text-gray-700 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            Soy una desarrolladora Full Stack con una sólida formación en desarrollo web y móvil moderno, y una pasión por crear soluciones tecnológicas innovadoras. 
            Mi experiencia abarca desde el desarrollo frontend con React y Next.js, hasta aplicaciones móviles con Flutter, y la implementación de APIs robustas con Node.js , mongoDB y Supabase. 
            Me destaco por mi capacidad para trabajar en equipo, mi enfoque en la calidad del código y mi compromiso con el aprendizaje continuo en el dinámico mundo del desarrollo de software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/90 dark:bg-black/50 backdrop-blur-lg border border-gray-200 dark:border-gray-800 p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Mi Historia</h2>
              <p className="text-gray-700 dark:text-gray-400 mb-4">
                Mi viaje en el desarrollo de software comenzó con una curiosidad por crear experiencias digitales 
                que impacten positivamente en la vida de las personas. con el pasar del tiempo, he desarrollado 
                una sólida experiencia en el desarrollo full stack, trabajando con tecnologías modernas y 
                mejores prácticas de la industria.
              </p>
              <p className="text-gray-700 dark:text-gray-400">
                Me apasiona aprender nuevas tecnologías y mantenerme actualizada con las últimas tendencias 
                en desarrollo web. Mi enfoque se centra en escribir código limpio, mantenible y escalable, 
                siempre priorizando la experiencia del usuario y la calidad del producto final.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/90 dark:bg-black/50 backdrop-blur-lg border border-gray-200 dark:border-gray-800 p-6 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <skill.icon className="w-6 h-6 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.title}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-400">{skill.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}