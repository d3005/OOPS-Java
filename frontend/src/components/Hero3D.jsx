import React, { useEffect, useRef, useState } from 'react';
import { Code2, Sparkles, ArrowDown } from 'lucide-react';

const Hero3D = () => {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Floating 3D shapes */}
      <div
        className="absolute w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, #00D9FF, #06D6A0)',
          transform: `translate3d(${mousePosition.x * 50}px, ${mousePosition.y * 50}px, 0) translateY(${scrollY * 0.3}px)`,
          left: '10%',
          top: '20%',
          transition: 'transform 0.3s ease-out'
        }}
      />
      <div
        className="absolute w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, #FF6B35, #9B5DE5)',
          transform: `translate3d(${-mousePosition.x * 40}px, ${-mousePosition.y * 40}px, 0) translateY(${scrollY * 0.2}px)`,
          right: '5%',
          bottom: '10%',
          transition: 'transform 0.3s ease-out'
        }}
      />

      {/* 3D floating code blocks */}
      <div
        className="absolute left-[5%] top-[30%] hidden lg:block"
        style={{
          transform: `perspective(1000px) rotateY(${mousePosition.x * 15}deg) rotateX(${-mousePosition.y * 15}deg) translateZ(50px)`,
          transition: 'transform 0.4s ease-out'
        }}
      >
        <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-4 shadow-2xl">
          <div className="flex gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <pre className="text-sm font-mono">
            <span className="text-cyan-400">class</span>{' '}
            <span className="text-emerald-400">Hero</span>{' {'}
            <br />{'  '}<span className="text-orange-400">String</span> name;
            <br />{'  '}<span className="text-orange-400">void</span>{' '}
            <span className="text-yellow-400">fight</span>();
            <br />{'}'}
          </pre>
        </div>
      </div>

      <div
        className="absolute right-[8%] top-[25%] hidden lg:block"
        style={{
          transform: `perspective(1000px) rotateY(${mousePosition.x * -12}deg) rotateX(${-mousePosition.y * 12}deg) translateZ(30px)`,
          transition: 'transform 0.4s ease-out'
        }}
      >
        <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-4 shadow-2xl">
          <pre className="text-sm font-mono">
            <span className="text-cyan-400">new</span>{' '}
            <span className="text-emerald-400">IronMan</span>();
            <br />
            <span className="text-cyan-400">new</span>{' '}
            <span className="text-emerald-400">Thor</span>();
            <br />
            <span className="text-cyan-400">new</span>{' '}
            <span className="text-emerald-400">Hulk</span>();
          </pre>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div
          className="mb-6 inline-flex items-center gap-2 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-full px-5 py-2"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <Code2 className="w-4 h-4 text-cyan-400" />
          <span className="text-slate-300 text-sm font-medium">Programming meets Superheroes</span>
          <Sparkles className="w-4 h-4 text-orange-400" />
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 3}deg) rotateY(${mousePosition.x * 3}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Object-Oriented
          </span>
          <br />
          <span className="text-white">Programming</span>
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            Basics
          </span>
        </h1>

        <p
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        >
          Ever wonder how <span className="text-red-400 font-semibold">Iron Man</span>,{' '}
          <span className="text-yellow-400 font-semibold">Thor</span>, and{' '}
          <span className="text-green-400 font-semibold">Hulk</span> work together?{' '}
          The secret lies in something called Object-Oriented Programming—and it's way cooler than you think.
        </p>

        <button
          className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
          onClick={() => {
            document.getElementById('avengers-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="relative z-10">Start Learning</span>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
      >
        <span className="text-slate-500 text-sm">Scroll to explore</span>
        <ArrowDown className="w-5 h-5 text-slate-500" />
      </div>

      {/* Decorative particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </section>
  );
};

export default Hero3D;
