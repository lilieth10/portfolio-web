'use client';

import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
    demoUrl: "https://lilieth-portfolio.vercel.app/",
    githubUrl: "https://github.com/lilieth10/portfolio-web.git"
  },
  {
    title: "Rumbo",
    description: "Red social para viajeros donde pueden compartir sus experiencias, conectarse con otros viajeros y descubrir nuevos destinos. Incluye funcionalidades como feed de publicaciones, sistema de seguidores, comentarios y perfiles personalizados.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Cloudinary"],
    image: "/registro.png",
    githubUrl: "https://github.com/lilieth10/Rumbo"
  }
];

export default function Projects() {
  return (
    <>
      <Navbar />
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
                <Card className="bg-black/50 backdrop-blur-lg border border-gray-800 p-6 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-transform duration-300 transform hover:scale-105 h-full flex flex-col">
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    {project.demoUrl && (
                      <Button
                        asChild
                        className="flex-1 bg-purple-500 hover:bg-purple-600 text-white"
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          Demo
                        </a>
                      </Button>
                    )}
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-purple-500 text-purple-500 hover:bg-purple-500/10"
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
    </>
  );
}