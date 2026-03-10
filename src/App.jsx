import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Instagram, Mail, ChevronRight } from "lucide-react";
import logoImg from "./assets/logo.png";
import portraitImg from "./assets/portrait.webp";
import rectangleBg from "./assets/Rectangle.webp";

// ==========================================
// 1. DONNÉES
// ==========================================
const VIDEO_DATA = [
  {
    id: 1,
    title: "Vacances à Marseille",
    category: "Lifestyle",
    thumbnail: "https://img.youtube.com/vi/qJaemAhXS_w/maxresdefault.jpg",
    embedId: "qJaemAhXS_w",
    description: "La première partie de mes vacances à Marseille.",
  },
  {
    id: 2,
    title: "Vacances à Marseille partie 2",
    category: "Court-métrage",
    thumbnail: "https://img.youtube.com/vi/LSEzDWj78sU/maxresdefault.jpg",
    embedId: "LSEzDWj78sU",
    description: "La deuxième partie de mes vacances à Marseille.",
  },
  {
    id: 3,
    title: "Marguerite",
    category: "Court-métrage",
    thumbnail: "https://img.youtube.com/vi/lIivWIiz3fk/maxresdefault.jpg",
    embedId: "lIivWIiz3fk",
    description: "Qui suis-je ? Et quelles sont mes passions ?",
  },
  {
    id: 4,
    title: "L'Engagement",
    category: "Court-métrage",
    thumbnail: "https://img.youtube.com/vi/4sH_oDOGZkE/maxresdefault.jpg",
    embedId: "4sH_oDOGZkE",
    description: "Mini court-métrage sur l'engagement.",
  },
  {
    id: 5,
    title: "Entrainement de boxe",
    category: "Sport",
    thumbnail: "https://img.youtube.com/vi/GhZ1I_L__5E/maxresdefault.jpg",
    embedId: "GhZ1I_L__5E",
    description: "Entrainement de boxe.",
  },
  {
    id: 6,
    title: "Mariage de Noehlla et Richie",
    category: "Événementiel",
    thumbnail: "https://img.youtube.com/vi/dO98IxSqwpk/maxresdefault.jpg",
    embedId: "dO98IxSqwpk",
    description: "",
  },
];

const CATEGORIES = [
  "Tous",
  "Lifestyle",
  "Court-métrage",
  "Événementiel",
  "Sport",
];

// ==========================================
// 2. COMPOSANTS D'INTERFACE
// ==========================================

