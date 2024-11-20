// src/components/Scene.tsx
'use client'

import { motion } from 'framer-motion'

export function Scene() {
  return (
    <div className="relative w-full h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="relative w-full h-full">
          {/* 动态背景圆环 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-[300px] h-[300px] border-2 border-indigo-500/20 rounded-full"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-[200px] h-[200px] border-2 border-purple-500/20 rounded-full"
            />
            <motion.div
              animate={{
                scale: [0.8, 1, 0.8],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-[100px] h-[100px] border-2 border-pink-500/20 rounded-full"
            />
          </div>
          
          {/* 发光点 */}
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-4 h-4 bg-indigo-500 rounded-full blur-xl" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}