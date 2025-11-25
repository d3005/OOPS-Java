import React, { useState, useEffect, useRef } from 'react';
import { Eye, Shuffle, GitBranch, Shield, Code, BookOpen, ChevronDown } from 'lucide-react';
import { fourPillars } from '../data/mockData';

const iconMap = {
  Eye: Eye,
  Shuffle: Shuffle,
  GitBranch: GitBranch,
  Shield: Shield
};

const PillarCard = ({ pillar, index, isExpanded, onToggle }) => {
  const IconComponent = iconMap[pillar.icon];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card */}
      <div
        className={`relative rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer ${
          isExpanded ? 'scale-100' : 'hover:scale-[1.02]'
        }`}
        onClick={onToggle}
        style={{
          transform: isHovered && !isExpanded
            ? `perspective(1000px) rotateY(${(index % 2 === 0 ? 5 : -5)}deg) rotateX(3deg)`
            : 'none',
          transition: 'transform 0.4s ease-out'
        }}
      >
        {/* Gradient border */}
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.gradient} opacity-50`}
        />
        
        {/* Card content */}
        <div className="relative m-[2px] bg-slate-900 rounded-3xl p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-lg`}
                style={{ boxShadow: `0 10px 40px ${pillar.color}30` }}
              >
                <IconComponent className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                <p className="text-slate-400 text-sm">{pillar.tagline}</p>
              </div>
            </div>
            <ChevronDown
              className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </div>

          {/* Quick info */}
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300">
              {pillar.analogy}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-mono bg-gradient-to-r ${pillar.gradient} text-white`}
            >
              {pillar.keyword}
            </span>
          </div>

          <p className="text-slate-400 text-sm">{pillar.shortDesc}</p>

          {/* Expanded content */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isExpanded ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="border-t border-slate-800 pt-6 space-y-6">
              {/* Hero Example */}
              <div className="bg-slate-800/50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-slate-400" />
                  <span className="text-white font-semibold">
                    {pillar.heroExample.hero}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-3">
                  {pillar.heroExample.explanation}
                </p>
                <p className="text-emerald-400 text-sm font-medium">
                  → {pillar.heroExample.lesson}
                </p>
              </div>

              {/* Code Example */}
              <div className="bg-slate-950 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300 text-sm font-medium">
                      {pillar.codeExample.title}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 uppercase">
                    {pillar.codeExample.language}
                  </span>
                </div>
                <pre className="p-4 text-sm overflow-x-auto">
                  <code className="text-slate-300 font-mono whitespace-pre">
                    {pillar.codeExample.code}
                  </code>
                </pre>
              </div>

              {/* Exam Definition */}
              <div
                className={`p-5 rounded-xl border-l-4`}
                style={{ borderColor: pillar.color, backgroundColor: `${pillar.color}10` }}
              >
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: pillar.color }}>
                  Exam Definition
                </span>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  {pillar.examDefinition}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-3xl blur-xl transition-opacity duration-300 -z-10 bg-gradient-to-br ${pillar.gradient} ${
          isHovered || isExpanded ? 'opacity-20' : 'opacity-0'
        }`}
      />
    </div>
  );
};

const PillarsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Core Principles
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">The Four Pillars of </span>
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              OOP
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Let's explore the core principles that make Object-Oriented Programming so powerful,
            with a little help from U.A. High!
          </p>
          
          {/* APIE badge */}
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-6 py-3">
            {['A', 'P', 'I', 'E'].map((letter, i) => (
              <span
                key={letter}
                className="text-2xl font-bold"
                style={{ color: fourPillars[i].color }}
              >
                {letter}
              </span>
            ))}
            <span className="text-slate-400 ml-2">= Your Programming Superpower</span>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {fourPillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <PillarCard
                pillar={pillar}
                index={index}
                isExpanded={expandedIndex === index}
                onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
              />
            </div>
          ))}
        </div>

        {/* Summary */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Mastering these four pillars is like unlocking your own programming Quirk,
            allowing you to build robust, flexible, and maintainable software systems!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
