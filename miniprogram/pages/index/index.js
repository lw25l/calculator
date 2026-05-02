const { recommendRoute } = require('../../utils/mockData')

Page({
  data: {
    interests: ['历史文化', '自然风光', '亲子休闲'],
    selectedInterest: '历史文化',
    route: []
  },
  onLoad() {
    this.refreshRoute('历史文化')
  },
  onInterestChange(e) {
    const interest = this.data.interests[e.detail.value]
    this.setData({ selectedInterest: interest })
    getApp().globalData.profile.interest = interest
    this.refreshRoute(interest)
  },
  refreshRoute(interest) {
    this.setData({ route: recommendRoute(interest) })
  },
  goChat() { wx.navigateTo({ url: '/pages/chat/chat' }) },
  goAdmin() { wx.navigateTo({ url: '/pages/admin/admin' }) }
})
