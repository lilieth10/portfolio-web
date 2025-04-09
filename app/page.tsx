'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-2 border-purple-500/30 shadow-lg shadow-purple-500/20">
            <Image
              src="/lili.png"
              alt="Lilieth Chacón"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <h1 className="gradient-text mb-6">
            Desarrolladora full stack
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
          Hola Aqui! 👋🏻
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          Soy Lilieth Chacon! <br />
PERMÍTANME PRESENTARME. <br />

Me enamoré de la programación y al menos he aprendido algo, creo... 🤷‍♂️ <br />
Como desarrolladora Full Stack, me dedico a crear soluciones web y móviles innovadoras que ofrecen experiencias de usuario excepcionales. Mi enfoque combina diseño intuitivo con funcionalidad robusta, utilizando tecnologías modernas como React, Flutter, Node.js y Next.js. Me apasiona transformar ideas en aplicaciones dinámicas y escalables, ya sea para web o móvil, siempre priorizando la calidad del código y las mejores prácticas de desarrollo.


          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/projects">
              <Button className="button-primary">
                Ver Proyectos
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10">
                Contactar
              </Button>
            </Link>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/lilieth-chacón/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/lilieth10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:liliethramirez91@gmail.com"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}