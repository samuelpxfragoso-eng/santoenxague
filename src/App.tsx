import React, { useState, useEffect } from 'react';
import LaundryMiniGame from './components/LaundryMiniGame';
import StoreMap from './components/StoreMap';
import { 
  Menu, 
  X, 
  Clock, 
  MapPin, 
  Wifi, 
  Smartphone, 
  CheckCircle2, 
  Instagram, 
  MessageCircle, 
  ArrowRight,
  Star,
  Wind,
  Droplets,
  Zap,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const LOGO_IMG_URL = "https://res.cloudinary.com/snrseezc/image/upload/v1784145684/Captura_de_tela_2026-03-05_205121_vfvvlq.png";
const HERO_SIDE_VIDEO_URL = "https://res.cloudinary.com/snrseezc/video/upload/v1784145653/santo_enxague_grook_ye0s6d.mp4";
const ABOUT_IMG_URL = "https://res.cloudinary.com/snrseezc/image/upload/v1784145649/santo_exague_grok_lqsuxf.jpg";
const EDREDON_IMG_URL = "https://res.cloudinary.com/snrseezc/image/upload/v1784147039/WhatsApp_Image_2026-07-15_at_5.07.24_PM_1_abf7fm.jpg";
const TESTIMONIALS_VIDEO_URL = "https://res.cloudinary.com/snrseezc/video/upload/v1784145653/grok-video-9eeefebc-d8bd-4a27-beda-28d407a22b63_kehc0h.mp4";

const INSTAGRAM_MEDIA = [
  { type: "video", src: "https://res.cloudinary.com/snrseezc/video/upload/v1784147073/SnapInsta.to_AQPy6wU6spxhCl16hggGw--fK5EemCAWZN4d4hL2K8h-ynvP1VW1sNn2UWmXZ_pzTUvQ7SP3HgVx0ptrGZKmmcblTMcNXjkEa0BGkeU_zdeof5.mp4" },
  { type: "video", src: "https://res.cloudinary.com/snrseezc/video/upload/v1784147070/SnapInsta.to_AQPIMc7XgwwFytMF05D7kFLP_W3fv-ZWJ4CJYUPX1MuDfyMRBO9hyN9YkZsSeQMuxYAIv7Al28ZpA3MTLhTjQH1NH1vot8xadjDzlfs_xylp73.mp4" },
  { type: "video", src: "https://res.cloudinary.com/snrseezc/video/upload/v1784147064/SnapInsta.to_AQN9D8BD5UMltzjObRfRza2YppVf6c6xMXb6f9XA6dHofrlqbF2yYLXrmuW4rJMKhiRItCBM29QIkI_FQQhIBpNtrU5Pr3g-RLENs6A_ulnkvz.mp4" },
  { type: "video", src: "https://res.cloudinary.com/snrseezc/video/upload/v1784147062/SnapInsta.to_AQNqzHsA1TPtcir2dk_z6oNs56pf6qGYskwg2HjxyO2dTDZbBSYvcYNBa6NN9FU0pw_ccAXAVTT7Q95GztZfT7lAre-HYNBf8-FQaNU_nk0onf.mp4" },
  { type: "video", src: "https://res.cloudinary.com/snrseezc/video/upload/v1784147040/SnapInsta.to_AQMO108VR33IwwkrKq-O-hyLNbCf_4ciGBEb3ChjS_7HNgzrAEmDsOMoPZmhLVEdH-RUoZWoSRHdZKDQhR7bZlO1yGYC9ZWNyKkSpGA_far1wd.mp4" },
  { type: "image", src: "https://res.cloudinary.com/snrseezc/image/upload/v1784147041/WhatsApp_Image_2026-07-15_at_5.07.24_PM_jwzqcm.jpg" },
  { type: "image", src: "https://res.cloudinary.com/snrseezc/image/upload/v1784147039/WhatsApp_Image_2026-07-15_at_5.07.24_PM_1_abf7fm.jpg" },
  { type: "image", src: "https://res.cloudinary.com/snrseezc/image/upload/v1784147038/WhatsApp_Image_2026-07-15_at_5.07.25_PM_g6wqsl.jpg" },
  { type: "image", src: "https://res.cloudinary.com/snrseezc/image/upload/v1784145685/Captura_de_tela_2026-03-02_130412_zt8byy.png" },
  { type: "image", src: "https://res.cloudinary.com/snrseezc/image/upload/v1784145685/Captura_de_tela_2026-03-02_130423_izuige.png" }
];

const Logo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <motion.div
    animate={{ y: [0, -3, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className={`relative ${className} [mask-image:linear-gradient(to_bottom,black,transparent)]`}
  >
    <img src={LOGO_IMG_URL} alt="Logo" className="w-full h-full object-contain" />
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Estrutura', href: '#about' },
    { name: 'Serviços', href: '#how-it-works' },
    { name: 'Valores', href: '#pricing' },
    { name: 'Localização', href: '#units' },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brand-purple/20 selection:text-brand-purple relative">
      <div className="bg-purple-900 text-white text-center py-2 text-sm font-medium animate-pulse shadow-[0_0_15px_rgba(168,85,247,0.7)] border-b border-purple-500">
        Santo Enxágue: Lavanderia Self-Service em Uruguaiana | Aberto 06h às 22h | Conforto e Tecnologia
      </div>
      <nav className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo className="w-10 h-10 md:w-12 md:h-12" />
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => <a key={link.name} href={link.href} className="text-sm font-medium hover:text-brand-purple">{link.name}</a>)}
          </div>
          <a href="https://wa.me/5555991371968" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white px-6 py-2 rounded-xl text-sm font-semibold hover:bg-green-600">Contato</a>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 bg-purple-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              A experiência de lavanderia express em <span className="text-purple-600">Uruguaiana</span> que <span className="text-purple-600">você merece</span>.
            </h1>
            <p className="text-xl mb-8 text-gray-700">Tecnologia de ponta, conforto total e praticidade para o seu dia a dia.</p>
            <a href="#units" className="bg-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-purple-700">Ver Unidades</a>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-2xl">
            <video src={HERO_SIDE_VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img src={ABOUT_IMG_URL} alt="Sobre" className="rounded-[2rem] shadow-2xl w-full" />
          <div>
            <h2 className="text-4xl font-bold mb-6">Muito mais que uma lavanderia.</h2>
            <p className="text-lg mb-10 text-gray-700">Na Santo Enxágue, transformamos a tarefa de lavar roupa em um momento de conveniência. Enquanto nossas máquinas de alta tecnologia cuidam das suas peças, você aproveita nosso espaço climatizado. Oferecemos um ambiente seguro, limpo e extremamente prático para sua rotina.</p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Zap className="text-cyan-500" />, title: "Tecnologia", desc: "Máquinas modernas de lavagem e secagem rápida." },
                { icon: <Wifi className="text-purple-500" />, title: "Wi-Fi Grátis", desc: "Conexão de alta velocidade para trabalhar enquanto espera." },
                { icon: <Wind className="text-blue-500" />, title: "Climatizado", desc: "Ambiente pensado para o seu conforto térmico." },
                { icon: <Smartphone className="text-green-500" />, title: "Self-Service", desc: "Processo totalmente intuitivo e prático." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="mb-2">{item.icon}</div>
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto bg-gray-50 rounded-[3rem] my-12">
        <div className="px-8">
          <h2 className="text-4xl font-bold mb-6">Lavagem de Edredons e Cobertores</h2>
          <p className="text-xl mb-10 text-gray-700">Equipamentos de alta capacidade para lavar e secar suas peças mais pesadas com perfeição. Dica: Para maior durabilidade, lave seus edredons mensalmente e evite o excesso de sabão!</p>
          <a href="https://wa.me/5555991371968" className="bg-purple-600 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-700">Dicas de Lavagem</a>
        </div>
        <img src={EDREDON_IMG_URL} alt="Edredons" className="rounded-[2rem] shadow-2xl" />
      </section>

      <section id="how-it-works" className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Como Funciona o Nosso Processo</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Nosso sistema foi desenhado para ser intuitivo e rápido. Em apenas 4 passos simples, suas roupas ficam limpas e secas, prontas para o seu dia a dia. Acompanhe cada etapa com tranquilidade.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Traga sua Roupa", desc: "Use nossos cestos medidores para garantir a quantidade ideal por ciclo." },
            { step: "02", title: "Escolha o Ciclo", desc: "Selecione o programa de lavagem e secagem que melhor atende suas peças." },
            { step: "03", title: "Pagamento", desc: "Realize o pagamento de forma segura no totem ou via APP." },
            { step: "04", title: "Pronto!", desc: "Aproveite seu tempo livre enquanto nossas máquinas fazem o trabalho pesado." }
          ].map((item, i) => (
            <div key={i} className="relative p-6 bg-white rounded-3xl shadow-lg border">
              <div className="text-5xl font-bold text-purple-100 mb-4">{item.step}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <button className="text-purple-600 font-bold hover:text-purple-800">Saiba mais →</button>
            </div>
          ))}
        </div>
        <LaundryMiniGame />
      </section>

      <section id="pricing" className="py-24 bg-gray-50 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Nossos Ciclos</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            { title: "Ciclo Padrão", desc: "Ideal para roupas do dia a dia, camisas, calças e roupas de cama simples. Ciclo completo de lavagem ou secagem rápida.", tip: "Dica: Separe roupas claras de escuras." },
            { title: "Lavagem BIG", desc: "Especial para edredons, cobertores pesados e cortinas. Alta capacidade para garantir uma limpeza profunda.", tip: "Dica: Não sobrecarregue para uma secagem perfeita." }
          ].map((plan, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] shadow-xl flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <p className="text-gray-600 mb-6 text-center">{plan.desc}</p>
              <p className="text-sm text-purple-600 font-medium mb-8 bg-purple-50 p-3 rounded-lg">{plan.tip}</p>
              <a href="https://wa.me/5555991371968" className="bg-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-purple-700">Saiba mais sobre este ciclo</a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">O que dizem nossos clientes</h2>
          <div className="grid md:grid-cols-5 gap-4 items-center mb-16">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="p-4 bg-gray-800 rounded-2xl">
                    <div className="flex justify-center mb-2">{[...Array(5)].map((_, s) => <Star key={s} size={16} className="text-yellow-400 fill-yellow-400" />)}</div>
                    <p className="text-sm italic">"Santo Enxágue é incrível! Roupas super limpas."</p>
                </div>
            ))}
          </div>
          <div className="max-w-xl mx-auto">
            <video src={TESTIMONIALS_VIDEO_URL} autoPlay loop muted playsInline className="rounded-[2rem] shadow-2xl mb-8" />
            <a href="https://g.page/r/CZTMrXFfclLZEBM/review" className="bg-white text-black px-10 py-5 rounded-full font-bold">Avaliar no Google</a>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
            <h2 className="text-4xl font-bold">Acompanhe nosso Instagram</h2>
            <a href="https://www.instagram.com/santoenxague/" className="bg-purple-600 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-700">Seguir Santo Enxágue</a>
        </div>
        <div className="flex animate-marquee gap-4">
          {INSTAGRAM_MEDIA.map((media, i) => (
            <div key={i} className="min-w-[300px] aspect-[9/16] rounded-3xl overflow-hidden shadow-xl">
              {media.type === 'video' ? <video src={media.src} autoPlay loop muted playsInline className="w-full h-full object-cover" /> : <img src={media.src} alt="Post" className="w-full h-full object-cover" />}
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="py-24 px-4 max-w-3xl mx-auto bg-gray-50 rounded-[3rem]">
        <h2 className="text-4xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
        <div className="space-y-4">
            {[
              { q: "Quanto tempo demora o ciclo?", a: "Cerca de 1 hora para lavar e secar." },
              { q: "Qual o horário de funcionamento?", a: "06h às 22h, todos os dias." },
              { q: "Preciso levar sabão?", a: "Não, o sabão é incluso automaticamente." },
              { q: "Aceita cartão?", a: "Sim, aceitamos PIX e cartões." },
              { q: "Posso lavar tênis?", a: "Por questões de higiene não lavamos calçados." },
              { q: "Tem Wi-Fi?", a: "Sim, oferecemos Wi-Fi gratuito." },
              { q: "O ambiente é seguro?", a: "Sim, monitorado e climatizado." },
              { q: "Posso secar edredom?", a: "Sim, nossa secadora é profissional." },
              { q: "Tem estacionamento?", a: "Temos facilidade de estacionamento." },
              { q: "Finais de semana?", a: "Funcionamos normalmente." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border shadow-sm">
                <button onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)} className="w-full flex justify-between font-bold">
                  {item.q}
                  {openFaqIndex === i ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openFaqIndex === i && <p className="mt-4 text-gray-600">{item.a}</p>}
              </div>
            ))}
        </div>
      </section>

      <section className="py-24 text-center px-4">
        <h2 className="text-4xl font-bold mb-6">Sua opinião ajuda nossa comunidade!</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">Avalie no Google e receba dicas exclusivas de como cuidar das suas roupas para que durem mais.</p>
        <a href="https://g.page/r/CZTMrXFfclLZEBM/review" className="bg-purple-600 text-white px-10 py-5 rounded-full font-bold inline-flex items-center gap-2">
          Avaliar no Google <Star className="text-yellow-400" />
        </a>
      </section>

      <section id="units" className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nossas Unidades</h2>
          
          <div className="mb-16">
            <StoreMap />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://res.cloudinary.com/snrseezc/image/upload/v1784229517/WhatsApp_Image_2026-07-16_at_11.14.47_AM_kun2os.jpg" alt="Unidade Centro 1" className="rounded-3xl shadow-lg w-full h-full object-cover" />
              <img src="https://res.cloudinary.com/snrseezc/image/upload/v1784229517/WhatsApp_Image_2026-07-16_at_11.14.48_AM_vonkit.jpg" alt="Unidade Centro 2" className="rounded-3xl shadow-lg w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Santo Enxágue - Centro</h3>
              <p className="text-lg text-gray-600">Localizada no coração de Uruguaiana, nossa unidade no Centro oferece toda a tecnologia e conforto que você precisa para cuidar das suas roupas.</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://share.google/ZYpWg6YAX0TGKAslO" className="bg-purple-100 text-purple-700 px-6 py-3 rounded-full font-bold hover:bg-purple-200">Perfil</a>
                <a href="https://maps.app.goo.gl/KoecdJubR65L5BxM6" className="bg-purple-100 text-purple-700 px-6 py-3 rounded-full font-bold hover:bg-purple-200">Localização</a>
                <a href="https://www.google.com/maps/dir//Santo+Enx%C3%A1gue+Lavanderia+Express,+R.+Gen.+Bento+Martins,+2426+-+Centro,+Uruguaiana+-+RS,+97501-546/@-29.7558594,-57.0900461,3915m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x94535b2e2db53843:0xd952725f71adcc94!2m2!1d-57.0893995!2d-29.7556614?hl=pt-BR&authuser=0&entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D" className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700">Como Chegar</a>
              </div>
              <a href="https://g.page/r/CZTMrXFfclLZEBM/review" className="block text-center bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-bold hover:bg-gray-200">Avaliar no Google</a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:order-1 order-2">
              <h3 className="text-3xl font-bold">Santo Enxágue - Posto Buffon (Imigrantes)</h3>
              <p className="text-lg text-gray-600">Nossa unidade no Posto Buffon proporciona praticidade total para quem busca lavagem rápida durante suas rotas diárias.</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://share.google/bU0JqdswR7obpwx35" className="bg-purple-100 text-purple-700 px-6 py-3 rounded-full font-bold hover:bg-purple-200">Perfil</a>
                <a href="https://maps.app.goo.gl/Avxofy6E5UfqEmPn9" className="bg-purple-100 text-purple-700 px-6 py-3 rounded-full font-bold hover:bg-purple-200">Localização</a>
                <a href="https://www.google.com/maps/dir//Santo+Enx%C3%A1gue+Lavanderia+Express+-+Posto+Buffon,+Rua+General+Jos%C3%A9,+R.+Gen.+San+Mart%C3%ADn,+3700+-+Distrito+Rodovi%C3%A1rio,+Uruguaiana+-+RS,+97513-450/@-29.7558594,-57.0900461,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94535b9c2c59b685:0x5f4ba90cc79a018a!2m2!1d-57.0502608!2d-29.7724023?hl=pt-BR&authuser=0&entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D" className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700">Como Chegar</a>
              </div>
              <a href="https://g.page/r/CYoBmscMqUtfEBM/review" className="block text-center bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-bold hover:bg-gray-200">Avaliar no Google</a>
            </div>
            <div className="grid grid-cols-2 gap-4 md:order-2 order-1">
              <img src="https://res.cloudinary.com/snrseezc/image/upload/v1784230308/WhatsApp_Image_2026-07-16_at_3.28.00_PM_1_wwdcar.jpg" alt="Unidade Buffon 1" className="rounded-3xl shadow-lg w-full h-full object-cover" />
              <img src="https://res.cloudinary.com/snrseezc/image/upload/v1784229517/WhatsApp_Image_2026-07-16_at_11.18.31_AM_vvpnhd.jpg" alt="Unidade Buffon 2" className="rounded-3xl shadow-lg w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-gray-900 text-white text-center">
        <Logo className="w-16 h-16 mx-auto mb-4" />
        <p className="max-w-2xl mx-auto px-4">Santo Enxágue Lavanderia. Transformando o jeito de lavar suas roupas em Uruguaiana com tecnologia, agilidade e muito conforto. Sua melhor opção para lavagem self-service.</p>
        <div className="flex gap-4 justify-center mt-6">
           <a href="https://www.instagram.com/santoenxague/" className="hover:text-purple-400">Instagram</a>
           <a href="https://www.facebook.com/profile.php?id=61575107378594" className="hover:text-purple-400">Facebook</a>
        </div>
      </footer>
      
      <a href="https://wa.me/5555991371968" className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl">
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
