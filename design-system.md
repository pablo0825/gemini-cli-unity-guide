# Design System · Gemini CLI x Unity 2D 教學指南

**版本：** v1.0
**適用場景：** 教學指南、教程、Walkthrough（多章節、多步驟的線性教學內容）

---

## 設計理念

溫和而結構化的學習介面。基底採用溫暖的奶油底色搭配深綠色強調，營造紙本筆記般的閱讀感；同時透過明確的步驟標號、進度條與成功狀態，引導學習者一步一步完成任務。

| 項目 | 內容 |
| --- | --- |
| **主色調** | 奶油米 + 深森林綠 |
| **核心字體** | Noto Sans TC · JetBrains Mono |
| **基礎單位** | 4px spacing grid |
| **適用場景** | 教學指南、教程、Walkthrough |

---

## 01 · 色彩 Color

使用語意化命名（Semantic Tokens）將顏色綁定到用途，而非直接綁定到色階。所有顏色皆已在淺色模式下測試 WCAG AA 對比度。

### Surface · 容器底色

| Token | HEX | 用途 |
| --- | --- | --- |
| `--color-bg-page` | `#EFE7D2` | 頁面主要底色，溫暖的紙感奶油色 |
| `--color-bg-surface` | `#FFFFFF` | 內容卡片、程式碼框、輸入框底 |
| `--color-bg-raised` | `#E8DDC3` | 浮起卡片，如 Step Index 區塊 |
| `--color-bg-inset` | `#FAF4E2` | 內凹區塊（規格說明、註腳區） |
| `--color-bg-muted` | `#E5DAC0` | 編號圓圈、次要 chip 底色 |
| `--color-bg-overlay` | `rgba(31, 26, 20, 0.48)` | 遮罩層底色 |

### Brand · 主色與互動色

| Token | HEX | 用途 |
| --- | --- | --- |
| `--color-primary` | `#3F5A2E` | 進度條填色、連結、品牌色 |
| `--color-primary-hover` | `#324827` | 主色 hover 狀態 |
| `--color-primary-active` | `#263619` | 主色 active / pressed 狀態 |
| `--color-primary-soft` | `#C5D2B0` | 主色淡化版，用於 tag、badge 底 |

### Text · 文字色階

| Token | HEX | 用途 |
| --- | --- | --- |
| `--color-text-primary` | `#1F1A14` | 主要正文、標題 |
| `--color-text-secondary` | `#5C5240` | 次要說明文、描述 |
| `--color-text-muted` | `#8A7E68` | 輔助文字、meta 資訊、佔位 |
| `--color-text-disabled` | `#B8AC92` | 停用狀態文字 |
| `--color-text-on-primary` | `#FFFFFF` | 主色背景上的文字 |
| `--color-text-link` | `#3F5A2E` | 超連結文字 |

### Border · 邊框

| Token | HEX | 用途 |
| --- | --- | --- |
| `--color-border-subtle` | `#DDD0B2` | 卡片邊框、輕分隔線 |
| `--color-border-default` | `#C9BB99` | 按鈕、輸入框預設邊框 |
| `--color-border-strong` | `#1F1A14` | 強調邊框、選中狀態 |

### Semantic · 語意色（狀態）

| 狀態 | -bg | -fg | -border | -icon |
| --- | --- | --- | --- | --- |
| **Success** | `#D4E0BA` | `#3F5A2E` | `#8FA570` | `#5C7A3E` |
| **Warning** | `#F5E7C2` | `#B88A2E` | `#DFC684` | — |
| **Info** | `#D6E4EC` | `#4A6B82` | `#94B0C2` | — |
| **Danger** | `#F0D2D2` | `#A04848` | `#C88080` | — |

### Step States · 步驟狀態

| Token | HEX | 用途 |
| --- | --- | --- |
| `--step-complete-icon` | `#5C7A3E` | 已完成步驟的勾選圖示 |
| `--step-current-bg` | `#1F1A14` | 當前步驟底色（深色反白） |
| `--step-current-fg` | `#FFFFFF` | 當前步驟文字 |
| `--step-future-bg` | `#E5DAC0` | 未達步驟 bullet 底色 |
| `--step-future-fg` | `#8A7E68` | 未達步驟文字 |
| `--progress-track` | `#DDD0B2` | 進度條軌道底色 |
| `--progress-fill` | `#3F5A2E` | 進度條填色 |

---

## 02 · 字體 Typography

以 **Noto Sans TC** 作為主要中文與西文字體，提供完整字重與穩定的中日韓字形支援；程式碼採 **JetBrains Mono**，等寬且具高辨識度的連字符。

