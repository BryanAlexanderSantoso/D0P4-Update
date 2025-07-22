import React from 'react';
import { ArrowLeft, Trophy, DollarSign, Mic, MessageCircle, Crown, Medal, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Leaderboard = () => {
  const topDonators = [
    { rank: 1, name: 'CYBER_KING', amount: '$2,450', id: '001' },
    { rank: 2, name: 'NEON_GHOST', amount: '$1,890', id: '002' },
    { rank: 3, name: 'DATA_LORD', amount: '$1,650', id: '003' },
    { rank: 4, name: 'PIXEL_SAGE', amount: '$1,200', id: '004' },
    { rank: 5, name: 'CODE_NINJA', amount: '$980', id: '005' }
  ];

  const topVoiceUsers = [
    { rank: 1, name: 'VOICE_MASTER', duration: '247h 32m', id: '006' },
    { rank: 2, name: 'ECHO_PHANTOM', duration: '198h 45m', id: '007' },
    { rank: 3, name: 'SOUND_WAVE', duration: '176h 12m', id: '008' },
    { rank: 4, name: 'AUDIO_GHOST', duration: '145h 28m', id: '009' },
    { rank: 5, name: 'MIC_LEGEND', duration: '132h 56m', id: '010' }
  ];

  const topChatUsers = [
    { rank: 1, name: 'CHAT_DEMON', messages: '15,247', id: '011' },
    { rank: 2, name: 'TEXT_STORM', messages: '12,890', id: '012' },
    { rank: 3, name: 'WORD_NINJA', messages: '11,456', id: '013' },
    { rank: 4, name: 'MSG_MASTER', messages: '9,876', id: '014' },
    { rank: 5, name: 'TYPE_GHOST', messages: '8,654', id: '015' }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-400" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-300" />;
      case 3:
        return <Award className="w-5 h-5 text-amber-600" />;
      default:
        return <span className="text-red-400 font-mono text-sm">#{rank}</span>;
    }
  };

  const LeaderboardCard = ({ title, icon, data, valueKey, badge }: any) => (
    <div className="bg-black/70 backdrop-blur-sm border border-red-500/30 hover:bg-red-500/10 transition-all duration-500">
      {/* Card Header */}
      <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 p-4 border-b border-red-500/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {icon}
            <h3 className="text-lg font-mono font-bold text-white">{title}</h3>
          </div>
          <div className="bg-red-500/20 text-red-400 px-3 py-1 text-xs font-mono uppercase border border-red-500/30">
            {badge}
          </div>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="p-6">
        <div className="space-y-4">
          {data.map((user: any, index: number) => (
            <div key={index} className="flex items-center justify-between hover:bg-red-500/5 p-3 transition-colors border-l-2 border-transparent hover:border-red-500">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  {getRankIcon(user.rank)}
                </div>
                <div>
                  <div className="font-mono text-sm text-white font-bold">{user.name}</div>
                  <div className="text-xs font-mono text-gray-500">ID: {user.id}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-sm text-red-400 font-bold">
                  {user[valueKey]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

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
              <Trophy className="w-5 h-5 text-red-400" />
              <span className="font-mono text-sm text-red-400">LEADERBOARD</span>
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
                NEURAL RANKINGS
              </div>
              <h1 className="text-5xl md:text-7xl font-mono font-black text-white mb-4">
                LEADERBOARD
              </h1>
            </div>
            <p className="text-xl text-gray-400 font-mono max-w-2xl mx-auto">
              Top performers in the DOPA neural network
            </p>
          </div>

          {/* Current Month Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-4 bg-black/50 backdrop-blur-sm border border-red-500/30 px-6 py-3 font-mono text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400">JANUARY 2025</span>
              </div>
              <div className="text-red-400">|</div>
              <div className="text-gray-400">LIVE RANKINGS</div>
            </div>
          </div>

          {/* Leaderboard Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Top Donators */}
            <LeaderboardCard
              title="TOP DONATORS"
              icon={<DollarSign className="w-6 h-6 text-green-400" />}
              data={topDonators}
              valueKey="amount"
              badge="THIS MONTH"
            />

            {/* Top Voice Users */}
            <LeaderboardCard
              title="TOP VOICE USERS"
              icon={<Mic className="w-6 h-6 text-blue-400" />}
              data={topVoiceUsers}
              valueKey="duration"
              badge="DISCORD"
            />

            {/* Top Chat Users */}
            <LeaderboardCard
              title="TOP CHAT USERS"
              icon={<MessageCircle className="w-6 h-6 text-purple-400" />}
              data={topChatUsers}
              valueKey="messages"
              badge="DISCORD"
            />
          </div>

          {/* Stats Summary */}
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/50 backdrop-blur-sm border border-red-500/30 p-6 text-center">
                <div className="text-3xl font-mono font-black text-green-400 mb-2">$8,170</div>
                <div className="text-sm font-mono text-gray-400">TOTAL DONATIONS</div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-red-500/30 p-6 text-center">
                <div className="text-3xl font-mono font-black text-blue-400 mb-2">900h</div>
                <div className="text-sm font-mono text-gray-400">TOTAL VOICE TIME</div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-red-500/30 p-6 text-center">
                <div className="text-3xl font-mono font-black text-purple-400 mb-2">58,123</div>
                <div className="text-sm font-mono text-gray-400">TOTAL MESSAGES</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;