'use client'

import { useEffect, useRef, useMemo, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { Button } from './ui/button'
import { IconArrowDown, IconRocket, IconBrandGithub, IconBrain, IconCode, IconBolt, IconArrowUpRight } from '@tabler/icons-react'

const CONFIG = {
  particles: {
    count: 100, // 增加粒子数量
    baseSize: 1,
    addedSize: 1.5,
    baseSpeed: 0.4,
    addedSpeed: 0.3,
    opacity: { min: 0.1, max: 0.5 },
    connectDistance: 120,
    lineOpacity: 0.2
  },

  colors: {
    particle: 'rgba(255, 255, 255, 0.8)',
    gradientStart: 'hsl(var(--color-primary))',
    gradientMiddle: 'hsl(var(--color-secondary))',
    gradientEnd: 'hsl(var(--color-accent))',
    grid: 'rgba(255, 255, 255, 0.03)' // 网格线颜色
  },

  animation: {
    floating: {
      duration: 6,
      delay: 0.1
    },
    spotlight: {
      duration: 8,
      delay: 0.2
    }
  },

  content: {
    badge: '2024 创新黑客马拉松',
    mainTitle: '创意无限',
    subTitle: 'CODE THE FUTURE',
    description: '48小时，与全球创客一起，定义未来，改变世界。',
    primaryButton: '立即报名',
    secondaryButton: '了解更多',
    scrollText: '向下滚动探索更多',
    // 添加链接配置
    links: {
      register: 'https://xi1uh4zvhbc.feishu.cn/share/base/form/shrcnrRKz3dPn27pdC9FGHDEZlj',
      learnMore: 'https://xi1uh4zvhbc.feishu.cn/docx/KE0vdOi6qoDHdDx1MmFcacgHnug?from=from_copylink'
    }
  },

  // 添加几何图形配置
  geometricShapes: {
    count: 28,
    types: ['circle', 'square', 'triangle'],
    minSize: 25,
    maxSize: 80
  }
}

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

interface GeometricShape {
  x: number
  y: number
  size: number
  type: string
  rotation: number
  opacity: number
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLCanvasElement>(null)
  const isInView = useInView(ref)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const y = useTransform(smoothProgress, [0, 1], ['0%', '50%'])
  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0])

  // 绘制网格背景
  useEffect(() => {
    if (!gridRef.current) return
    const ctx = gridRef.current.getContext('2d')
    if (!ctx) return

    const drawGrid = () => {
      const canvas = gridRef.current!
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)

      const gridSize = 30
      ctx.strokeStyle = CONFIG.colors.grid
      ctx.lineWidth = 1

      // 绘制垂直线
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // 绘制水平线
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    drawGrid()
    window.addEventListener('resize', drawGrid)
    return () => window.removeEventListener('resize', drawGrid)
  }, [])

  // 增强的粒子系统
  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }
    
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    const particles: Particle[] = Array.from({ length: CONFIG.particles.count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: CONFIG.particles.baseSize + Math.random() * CONFIG.particles.addedSize,
      speedX: (Math.random() - 0.5) * CONFIG.particles.baseSpeed,
      speedY: (Math.random() - 0.5) * CONFIG.particles.baseSpeed,
      opacity: CONFIG.particles.opacity.min + Math.random() * (CONFIG.particles.opacity.max - CONFIG.particles.opacity.min)
    }))

    // 创建几何图形
    const shapes: GeometricShape[] = Array.from({ length: CONFIG.geometricShapes.count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: CONFIG.geometricShapes.minSize + Math.random() * (CONFIG.geometricShapes.maxSize - CONFIG.geometricShapes.minSize),
      type: CONFIG.geometricShapes.types[Math.floor(Math.random() * CONFIG.geometricShapes.types.length)],
      rotation: Math.random() * Math.PI * 2,
      opacity: 0.05 + Math.random() * 0.1
    }))

    let animationFrameId: number

    const drawShape = (shape: GeometricShape) => {
      if (!ctx) return
      ctx.save()
      ctx.translate(shape.x, shape.y)
      ctx.rotate(shape.rotation)
      ctx.strokeStyle = `rgba(255, 255, 255, ${shape.opacity})`
      ctx.lineWidth = 1

      switch (shape.type) {
        case 'circle':
          ctx.beginPath()
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2)
          ctx.stroke()
          break
        case 'square':
          ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
          break
        case 'triangle':
          ctx.beginPath()
          ctx.moveTo(-shape.size / 2, shape.size / 2)
          ctx.lineTo(shape.size / 2, shape.size / 2)
          ctx.lineTo(0, -shape.size / 2)
          ctx.closePath()
          ctx.stroke()
          break
      }
      ctx.restore()
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // 绘制几何图形
      shapes.forEach(shape => {
        shape.rotation += 0.002
        drawShape(shape)
      })

      // 更新和绘制粒子
      particles.forEach((particle, i) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
        ctx.fill()

        particles.slice(i + 1).forEach(other => {
          const dx = other.x - particle.x
          const dy = other.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < CONFIG.particles.connectDistance) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${CONFIG.particles.lineOpacity * (1 - distance / CONFIG.particles.connectDistance)})`
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // 鼠标光效跟踪
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return
      const { clientX, clientY } = e
      setMousePosition({ x: clientX, y: clientY })
      const x = clientX - window.innerWidth / 2
      const y = clientY - window.innerHeight / 2
      spotlightRef.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 网格背景 */}
      <canvas
        ref={gridRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* 粒子画布 */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      
      {/* 动态背景 */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-10"
      />
      
      {/* 光效 */}
      <div ref={spotlightRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[hsl(var(--color-primary))] opacity-20 blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-[hsl(var(--color-accent))] opacity-20 blur-[150px] animate-pulse delay-1000" />
        <motion.div
          className="absolute w-[400px] h-[400px] blur-[100px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
            x: mousePosition.x - 200,
            y: mousePosition.y - 200
          }}
        />
      </div>

      {/* 主要内容 */}
      <div className="relative container mx-auto px-4 py-32">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          {/* 徽章 */}
          <motion.div
            custom={0}
            variants={variants}
            className="inline-block material-steel px-6 py-3 rounded-full backdrop-blur-lg hover:scale-105 transition-transform"
          >
            <span className="text-sm font-medium text-[hsl(var(--color-accent))] flex items-center gap-2">
              <IconRocket size={16} className="animate-bounce" />
              {CONFIG.content.badge}
              <IconBrandGithub size={16} className="animate-pulse" />
            </span>
          </motion.div>

          {/* 标题部分 */}
          <motion.div 
            custom={1}
            variants={variants}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
              <span className="gradient-text hover:scale-105 transition-transform inline-block">
                {CONFIG.content.mainTitle}
              </span>
              <br />
              <span className="glitch-text inline-block text-4xl md:text-6xl mt-4 hover:text-[hsl(var(--color-accent))] transition-colors">
                {CONFIG.content.subTitle}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              {CONFIG.content.description}
            </p>
          </motion.div>

          {/* 操作按钮 */}
          <motion.div
            custom={2}
            variants={variants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href={CONFIG.content.links.register} target="_blank" rel="noopener noreferrer">
              <Button
                className="btn-cyber group relative px-8 py-6 text-lg font-medium hover:scale-105 transition-transform"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {CONFIG.content.primaryButton}
                  <IconArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </Button>
            </a>
            
            <a href={CONFIG.content.links.learnMore} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="material-frosted px-8 py-6 text-lg font-medium hover:bg-white/10 hover:scale-105 transition-all"
              >
                <span className="flex items-center gap-2">
                  {CONFIG.content.secondaryButton}
                  <IconArrowUpRight size={20} />
                </span>
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* 滚动提示 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="material-frosted px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 hover:bg-white/10 transition-all cursor-pointer"
        >
          <IconArrowDown size={16} className="animate-bounce" />
          <span className="text-sm font-medium text-white/80">
            {CONFIG.content.scrollText}
          </span>
        </motion.div>
      </div>
    </section>
  )
}