### Font Family

```css
--font-sans: "Noto Sans TC", -apple-system, BlinkMacSystemFont,
             "PingFang TC", "Microsoft JhengHei", sans-serif;
--font-mono: "JetBrains Mono", "Source Code Pro", ui-monospace,
             "SF Mono", Consolas, monospace;
```

### Type Scale · 字級階層

| Token | Size | Line Height | Weight | 用途 |
| --- | --- | --- | --- | --- |
| `--text-display` | 32px | 1.2 | 700 | 頁面 hero 標題 |
| `--text-h1` | 26px | 1.3 | 700 | 單一頁面主標 |
| `--text-h2` | 20px | 1.4 | 600 | 區塊標題 |
| `--text-h3` | 16px | 1.5 | 600 | 步驟標題、卡片標題 |
| `--text-body` | 15px | 1.6 | 400 | 正文段落（預設） |
| `--text-caption` | 13px | 1.5 | 400 | 說明、註腳、列表中的次要文字 |
| `--text-micro` | 12px | 1.4 | 500 · 全大寫 | tag、eyebrow、進度標籤 |
| `--text-mono` | 14px | 1.6 | 400 · JetBrains Mono | 程式碼區塊主體 |
| `--text-mono-sm` | 13px | 1.5 | 400 · JetBrains Mono | inline code、token 名稱 |

### Font Weights · 字重

| Token | Weight |
| --- | --- |
| `--fw-regular` | 400 |
| `--fw-medium` | 500 |
| `--fw-semibold` | 600 |
| `--fw-bold` | 700 |

### Line Heights · 行高

| Token | Value | 用途 |
| --- | --- | --- |
| `--lh-tight` | 1.2 | 大標、display 標題 |
| `--lh-snug` | 1.35 | 中型標題、密集文字 |
| `--lh-base` | 1.6 | 正文（預設） |
| `--lh-relaxed` | 1.75 | 長段落、教學說明 |

---

## 03 · 間距 Spacing

以 4px 為基礎單位的線性 scale。組件內部 padding 與相鄰元件間距都應僅從以下值挑選，確保視覺節奏一致。

| Token | Value |
| --- | --- |
| `--space-0` | 0px |
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-20` | 80px |

### 使用建議

- **`space-2` ~ `space-3`**：圖示與文字、tag 內 padding
- **`space-4`**：元件內部 padding、相鄰行間
- **`space-5` ~ `space-6`**：卡片內邊距、段落區間
- **`space-8` ~ `space-10`**：區塊（section）的內邊距
- **`space-12` ~ `space-16`**：大區塊之間的垂直間隔

---

## 04 · 圓角 Radius

圓角用法以「容器大小」對應：小元件用 `sm`，正常卡片用 `md`，主要 hero 與 modal 用 `lg / xl`，藥丸狀標籤用 `pill`。

| Token | Value | 用途 |
| --- | --- | --- |
| `--radius-xs` | 4px | inline tag, code chip |
| `--radius-sm` | 6px | 按鈕、輸入框 |
| `--radius-md` | 10px | 卡片、code block |
| `--radius-lg` | 14px | 大型卡片 |
| `--radius-xl` | 20px | hero 區塊、modal |
| `--radius-pill` | 9999px | badge、編號圓、FAB |

---

## 05 · 陰影 Elevation

陰影採用深色低透明度的暖色調，配合奶油底色不會顯得「藍灰」，視覺上更貼近紙本質感。

| Token | Value | 用途 |
| --- | --- | --- |
| `--shadow-none` | `none` | 扁平容器，依賴邊框 |
| `--shadow-xs` | `0 1px 2px rgba(31, 26, 20, 0.04)` | 非常輕微的浮起感 |
| `--shadow-sm` | `0 2px 6px rgba(31, 26, 20, 0.06)` | hover 卡片、tooltip |
| `--shadow-md` | `0 8px 20px rgba(31, 26, 20, 0.08)` | popover、dropdown |
| `--shadow-lg` | `0 16px 36px rgba(31, 26, 20, 0.12)` | modal、drawer |
| `--shadow-fab` | `0 10px 28px rgba(31, 26, 20, 0.28)` | FAB、強調浮起按鈕 |

---

## Motion · 動效

| Token | Value | 用途 |
| --- | --- | --- |
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | 進入動畫的標準緩動 |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | 對稱進出動畫 |
| `--dur-fast` | 120ms | 微互動（hover、focus） |
| `--dur-base` | 200ms | 一般狀態切換 |
| `--dur-slow` | 320ms | 大型 transition、折疊展開 |

---

## 06 · 元件 Components

每個元件都附有：實況範例 · 結構 ID · 規格說明（token 對照、尺寸、間距、狀態）。

### 頁首 Header

`component / page-header`

- **容器**：`background: var(--color-bg-surface)` · `border-radius: var(--radius-md)` · `border-bottom: 1px solid var(--color-border-subtle)`
- **內距**：`padding: var(--space-3) var(--space-4)`
- **標題**：`--text-h3` / `--fw-semibold` / `--color-text-primary`
- **章節（右）**：`--text-caption` / `--color-text-secondary`
- **收藏星**：24×24 線稿圖示，`stroke-width: 1.8`，色 `--color-text-muted`
- **More 按鈕**：32×32，`--radius-sm`，深色填充 `--color-border-strong`

### 進度條 Step Progress

`component / progress-bar`

- **段落（segment）**：高度 4px、圓角 2px、間距 6px
- **底色 track**：`--progress-track · #DDD0B2`
- **已完成 / 當前**：`--progress-fill · #3F5A2E`（單一綠色填法；當前 step 不另外標識避免視覺干擾）
- **標題列**：`--text-caption`，當前步驟名 `--fw-semibold`、`--color-text-primary`
- **右側 meta（時間估計）**：`--text-caption` / `--color-text-secondary`

