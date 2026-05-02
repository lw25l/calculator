const { sentimentScore } = require('../../utils/mockData')

Page({
  data: {
    kbText: '',
    feedback: '',
    report: null,
    dashboard: {
      todayUsers: 1286,
      hotQuestion: '开放时间与夜游路线',
      satisfaction: '89%（较上周 +4%）'
    }
  },
  onKbInput(e) { this.setData({ kbText: e.detail.value }) },
  saveKb() {
    wx.setStorageSync('kbText', this.data.kbText)
    wx.showToast({ title: '已保存', icon: 'success' })
  },
  onFeedback(e) { this.setData({ feedback: e.detail.value }) },
  analyze() {
    const report = sentimentScore(this.data.feedback)
    this.setData({ report })
  }
})
