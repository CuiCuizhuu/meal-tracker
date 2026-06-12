# 🥗 吃什么 · EatWhat

> 记录每天吃什么，健康更简单  
> Track what you eat every day, make health simple.

---

## 简介 · Introduction

**吃什么**是一款轻量级的个人饮食追踪 Web App，支持 AI 拍照识别食物、手动记录饮食、热量与宏量素统计、个性化营养建议等功能，适合希望养成健康饮食习惯的用户使用。

**EatWhat** is a lightweight personal diet tracking web app. It supports AI-powered food recognition from photos, manual meal logging, calorie & macro tracking, and personalized nutrition advice — ideal for anyone building healthier eating habits.

---

## 功能特性 · Features

| 功能 | Feature |
|------|---------|
| 📷 拍照 / 相册 AI 识别食物与热量 | AI food & calorie recognition from camera or gallery |
| ✏️ 手动记录食物与卡路里 | Manual food & calorie entry |
| 🌅 早餐 / 午餐 / 晚餐 / 零食分类 | Meal categorization (breakfast / lunch / dinner / snack) |
| 📊 每日热量环形图与宏量素统计 | Daily calorie ring chart & macro breakdown |
| 📅 近5天日期切换汇总视图 | 5-day date strip with swipeable summary view |
| 📋 历史记录查询（按月筛选） | Historical log with monthly filter |
| 🤖 AI 个性化营养建议 | AI-powered personalized nutrition advice |
| 👤 用户档案（BMI / BMR / TDEE 自动计算） | User profile with auto BMI / BMR / TDEE calculation |
| 🔐 邮箱注册 / 登录鉴权 | Email registration & authentication |

---

## 技术栈 · Tech Stack

| 层级 | 技术 |
|------|------|
| 前端 Frontend | Vanilla HTML / CSS / JavaScript |
| 字体 Fonts | Noto Sans SC, DM Mono (Google Fonts) |
| 数据库 & 鉴权 Database & Auth | [Supabase](https://supabase.com) |
| AI 识别 & 建议 AI | Claude API (`claude-sonnet-4-6`) via `/api/chat` |
| 部署 Deployment | 任意静态托管 / Any static host |

---

## 快速开始 · Getting Started

### 前置要求 Prerequisites

- 一个 [Supabase](https://supabase.com) 项目（免费套餐即可）
- 一个可调用 Claude API 的后端接口（`/api/chat`）
- 任意能托管静态文件的服务器或平台

---

### 数据库初始化 Database Setup

在 Supabase SQL 编辑器中运行以下语句：

Run the following in the Supabase SQL editor:

```sql
-- 用户档案 User profiles
create table profiles (
  id uuid primary key references auth.users(id),
  name text,
  gender text,
  age int,
  height numeric,
  weight numeric,
  activity numeric default 1.55,
  goal text default '维持',
  prefer text default '无特殊',
  notes text,
  tdee int
);

-- 饮食记录 Meal records
create table meal_records (
  id bigserial primary key,
  user_id uuid references auth.users(id),
  date date not null,
  meal text not null,
  foods jsonb,
  total_kcal int default 0,
  total_protein numeric default 0,
  total_carbs numeric default 0,
  total_fat numeric default 0,
  advice text,
  image_url text,
  created_at timestamptz default now()
);

-- Row Level Security
alter table profiles enable row level security;
alter table meal_records enable row level security;

create policy "Users can manage own profile" on profiles for all using (auth.uid() = id);
create policy "Users can manage own records" on meal_records for all using (auth.uid() = user_id);
```

---

### 配置 Configuration

打开 `index.html`，替换以下两行为您自己的 Supabase 项目信息：

Open `index.html` and replace the following with your own Supabase project credentials:

```js
const SUPA_URL = 'https://your-project.supabase.co';
const SUPA_KEY = 'your-anon-public-key';
```

---

### 后端接口 Backend API

项目需要一个 `/api/chat` 接口，转发请求至 Claude API。示例（Node.js / Express）：

The project requires a `/api/chat` endpoint that proxies requests to the Claude API. Example (Node.js / Express):

```js
app.post('/api/chat', async (req, res) => {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify(req.body)
  });
  const data = await response.json();
  res.json(data);
});
```

---

### 部署 Deployment

```bash
# 克隆仓库 Clone the repo
git clone https://github.com/your-username/eatwhat.git
cd eatwhat

# 直接用任意静态服务器托管 index.html
# Serve index.html with any static server
npx serve .
```

也可以直接部署到 Vercel、Netlify、GitHub Pages 等平台。

You can also deploy directly to Vercel, Netlify, GitHub Pages, etc.

---

## 截图 · Screenshots

> 可在此处添加应用截图  
> Add your app screenshots here.

| 汇总页 Summary | 记录页 Log | 档案页 Profile |
|---|---|---|
| _(screenshot)_ | _(screenshot)_ | _(screenshot)_ |

---

## 贡献指南 · Contributing

欢迎提交 Issue 和 Pull Request！请遵循以下步骤：

Contributions are welcome! Please follow these steps:

1. Fork 本仓库 · Fork this repository
2. 新建分支 · Create a new branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. 提交更改 · Commit your changes
   ```bash
   git commit -m "feat: add your feature"
   ```
4. 推送分支 · Push to your branch
   ```bash
   git push origin feature/your-feature-name
   ```
5. 发起 Pull Request · Open a Pull Request

### 提交规范 Commit Convention

遵循 [Conventional Commits](https://www.conventionalcommits.org/)：

| 前缀 | 说明 |
|------|------|
| `feat:` | 新功能 New feature |
| `fix:` | Bug 修复 Bug fix |
| `style:` | UI / 样式调整 Style change |
| `refactor:` | 代码重构 Refactor |
| `docs:` | 文档更新 Docs update |

---

## 许可证 · License

[MIT](LICENSE) © 2026 Cuiyuan
