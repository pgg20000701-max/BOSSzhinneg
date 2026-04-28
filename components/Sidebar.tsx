import { LayoutGrid, Sparkles, Box, Archive, HelpCircle, Terminal, Compass } from 'lucide-react';

export function Sidebar() {
  const menuItems = [
    { icon: Compass, label: '工作区', active: true },
    { icon: Sparkles, label: '生成式 AI' },
    { icon: Box, label: '3D 资产' },
    { icon: LayoutGrid, label: '材质库' },
    { icon: Archive, label: '归档' },
  ];

  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("该功能正在开发中 (Coming soon)");
  };

  return (
    <aside className="fixed left-0 top-0 z-[60] flex h-full w-64 flex-col border-r border-zinc-800/40 bg-zinc-950 py-8">
      <div className="mb-10 px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-brand-cyan">
            <Compass className="text-zinc-950" size={20} />
          </div>
          <div>
            <h1 className="font-space-grotesk text-lg font-black tracking-widest text-brand-cyan uppercase">LANJING</h1>
            <p className="font-space-grotesk text-[10px] tracking-widest text-zinc-500 uppercase">AI ENGINE v1.0</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href="#"
            onClick={item.active ? undefined : handleComingSoon}
            className={`flex items-center px-6 py-3 transition-all duration-200 ${
              item.active 
                ? 'border-r-2 border-brand-cyan bg-zinc-900/50 text-brand-cyan' 
                : 'text-zinc-500 hover:bg-zinc-900/30'
            }`}
          >
            <item.icon className="mr-4" size={20} />
            <span className="font-space-grotesk text-xs font-bold uppercase tracking-widest">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-4 border-t border-zinc-800/40 px-6 pt-4">
        <button 
          onClick={handleComingSoon}
          className="w-full rounded-sm bg-brand-cyan py-3 font-bold text-zinc-950 transition-colors hover:bg-brand-cyan/80 active:scale-95"
        >
          新建展览
        </button>
      </div>

      <div className="mt-auto space-y-4 px-6">
        <a href="#" onClick={handleComingSoon} className="flex items-center text-zinc-500 transition-colors hover:text-brand-cyan">
          <HelpCircle size={14} className="mr-3" />
          <span className="font-space-grotesk text-[10px] uppercase tracking-widest">帮助中心</span>
        </a>
        <a href="#" onClick={handleComingSoon} className="flex items-center text-zinc-500 transition-colors hover:text-brand-cyan">
          <Terminal size={14} className="mr-3" />
          <span className="font-space-grotesk text-[10px] uppercase tracking-widest">API 文档</span>
        </a>
      </div>
    </aside>
  );
}
