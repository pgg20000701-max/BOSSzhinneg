import React, { useState, useEffect } from 'react';
import { 
  Briefcase, Zap, Cpu, Palette, MessageSquare, Terminal, 
  ChevronRight, Layout, BrainCircuit, GraduationCap, Phone, Mail 
} from 'lucide-react';

const App = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 严格从PDF提取的工作与项目经历（倒序排列）
  const experiences = [
    {
      time: "2026.01 - 2026.04",
      title: "展陈设计AI提案引擎 (Vibecoding)",
      role: "SaaS 工具 | 个人实践项目",
      results: "针对前置提案痛点，抽象核心设计参数降低Prompt门槛。运用Vibecoding进行自然语言编程完成前端UI与交互，底层接入Gemini API，跑通了将出图时间压缩到分钟级的MVP闭环。"
    },
    {
      time: "2026.01 - 2026.04",
      title: "闭环化电商智能客服系统",
      role: "业务型 Agent | 个人AI项目",
      results: "基于Coze平台搭建。深度配置商品RAG模块解决大模型“幻觉”，设计多轮引导下单逻辑与异常情绪“强制转人工”节点，深度模拟真实商业环境的AI接管边界。"
    },
    {
      time: "2026.01 - 2026.04",
      title: "自动化求职助手 (BOSS面试智能体)",
      role: "自动化工作流 | 个人AI项目",
      results: "采用Dify搭建底层工作流与本地知识库(RAG)，CRISPE框架精调模型角色。配合自动化工具(youware)完成直聘平台接驳，实现基于大模型的自动化求职初筛。"
    },
    {
      time: "2023.12 - 2024.08",
      title: "上海宽创国际文化科技股份有限公司",
      role: "室内设计 / AI赋能全流程落地",
      results: "深度参与多个国家级博物馆项目。运用AI提炼展览核心概念，结合SD+PS完成空间建模前期的快速创意生成与高精度打标。整体提升项目总体交付效率30%。"
    }
  ];

  // 从PDF“个人优势”提炼的业务能力
  const capabilities = [
    {
      icon: <BrainCircuit size={24} />,
      title: "AIGC 实操与落地闭环",
      desc: "精通 Dify/Coze 引擎与 RAG 知识库，熟练掌握 Vibecoding 智能体编程落地 MVP，快速将大模型技术转化为业务生产力。"
    },
    {
      icon: <Palette size={24} />,
      title: "艺术与技术双栖背景",
      desc: "西安美院艺术与科技科班出身。熟练运用 SD、MJ 等主流AI设计工具与三维软件(SU/Rhino)，精准把控视觉与创作者工作流痛点。"
    },
    {
      icon: <Layout size={24} />,
      title: "敏锐的需求拆解与赋能",
      desc: "拥有B端项目跨界经验，擅长将复杂的客户需求与模糊创意转化为可执行产品方案，输出兼顾创新性与落地性的高可用解决方案。"
    },
    {
      icon: <Cpu size={24} />,
      title: "情绪稳定与复杂问题拆解",
      desc: "高压环境下能快速抽丝剥茧定位核心矛盾点；精准对接产品、研发等多方需求，高效协调分歧并推动方案快速迭代优化。"
    }
  ];

  return (
    <div className="min-h-screen h-screen w-full bg-[#002FA7] text-white font-sans overflow-hidden flex flex-col relative selection:bg-[#FFD700] selection:text-[#002FA7]">
      
      {/* 核心动效与滚动条隐藏 */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes breathing-border {
          0% { box-shadow: 0 0 15px rgba(255, 215, 0, 0.2), inset 0 0 15px rgba(255, 215, 0, 0.1); border-color: rgba(255, 215, 0, 0.3); }
          50% { box-shadow: 0 0 35px rgba(255, 215, 0, 0.6), inset 0 0 20px rgba(255, 215, 0, 0.3); border-color: rgba(255, 215, 0, 0.8); }
          100% { box-shadow: 0 0 15px rgba(255, 215, 0, 0.2), inset 0 0 15px rgba(255, 215, 0, 0.1); border-color: rgba(255, 215, 0, 0.3); }
        }
        .animate-breathing {
          animation: breathing-border 3.5s infinite ease-in-out;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glass-panel-hover:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 215, 0, 0.4);
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* 背景深邃光晕 */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[#3B6BFF] rounded-full mix-blend-screen filter blur-[180px] opacity-40 animate-pulse pointer-events-none" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[50vw] h-[50vw] bg-[#FFD700] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.15] animate-pulse pointer-events-none" style={{ animationDuration: '12s' }}></div>

      {/* Header */}
      <header className={`px-8 py-5 flex justify-between items-end z-10 border-b border-white/10 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div>
          <h1 className="text-4xl font-black tracking-wider flex items-center gap-4">
            潘旭 <span className="text-[#FFD700] text-3xl font-light">/</span> <span className="text-2xl font-medium text-white/90 tracking-normal">AI 产品经理</span>
          </h1>
          <div className="flex items-center gap-5 mt-3 text-sm text-white/70 font-light">
            <span className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded-md"><GraduationCap size={14} className="text-[#FFD700]" />西安美术学院 · 艺术与科技</span>
            <span className="flex items-center gap-1.5"><Phone size={14} className="text-white/50" /> 15606510701</span>
            <span className="flex items-center gap-1.5"><Mail size={14} className="text-white/50" /> 960923449@qq.com</span>
            <span>25岁 · 2年经验</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="px-5 py-2 rounded-full border border-[#FFD700]/30 text-sm flex items-center gap-2 bg-[#FFD700]/10 text-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.1)]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFD700] animate-ping relative">
              <div className="absolute inset-0 rounded-full bg-[#FFD700]"></div>
            </div>
            Target: 杭州 · AI产品经理
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 flex flex-col lg:flex-row gap-6 h-[calc(100vh-100px)] z-10 overflow-hidden">
        
        {/* 左侧：经历时间线 */}
        <section className={`lg:w-[32%] h-full flex flex-col glass-panel rounded-3xl p-6 transition-all duration-1000 delay-100 transform ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <div className="flex items-center gap-3 mb-5 shrink-0">
            <div className="p-2.5 bg-[#FFD700]/10 text-[#FFD700] rounded-xl border border-[#FFD700]/20">
              <Briefcase size={20} />
            </div>
            <h2 className="text-xl font-bold tracking-widest text-white/90">经历时间线</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto scrollbar-hide pr-3">
            <div className="relative border-l border-white/20 ml-3 space-y-7 pb-4 pt-2">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-6 group">
                  <div className="absolute w-3 h-3 bg-[#002FA7] border-2 border-white/50 rounded-full -left-[6.5px] top-1.5 group-hover:border-[#FFD700] group-hover:bg-[#FFD700] group-hover:shadow-[0_0_12px_#FFD700] transition-all duration-300"></div>
                  <div className="text-[#FFD700] text-xs font-bold mb-1.5 tracking-wider font-mono opacity-90">{exp.time}</div>
                  <h3 className="text-[1.05rem] font-bold text-white mb-1 leading-tight group-hover:text-[#FFD700] transition-colors">{exp.title}</h3>
                  <div className="text-xs text-white/50 mb-2.5 tracking-wider">{exp.role}</div>
                  <div className="text-[13px] text-white/80 leading-relaxed bg-black/20 p-3.5 rounded-xl border border-white/5 group-hover:bg-white/5 group-hover:border-white/10 transition-all duration-300">
                    <span className="text-[#FFD700] font-medium mr-1.5">成果:</span>
                    {exp.results}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 中间：业务能力矩阵 */}
        <section className={`lg:w-[33%] h-full flex flex-col glass-panel rounded-3xl p-6 transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center gap-3 mb-5 shrink-0">
            <div className="p-2.5 bg-[#FFD700]/10 text-[#FFD700] rounded-xl border border-[#FFD700]/20">
              <Zap size={20} />
            </div>
            <h2 className="text-xl font-bold tracking-widest text-white/90">业务能力矩阵</h2>
          </div>

          <div className="flex-1 grid grid-rows-4 gap-3.5 overflow-y-auto scrollbar-hide">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="glass-panel-hover rounded-2xl p-4 transition-all duration-300 group flex items-start gap-4 border border-transparent bg-white/[0.02]">
                <div className="p-3 bg-white/5 rounded-xl text-white group-hover:text-[#002FA7] group-hover:bg-[#FFD700] group-hover:scale-110 shadow-lg transition-all duration-300 shrink-0">
                  {cap.icon}
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="text-[1rem] font-bold mb-1.5 flex items-center justify-between text-white/90">
                    {cap.title}
                    <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-[#FFD700] transition-all duration-300" />
                  </h3>
                  <p className="text-[13px] text-white/60 leading-relaxed group-hover:text-white/90 transition-colors">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 右侧：AI 助理接驳台 (已接入公网版) */}
        <section className={`lg:w-[35%] h-full flex flex-col transition-all duration-1000 delay-500 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="flex items-center justify-between mb-4 px-2 shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#FFD700]/10 text-[#FFD700] rounded-xl border border-[#FFD700]/20">
                <MessageSquare size={20} />
              </div>
              <h2 className="text-xl font-bold tracking-widest text-white/90">AI 助理接驳台</h2>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#FFD700] bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
              <Terminal size={12} />
              <span className="animate-pulse">CLOUD_NODE_ACTIVE</span>
            </div>
          </div>
          
          <div className="flex-1 w-full rounded-2xl overflow-hidden relative animate-breathing glass-panel flex flex-col shadow-2xl z-20 bg-black/30">
            <div className="h-9 bg-black/70 flex items-center px-4 gap-2 border-b border-white/10 shrink-0 backdrop-blur-md">
               <div className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-red-400 cursor-pointer"></div>
               <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-yellow-400 cursor-pointer"></div>
               <div className="w-3 h-3 rounded-full bg-[#27C93F] hover:bg-green-400 cursor-pointer"></div>
               <div className="ml-auto text-[10px] text-white/30 tracking-widest font-mono flex items-center gap-2">
                 <Cpu size={10} />
                 PANXU_AI_CLOUD_v2.0
               </div>
            </div>
            
            <div className="flex-1 w-full relative bg-transparent overflow-hidden rounded-b-2xl">
              
              {/* === 这是你生成的最新公网 Dify 代码，我做了自适应样式处理 === */}
              <div className="absolute inset-0 z-10 bg-white/5">
                <iframe
                  src="https://udify.app/chatbot/CE7OQb0hhV4D3uBV"
                  style={{ width: "100%", height: "100%", minHeight: "100%" }}
                  frameBorder="0"
                  allow="microphone">
                </iframe>
              </div>
              
              {/* 底层加载提示已同步更新为连接云端 */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-0 text-white/30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#002FA7]/30 to-black/80">
                <div className="relative">
                  <BrainCircuit size={64} className="mb-6 opacity-20 text-[#FFD700]" />
                  <div className="absolute inset-0 bg-[#FFD700] blur-[40px] opacity-10 rounded-full animate-ping"></div>
                </div>
                <p className="text-sm font-mono text-center px-8 text-white/40 leading-relaxed">
                  <span className="text-[#FFD700] text-base tracking-widest font-bold">AWAITING CLOUD STREAM</span><br/>
                  <br/>
                  Connecting to Dify Cloud Server...<br/>
                  Loading Neural Network...
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default App;