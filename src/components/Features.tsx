// components/Features.tsx
'use client'

import { motion } from 'framer-motion'
import { Card } from './ui/card'

const features = [
  {
    title: "48小时极限开发",
    description: "在有限时间内，将创意转化为现实",
    icon: "⚡",
    details: ["团队协作", "导师指导", "资源支持"]
  },
  {
    title: "创新工作坊",
    description: "一流导师带你突破思维局限",
    icon: "🎯",
    details: ["头脑风暴", "方案优化", "技术指导"]
  },
  {
    title: "展示与路演",
    description: "向业界展示你的创新成果",
    icon: "🚀",
    details: ["项目展示", "创投对接", "媒体曝光"]
  },
  {
    title: "创业孵化",
    description: "优秀项目获得持续支持",
    icon: "🌱",
    details: ["资金支持", "导师辅导", "资源对接"]
  }
]

export function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
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
              活动特色
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text inline-block font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">精心打造的体验</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            为创新者提供最好的支持
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="material-acrylic p-8 h-full hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white/90">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-white/60"
                    >
                      <div className="w-1 h-1 rounded-full bg-[hsl(var(--color-accent))]" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}