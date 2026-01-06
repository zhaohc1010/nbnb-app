# 部署指南 (Deployment Guide)

本项目的代码是完整的，可以直接部署到云平台生成公开链接。

## 推荐方式：使用 Vercel 部署 (最简单)

Vercel 是一个免费的静态网站托管服务，通过它你可以获得一个类似 `https://your-project.vercel.app` 的永久链接。

### 准备工作
1. 注册一个 [GitHub](https://github.com/) 账号。
2. 注册一个 [Vercel](https://vercel.com/) 账号 (建议使用 GitHub 登录)。

### 步骤
1. **上传代码到 GitHub**:
   - 在 GitHub 上创建一个新的仓库 (Repository)。
   - 将本项目的所有文件上传到该仓库。

2. **在 Vercel 导入项目**:
   - 登录 Vercel 控制台。
   - 点击 **"Add New..."** -> **"Project"**。
   - 在 "Import Git Repository" 列表中找到你刚刚创建的 GitHub 仓库，点击 **"Import"**。

3. **配置与部署**:
   - Framework Preset (框架预设): Vercel 通常会自动识别为 **Vite**。如果没有，请手动选择 `Vite`。
   - Root Directory (根目录): 选择 `nb-app` (因为代码都在这个子目录下)。**这一步很重要！**
   - 点击 **"Deploy"** 按钮。

4. **完成**:
   - 等待约 1-2 分钟，构建完成后，界面上会显示两个链接/域名。
   - 点击任意一个链接，即可打开并使用你的应用。分享这个链接给朋友即可。

## 注意事项
- 本地构建失败是因为本地 Node.js 版本较旧 (v18)，而项目需要 v20+。
- Vercel 的服务器环境默认是最新的，所以可以直接构建成功，无需修改代码。
