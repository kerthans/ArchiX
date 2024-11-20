// components/Hero.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './ui/button'

export function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景图案 */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* 渐变光效 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[hsl(var(--color-primary))] opacity-20 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-[hsl(var(--color-accent))] opacity-20 blur-[100px]" />
      </div>
      
      {/* 几何装饰 */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-lg transform rotate-45" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-white/10 rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 border border-white/10 rounded-lg transform -rotate-12" />
      </motion.div>

      {/* 主要内容 */}
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* 标题装饰 */}
            <div className="inline-block material-steel px-4 py-2 rounded-full">
              <span className="text-sm text-[hsl(var(--color-accent))]">
                2024 黑客马拉松
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl tracking-tight">
                <span className="gradient-text inline-block font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
                  Get Start
                </span>
              </h1>
              <div className="text-3xl md:text-4xl text-white/80 font-medium">
                从这里开始
              </div>
            </div>

            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              48小时，无限可能。与来自全球的创客一起，
              定义下一个改变世界的创意。
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                className="material-acrylic px-8 py-6 rounded-lg text-lg hover:bg-white/20 transition-all duration-300"
              >
                立即报名
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 rounded-lg text-lg border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                了解更多
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 底部装饰 */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="material-frosted px-4 py-2 rounded-full">
          <span className="text-sm text-white/60">向下滚动探索更多</span>
        </div>
      </motion.div>
    </section>
  )
}