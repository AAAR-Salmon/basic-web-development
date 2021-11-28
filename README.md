# 集中講義 Web開発基礎演習

## シラバス

準備中

## 実行方法

### 開発環境

- バックエンド
  - Ubuntu 20.04.3 LTS (WSL2 Linux 5.4.72)
  - Go 1.17.3
- フロントエンド
  - Windows10 20H2
  - Chrome 96.0.4664.45
- ユーティリティ
  - Node.js v16.13.0
    - 使用モジュールはpackage.jsonを見よ

### コマンド

```bash
# Compile sass
npm run sass

# Start server
go run main.go &

# Print to PDF
npm run print-pdf -- slides/what-is-html/ -o what-is-html.pdf
```

## LICENSE

This repository is provided under the MIT License. See the "LICENSE" file.
