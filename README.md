個人作品集網站 (My Portfolio Website)
這是一個使用 React、TypeScript 和 Vite 建立的個人作品集網站，用於展示我的技能和經驗。網站採用 Tailwind CSS 進行樣式設計，並透過 GitHub Actions 的 CI/CD 流程自動部署到 Firebase Hosting。

✨ 功能 (Features)
多語言支援 (Multi-language Support): 使用 i18next 與 react-i18next 實現中英文切換功能。

響應式設計 (Responsive Design): 使用 Tailwind CSS 確保在各種設備上都有良好的瀏覽體驗。

自動化部署 (CI/CD): 整合 GitHub Actions，在推送到 main 分支時自動建置與部署至 Firebase。

🛠️ 技術棧 (Tech Stack)
前端框架: React

語言: TypeScript

建置工具: Vite

CSS 框架: Tailwind CSS

國際化 (i18n): i18next

部署平台: Firebase Hosting

CI/CD: GitHub Actions

程式碼檢查: ESLint

🚀 開始使用 (Getting Started)
請依照以下步驟在本地端運行此專案。

先決條件
Node.js (建議版本 20.x 或以上)

npm

安裝
複製此儲存庫：

Bash

git clone https://github.com/sheldonchangl/myportfolio.git
進入專案目錄：

Bash

cd myportfolio
安裝依賴套件：

Bash

npm install
運行開發伺服器
執行以下指令來啟動本地開發伺服器：

Bash

npm run dev
應用程式將會運行在 http://localhost:1206。

📜 可用腳本 (Available Scripts)
在專案目錄中，您可以執行：

npm run dev: 啟動開發模式的伺服器。

npm run build: 將專案建置到 dist 資料夾中。

npm run lint: 使用 ESLint 檢查程式碼。

npm run preview: 在本地預覽建置後的應用程式。

部署 (Deployment)
本專案已設定 GitHub Actions CI/CD 工作流程 (.github/workflows/firebase-deploy.yml)。當有新的 commit 推送到 main 分支時，會自動觸發以下流程：

Checkout: 簽出最新的程式碼。

Setup Node.js: 設定 Node.js 環境。

Install Dependencies: 使用 npm ci 安裝依賴套件。

Build Project: 執行 npm run build 建置專案。

Deploy to Firebase: 將 dist 目錄下的靜態檔案部署到 Firebase Hosting。