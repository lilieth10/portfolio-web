'use client';

import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Crear el enlace de mailto
    const mailtoLink = `mailto:liliethramirez91@gmail.com?subject=Consulta de ${name}&body=Nombre: ${name}%0D%0ACorreo: ${email}%0D%0AMensaje: ${message}`;

    // Redirigir al usuario a su cliente de correo
    window.location.href = mailtoLink;

    // Mostrar mensaje de éxito
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarme. Te responderé pronto.",
    });

    // Resetea el formulario
    e.currentTarget.reset();
    setIsSubmitting(false);
  };

  const ContactInfo = ({ icon: Icon, title, content, link }: { icon: any; title: string; content: string; link?: string }) => (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="bg-black/50 backdrop-blur-lg border border-gray-800 p-6 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
        <div className="flex items-center mb-4">
          <Icon className="w-6 h-6 text-purple-400 mr-3" />
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
            {content}
          </a>
        ) : (
          <p className="text-gray-400">{content}</p>
        )}
      </Card>
    </motion.div>
  );

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
              Contáctame
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              ¿Tienes un proyecto en mente? No dudes en contactarme. Estoy aquí para ayudarte a hacer realidad tus ideas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-black/50 backdrop-blur-lg border border-gray-800 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white mb-2">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Correo Electrónico</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Tu correo"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Mensaje</label>
                    <textarea
                      name="message"
                      required
                      placeholder="Escribe tu mensaje aquí"
                      rows={6}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors duration-300 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg transition-colors duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <ContactInfo
                icon={FaEnvelope}
                title="Email"
                content="liliethramirez91@gmail.com"
                link="mailto:liliethramirez91@gmail.com"
              />
              <ContactInfo
                icon={FaGithub}
                title="GitHub"
                content="github.com/lilieth10"
                link="https://github.com/lilieth10"
              />
              <ContactInfo
                icon={FaLinkedin}
                title="LinkedIn"
                content="linkedin.com/in/lilieth-chacón"
                link="https://www.linkedin.com/in/lilieth-chacón/"
              />
              <ContactInfo
                icon={FaMapMarkerAlt}
                title="Ubicación"
                content="San Rafael, Mendoza, Argentina"
              />
              <ContactInfo
                icon={FaWhatsapp}
                title="WhatsApp"
                content="Enviar mensaje"
                link="https://wa.me/5491137596135"
              />
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}