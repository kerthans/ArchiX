// components/About.tsx
'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: "创新精神",
    description: "突破常规思维，激发无限创意可能",
    icon: "💡",
    bgClass: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "极客文化",
    description: "拥抱开源精神，用技术改变世界",
    icon: "⚡",
    bgClass: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "跨界合作",
    description: "汇聚多元思维，碰撞创新火花",
    icon: "🤝",
    bgClass: "from-pink-500/20 to-orange-500/20"
  }
]

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
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
              关于我们
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text inline-block font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">重新定义创新</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            不只是比赛，更是一场改变世界的创新之旅
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="material-frosted rounded-xl p-8 h-full relative overflow-hidden group-hover:bg-white/10 transition-all duration-500">
                {/* 背景渐变 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* 内容 */}
                <div className="relative z-10">
                  <span className="text-4xl mb-6 block">{feature.icon}</span>
                  <h3 className="text-xl font-bold mb-4 text-white/90">
                    {feature.title}
                  </h3>
                  <p className="text-white/60">
                    {feature.description}
                  </p>
                </div>

                {/* 装饰线条 */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}