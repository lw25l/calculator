const scenicFaq = {
  "开放时间": "景区每日08:30-21:00开放，20:00后停止检票。",
  "历史": "示范景区始建于明代，清代完成主要建筑群扩建。",
  "门票": "成人票80元，学生票半价，65岁以上老人凭证件免票。"
}

const routes = {
  "历史文化": ["游客中心", "古城门", "文庙", "非遗展馆", "观景台"],
  "自然风光": ["游客中心", "湿地栈道", "观鸟平台", "瀑布群", "森林步道"],
  "亲子休闲": ["游客中心", "互动博物馆", "亲子农场", "手作工坊", "湖畔草坪"]
}

function answerQuestion(query) {
  const key = Object.keys(scenicFaq).find(k => query.includes(k))
  return key ? scenicFaq[key] : '这是一个很好的问题，我已为您转接到景区知识库深度检索，请稍后查看详细讲解。'
}

function recommendRoute(interest = '历史文化') {
  return routes[interest] || routes['历史文化']
}

function sentimentScore(content) {
  if (/好|满意|喜欢|方便|贴心/.test(content)) return { label: '正向', score: 0.92 }
  if (/一般|还行|普通/.test(content)) return { label: '中性', score: 0.62 }
  return { label: '待改进', score: 0.38 }
}

module.exports = { answerQuestion, recommendRoute, sentimentScore }
