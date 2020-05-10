# stupid_talk_generator
自動產生各種奧客戶、慣老闆的日常用語。

## 專案首頁
![image](https://github.com/pchu128/stupid_talk_generator/blob/master/Index.png)

## 功能導覽
- 選取想要的職業
- 點選"產生幹話按鈕"
- 體驗該職業時常被轟炸的幹話

## 分支功能
- 大致上相同，但簡化程式碼後，單選選項在頁面 refresh 後無法維持選取狀態，問題尚待解決。

## 系統需求
- 終端機
- Node.js
- Visual Studio Code

## 如何安裝？
首先開啟終端機，遵循以下步驟。
```
//將專案複製到電腦中
git clone https://github.com/pchu128/stupid_talk_generator.git

//進入專案資料夾
cd stupid_talk_generator

//安裝npm套件
npm install

//執行專案
npm run dev
```
終端機顯示 "Express is running on http://localhost:3000" 後，即可開啟瀏覽器進入 http://localhost:3000 測試功能。

## 如何觀看分支程式碼？
一樣先開始終端機，然後遵循以下步驟。
```
//將當前狀態轉換到分支"revising-code"
git checkout revising-code

//執行專案
npm run dev

//或是開啟程式碼
code .
```
