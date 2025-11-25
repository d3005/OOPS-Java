import React, { useState, useEffect, useRef } from 'react';
import { User, Settings, Zap, FileText, ChevronRight } from 'lucide-react';
import { avengersAssembly } from '../data/mockData';

const iconMap = {
  User: User,
  Settings: Settings,
  Zap: Zap,
  FileText: FileText
};

const AvengersSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const cardColors = [
    'from-red-500 to-orange-500',
    'from-yellow-500 to-amber-500',
    'from-green-500 to-emerald-500',
    'from-cyan-500 to-blue-500'
  ];

  return (
    <section
      id="avengers-section"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">The </span>
            <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              Avengers Assembly
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {avengersAssembly.intro}
          </p>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {avengersAssembly.concepts.map((concept, index) => {
            const IconComponent = iconMap[concept.icon];
            return (
              <div
                key={index}
                className={`group perspective-1000 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div
                  className={`relative h-80 rounded-2xl transition-transform duration-500 transform-style-preserve-3d ${
                    activeCard === index ? 'scale-105' : ''
                  }`}
                  style={{
                    transform: activeCard === index
                      ? 'perspective(1000px) rotateY(10deg) rotateX(-5deg)'
                      : 'perspective(1000px) rotateY(0) rotateX(0)'
                  }}
                >
                  {/* Card front */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cardColors[index]} p-[2px]`}
                  >
                    <div className="h-full w-full rounded-2xl bg-slate-900 p-6 flex flex-col">
                      {/* Icon container with glow */}
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cardColors[index]} p-[2px] mb-4 group-hover:shadow-lg transition-shadow duration-300`}
                        style={{
                          boxShadow: activeCard === index
                            ? `0 0 30px ${['rgba(239,68,68,0.4)', 'rgba(234,179,8,0.4)', 'rgba(34,197,94,0.4)', 'rgba(6,182,212,0.4)'][index]}`
                            : 'none'
                        }}
                      >
                        <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-3">
                        {concept.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                        {concept.description}
                      </p>

                      {/* Hover indicator */}
                      <div
                        className={`mt-4 flex items-center text-sm font-medium transition-all duration-300 ${
                          activeCard === index
                            ? 'text-white translate-x-2'
                            : 'text-slate-500'
                        }`}
                      >
                        Learn more
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* 3D shadow effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cardColors[index]} opacity-20 blur-xl transition-all duration-300 -z-10 ${
                      activeCard === index ? 'scale-110 opacity-30' : 'scale-100'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Conclusion */}
        <div
          className={`text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 max-w-3xl">
            <p className="text-lg text-slate-300 leading-relaxed">
              {avengersAssembly.conclusion}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvengersSection;
