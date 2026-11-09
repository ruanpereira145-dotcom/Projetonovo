# Reset 3D — site no modelo Bugou + catálogo (Cloudflare Workers + Supabase)

Página inicial no mesmo modelo do site da Bugou, com os dados da Reset 3D. Catálogo, pedido pelo WhatsApp e painel `/admin` funcionando como na JLC.

## Dados da loja
Tudo fica em `lib/loja.ts`: nome, WhatsApp (19) 99024-6961, Instagram @reset.3d, Linktree, textos, números, depoimento, crédito (@next_sites014) e logo. Campos vazios escondem o bloco.

## Imagens (pasta public/imagens)
| Arquivo | Onde aparece | Formato |
|---|---|---|
| hero-fundo.png | arte do topo | paisagem, ~1300 x 800 |
| destaque-esquerda.png / destaque-direita.png | "Nada de prateleira pronta" | PNG transparente, em pé, ~800 x 1200 |
| destaque-centro.png | abaixo dos passos | PNG transparente, menor |
| produto-destaque.png | cartão "Por que criar" | PNG transparente |
| galeria-1.png, galeria-2.png, galeria-3.png | "Quem já criou com a gente" | PNG transparente, em pé |

Use fotos dos produtos da Reset com fundo removido. Até ~500 KB cada.

## Fontes (pasta public/fonts)
Copie `bugou-display.ttf` e `bugou-tech.ttf` (as mesmas do modelo) para `public/fonts`.

## Cloudflare (Workers > reset3d > Settings > Builds)
Build command: `npm run build` · Deploy command: `npm run deploy` · Root directory: `/`

## Banco
`wrangler.jsonc` aponta para o banco de demonstração. Para a Reset ter o próprio banco, troque `SUPABASE_URL` e `SUPABASE_PUBLISHABLE_KEY`, rode `supabase/01-jlc-estrutura.sql` e cadastre os administradores na tabela `jlc_admins` (o acesso é validado só pelo banco).

---
