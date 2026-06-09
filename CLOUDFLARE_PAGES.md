# Cloudflare Pages 用メモ

このプロジェクトは Next.js の静的出力です。

- Build command: `npm run build`
- Output directory: `out`
- Node version: `20`
- Framework preset: `None`

## 失敗したら最初に確認
1. Cloudflare Pages のプロジェクト設定で Output directory が `out` になっているか
2. Node version が 20 以上か
3. React / React DOM の version が stable か
4. Direct Upload の場合、アップロード対象が `out/` か
