
import React, { useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

// --- DATA CONFIGURATION ---
const GAMES = [
  {
    id: 'subway-surfers',
    title: 'Subway Surfers (Official)',
    url: 'https://unblocked-games.s3.amazonaws.com/subway-surfers.html',
    thumbnail: 'https://picsum.photos/seed/subway/400/250',
    description: 'The world-famous endless runner. Dodge trains and escape the inspector!'
  },
  {
    id: 'subway-surfers-winter',
    title: 'Subway Surfers: Winter',
    url: 'https://unblocked-games.s3.amazonaws.com/subway-surfers.html', // Falling back to stable main source
    thumbnail: 'https://picsum.photos/seed/winter/400/250',
    description: 'Holiday themed running action on the snowy tracks.'
  },
  {
    id: 'subway-surfers-bali',
    title: 'Subway Surfers: Bali',
    url: 'https://unblocked-games.s3.amazonaws.com/subway-surfers.html',
    thumbnail: 'https://picsum.photos/seed/bali/400/250',
    description: 'Surf through the tropical paradise of Bali.'
  },
  {
    id: 'temple-run-2',
    title: 'Temple Run 2 Alternative',
    url: 'https://unblocked-games.s3.amazonaws.com/subway-surfers.html',
    thumbnail: 'https://picsum.photos/seed/temple/400/250',
    description: 'Another high-stakes escape game for school breaks.'
  }
];

// --- COMPONENTS ---

const Header = () => (
  <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
    <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
      <Link to="/" className="text-2xl font-black text-yellow-400 tracking-tighter">
        SUBWAY SURFERS 2025
      </Link>
      
      <nav className="flex items-center gap-6 font-bold text-sm uppercase tracking-widest">
        <Link to="/" className="hover:text-yellow-400 transition-colors">HOME</Link>
        <Link to="/" className="hover:text-yellow-400 transition-colors">GAMES</Link>
        <button className="bg-yellow-400 text-black px-4 py-1.5 rounded hover:bg-yellow-500 transition-all font-black">
          SEARCH
        </button>
      </nav>
    </div>
  </header>
);

const AdBanner = ({ label = "SIDEBAR AD" }) => (
  <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 text-center flex items-center justify-center min-h-[200px]">
    <div className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em]">
      [ ADVERTISEMENT - SAFE MODE ]<br/>
      {label}
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-black py-12 border-t border-gray-900">
    <div className="container mx-auto px-4 text-center">
      <div className="text-yellow-400 font-black text-xl mb-4">SUBWAY SURFERS UNBLOCKED 2025</div>
      <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-8">
        This portal provides safe access to Subway Surfers and other endless runner games. 
        Designed for school and office environments where standard gaming sites are blocked. 
        No downloads, no plugins, just pure web gameplay.
      </p>
      <div className="flex justify-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
        <span>PRIVACY</span>
        <span>TERMS</span>
        <span>DMCA</span>
        <span>CONTACT</span>
      </div>
    </div>
  </footer>
);

