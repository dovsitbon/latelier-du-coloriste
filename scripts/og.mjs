// Génère public/og.png (1200x630) et public/apple-touch-icon.png (180x180). Usage : npm run og
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const font = (p) => `data:font/woff2;base64,${readFileSync(p).toString('base64')}`;
const gloock = font('node_modules/@fontsource/gloock/files/gloock-latin-400-normal.woff2');
const hanken = font('node_modules/@fontsource-variable/hanken-grotesk/files/hanken-grotesk-latin-wght-normal.woff2');
const css = `@font-face{font-family:G;src:url(${gloock})}@font-face{font-family:H;src:url(${hanken});font-weight:100 900}
*{margin:0;box-sizing:border-box}body{background:#FBFAF7;color:#161514;font-family:H}`;

const teintes = [
  ['8.3', '#9C7333', '#C99A4B', '#E2BE7C'],
  ['6.44', '#7A3A1C', '#A5532A', '#C9733F'],
  ['5', '#4C2F1B', '#6B4428', '#8E6040'],
  ['4.7', '#26170E', '#3E2618', '#5E3D29'],
  ['1.1', '#0F131A', '#1E2430', '#3A4458'],
  ['10.1', '#8F8C87', '#B9B7B3', '#D9D7D3'],
];
const meches = teintes.map(([code, f, m, c], i) => `
  <div class="m" style="transform:rotate(${(i - 2.5) * 3}deg)">
    <div class="a"><i></i>${code}</div>
    <svg viewBox="0 0 100 400" preserveAspectRatio="none"><defs><linearGradient id="g${i}" x1="0" x2="1"><stop offset="0" stop-color="${f}"/><stop offset=".35" stop-color="${m}"/><stop offset=".55" stop-color="${c}"/><stop offset=".75" stop-color="${m}"/><stop offset="1" stop-color="${f}"/></linearGradient></defs>
    <path d="M14 0 L86 0 C 90 90, 88 210, 72 300 C 64 350, 56 385, 50 400 C 45 384, 36 350, 28 300 C 14 210, 10 90, 14 0 Z" fill="url(#g${i})"/></svg>
  </div>`).join('');

const og = `<style>${css}
.w{width:1200px;height:630px;display:grid;grid-template-columns:1fr 1fr;padding:64px 70px;gap:40px;position:relative}
h1{font-family:G;font-weight:400;font-size:84px;line-height:.95;letter-spacing:-.02em}
.s{margin-top:28px;font-size:27px;color:#57524C;line-height:1.35}
.n{position:absolute;left:70px;bottom:60px;font-size:24px;display:flex;gap:28px}
.n b{font-family:G;font-weight:400;font-size:44px;line-height:1}
.f{position:relative;display:flex;gap:16px;justify-content:center;padding-top:20px}
.f:before{content:'';position:absolute;left:-20px;right:-70px;top:18px;height:5px;background:#2A2724;border-radius:3px;z-index:2}
.m{width:70px;display:flex;flex-direction:column;align-items:center;transform-origin:50% 0}
.a{position:relative;width:62px;margin-top:-14px;background:#fff;border:1px solid #D8D3CA;border-radius:6px;padding:24px 0 8px;text-align:center;font-family:G;font-size:22px}
.a i{position:absolute;top:6px;left:50%;width:12px;height:12px;margin-left:-6px;border-radius:50%;box-shadow:inset 0 0 0 2px #2A2724}
svg{width:46px;height:420px;margin-top:-2px}
</style><div class="w"><div><h1>Barbara, coloriste à Montmorency</h1>
<p class="s">L'Atelier du Coloriste<br>1 rue de l'Église · sur rendez-vous</p></div>
<div class="f">${meches}</div>
<p class="n"><span><b>4,9</b>/5</span><span style="align-self:end">73 avis Google · 06 21 52 38 38</span></p></div>`;

const icon = `<style>${css}body{width:180px;height:180px;background:#161514;display:grid;place-items:center}</style>
<svg viewBox="0 0 64 64" width="130" height="130"><path d="M21 13c1.6 15 0 26 4.8 38M32 12c0 15 0 27 0 40M43 13c-1.6 15 0 26-4.8 38" stroke="#C99A4B" stroke-width="4.5" fill="none" stroke-linecap="round"/></svg>`;

const b = await chromium.launch();
const pg = await b.newPage({ viewport: { width: 1200, height: 630 } });
await pg.setContent(og); await pg.waitForTimeout(400);
await pg.screenshot({ path: 'public/og.png' });
await pg.setViewportSize({ width: 180, height: 180 });
await pg.setContent(icon); await pg.waitForTimeout(200);
await pg.screenshot({ path: 'public/apple-touch-icon.png' });
await b.close();
console.log('og.png et apple-touch-icon.png générés');
