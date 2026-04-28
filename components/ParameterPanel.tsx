import { Sparkles, X, Loader2 } from 'lucide-react';
import { DesignParams } from '../App';

interface ParameterPanelProps {
  params: DesignParams;
  setParams: (params: DesignParams) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export function ParameterPanel({ params, setParams, onGenerate, isGenerating }: ParameterPanelProps) {
  const projectTypes = ['博物馆', '企业展馆', '档案馆', '商业快闪'];
  const styles = ['极简科技风', '历史厚重感', '自然生态风'];
  const materialOptions = ['金属', '玻璃', '混凝土'];

  const toggleStyle = (style: string) => {
    const newStyles = params.styles.includes(style)
      ? params.styles.filter(s => s !== style)
      : [...params.styles, style];
    setParams({ ...params, styles: newStyles });
  };

  const addMaterial = (material: string) => {
    if (!params.materials.includes(material)) {
      setParams({ ...params, materials: [...params.materials, material] });
    }
  };

  const removeMaterial = (material: string) => {
    setParams({ ...params, materials: params.materials.filter(m => m !== material) });
  };

  return (
    <section className="flex w-80 shrink-0 flex-col overflow-y-auto border border-outline-variant/10 bg-surface-container-low p-6">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="font-space-grotesk text-sm font-bold uppercase tracking-widest text-brand-cyan">参数设置</h2>
        <span className="rounded-sm bg-brand-cyan/10 px-2 py-0.5 text-[10px] font-bold text-brand-cyan">READY</span>
      </div>

      <div className="space-y-8">
        {/* Project Type */}
        <div className="space-y-4">
          <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">项目类型</label>
          <div className="grid grid-cols-2 gap-2">
            {projectTypes.map((type) => (
              <label 
                key={type} 
                className={`flex cursor-pointer items-center gap-2 text-xs transition-colors hover:text-brand-cyan ${params.projectType === type ? 'text-brand-cyan' : ''}`}
              >
                <input 
                  type="radio" 
                  name="projectType" 
                  checked={params.projectType === type}
                  onChange={() => setParams({ ...params, projectType: type })}
                  className="h-3 w-3 rounded-full border-zinc-700 bg-zinc-900 text-brand-cyan focus:ring-brand-cyan" 
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Space Style */}
        <div className="space-y-4">
          <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">空间风格</label>
          <div className="space-y-2">
            {styles.map((style) => (
              <label 
                key={style} 
                className={`flex cursor-pointer items-center gap-3 text-xs transition-colors hover:text-brand-cyan ${params.styles.includes(style) ? 'text-brand-cyan' : ''}`}
              >
                <input 
                  type="checkbox" 
                  checked={params.styles.includes(style)}
                  onChange={() => toggleStyle(style)}
                  className="h-3 w-3 rounded-sm border-zinc-700 bg-zinc-900 text-brand-cyan focus:ring-brand-cyan" 
                />
                {style}
              </label>
            ))}
          </div>
        </div>

        {/* Main Materials */}
        <div className="space-y-4">
          <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">主导材质</label>
          <div className="flex flex-wrap gap-2">
            {params.materials.map((m) => (
              <span key={m} className="flex items-center gap-2 rounded-sm border border-brand-cyan/50 bg-zinc-900 px-2 py-1 text-[10px] text-brand-cyan">
                {m} <X size={10} className="cursor-pointer" onClick={() => removeMaterial(m)} />
              </span>
            ))}
            {materialOptions.filter(m => !params.materials.includes(m)).map((m) => (
              <span 
                key={m} 
                className="cursor-pointer rounded-sm border border-outline-variant/20 bg-zinc-900 px-2 py-1 text-[10px] text-zinc-500 transition-colors hover:border-zinc-500 hover:text-zinc-300"
                onClick={() => addMaterial(m)}
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Lighting */}
        <div className="space-y-4">
          <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">灯光与氛围</label>
          <select 
            value={params.lighting}
            onChange={(e) => setParams({ ...params, lighting: e.target.value })}
            className="w-full border-x-0 border-t-0 border-b border-outline-variant bg-zinc-900 py-2 text-xs text-zinc-400 focus:border-brand-cyan focus:ring-0"
          >
            <option>Spotlight</option>
            <option>自然光漫反射</option>
            <option>Cyberpunk Neon</option>
            <option>Holographic</option>
          </select>
        </div>

        {/* Special Needs */}
        <div className="space-y-4">
          <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">特殊需求</label>
          <textarea 
            className="w-full resize-none rounded-sm border border-outline-variant/20 bg-zinc-900 p-3 text-xs text-on-surface placeholder:text-zinc-600 focus:border-brand-cyan/50 focus:outline-none" 
            placeholder="请输入具体的展览需求..." 
            rows={3} 
            value={params.needs}
            onChange={(e) => setParams({ ...params, needs: e.target.value })}
          />
        </div>

        <button 
          onClick={onGenerate}
          disabled={isGenerating}
          className="flex w-full items-center justify-center gap-3 bg-brand-cyan py-4 text-xs font-bold uppercase tracking-widest text-zinc-950 transition-all hover:bg-brand-cyan/80 disabled:opacity-50"
        >
          {isGenerating ? (
            <Loader2 className="animate-spin" size={14} />
          ) : (
            <>
              <span>生成提案</span>
              <Sparkles size={14} />
            </>
          )}
        </button>
      </div>
    </section>
  );
}
