<template>
  <div>
    <h1>课程管理</h1>

    <div class="timetable-wrap">
      <div class="grid header-cell">节次/星期</div>
      <div class="grid header-cell" v-for="(d, i) in days" :key="i">{{ d }}</div>

      <template v-for="sec in sections" :key="'row-' + sec">
        <div class="grid section-cell">第{{ sec }}节</div>
        <div class="grid empty-cell" v-for="day in 5" :key="`empty-${sec}-${day}`"></div>
      </template>

      <div v-for="c in courses" :key="c.id" class="course-card" :style="courseStyle(c)">
        <div><strong>{{ c.name }}</strong>（{{ c.code }}）</div>
        <div>状态：{{ c.status }}</div>
        <div>院系：{{ c.dept }}</div>
        <div>教师：{{ c.teacher }}</div>
        <div>班级：{{ c.className }}</div>
        <div>学时：{{ c.hours }} / 学分：{{ c.credit }}</div>
        <div>人数：{{ c.size }}</div>
        <div>学期：{{ c.term }}</div>
      </div>
    </div>

    <CommentPanel />
  </div>
</template>

<script setup>
import CommentPanel from '../components/CommentPanel.vue'

const days = ['周一', '周二', '周三', '周四', '周五']
const sections = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const courses = [
  {
    id: 1,
    status: '进行中',
    code: 'CS202601',
    name: 'Web前端开发',
    dept: '计算机学院',
    teacher: '张老师',
    className: '计科2301',
    hours: '48(理论32/实践16)',
    credit: 3,
    size: 45,
    term: '2025-2026-2',
    weekday: 1,
    startSection: 1,
    duration: 2
  },
  {
    id: 2,
    status: '进行中',
    code: 'MA202602',
    name: '高等数学',
    dept: '数学学院',
    teacher: '李老师',
    className: '计科2301',
    hours: '64(理论64/实践0)',
    credit: 4,
    size: 45,
    term: '2025-2026-2',
    weekday: 3,
    startSection: 3,
    duration: 2
  },
  {
    id: 3,
    status: '已排课',
    code: 'PE202603',
    name: '大学体育',
    dept: '体育部',
    teacher: '王老师',
    className: '计科2301',
    hours: '32(理论8/实践24)',
    credit: 1,
    size: 45,
    term: '2025-2026-2',
    weekday: 5,
    startSection: 7,
    duration: 2
  }
]

const courseStyle = (c) => {
  const col = c.weekday + 1
  const rowStart = c.startSection + 1
  const rowEnd = rowStart + c.duration
  return {
    gridColumn: `${col} / ${col + 1}`,
    gridRow: `${rowStart} / ${rowEnd}`
  }
}
</script>
