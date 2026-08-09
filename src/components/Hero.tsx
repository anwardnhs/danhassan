import { Scroll, Send } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="crown"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-stone-900 to-red-950 pt-16"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <div className="inline-block px-4 py-2 border border-amber-600/50 bg-black/30 backdrop-blur-sm">
            <p className="font-lato text-amber-600 text-xs sm:text-sm tracking-widest uppercase">
              By Right of Succession
            </p>
          </div>
        </div>

        <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wide leading-tight">
          THE QUEEN OF THE
          <br />
          SEVEN KINGDOMS
        </h1>

        <p className="font-lato text-stone-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          By appointment of King Viserys I, Her Grace Queen Rhaenyra calls upon all loyal houses to uphold their oaths.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="flex items-center space-x-2 bg-red-900 hover:bg-red-800 text-white font-lato px-6 py-3 text-sm font-semibold transition-all hover:scale-105 w-full sm:w-auto justify-center">
            <Scroll className="w-4 h-4" />
            <span>View Royal Decrees</span>
          </button>
          <button className="flex items-center space-x-2 border-2 border-stone-300 hover:border-white text-white font-lato px-6 py-3 text-sm font-semibold transition-all hover:scale-105 w-full sm:w-auto justify-center">
            <Send className="w-4 h-4" />
            <span>Petition the Throne</span>
          </button>
        </div>

        <div className="mt-16 pt-8 border-t border-red-900/30">
          <p className="font-lato text-stone-400 text-xs sm:text-sm italic">
            "Fire and Blood"
          </p>
        </div>
      </div>
    </section>
  );
}
