import { History, Share2, Maximize2, Copy } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

// A curated list of reliable, always-available architecture images as fallbacks
const STABLE_ARCH_IMAGES = [
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80',
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
  'https://images.unsplash.com/photo-1553949345-eb786bb3f7ba?w=1200&q=80',
  'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=1200&q=80',
];

const STABLE_SECONDARY_IMAGES = [
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
];

// Robust image component: if primary src fails, cycles through stable fallback list
function FallbackImage({
  src,
  alt,
  className,
  fallbackList,
}: {
  src: string;
  alt: string;
  className: string;
  fallbackList: string[];
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [fallbackIndex, setFallbackIndex] = useState(0);

  // When the primary src changes (after new generation), reset to new src
  useEffect(() => {
    setCurrentSrc(src);
    setFallbackIndex(0);
  }, [src]);

  const handleError = () => {
    const nextIndex = fallbackIndex % fallbackList.length;
    setCurrentSrc(fallbackList[nextIndex]);
    setFallbackIndex(i => i + 1);
  };

  return (
    <motion.img
      key={currentSrc}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}

interface WorkspaceProps {
  aiOutput: {
    midjourney: string;
    stableDiffusion: string;
    complexity: string;
    confidence: string;
    imageUrl: string;
    secondaryImageUrl: string;
    isGenerating: boolean;
  };
}

export function Workspace({ aiOutput }: WorkspaceProps) {
  return (
    <section className="flex flex-1 flex-col gap-6 overflow-hidden">
      {/* Status Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="font-space-grotesk text-2xl font-bold text-on-surface">创意工作台</h2>
          <div className="flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/10 px-3 py-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cyan" />
            <span className="text-[10px] font-bold uppercase tracking-tighter text-brand-cyan">
              {aiOutput.isGenerating ? 'AI 正在思考...' : 'AI 引擎 v1.0 已连接'}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => alert('功能正在开发中 (Coming soon)')}
            className="border border-outline-variant/20 bg-surface-container-high p-2 text-zinc-400 transition-colors hover:text-white"
          >
            <History size={18} />
          </button>
          <button
            onClick={() => alert('功能正在开发中 (Coming soon)')}
            className="border border-outline-variant/20 bg-surface-container-high p-2 text-zinc-400 transition-colors hover:text-white"
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid flex-1 grid-cols-12 grid-rows-6 gap-6 min-h-0">
        {/* Main Preview Section */}
        <div className="group relative col-span-8 row-span-4 overflow-hidden rounded-sm border border-outline-variant/10 bg-zinc-900">
          <FallbackImage
            src={aiOutput.imageUrl}
            alt="Main Architecture"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            fallbackList={STABLE_ARCH_IMAGES}
          />
          {aiOutput.isGenerating && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-cyan/20 border-t-brand-cyan" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <div className="mb-2 inline-block bg-brand-cyan px-2 py-0.5 text-[10px] font-bold text-zinc-950 uppercase">
              渲染编号_001
            </div>
            <h3 className="font-space-grotesk text-2xl font-bold text-white">空间流转概念</h3>
            <p className="max-w-md text-xs text-zinc-400">
              Minimalist architectural approach leveraging raw concrete and adaptive holographic interfaces.
            </p>
          </div>
          <button
            onClick={() => alert('功能正在开发中 (Coming soon)')}
            className="absolute top-6 right-6 border border-white/10 bg-zinc-950/80 p-2 text-white backdrop-blur-md opacity-0 transition-opacity group-hover:opacity-100"
          >
            <Maximize2 size={18} />
          </button>
        </div>

        {/* Secondary Preview */}
        <div className="group relative col-span-4 row-span-2 overflow-hidden rounded-sm border border-outline-variant/10 bg-zinc-900">
          <FallbackImage
            src={aiOutput.secondaryImageUrl}
            alt="Secondary Architecture"
            className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
            fallbackList={STABLE_SECONDARY_IMAGES}
          />
          {aiOutput.isGenerating && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-brand-cyan/20 border-t-brand-cyan" />
            </div>
          )}
          <div className="absolute inset-0 bg-brand-cyan/20 mix-blend-overlay" />
        </div>

        {/* Midjourney Prompt */}
        <div className="col-span-4 row-span-2 flex flex-col justify-between border border-outline-variant/10 bg-surface-container-high p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Midjourney 提示词</span>
            <Copy
              size={12}
              className="cursor-pointer text-brand-cyan hover:text-white"
              onClick={() => {
                navigator.clipboard.writeText(aiOutput.midjourney);
                alert('已复制 Midjourney 提示词到剪贴板');
              }}
            />
          </div>
          <div className="rounded-sm border border-zinc-800 bg-zinc-950 p-3 flex-1 overflow-y-auto">
            <code className="block font-mono text-[10px] leading-relaxed text-zinc-400">
              {aiOutput.midjourney || '点击"生成提案"按钮开始生成...'}
            </code>
          </div>
        </div>

        {/* Stable Diffusion Prompt */}
        <div className="col-span-4 row-span-2 flex flex-col justify-between border border-outline-variant/10 bg-surface-container-high p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Stable Diffusion 提示词</span>
            <Copy
              size={12}
              className="cursor-pointer text-brand-cyan hover:text-white"
              onClick={() => {
                navigator.clipboard.writeText(aiOutput.stableDiffusion);
                alert('已复制 Stable Diffusion 提示词到剪贴板');
              }}
            />
          </div>
          <div className="rounded-sm border border-zinc-800 bg-zinc-950 p-3 flex-1 overflow-y-auto">
            <code className="block font-mono text-[10px] leading-relaxed text-zinc-400">
              {aiOutput.stableDiffusion || '点击"生成提案"按钮开始生成...'}
            </code>
          </div>
        </div>

        {/* Details Section */}
        <div className="col-span-8 row-span-2 flex flex-col justify-center border border-outline-variant/10 bg-zinc-950 p-6">
          <div className="grid grid-cols-4 gap-8">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500">复杂度</span>
              <p className="font-space-grotesk text-xl text-on-surface">{aiOutput.complexity || '—'}</p>
              <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-900">
                <motion.div initial={{ width: 0 }} animate={{ width: '80%' }} className="h-full bg-brand-cyan" />
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500">灯光</span>
              <p className="font-space-grotesk text-xl text-on-surface">Natural</p>
              <p className="text-[10px] text-zinc-600">Adaptive exposure</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500">材质</span>
              <p className="font-space-grotesk text-xl text-on-surface">Composite</p>
              <p className="text-[10px] text-zinc-600">Concrete + Metal</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500">AI 置信度</span>
              <p className="font-space-grotesk text-xl text-brand-cyan">{aiOutput.confidence || '—'}</p>
              <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-900">
                <motion.div
                  key={aiOutput.confidence}
                  initial={{ width: 0 }}
                  animate={{ width: aiOutput.confidence }}
                  className="h-full bg-gradient-to-r from-violet-500 to-brand-cyan"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
