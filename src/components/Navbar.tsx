'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { 
  IconBrandGithub, 
  IconRocket, 
  IconBrain,
  IconCode,
  IconMenu2,
  IconX,
  IconChevronRight,
  IconBolt,
  IconHexagon,
  IconHexagonFilled
} from '@tabler/icons-react'

const CONFIG = {
  branding: {
    logo: <IconHexagonFilled className="w-6 h-6 text-white/90" />,
    name: 'ArchiX',
    slogan: '创新黑客马拉松'
  },
  
  navigation: {
    links: [
      { name: '关于', href: '#about', icon: IconBrain },
      { name: '特色', href: '#features', icon: IconRocket },
      { name: '日程', href: '#schedule', icon: IconCode },
      { name: '赞助', href: '#sponsors', icon: IconBolt },
      { name: 'FAQ', href: '#faq', icon: IconChevronRight }
    ],
    cta: {
      text: '立即报名',
      href: 'https://xi1uh4zvhbc.feishu.cn/share/base/form/shrcnrRKz3dPn27pdC9FGHDEZlj'
    }
  },

  animation: {
    nav: {
      duration: 0.5,
      stagger: 0.1,
      distance: 20
    }
  },

  effects: {
    glowColors: [
      'rgba(99, 102, 241, 0.4)',  // Indigo
      'rgba(139, 92, 246, 0.3)',  // Violet
      'rgba(79, 70, 229, 0.3)'    // Deep Purple
    ]
  }
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { scrollY } = useScroll()
  
  const navOpacity = useTransform(
    scrollY,
    [0, 100],
    [0.95, 1]
  )

  const navScale = useTransform(
    scrollY,
    [0, 100],
    [1, 0.98]
  )

  useEffect(() => {
    const handleScroll = () => {
      const sections = CONFIG.navigation.links.map(link => link.href.slice(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      style={{
        opacity: navOpacity,
        scale: navScale,
      }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-2"
    >
      <motion.div className="nav-container nav-glass">
        <div className="flex items-center justify-between h-16">
          {/* Logo区域 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="logo-container w-10 h-10 flex items-center justify-center">
              {CONFIG.branding.logo}
            </div>
            <div className="flex flex-col">
              <span className="logo-text text-xl tracking-tight">
                {CONFIG.branding.name}
              </span>
              <span className="text-xs text-white/60">
                {CONFIG.branding.slogan}
              </span>
            </div>
          </motion.div>

          {/* 桌面导航 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center space-x-8"
          >
            {CONFIG.navigation.links.map((link, index) => (
              <NavLink 
                key={link.href}
                href={link.href}
                icon={link.icon}
                isActive={activeSection === link.href.slice(1)}
                delay={index * 0.1}
              >
                {link.name}
              </NavLink>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a 
                href={CONFIG.navigation.cta.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-cyber group">
                  <span className="flex items-center gap-2">
                    {CONFIG.navigation.cta.text}
                    <IconRocket 
                      size={16}
                      className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </span>
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* 移动端菜单按钮 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="material-steel w-10 h-10 rounded-xl"
            >
              {isOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* 移动端菜单 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 nav-glass rounded-2xl"
          >
            <div className="space-y-2 p-4">
              {CONFIG.navigation.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg nav-link-hover"
                >
                  <link.icon size={16} className="text-white/60" />
                  <span>{link.name}</span>
                </a>
              ))}
              <a 
                href={CONFIG.navigation.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4"
              >
                <Button className="btn-cyber w-full">
                  <span className="flex items-center justify-center gap-2">
                    {CONFIG.navigation.cta.text}
                    <IconRocket size={16} />
                  </span>
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 装饰性光晕效果 */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {CONFIG.effects.glowColors.map((color, index) => (
          <div
            key={index}
            className="absolute w-[200px] h-[200px] rounded-full opacity-30 animate-pulse"
            style={{
              background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
              left: `${(index + 1) * 30}%`,
              top: '-100px',
              filter: 'blur(40px)',
              animation: `pulse ${2 + index}s infinite`
            }}
          />
        ))}
      </div>
    </motion.nav>
  )
}

function NavLink({ 
  href, 
  children, 
  icon: Icon, 
  isActive, 
  delay 
}: { 
  href: string
  children: React.ReactNode
  icon: React.ElementType 
  isActive: boolean
  delay: number
}) {
  return (
    <motion.a
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      href={href}
      className={`
        group flex items-center space-x-1 text-sm nav-link-hover
        ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}
        transition-colors duration-300 relative px-3 py-1 rounded-full
      `}
    >
      <Icon size={16} className="opacity-60 group-hover:opacity-100 transition-opacity" />
      <span>{children}</span>
      {isActive && (
        <motion.span 
          layoutId="activeSection"
          className="absolute inset-0 bg-white/10 rounded-full -z-10"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </motion.a>
  )
}