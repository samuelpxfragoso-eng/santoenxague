import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shirt, Droplets, Wind, Sparkles } from 'lucide-react';

export default function LaundryMiniGame() {
  const [step, setStep] = useState(0); // 0: Ready, 1: Washing, 2: Drying, 3: Finished
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep((prev) => prev + 1);
      setIsAnimating(false);
    }, 1500);
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-100 mt-12 text-center max-w-lg mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-purple-900">Simulador de Lavagem</h3>
      
      {/* Machine Viewport */}
      <div className="relative w-48 h-48 mx-auto mb-8 rounded-full border-8 border-gray-200 overflow-hidden bg-gray-50 flex items-center justify-center">
        <motion.div 
          animate={step === 1 ? { rotate: 360 } : step === 2 ? { rotate: 1080 } : {}}
          transition={{ duration: step === 2 ? 1.5 : 2, repeat: step > 0 && step < 3 ? Infinity : 0, ease: "linear" }}
          className={`absolute inset-0 ${step === 1 ? 'bg-blue-400/30' : step === 2 ? 'bg-orange-400/30' : 'bg-transparent'} transition-colors duration-500`}
        />
        {step === 0 && <Shirt size={64} className="text-gray-400" />}
        {step === 1 && <Droplets size={64} className="text-blue-600 animate-pulse" />}
        {step === 2 && <Wind size={64} className="text-orange-600 animate-pulse" />}
        {step === 3 && <Sparkles size={64} className="text-yellow-500 animate-bounce" />}
      </div>

      <p className="text-lg font-medium text-gray-700 mb-8 min-h-[3rem]">
        {step === 0 && "Máquina vazia. Preparar e pagar!"}
        {step === 1 && "Lavando suas roupas..."}
        {step === 2 && "Secando suas roupas..."}
        {step === 3 && "Sua lavagem foi concluída com sucesso! Que tal experimentar na vida real?"}
      </p>

      {step < 3 ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          disabled={isAnimating}
          className="bg-purple-600 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-700 transition-colors disabled:opacity-50"
        >
          {step === 0 ? "Colocar Roupas e Pagar" : step === 1 ? "Iniciar Lavagem" : "Iniciar Secagem"}
        </motion.button>
      ) : (
        <a 
          href="#units"
          className="bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition-colors inline-block"
        >
          Ir para a Lavanderia
        </a>
      )}
    </div>
  );
}
