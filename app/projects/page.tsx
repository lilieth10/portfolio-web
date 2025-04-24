'use client';

import React from 'react';
import { motion } from "framer-motion";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    title: "Novely Book",
    description: "Aplicación web para compartir y descubrir libros. Los usuarios pueden crear perfiles, compartir sus lecturas favoritas y conectarse con otros amantes de la lectura.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    image: "/novelyBook.png",
    demoUrl: "https://novelty-books.vercel.app//",
    githubUrl: "https://github.com/lilieth10/Novely-Book"
  },
  {
    title: "Health Matters",
    description: "Sistema de gestión médica que permite a los profesionales de la salud llevar un registro de pacientes, citas y tratamientos de manera eficiente.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    image: "/healthMatters.png",
    demoUrl: "https://health-matters.vercel.app/",
    githubUrl: "https://github.com/lilieth10/HealthMatters"
  },
  {
    title: "Pokedex",
    description: "Aplicación web que muestra información detallada de Pokémon utilizando la PokeAPI. Incluye búsqueda, filtrado y detalles de cada Pokémon.",
    technologies: ["React", "TypeScript", "PokeAPI", "CSS Modules"],
    image: "/pokedex.png",
    demoUrl: "https://pokedex-khaki-theta.vercel.app/",
    githubUrl: "https://github.com/lilieth10/Pokedex"
  },
  {
    title: "Mi portafolio",
    description: "Portafolio personal desarrollado con Next.js y Tailwind CSS, mostrando mis proyectos y habilidades como desarrolladora.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/lili.png",
    demoUrl: "https://portfolio-web-liart-alpha.vercel.app/",
    githubUrl: "https://github.com/lilieth10/portfolio-web"
  },
  {
    title: "Rumbo",
    description: "Red social para viajeros donde pueden compartir sus experiencias, conectarse con otros viajeros y descubrir nuevos destinos. Incluye funcionalidades como feed de publicaciones, sistema de seguidores, comentarios y perfiles personalizados.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Cloudinary"],
    image: "/registro.png",
    githubUrl: "https://github.com/lilieth10/equipo-c24-76-ft-mobile"
  },
  {
    title: "BeexSports App",
    description: "Aplicación móvil desarrollada con React Native que permite a los usuarios gestionar su perfil deportivo, buscar complejos deportivos, y participar en partidos adaptados a su nivel.",
    technologies: ["React Native", "TypeScript", "React Navigation", "AsyncStorage", "Context API"],
    image: "/beexsport.png",
    githubUrl: "https://github.com/lilieth10/Beex-sports"
  },
  {
    title: "Tienda Secreta",
    description: "Elegante tienda en línea construida con Next.js 14, TypeScript y Tailwind CSS. Ofrece una experiencia de compra moderna con funcionalidades completas de carrito de compras.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"],
    image: "/tiendasecreta.png",
    demoUrl: "https://tienda-secreta-t1dc.vercel.app/",
    githubUrl: "https://github.com/lilieth10/tiendaSecreta"
  },
  {
    title: "Hotel Boutique",
    description: "Hotel Boutique Mendoza es un proyecto personal diseñado para mostrar mis habilidades en desarrollo web utilizando Next.js, TypeScript y Ant Design. Este hotel ficticio presenta una experiencia de usuario intuitiva y moderna, con un diseño adaptado a dispositivos móviles. El sitio incluye secciones como el catálogo de habitaciones, servicios, y información de contacto, todo con soporte multiidioma (español e inglés).",
    technologies: ["Next.js", "TypeScript", "Ant Design"],
    image: "/hotel.png",
    demoUrl: "https://hotel-reserva.vercel.app/",
    githubUrl: "https://github.com/lilieth10/Hotel-reserva"
  }
];

export default function Projects() {
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
            Mis Proyectos
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Aquí puedes ver algunos de mis proyectos más recientes. Cada uno representa un desafío único y una oportunidad para aprender y crecer como desarrolladora.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/90 backdrop-blur-sm border border-border/50 p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-transform duration-300 transform hover:scale-105 h-full flex flex-col">
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  {project.demoUrl && (
                    <Button
                      asChild
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        Demo
                      </a>
                    </Button>
                  )}
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary/10"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}