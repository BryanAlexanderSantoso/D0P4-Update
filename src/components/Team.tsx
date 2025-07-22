import React from 'react';
import { ArrowLeft, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Team = () => {
  const teamMembers = [
    { name: 'LUTHY', image: 'luthy.png', id: '001' },
    { name: 'SB', image: 'sb.png', id: '002' },
    { name: 'LUCIFER', image: 'Lucifer.png', id: '003' },
    { name: 'CHE', image: 'che.png', id: '004' },
    { name: 'NAX', image: 'nax.jpg', id: '005' },
    { name: 'KIKYY', image: 'kikyy.jpg', id: '006' },
    { name: 'DARVINCT', image: 'darvinct.jpg', id: '007' },
    { name: 'RAPLI', image: 'rapli.jpg', id: '008' },
    { name: 'ZENST', image: 'zenst.jpg', id: '009' },
    { name: 'IMOETZCHAN', image: 'Imoetzchan.jpg', id: '010' },
    { name: 'AIS', image: 'ais.jpg', id: '011' },
    { name: 'SHENA', image: 'shena.jpg', id: '012' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-red-600/20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-black/90 backdrop-blur-xl border-b border-red-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5 text-red-400" />
              <div className="flex items-center space-x-4">
                <img 
                  src="https://ik.imagekit.io/1yqrowr2y/DOPANEWLOGOV3_1.png?updatedAt=1752931523608" 
                  alt="DOPA Logo" 
                  className="h-8 w-auto"
                />
                <span className="font-mono text-lg font-bold">DOPA</span>
              </div>
            </Link>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-red-400" />
              <span className="font-mono text-sm text-red-400">TEAM</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="text-sm font-mono text-red-400 tracking-widest uppercase mb-2">
                NEURAL ARCHITECTS
              </div>
              <h1 className="text-5xl md:text-7xl font-mono font-black text-white mb-4">
                TEAM
              </h1>
            </div>
            <p className="text-xl text-gray-400 font-mono max-w-2xl mx-auto">
              The digital ghosts behind DOPA's neural network
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-black/70 backdrop-blur-sm border border-red-500/30 p-6 hover:bg-red-500/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                  {/* Member ID */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-xs font-mono text-red-500">#{member.id}</div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-red-500/30 group-hover:border-red-500 transition-colors">
                      <img 
                        src={`https://ik.imagekit.io/1yqrowr2y/Profile%20Staff%20DOPA/${member.image}`}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://via.placeholder.com/128x128/1f2937/ef4444?text=${member.name.charAt(0)}`;
                        }}
                      />
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-full bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  </div>

                  {/* Member Name */}
                  <div className="text-center">
                    <h3 className="text-lg font-mono font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                      {member.name}
                    </h3>
                    <div className="inline-block px-3 py-1 text-xs font-mono uppercase border border-red-500/30 text-red-400 bg-red-500/10">
                      STAFF
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-8 bg-black/50 backdrop-blur-sm border border-red-500/30 px-8 py-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-mono text-sm">12 ACTIVE STAFF</span>
              </div>
              <div className="text-red-400 font-mono">|</div>
              <div className="text-gray-400 font-mono text-sm">NEURAL NETWORK ONLINE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;