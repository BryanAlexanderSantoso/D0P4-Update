import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Users, Zap, Star, Play, ArrowRight, Disc as Discord, Twitch, Youtube, Terminal, Cpu, Wifi, Signal } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [glitchText, setGlitchText] = useState('ENTER THE MATRIX');
  const [currentTime, setCurrentTime] = useState(new Date());

  const glitchTexts = [
    'ENTER THE MATRIX',
    'JACK INTO DOPA',
    'NEURAL LINK ACTIVE',
    'SYSTEM OVERRIDE'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText(glitchTexts[Math.floor(Math.random() * glitchTexts.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "NEURAL CHAT",
      code: "0x001",
      description: "Real-time quantum communication channels",
      status: "ACTIVE"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "CYBER COMMUNITY",
      code: "0x002", 
      description: "Global network of digital consciousness",
      status: "ONLINE"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "DATA STREAMS",
      code: "0x003",
      description: "Live events and neural tournaments",
      status: "STREAMING"
    },
    {
      icon: <Signal className="w-8 h-8" />,
      title: "VIP ACCESS",
      code: "0x004",
      description: "Premium neural enhancement protocols",
      status: "ENCRYPTED"
    }
  ];

  const stats = [
    { number: "15,247", label: "CONNECTED MINDS", unit: "USERS" },
    { number: "24/7", label: "NEURAL UPTIME", unit: "HOURS" },
    { number: "∞", label: "DATA CHANNELS", unit: "STREAMS" },
    { number: "2025", label: "FUTURE MODE", unit: "YEAR" }
  ];

  const creators = [
    { name: "AKIRA.EXE", role: "NEURAL ARCHITECT", status: "ONLINE", id: "001" },
    { name: "YUKI.SYS", role: "CODE SAMURAI", status: "STREAMING", id: "002" },
    { name: "REN.NET", role: "DATA GHOST", status: "ONLINE", id: "003" },
    { name: "HANA.AI", role: "CYBER ORACLE", status: "AWAY", id: "004" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://ik.imagekit.io/1yqrowr2y/lv_0_20250531004124.mp4?updatedAt=1752933380789" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Cyberpunk Grid Background */}
      <div className="fixed inset-0 z-10">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-purple-600/20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        {/* Scanning Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-scan-line"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src="https://ik.imagekit.io/1yqrowr2y/DOPANEWLOGOV3_1.png?updatedAt=1752931523608" 
                  alt="DOPA Logo" 
                  className="h-10 w-auto hover:scale-105 transition-transform duration-300 filter brightness-110"
                />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              </div>
              <div className="hidden md:flex flex-col">
                <div className="text-xs font-mono text-purple-400">NEURAL.NET</div>
                <div className="text-xs font-mono text-gray-500">{currentTime.toLocaleTimeString()}</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['HOME', 'MATRIX', 'EVENTS', 'GHOSTS'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-white hover:text-purple-400 transition-all duration-300 font-mono text-sm tracking-wider group"
                >
                  <span className="text-purple-500 text-xs">0{index + 1}/</span>{item}
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 transition-all duration-300 group-hover:w-full"></div>
                </a>
              ))}
              <button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white px-6 py-2 font-mono text-sm transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 border border-purple-500/50">
                <Discord className="w-4 h-4" />
                <span>JACK IN</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-purple-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30">
            <div className="px-6 py-6 space-y-4">
              {['HOME', 'MATRIX', 'EVENTS', 'GHOSTS'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-white hover:text-purple-400 transition-colors font-mono text-sm tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-purple-500 text-xs">0{index + 1}/</span>{item}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 font-mono text-sm flex items-center justify-center space-x-2 border border-purple-500/50">
                <Discord className="w-4 h-4" />
                <span>JACK IN</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            {/* Status Bar */}
            <div className="inline-flex items-center space-x-4 mb-8 bg-black/50 backdrop-blur-sm border border-purple-500/30 px-6 py-3 font-mono text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400">SYSTEM ONLINE</span>
              </div>
              <div className="text-purple-400">|</div>
              <div className="text-gray-400">NEURAL LINK ESTABLISHED</div>
            </div>

            {/* Logo */}
            <div className="mb-8">
              <img 
                src="https://ik.imagekit.io/1yqrowr2y/DOPANEWLOGOV3_1.png?updatedAt=1752931523608" 
                alt="DOPA" 
                className="h-32 md:h-48 lg:h-64 w-auto mx-auto hover:scale-105 transition-transform duration-300 filter brightness-110"
              />
            </div>
            
            {/* Glitch Text */}
            <div className="h-16 flex items-center justify-center mb-8">
              <h2 className="text-2xl md:text-4xl font-mono font-bold text-purple-400 glitch-text">
                {glitchText}
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-400 font-mono mb-12 max-w-2xl mx-auto">
              NEURAL NETWORK // DISCORD SERVER // CYBERPUNK COMMUNITY
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <button className="group bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white px-8 py-4 font-mono font-bold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 border border-purple-500/50">
                <Play className="w-5 h-5 group-hover:animate-pulse" />
                <span>INITIALIZE</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-purple-500/50 hover:border-purple-400 text-purple-400 hover:bg-purple-500/10 px-8 py-4 font-mono font-bold transition-all duration-300 transform hover:scale-105">
                SCAN NETWORK
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 p-6 hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105">
                  <div className="text-xs font-mono text-purple-400 mb-2">#{String(index + 1).padStart(3, '0')}</div>
                  <div className="text-2xl md:text-3xl font-mono font-black text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs font-mono text-gray-400 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs font-mono text-purple-500">
                    {stat.unit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Kanji */}
        <div className="absolute top-1/4 left-10 text-6xl text-purple-500/10 font-black transform rotate-12 hidden lg:block animate-pulse">
          電
        </div>
        <div className="absolute bottom-1/4 right-10 text-8xl text-purple-500/10 font-black transform -rotate-12 hidden lg:block animate-pulse">
          脳
        </div>
      </section>

      {/* Features Section */}
      <section id="matrix" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="text-sm font-mono text-purple-400 tracking-widest uppercase mb-2">
                SYSTEM MODULES
              </div>
              <h2 className="text-5xl md:text-7xl font-mono font-black text-white mb-4">
                NEURAL.NET
              </h2>
            </div>
            <p className="text-xl text-gray-400 font-mono max-w-2xl mx-auto">
              Advanced cybernetic communication protocols
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 p-8 hover:bg-purple-500/10 transition-all duration-500 transform hover:scale-105">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 border border-purple-500/50 flex items-center justify-center text-purple-400 group-hover:text-white transition-colors">
                      {feature.icon}
                    </div>
                    <div className="text-xs font-mono text-purple-500">{feature.code}</div>
                  </div>
                  <h3 className="text-lg font-mono font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-mono mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-mono text-green-400">{feature.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Activity Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-mono font-black text-purple-400 mb-4">
              LIVE.FEED
            </h2>
            <p className="text-xl text-gray-400 font-mono">
              Real-time neural activity monitoring
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-black/70 backdrop-blur-xl border border-purple-500/30 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600/20 to-purple-800/20 p-4 flex items-center justify-between border-b border-purple-500/30">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-mono text-sm text-white"># neural-chat</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-xs font-mono text-purple-400">15,247 minds connected</span>
                  <div className="flex space-x-2">
                    <Discord className="w-4 h-4 text-purple-400" />
                    <Twitch className="w-4 h-4 text-purple-400" />
                    <Youtube className="w-4 h-4 text-purple-400" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    { user: "GHOST_001", msg: "New neural pathway discovered in sector 7", time: "now", id: "001" },
                    { user: "CYBER_NINJA", msg: "Anyone up for a data heist tonight?", time: "2m", id: "002" },
                    { user: "NEON_QUEEN", msg: "The new manga chapter analysis is live!", time: "5m", id: "003" },
                    { user: "PIXEL_GHOST", msg: "Working on some cyberpunk character designs", time: "8m", id: "004" }
                  ].map((chat, index) => (
                    <div key={index} className="flex items-start space-x-4 hover:bg-purple-500/5 p-3 transition-colors border-l-2 border-transparent hover:border-purple-500">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-xs font-mono text-white">
                        {chat.id}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-1">
                          <span className="font-mono text-sm text-purple-400">{chat.user}</span>
                          <span className="text-xs font-mono text-gray-500">{chat.time}</span>
                        </div>
                        <p className="text-sm text-gray-300 font-mono">{chat.msg}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creators Section */}
      <section id="ghosts" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-mono font-black text-white mb-4">
              DATA.GHOSTS
            </h2>
            <p className="text-xl text-gray-400 font-mono">
              Neural architects of the digital realm
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {creators.map((creator, index) => (
              <div key={index} className="group">
                <div className="bg-black/70 backdrop-blur-sm border border-purple-500/30 p-6 hover:bg-purple-500/10 transition-all duration-500 transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-mono text-purple-500">#{creator.id}</div>
                    <div className={`w-3 h-3 rounded-full ${
                      creator.status === 'ONLINE' ? 'bg-green-500' :
                      creator.status === 'STREAMING' ? 'bg-purple-500' : 'bg-yellow-500'
                    } animate-pulse`}></div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-lg font-mono text-white mb-4 mx-auto">
                    {creator.id}
                  </div>
                  <h3 className="text-lg font-mono font-bold text-center mb-2 text-white">
                    {creator.name}
                  </h3>
                  <p className="text-center text-gray-400 font-mono text-sm mb-4">
                    {creator.role}
                  </p>
                  <div className="text-center">
                    <span className={`inline-block px-3 py-1 text-xs font-mono uppercase border ${
                      creator.status === 'ONLINE' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                      creator.status === 'STREAMING' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' : 
                      'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }`}>
                      {creator.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black to-gray-900/50 py-16 border-t border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="https://ik.imagekit.io/1yqrowr2y/DOPANEWLOGOV3_1.png?updatedAt=1752931523608" 
                alt="DOPA" 
                className="h-16 w-auto mx-auto hover:scale-105 transition-transform duration-300 filter brightness-110"
              />
            </div>
            <p className="text-lg text-gray-400 font-mono mb-8 max-w-2xl mx-auto">
              Neural network where cyberpunk meets community, code meets consciousness, and legends are compiled.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
              <button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white px-8 py-4 font-mono font-bold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 border border-purple-500/50">
                <Discord className="w-5 h-5" />
                <span>JACK INTO DISCORD</span>
              </button>
              <div className="flex space-x-6">
                <Twitch className="w-6 h-6 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer" />
                <Youtube className="w-6 h-6 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer" />
              </div>
            </div>
            <div className="border-t border-purple-500/30 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-gray-500 text-sm font-mono mb-4 md:mb-0">
                  © 2025 <img src="https://ik.imagekit.io/1yqrowr2y/DOPANEWLOGOV3_1.png?updatedAt=1752931523608" alt="DOPA" className="inline h-4 w-auto filter brightness-75" /> NEURAL NETWORK. ALL RIGHTS RESERVED.
                </div>
                <div className="text-gray-500 text-sm font-mono">
                  電脳 • WHERE GHOSTS ARE BORN
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;