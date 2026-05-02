const { answerQuestion } = require('../../utils/mockData')

Page({
  data: {
    messages: [{ id: 1, role: '数字人', content: '您好，我是景区AI导游，请问您想了解哪一处景点？' }],
    inputValue: '',
    avatarStyle: '',
    voice: ''
  },
  onLoad() {
    const profile = getApp().globalData.profile
    this.setData({ avatarStyle: profile.avatarStyle, voice: profile.voice })
  },
  onInput(e) { this.setData({ inputValue: e.detail.value }) },
  sendMessage() {
    const content = this.data.inputValue.trim()
    if (!content) return
    const answer = answerQuestion(content)
    const messages = this.data.messages.concat([
      { id: Date.now(), role: '游客', content },
      { id: Date.now() + 1, role: '数字人', content: answer }
    ])
    this.setData({ messages, inputValue: '' })
  }
})
