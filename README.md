# Tesla Club LP

Next.js 15 + TypeScript + Tailwind CSS + Framer Motion で構築した Tesla Club LP です。

## 起動

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

## Cloudflare Pages

このプロジェクトは `output: 'export'` を使った静的出力構成です。

- Build command: `npm run build`
- Build output directory: `out`

## CTAリンク差し替え

`app/page.tsx` 内の以下を差し替えてください。

- `LINE_URL`
- `FORM_URL`

## 実装ポイント

- App Router
- Tailwind CSS ベース
- Framer Motion アニメーション
- レスポンシブ対応
- SEO / OGP 設定
- Cloudflare Pages 配備向け静的出力


## Cloudflare Pages 推奨設定

### Git連携でデプロイする場合
- Framework preset: None
- Build command: npm run build
- Build output directory: out
- Node.js version: 20

### Direct Upload の場合
Cloudflare Pages の Direct Upload には、このソース一式ではなく `npm run build` 後に生成される `out` フォルダをアップロードしてください。

### よくある失敗原因
- `Build output directory` を `out` ではなく `.` や `public` にしている
- Node バージョンが古い
- React RC 版や依存不整合で install/build に失敗する
- ZIP のまま source を Direct Upload している
