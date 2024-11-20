// components/Schedule.tsx
'use client'

import { motion } from 'framer-motion'

const schedules = [
  {
    day: "Day 1",
    date: "3月15日",
    events: [
      { time: "09:00", title: "开幕式", description: "活动介绍与破冰" },
      { time: "10:30", title: "团队组建", description: "寻找志同道合的伙伴" },
      { time: "13:00", title: "创意工作坊", description: "头脑风暴与方案确定" },
      { time: "15:00", title: "开发启动", description: "正式进入开发阶段" }
    ]
  },
  {
    day: "Day 2",
    date: "3月16日",
    events: [
      { time: "09:00", title: "晨会", description: "项目进度交流" },
      { time: "10:00", title: "技术指导", description: "导师一对一辅导" },
      { time: "14:00", title: "中期检查", description: "项目优化与调整" },
      { time: "20:00", title: "夜间交流", description: "团队间经验分享" }
    ]
  },
  {
    day: "Day 3",
    date: "3月17日",
    events: [
      { time: "10:00", title: "项目完善", description: "最后冲刺阶段" },
      { time: "14:00", title: "作品提交", description: "提交最终作品" },
      { time: "15:00", title: "项目展示", description: "路演与评审" },
      { time: "17:00", title: "颁奖典礼", description: "优秀项目表彰" }
    ]
  }
]

export function Schedule() {
  return (
    <section id="schedule" className="relative py-32 overflow-hidden">
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
              活动日程
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text inline-block font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">精心规划的赛程</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            三天不间断的创新马拉松
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {schedules.map((schedule, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
              viewport={{ once: true }}
              className="material-frosted rounded-xl p-8"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gradient">
                  {schedule.day}
                </h3>
                <span className="text-white/60">{schedule.date}</span>
              </div>
              
              <div className="space-y-6">
                {schedule.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="relative pl-8 before:absolute before:left-0 before:top-0 before:w-px before:h-full before:bg-gradient-to-b before:from-[hsl(var(--color-primary))] before:to-transparent"
                  >
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[hsl(var(--color-primary))] -translate-x-[3px]" />
                    <time className="text-sm text-white/40">{event.time}</time>
                    <h4 className="text-lg font-semibold text-white/90 mt-1">
                      {event.title}
                    </h4>
                    <p className="text-white/60 text-sm mt-1">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}