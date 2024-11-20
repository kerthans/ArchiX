// components/FAQ.tsx
'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "参加条件是什么？",
    answer: "我们欢迎所有对创新和技术感兴趣的学生参与。不论你是技术大牛还是创意达人，只要有改变世界的热情，都可以报名参加。"
  },
  {
    question: "如何组建团队？",
    answer: "你可以自由组建2-5人的团队参赛。如果没有团队，也不用担心！我们会组织相关活动，帮助你找到志同道合的伙伴。"
  },
  {
    question: "赛前需要准备什么？",
    answer: "建议提前准备个人电脑和常用的开发工具。我们会提供开发所需的基础设施和资源，包括云服务、API接口等。"
  },
  {
    question: "现场会提供什么？",
    answer: "我们将提供完整的硬件设施、高速网络、餐饮、休息区等。还有经验丰富的导师团队提供技术支持。"
  },
  {
    question: "知识产权如何保护？",
    answer: "参赛作品的知识产权归参赛团队所有。我们会签署相关协议，确保你的创意得到合法保护。"
  }
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-32 overflow-hidden">
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
              常见问题
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text inline-block font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">解答你的疑惑</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            这里是大家最关心的问题
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="material-frosted rounded-xl overflow-hidden border-none"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-white/5 transition-colors">
                  <span className="text-left text-white/90 hover:text-white">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-white/60">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}