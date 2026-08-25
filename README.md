# newcomers-notice

자격증공장 입사자 이용안내 — 신규 회원에게 공유하는 열람실 이용 규칙 페이지.

## Stack

- Vite 6 + React 19 + TypeScript
- MUI 7 (theme in `src/app/theme`)
- Noto Sans KR via `@fontsource`

## Scripts

```bash
yarn install
yarn dev        # http://localhost:5174
yarn build      # type-check + production build → dist/
yarn preview    # serve dist/ on 5174
yarn lint
```

## Structure

```
src/
├── main.tsx / App.tsx
├── app/
│   ├── config/
│   │   ├── notice.content.tsx   # ALL page text (21 sections, tips, header, footer)
│   │   ├── notice.types.ts      # content schema
│   │   └── links.ts             # external URLs (member app login)
│   ├── theme/                   # palette + MUI theme
│   ├── components/              # NoticeHeader, NoticeCard, CalloutBox, ...
│   ├── screens/NewcomersNotice.tsx
│   └── utils/
├── assets/images/               # replace the placeholder SVG with a real screenshot
└── styles/global.css
```

## Editing content

Open `src/app/config/notice.content.tsx`. Each section is a plain object with
`blocks` (paragraph / callout / alert / checklist / numbered / linkBox / image).
Use the `<B>`, `<Red>`, `<Gold>` helpers for inline emphasis.

## Replacing placeholder images

Drop the real screenshot into `src/assets/images/` and update the import at the
top of `notice.content.tsx` (`home-screen-example`). Section 19 uses a `storeCard`
block linking to the Coupang Eats store (URL in `links.ts`).

## Responsive

Designed for phone (≤600px), tablet (600–1200px) and desktop (≥1200px) using
MUI breakpoints. Content column is capped at `md` (900px) for readability.
