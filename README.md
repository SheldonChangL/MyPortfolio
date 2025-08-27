# 個人作品集網站 (My Portfolio Website)

這是一個使用 React、TypeScript 和 Vite 建立的個人作品集網站，用於展示我的技能和經驗。網站採用 Tailwind CSS 進行樣式設計，並透過 GitHub Actions 的 CI/CD 流程自動部署到 Firebase Hosting。

---

## ✨ 功能 (Features)

* **多語言支援 (Multi-language Support):** 使用 `i18next` 與 `react-i18next` 實現中英文切換功能。
* **響應式設計 (Responsive Design):** 使用 Tailwind CSS 確保在各種設備上都有良好的瀏覽體驗。
* **自動化部署 (CI/CD):** 整合 GitHub Actions，在推送到 `main` 分支時自動建置與部署至 Firebase。

---

## 🛠️ 技術棧 (Tech Stack)

* **前端框架:** [React](https://react.dev/)
* **語言:** [TypeScript](https://www.typescriptlang.org/)
* **建置工具:** [Vite](https://vitejs.dev/)
* **CSS 框架:** [Tailwind CSS](https://tailwindcss.com/)
* **國際化 (i18n):** [i18next](https://www.i18next.com/)
* **部署平台:** [Firebase Hosting](https://firebase.google.com/)
* **CI/CD:** [GitHub Actions](https://github.com/features/actions)
* **程式碼檢查:** [ESLint](https://eslint.org/)

---

## 🚀 開始使用 (Getting Started)

請依照以下步驟在本地端運行此專案。

### **先決條件**

* [Node.js](https://nodejs.org/) (建議版本 20.x 或以上)
* [npm](https://www.npmjs.com/)

### **安裝**

1.  複製此儲存庫：
    ```bash
    git clone [https://github.com/sheldonchangl/myportfolio.git](https://github.com/sheldonchangl/myportfolio.git)
    ```
2.  進入專案目錄：
    ```bash
    cd myportfolio
    ```
3.  安裝依賴套件：
    ```bash
    npm install
    ```

### **運行開發伺服器**

執行以下指令來啟動本地開發伺服器：
```bash
npm run dev