const Navbar = ({ scrolled }) => (
  <nav
    className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/90 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-8"}`}
  >
    <div className="container mx-auto px-6 flex justify-between items-center">
      <motion.div
        className="flex items-center gap-3 group cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={logoImg} alt="Sevenart Logo" className="h-14 w-auto" />
        {/* <span className="text-lg font-bold tracking-widest uppercase">Sevenart</span> */}
      </motion.div>
      <div className="flex gap-4 md:gap-8 text-xs md:text-sm font-medium uppercase tracking-widest">
        <motion.a
          href="#projets"
          className="hover:text-cyan-400 transition-colors"
          whileHover={{ y: -2 }}
        >
          Projets
        </motion.a>
        <motion.a
          href="#contact"
          className="hover:text-cyan-400 transition-colors"
          whileHover={{ y: -2 }}
        >
          Contact
        </motion.a>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  // ========================================
  // 📍 POSITION DU PORTRAIT - AJUSTEZ ICI
  // ========================================
  const portraitPosition = {
    right: "-80px",
    bottom: "0px", // Distance du bord bas (ex: '0px', '20px', '-30px')
    height: "100vh", // Hauteur du portrait (ex: '80vh', '600px', '90vh')
    maxWidth: "700px", // Largeur max (ex: '500px', '600px', '700px')
  };
  // ========================================

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden h-screen">
      {/* Background noir */}
      <div className="absolute inset-0 z-0 bg-[#070707]"></div>

      {/* Rectangle cyan importé derrière le portrait - Desktop uniquement (>= 1024px) */}
      <div className="absolute top-0 right-0 h-full z-0 hidden lg:flex items-center justify-end">
        <img
          src={rectangleBg}
          alt=""
          className="h-full w-auto object-cover"
          style={{ opacity: 1, transform: "scale(1.5)" }}
        />
      </div>

      {/* Cercles statiques en blur pour mobile et tablette (< 1024px) */}
      <div className="absolute inset-0 z-0 block lg:hidden overflow-hidden">
        {/* Cercle cyan principal */}
        <div
          className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-cyan-500"
          style={{ 
            filter: "blur(80px)", 
            opacity: 0.3,
            top: "20%", 
            right: "10%" 
          }}
        />

        {/* Cercle cyan clair secondaire */}
        <div
          className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-cyan-300"
          style={{ 
            filter: "blur(70px)", 
            opacity: 0.25,
            bottom: "30%", 
            left: "15%" 
          }}
        />
      </div>

      {/* Grand "01" avec EFFET NÉON cyan lumineux - Desktop uniquement (>= 1024px) */}
      <div
        className="absolute bottom-0 left-0 z-0 overflow-hidden w-full hidden lg:block"
        style={{ transform: "translateY(45%)" }}
      >
        <div className="container mx-auto px-6">
          <span
            className="text-[8rem] sm:text-[12rem] md:text-[18rem] lg:text-[24rem] font-black leading-none block"
            style={{
              color: "#22d3ee",
              textShadow:
                "0 0 20px rgba(6, 182, 212, 1), 0 0 40px rgba(6, 182, 212, 0.8), 0 0 60px rgba(6, 182, 212, 0.6), 0 0 80px rgba(6, 182, 212, 0.4), 0 0 100px rgba(6, 182, 212, 0.2)",
              opacity: 0.07,
              filter: "blur(0.5px)",
            }}
          >
            01
          </span>
        </div>
      </div>

      <div className="relative min-h-screen lg:h-screen container mx-auto px-6 pt-64 pb-12 md:py-20 z-10 flex flex-col md:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-12">
        {/* Bloc texte (Gauche) */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tighter uppercase text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            STEVEN TERNEUS
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-cyan-400 mb-3 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            L'art au-delà du regard
          </motion.h2>
          <motion.p
            className="text-zinc-400 text-[0.65rem] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-8 lg:mb-16 font-medium px-4 lg:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            PHOTOGRAPHE & VIDÉASTE DE TOUS VOS ÉVÉNEMENTS
          </motion.p>

          {/* Bloc Contact avec trait vertical cyan fin - tout sur une ligne */}
          <motion.div
            className="flex items-center gap-6 pl-0 lg:pl-6 mb-6 lg:mb-12 relative justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {/* Trait vertical cyan fin - caché sur mobile et tablette */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-500 hidden lg:block"></div>

            {/* Instagram et Email - responsive */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3 text-zinc-300 hover:text-cyan-400 transition-colors">
                <Instagram size={20} />
                <a
                  href="https://instagram.com/sevenart.ts"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base"
                >
                  @sevenart.ts
                </a>
              </div>

              <div className="flex items-center gap-3 text-zinc-300 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
                <a href="mailto:sevenart.ts@gmail.com" className="text-base">
                  sevenart.ts@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.a
              href="#projets"
              className="px-8 md:px-16 py-4 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 group w-full md:w-auto md:min-w-[280px] lg:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Découvrir{" "}
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </motion.div>
        </div>

        {/* Portrait à droite - ajustable avec portraitPosition - Desktop uniquement (>= 1024px) */}
        <motion.div
          className="absolute z-20 hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          style={{
            right: portraitPosition.right,
            bottom: portraitPosition.bottom,
            transform: "scale(1.15)",
          }}
        >
          <img
            src={portraitImg}
            alt="Portrait Steven Terneus"
            className="grayscale"
            style={{
              height: portraitPosition.height,
              width: "auto",
              maxWidth: portraitPosition.maxWidth,
              objectFit: "contain",
              objectPosition: "bottom right",
              display: "block",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

const PortfolioGallery = ({ filter, setFilter, videos, onVideoSelect }) => (
  <section id="projets" className="py-24 bg-zinc-950">
    <div className="container mx-auto px-6">
      <motion.div
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Projets Réalisés
          </h2>
          <div className="h-1 w-20 bg-cyan-500"></div>
        </div>
        <div className="flex flex-wrap gap-4">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm font-semibold transition-all border-b-2 ${filter === cat ? "border-cyan-500 text-cyan-400" : "border-transparent text-zinc-500 hover:text-zinc-300"}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <motion.div
            key={video.id}
            className="group relative cursor-pointer overflow-hidden rounded-xl aspect-video bg-zinc-900 border border-zinc-800 hover:border-zinc-600"
            onClick={() => onVideoSelect(video)}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">
                {video.category}
              </span>
              <h3 className="text-xl font-bold mb-2">{video.title}</h3>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center">
                  <Play size={14} className="text-zinc-950 fill-zinc-950" />
                </div>
                <span>Lecture</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.button
          onClick={onClose}
          className="absolute top-8 right-8 text-white hover:text-cyan-400 transition-colors p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X size={40} />
        </motion.button>
        <motion.div
          className="w-full max-w-6xl"
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="aspect-video bg-black shadow-2xl relative">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-6 text-left">
            <h2 className="text-3xl font-bold mb-2 tracking-tighter">
              {video.title}
            </h2>
            <p className="text-zinc-400 max-w-2xl">{video.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-zinc-900 py-20 border-t border-zinc-800">
    <div className="container mx-auto px-6 text-center">
      <motion.h2
        className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Parlons <span className="text-cyan-500">Projet</span>
      </motion.h2>

      <motion.a
        href="mailto:sevenart.ts@gmail.com"
        className="inline-flex items-center gap-4 text-2xl md:text-3xl font-light hover:text-cyan-400 transition-colors border-b border-zinc-700 pb-2 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{ y: -2 }}
      >
        sevenart.ts@gmail.com
      </motion.a>
      <motion.div
        className="flex justify-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.a
          href="https://instagram.com/sevenart.ts"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Instagram
            className="text-zinc-500 hover:text-cyan-400 cursor-pointer transition-colors"
            size={32}
          />
        </motion.a>
        <motion.a
          href="mailto:sevenart.ts@gmail.com"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail
            className="text-zinc-500 hover:text-cyan-400 cursor-pointer transition-colors"
            size={32}
          />
        </motion.a>
      </motion.div>
      <div className="mt-16 text-zinc-600 text-sm">
        © {new Date().getFullYear()} Sevenart - L'art au-delà du regard.
      </div>
    </div>
  </footer>
);

// ==========================================
// 3. COMPOSANT PRINCIPAL (App)
// ==========================================

const App = () => {
  const [filter, setFilter] = useState("Tous");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredVideos =
    filter === "Tous"
      ? VIDEO_DATA
      : VIDEO_DATA.filter((v) => v.category === filter);

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-cyan-500/30">
      <Navbar scrolled={scrolled} />

      <Hero />

      <PortfolioGallery
        filter={filter}
        setFilter={setFilter}
        videos={filteredVideos}
        onVideoSelect={setSelectedVideo}
      />

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      <Footer />
    </div>
  );
};

export default App;
