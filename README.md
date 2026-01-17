# 株式会社シンコーテック コーポレートLP

Next.js(App Router)+TypeScript+Tailwindで構成した1ページ完結のコーポレートLPです。

## セットアップ

```bash
npm install
```

## 開発サーバー

```bash
npm run dev
```

## ビルド

```bash
npm run build
```

## 構成

- `src/lib/site.ts` に会社情報を集約し、ページはデータ駆動で描画。
- `/` のみで各セクションを構成。
- お問い合わせフォームはServer Actionで疑似送信。
- モバイル下部にFloatingCTAを配置。
