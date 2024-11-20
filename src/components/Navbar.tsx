'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './ui/button'

export function Navbar() {
  const { scrollY } = useScroll()
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']
  )

  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  )

  useEffect(() => {
    const handleScroll = () => {
      // 滚动处理逻辑可以在这里添加
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
    >
      {/* 导航栏内容 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="w-8 h-8 rounded-lg material-steel flex items-center justify-center">
              <span className="text-gradient font-bold">A</span>
            </div>
            <span className="font-bold text-xl">ArchiX</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <NavLink href="#about">关于</NavLink>
            <NavLink href="#features">特色</NavLink>
            <NavLink href="#schedule">日程</NavLink>
            <NavLink href="#sponsors">赞助</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <Button
              className="material-acrylic hover:bg-white/20 transition-all duration-300"
            >
              立即报名
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm text-gray-300 hover:text-white transition-colors duration-300 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[hsl(var(--color-accent))] transition-all duration-300 group-hover:w-full" />
    </a>
  )
}