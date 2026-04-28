# calculator

Vue3 + Vite 课程管理实验项目（含侧边导航、课表展示、评论功能）。

## 功能清单

- 侧边导航菜单：点击“课程管理”无刷新切换到课表页面（Vue Router）。
- 课表可视化布局：使用 CSS Grid 展示周一到周五、1~10 节课。
- 课表动态数据展示：课程卡片包含状态、开课编号、课程名称、开课院系、授课教师、教学班名称、总/理论/实践学时、学分、班级人数、学期学年。
- 评论功能：新增/删除/清空评论，自动保存到 localStorage（刷新后不丢失）。

## 本地运行

```bash
npm install
npm run dev
```

## 打包与预览

```bash
npm run build
npm run preview
```

## 上传到 GitHub

> 将 `<your-repo-url>` 替换成你自己的 GitHub 仓库地址。

```bash
git remote add origin <your-repo-url>
git push -u origin work
```
