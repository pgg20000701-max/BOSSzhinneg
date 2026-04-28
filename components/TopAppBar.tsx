import { Search, Bell, Settings } from 'lucide-react';

export function TopAppBar() {
  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("该功能正在开发中 (Coming soon)");
  };

  return (
    <header className="fixed top-0 right-0 left-64 z-50 flex h-16 items-center justify-between border-b border-zinc-800/40 bg-zinc-950/90 px-6 backdrop-blur-xl">
      <div className="flex items-center gap-8">
        <span className="font-space-grotesk text-xl font-bold tracking-[0.2em] text-brand-cyan uppercase">
          灵境空间 LANJING SPACE
        </span>
        <nav className="hidden gap-6 md:flex">
          <a href="#" onClick={handleComingSoon} className="font-space-grotesk tracking-tight text-zinc-500 transition-colors hover:text-brand-cyan">项目</a>
          <a href="#" onClick={handleComingSoon} className="font-space-grotesk tracking-tight text-zinc-500 transition-colors hover:text-brand-cyan">库</a>
          <a href="#" onClick={handleComingSoon} className="font-space-grotesk tracking-tight text-zinc-500 transition-colors hover:text-brand-cyan">渲染队列</a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={14} />
          <input
            className="w-64 rounded-sm border border-zinc-800 bg-zinc-900 py-1.5 pl-9 pr-4 text-xs text-on-surface focus:border-brand-cyan/50 focus:outline-none"
            placeholder="搜索参数..."
            type="text"
          />
        </div>
        
        <div className="flex items-center gap-2 border-l border-zinc-800 pl-4 text-zinc-500">
          <button onClick={handleComingSoon} className="p-1.5 transition-colors hover:text-brand-cyan">
            <Bell size={20} />
          </button>
          <button onClick={handleComingSoon} className="p-1.5 transition-colors hover:text-brand-cyan">
            <Settings size={20} />
          </button>
          <div className="ml-2 h-8 w-8 overflow-hidden rounded-full border border-brand-cyan/20">
            <img 
              alt="Avatar" 
              className="h-full w-full object-cover cursor-pointer"
              onClick={handleComingSoon}
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" 
            />
          </div>
        </div>
        
        <button onClick={handleComingSoon} className="rounded-sm border border-brand-cyan/30 bg-zinc-900 px-4 py-1.5 text-xs text-brand-cyan transition-all hover:bg-brand-cyan hover:text-zinc-950">
          导出
        </button>
      </div>
    </header>
  );
}
