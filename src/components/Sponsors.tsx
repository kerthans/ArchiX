// components/Sponsors.tsx
'use client'

import { motion } from 'framer-motion'

const sponsors = [
  {
    tier: "钻石赞助商",
    description: "核心技术支持伙伴",
    logos: [
      { name: "TechCorp", description: "全球领先的科技企业" },
      { name: "InnovateLab", description: "创新技术研究中心" }
    ]
  },
  {
    tier: "金牌赞助商",
    description: "重要合作伙伴",
    logos: [
      { name: "StartupHub", description: "创业孵化基地" },
      { name: "DevCloud", description: "云服务提供商" },
      { name: "CodeForge", description: "开发工具领导者" }
    ]
  },
  {
    tier: "战略合作伙伴",
    description: "生态共建伙伴",
    logos: [
      { name: "EduTech", description: "教育科技公司" },
      { name: "VentureCapital", description: "风险投资机构" },
      { name: "MediaGroup", description: "媒体集团" },
      { name: "ResearchLab", description: "研究实验室" }
    ]
  }
]

export function Sponsors() {
  return (
    <section id="sponsors" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[hsl(var(--color-background))] opacity-90" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block material-steel px-6 py-2 rounded-full mb-8">
            <span className="text-sm text-[hsl(var(--color-accent))]">
              合作伙伴
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text inline-block font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">强大的生态支持</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            感谢各位合作伙伴的大力支持
          </p>
        </motion.div>

        <div className="space-y-16">
          {sponsors.map((tier, tierIndex) => (
            <motion.div
              key={tierIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: tierIndex * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white/90 mb-2">
                  {tier.tier}
                </h3>
                <p className="text-white/60">{tier.description}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {tier.logos.map((logo, logoIndex) => (
                  <motion.div
                    key={logoIndex}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <div className="material-acrylic rounded-xl p-6 h-full hover:bg-white/10 transition-all duration-300">
                      <h4 className="text-lg font-semibold text-white/90 mb-2">
                        {logo.name}
                      </h4>
                      <p className="text-sm text-white/60">
                        {logo.description}
                      </p>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[hsl(var(--color-accent))] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}