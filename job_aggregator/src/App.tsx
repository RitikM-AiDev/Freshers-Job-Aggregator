import React from 'react';
import { Sparkles, TrendingUp, MapPin, Zap } from 'lucide-react';
import './index.css';

const App: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [statusMessage, setStatusMessage] = React.useState('');
  const handleStartSearch = async () => {
  setStatusMessage('Please wait... Navigating Internshala and filtering roles.');
  setLoading(true);
  console.log('Starting search...');
  try {
    const response = await fetch("http://127.0.0.1:8000/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "request": "ok" })
    });

    if (response.ok) {
      setStatusMessage('Search complete! Preparing your download...');
      console.log("Done!!");
      const blob = await response.blob(); 
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "job.csv";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    }
  } catch (e) {
    setStatusMessage('An error occurred during the search.');
    console.log(e);
  } finally {
    setLoading(false); 
    setTimeout(() => setStatusMessage(''), 5000);
  }
};

  const badges = [
    { label: 'Internships', icon: Sparkles, className: 'badge-animate-1' },
    { label: 'Remote', icon: MapPin, className: 'badge-animate-2' },
    { label: 'SDE', icon: Zap, className: 'badge-animate-3' },
    { label: 'AI/ML', icon: TrendingUp, className: 'badge-animate-4' },
    { label: '2026 Batch', icon: Sparkles, className: 'badge-animate-5' },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0f] flex items-center justify-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 animated-grid" />
      </div>

      {/* Glowing Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[120px] animate-float-delayed" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500/15 rounded-full blur-[100px] animate-float-slow" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="text-center space-y-8 md:space-y-12">
          {/* Floating Badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            {badges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden ${badge.className}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-default">
                    <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400" />
                    <span className="text-xs md:text-sm font-medium text-gray-200">
                      {badge.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Heading with Animated Gradient */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight fade-in-heading">
              <span className="inline-block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent gradient-text">
                Find Today's Freshers
              </span>
              <br />
              <span className="text-cyan-400">Jobs Faster</span>
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed fade-in-subheading">
              Aggregate and discover the latest fresher opportunities from
              multiple job platforms in one place.
            </p>
          </div>

          {/* Glassmorphism Card with CTA */}
          <div className="max-w-md mx-auto fade-in-cta">
            <div className="relative group">
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-gradient-x" />

              {/* Glass Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                {/* CTA Button */}
                  <div className="max-w-md mx-auto fade-in-cta">
  {/* Status Alert for the User */}
  {loading && (
    <div className="mb-4 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-center animate-pulse">
      <p className="text-xs text-cyan-300 font-medium">
        🚀 Please wait... Our agent is scanning Internshala. 
        <br />
        This usually takes about 40-60 seconds.
      </p>
    </div>
  )}

  <div className="relative group">
    {/* Keep the outer glow bright even when loading */}
    <div className={`absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-2xl blur-lg transition-opacity duration-500 animate-gradient-x ${loading ? 'opacity-40' : 'opacity-30 group-hover:opacity-50'}`} />

    <button
      style={{ cursor: loading ? "wait" : "pointer" }}
      onClick={handleStartSearch}
      disabled={loading}
      className={`relative group/btn w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base md:text-lg font-semibold text-white shadow-lg shadow-cyan-500/50 transition-all duration-300 ${!loading && 'hover:shadow-xl hover:shadow-cyan-500/60 hover:scale-[1.02]'} active:scale-[0.98]`}
    >
      {/* Button Shine Effect - Constant during loading */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-opacity duration-500 ${loading ? 'opacity-100 animate-shine' : 'opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-shine'}`} />
      
      <span className="relative flex items-center justify-center gap-2">
        {loading ? (
          <>
            <span className="animate-pulse">Searching Internshala...</span>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </>
        ) : (
          <>
            Start Today's Search
            <Zap className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
          </>
        )}
      </span>
    </button>
  </div>
</div>

                {/* Stats/Features */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center gap-6 text-xs md:text-sm text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span>Live Updates</span>
                    </div>
                    <div className="w-px h-4 bg-white/10" />
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                      <span>500+ Jobs Daily</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-xs md:text-sm text-gray-500 fade-in-trust">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>AI-Powered Matching</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>Pan-India Coverage</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400" />
              <span>Real-Time Alerts</span>
            </div>
          </div>
          
        </div>
        
      </div>
      {/* Footer Section */}
      <footer className="absolute bottom-6 w-full text-center space-y-2 z-20">
        <div className="flex items-center justify-center gap-4 text-gray-500 text-xs md:text-sm">
          <p>© 2026 Freshers Job Aggregator. All rights reserved.</p>
          <div className="w-px h-3 bg-white/10" />
          <p className="flex items-center gap-1.5">
            Developed with <span className="text-red-500/80 animate-pulse">❤️</span> by 
            <span className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors cursor-default">
              Ritik M
            </span>
          </p>
        </div>
      </footer>
    </div>
    
    
  );
};

export default App;