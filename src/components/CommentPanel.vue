<template>
  <div class="comment-panel">
    <h2>评论区</h2>

    <div class="comment-input">
      <input v-model.trim="username" placeholder="请输入昵称" />
      <textarea v-model.trim="content" placeholder="请输入评论内容"></textarea>
      <button @click="addComment">提交评论</button>
      <button class="clear-btn" @click="clearAll">清空全部</button>
    </div>

    <p v-if="comments.length === 0" class="empty-tip">暂无评论</p>

    <ul v-else class="comment-list">
      <li v-for="item in comments" :key="item.id" class="comment-item">
        <div class="comment-head">
          <strong>{{ item.username }}</strong>
          <span>{{ item.time }}</span>
        </div>
        <p>{{ item.content }}</p>
        <button class="del-btn" @click="removeComment(item.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const STORAGE_KEY = 'course_comments_v1'

const username = ref('')
const content = ref('')
const comments = ref([])

onMounted(() => {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (raw) {
    try {
      comments.value = JSON.parse(raw)
    } catch {
      comments.value = []
      localStorage.removeItem(STORAGE_KEY)
    }
  }
})

watch(
  comments,
  (val) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  },
  { deep: true }
)

const addComment = () => {
  if (!username.value || !content.value) {
    alert('昵称和评论内容不能为空')
    return
  }

  comments.value.unshift({
    id: Date.now(),
    username: username.value,
    content: content.value,
    time: new Date().toLocaleString()
  })

  content.value = ''
}

const removeComment = (id) => {
  comments.value = comments.value.filter((item) => item.id !== id)
}

const clearAll = () => {
  if (!comments.value.length) return
  if (confirm('确定清空所有评论吗？')) {
    comments.value = []
    localStorage.removeItem(STORAGE_KEY)
  }
}
</script>