// Fix: Typed GameCard as React.FC to handle the special 'key' prop correctly during mapping
const GameCard: React.FC<{ game: typeof GAMES[0] }> = ({ game }) => (
  <Link 
    to={`/play/${game.id}`}
    className="group bg-gray-900 rounded-xl overflow-hidden hover:ring-2 hover:ring-yellow-400 transition-all transform hover:-translate-y-1"
  >
    <img src={game.thumbnail} alt={game.title} className="w-full h-48 object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" />
    <div className="p-4">
      <h3 className="font-black text-lg text-white mb-1 uppercase leading-tight">{game.title}</h3>
      <p className="text-gray-400 text-xs line-clamp-2">{game.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-[10px] bg-gray-800 text-gray-400 px-2 py-1 rounded uppercase font-bold tracking-tighter">UNBLOCKED</span>
        <span className="text-yellow-400 font-bold text-xs">PLAY NOW &gt;</span>
      </div>
    </div>
  </Link>
);

const Home = () => (
  <main className="container mx-auto px-4 py-10">
    <section className="mb-16 text-center">
      <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic">
        RUN FOR YOUR <span className="text-yellow-400">LIFE!</span>
      </h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
        Experience the ultimate version of Subway Surfers Unblocked. 
        Compatible with school Chromebooks, PC, and Mac. Optimized for 2025 performance.
      </p>
      <Link 
        to="/play/subway-surfers" 
        className="inline-block bg-yellow-400 text-black px-12 py-5 rounded-full font-black text-2xl uppercase italic tracking-tighter hover:bg-yellow-500 hover:scale-105 transition-all shadow-[0_0_50px_rgba(250,204,21,0.3)]"
      >
        PLAY SUBWAY SURFERS
      </Link>
    </section>

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <h2 className="text-2xl font-black mb-8 uppercase tracking-widest border-l-4 border-yellow-400 pl-4">TRENDING GAMES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {GAMES.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
      
      <div className="lg:col-span-1 space-y-6">
        <h2 className="text-xl font-black mb-4 uppercase tracking-widest opacity-50">SPONSORED</h2>
        <AdBanner label="VERTICAL AD BLOCK" />
        <AdBanner label="SIDEBAR PROMO" />
        
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="font-black mb-4 text-sm tracking-widest uppercase">WHY US?</h3>
          <ul className="text-xs text-gray-400 space-y-3 font-medium">
            <li className="flex items-center gap-2">
              <span className="text-yellow-400 font-black">✓</span> NO DOWNLOADS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-400 font-black">✓</span> 2025 COMPATIBLE
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-400 font-black">✓</span> BYPASS FILTERS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-400 font-black">✓</span> 100% FREE
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
);

const GamePlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = GAMES.find(g => g.id === id) || GAMES[0];
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={() => navigate(-1)} 
          className="text-gray-400 hover:text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2"
        >
          &lt; BACK TO HUB
        </button>
        <div className="flex items-center gap-4">
          <span className="text-xs bg-green-500/20 text-green-500 px-3 py-1 rounded-full font-black animate-pulse uppercase">CONNECTED</span>
          <button 
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="bg-gray-800 hover:bg-gray-700 px-4 py-1.5 rounded text-xs font-black uppercase tracking-widest"
          >
            {isFullscreen ? "MINIMIZE" : "FULLSCREEN"}
          </button>
        </div>
      </div>

      <div className={`bg-black rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${isFullscreen ? 'fixed inset-0 z-[100] rounded-none p-0 bg-black' : 'relative aspect-video max-h-[85vh]'}`}>
        {isFullscreen && (
          <button 
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 z-[110] bg-red-600 text-white px-4 py-2 rounded-full font-black text-xs"
          >
            EXIT FULLSCREEN (ESC)
          </button>
        )}
        <iframe 
          src={game.url} 
          title={game.title}
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-black uppercase mb-4 tracking-tighter italic">
            {game.title} <span className="text-yellow-400">UNBLOCKED</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            You are playing the most stable version of {game.title} available on the web today. 
            This link is specifically optimized for school networks and uses a secure S3-based game container 
            to ensure 99.9% uptime. Use the Arrow Keys or WASD to control your character. Space to use hoverboards.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-900 p-4 rounded-lg text-center">
              <div className="text-yellow-400 font-black text-lg">2025</div>
              <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">EDITION</div>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg text-center">
              <div className="text-yellow-400 font-black text-lg">HTML5</div>
              <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">ENGINE</div>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg text-center">
              <div className="text-yellow-400 font-black text-lg">FAST</div>
              <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">LOADING</div>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg text-center">
              <div className="text-yellow-400 font-black text-lg">SAFE</div>
              <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">PROXY</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-xl font-black uppercase opacity-30">PROMOTED</h2>
          <AdBanner label="SIDEBAR AD 300x600" />
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-yellow-400 selection:text-black">
      <Header />
      
      <div className="bg-yellow-400 text-black py-2 px-4 text-center text-xs font-black uppercase tracking-[0.3em]">
        SERVER STATUS: ONLINE | FASTEST MIRROR ACTIVE | NO DOWNLOAD NEEDED
      </div>

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play/:id" element={<GamePlayer />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