### 程式碼區塊 Code Block

`component / code-inline`

- **容器**：`--color-bg-surface`、`--radius-md`、`1px solid --color-border-subtle`
- **內距**：`10px var(--space-3) 10px var(--space-4)`（不對稱讓複製鈕右邊距更緊）
- **提示符 `$`**：`--color-text-muted`，`user-select: none`
- **程式碼文字**：`--font-mono` / `--text-mono-sm` / `--color-text-primary`
- **複製按鈕**：`--text-caption`、邊框 `--color-border-default`、hover 時底色變 `--color-bg-muted`

### 編號步驟 Numbered Step

`component / step-item`

- **網格**：`grid-template-columns: 32px 1fr` · `gap: var(--space-4)`
- **編號圓**：28×28、`--radius-pill`、底色 `--color-bg-muted`、文字色 `--color-text-secondary`、`--fw-semibold`
- **步驟標題**：`--text-h3` / `--fw-semibold`
- **內容區（body）**：`display: flex; flex-direction: column; gap: var(--space-2)`
- **普通提示**：`--text-caption` / `--color-text-secondary`
- **小技巧提示（💡 開頭）**：`--color-warning-fg · #B88A2E`

### 提示框 Callouts

`component / callout`

- **結構**：`display: flex; align-items: flex-start; gap: var(--space-3)`
- **內距**：`padding: var(--space-4) var(--space-5)`
- **圓角**：`--radius-md` · 邊框 `1px solid`，使用對應語意色之 `-border`
- **圖示**：20×20、`stroke-width: 2`，色繼承容器 fg
- **四種變體**：`success / warning / info / danger`，各自綁定一組 `-bg / -border / -fg`

### Step Index 側邊導覽

`component / step-index`

- **容器**：`--color-bg-raised · #E8DDC3`、`--radius-md`、`padding: var(--space-5)`
- **標題列**：`--text-micro`、全大寫、letter-spacing `0.12em`、`--fw-semibold`、色 `--color-text-secondary`
- **列表項目（item）**：`padding: 10px var(--space-3)`、`--radius-sm`
- **三種狀態**：
  - **已完成 (done)**：`--step-complete-icon · #5C7A3E`、勾選圓圈、文字 `--color-text-secondary`
  - **當前 (current)**：底色 `--step-current-bg · #1F1A14`、白字、編號用反白圓 bullet
  - **未到達 (future)**：bullet 底色 `--step-future-bg`、文字 `--step-future-fg`
- **「⋯ 還有 N 步」**：`--text-caption` / `--color-text-muted`

### 按鈕 & FAB

`component / button`

- **Primary（下一步）**：底色 `--color-text-primary`、白字、`--radius-sm`、`padding: 10px var(--space-5)`
- **Secondary（上一步）**：透明底、邊框 `--color-border-default`、文字 `--color-text-primary`
- **Disabled**：`opacity: 0.5` · `cursor: not-allowed`（如：第一步隱藏上一步、最後一步隱藏下一步）
- **FAB（向下捲動）**：44×44 圓形、`--shadow-fab`、深色填充
- **Hover**：Primary 改為 `--color-primary`，Secondary 改為 `--color-bg-muted`
- **Active**：`transform: translateY(1px)`

