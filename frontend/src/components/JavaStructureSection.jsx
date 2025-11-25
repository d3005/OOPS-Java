import React, { useState, useEffect, useRef } from 'react';
import { Play, Terminal, ChevronRight, Sparkles } from 'lucide-react';
import { javaStructure } from '../data/mockData';

const JavaStructureSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [typedCode, setTypedCode] = useState('');
  const sectionRef = useRef(null);

  const fullCode = `import java.util.Scanner;

public class Neo {
    public static void main(String[] args) {
        System.out.println("Wake up, Neo...");
        System.out.println("The Matrix has you.");
    }
}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const timer = setInterval(() => {
        if (index < fullCode.length) {
          setTypedCode(fullCode.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stepHighlights = [
    { start: 0, end: 27 },    // import
    { start: 29, end: 47 },   // class
    { start: 53, end: 96 },   // main
    { start: 106, end: 180 }  // statements
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-slate-900 to-black overflow-hidden"
    >
      {/* Matrix rain effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-500 font-mono text-xs animate-matrix-rain"
            style={{
              left: `${i * 3.33}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          >
            {'01'.split('').map((char, j) => (
              <span key={j} className="block">{Math.random() > 0.5 ? '1' : '0'}</span>
            ))}
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            {javaStructure.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">{javaStructure.title.split(' ')[0]} </span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              STRUCTURE IN JAVA
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {javaStructure.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Code Editor */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              {/* Editor header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Terminal className="w-4 h-4" />
                  <span className="text-sm">Neo.java</span>
                </div>
                <Play className="w-5 h-5 text-green-500 cursor-pointer hover:text-green-400 transition-colors" />
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-sm leading-relaxed relative">
                <pre className="text-slate-500">
                  {fullCode.split('').map((char, i) => {
                    const isHighlighted = stepHighlights[activeStep] &&
                      i >= stepHighlights[activeStep].start &&
                      i < stepHighlights[activeStep].end;
                    const isTyped = i < typedCode.length;
                    
                    return (
                      <span
                        key={i}
                        className={`transition-all duration-200 ${
                          isTyped
                            ? isHighlighted
                              ? 'text-green-400 bg-green-400/10'
                              : 'text-slate-300'
                            : 'text-slate-700'
                        }`}
                      >
                        {char}
                      </span>
                    );
                  })}
                  <span className="animate-pulse text-green-400">|</span>
                </pre>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div
            className={`space-y-4 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {javaStructure.steps.map((step, index) => (
              <div
                key={index}
                className={`group relative rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-green-500/10 border-green-500/50'
                    : 'bg-slate-800/30 border-slate-700 hover:bg-slate-800/50'
                } border`}
                onClick={() => setActiveStep(index)}
                style={{
                  transform: activeStep === index ? 'scale(1.02) translateX(10px)' : 'scale(1)',
                }}
              >
                {/* Step number */}
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-colors duration-300 ${
                      activeStep === index
                        ? 'bg-green-500 text-white'
                        : 'bg-slate-700 text-slate-400 group-hover:bg-slate-600'
                    }`}
                  >
                    {step.step}
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h4>
                    <code
                      className={`text-sm font-mono px-3 py-1 rounded inline-block mb-3 transition-colors duration-300 ${
                        activeStep === index
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {step.code}
                    </code>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.analogy}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                      activeStep === index
                        ? 'text-green-400 translate-x-1'
                        : 'text-slate-600'
                    }`}
                  />
                </div>

                {/* Active indicator line */}
                {activeStep === index && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-l-xl" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div
          className={`mt-16 flex items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Sparkles className="w-5 h-5 text-green-400" />
          <span className="text-slate-400">Follow the white rabbit...</span>
          <Sparkles className="w-5 h-5 text-green-400" />
        </div>
      </div>
    </section>
  );
};

export default JavaStructureSection;