### 折疊區塊 Accordion

`component / accordion`

- **容器**：`--color-bg-surface`、邊框 `--color-border-subtle`、`--radius-md`、`padding: var(--space-3) var(--space-4)`
- **標題列**：圖示 + 文字（`--text-body`），左右兩端對齊
- **圖示與 chevron**：色 `--color-text-muted`，stroke-width 2，20×20
- **展開狀態時** chevron 旋轉 180°，下方滑出內容（背景同 surface、上邊界 `--color-border-subtle` 分隔線）
- **常用於** FAQ、常見錯誤、進階補充等可選擇展開的次要內容

---

## 附錄：完整 Design Tokens（CSS）

```css
:root {
  /* ---- Surfaces ---- */
  --color-bg-page:       #EFE7D2;
  --color-bg-surface:    #FFFFFF;
  --color-bg-raised:     #E8DDC3;
  --color-bg-inset:      #FAF4E2;
  --color-bg-muted:      #E5DAC0;
  --color-bg-overlay:    rgba(31, 26, 20, 0.48);

  /* ---- Brand / Primary ---- */
  --color-primary:        #3F5A2E;
  --color-primary-hover:  #324827;
  --color-primary-active: #263619;
  --color-primary-soft:   #C5D2B0;

  /* ---- Text ---- */
  --color-text-primary:    #1F1A14;
  --color-text-secondary:  #5C5240;
  --color-text-muted:      #8A7E68;
  --color-text-disabled:   #B8AC92;
  --color-text-on-primary: #FFFFFF;
  --color-text-link:       #3F5A2E;

  /* ---- Borders ---- */
  --color-border-subtle:  #DDD0B2;
  --color-border-default: #C9BB99;
  --color-border-strong:  #1F1A14;

  /* ---- Semantic ---- */
  --color-success-fg:     #3F5A2E;
  --color-success-bg:     #D4E0BA;
  --color-success-border: #8FA570;
  --color-success-icon:   #5C7A3E;

  --color-warning-fg:     #B88A2E;
  --color-warning-bg:     #F5E7C2;
  --color-warning-border: #DFC684;

  --color-info-fg:        #4A6B82;
  --color-info-bg:        #D6E4EC;
  --color-info-border:    #94B0C2;

  --color-danger-fg:      #A04848;
  --color-danger-bg:      #F0D2D2;
  --color-danger-border:  #C88080;

  /* ---- Step States ---- */
  --step-complete-icon:   #5C7A3E;
  --step-current-bg:      #1F1A14;
  --step-current-fg:      #FFFFFF;
  --step-future-bg:       #E5DAC0;
  --step-future-fg:       #8A7E68;

  --progress-track:       #DDD0B2;
  --progress-fill:        #3F5A2E;

  /* ---- Typography ---- */
  --font-sans: "Noto Sans TC", -apple-system, BlinkMacSystemFont, "PingFang TC", "Microsoft JhengHei", sans-serif;
  --font-mono: "JetBrains Mono", "Source Code Pro", ui-monospace, "SF Mono", Consolas, monospace;

  --text-display:   32px;
  --text-h1:        26px;
  --text-h2:        20px;
  --text-h3:        16px;
  --text-body:      15px;
  --text-caption:   13px;
  --text-micro:     12px;
  --text-mono:      14px;
  --text-mono-sm:   13px;

  --lh-tight:   1.2;
  --lh-snug:    1.35;
  --lh-base:    1.6;
  --lh-relaxed: 1.75;

  --fw-regular:  400;
  --fw-medium:   500;
  --fw-semibold: 600;
  --fw-bold:     700;

  /* ---- Spacing (base 4px) ---- */
  --space-0:  0px;
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* ---- Radius ---- */
  --radius-xs:   4px;
  --radius-sm:   6px;
  --radius-md:   10px;
  --radius-lg:   14px;
  --radius-xl:   20px;
  --radius-pill: 9999px;

  /* ---- Elevation ---- */
  --shadow-xs:  0 1px 2px rgba(31, 26, 20, 0.04);
  --shadow-sm:  0 2px 6px rgba(31, 26, 20, 0.06);
  --shadow-md:  0 8px 20px rgba(31, 26, 20, 0.08);
  --shadow-lg:  0 16px 36px rgba(31, 26, 20, 0.12);
  --shadow-fab: 0 10px 28px rgba(31, 26, 20, 0.28);

  /* ---- Motion ---- */
  --ease-out:    cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-fast:    120ms;
  --dur-base:    200ms;
  --dur-slow:    320ms;
}
```
