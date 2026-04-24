export type CopyBlockType = "command" | "prompt";

export type CopyBlock = {
  id: string;
  type: CopyBlockType;
  label: string;
  content: string;
  caption: string;
};

export type GuideImage = {
  src: string;
  alt: string;
};

export type GuideStep = {
  id: string;
  chapterId: string;
  title: string;
  shortTitle: string;
  goal: string;
  summary: string[];
  checklist: string[];
  tip?: string;
  image: GuideImage;
  copyBlocks: CopyBlock[];
};

export type GuideChapter = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  startStepId: string;
};

export const guideMeta = {
  title: "Gemini CLI x Unity 2D 教學指南",
  subtitle: "從安裝工具到做出最小可玩版 2D 射擊 demo",
  audience: "會基本電腦操作，但還沒碰過 AI 工具的學生",
  prerequisites: [
    "Windows 電腦與可連網環境",
    "已安裝 Unity Hub 與可用的 Unity 2D 專案",
    "能開啟 Terminal / Command Prompt 並貼上指令",
  ],
  outcomes: [
    "確認 Node.js 與 Gemini CLI 可正常使用",
    "知道如何在 Unity 專案中建立 GEMINI.md 與初始化上下文",
    "能用 prompt 讓 Gemini CLI 幫你做出 2D 射擊遊戲原型",
    "知道如何把需求整理成 Spec，方便持續迭代",
  ],
};

export const chapters: GuideChapter[] = [
  {
    id: "setup",
    eyebrow: "Chapter 1",
    title: "環境準備",
    description: "先確認 Node.js、安裝 Gemini CLI，並完成第一次登入。",
    startStepId: "check-node",
  },
  {
    id: "context",
    eyebrow: "Chapter 2",
    title: "Context 與 GEMINI.md",
    description: "理解 Agent 的上下文，並建立能重複使用的指令文件。",
    startStepId: "understand-context",
  },
  {
    id: "unity-vibe",
    eyebrow: "Chapter 3",
    title: "Unity Vibe Coding",
    description: "進入 Unity 專案後，用 Gemini CLI 生成與修正 2D 射擊遊戲。",
    startStepId: "open-unity-project",
  },
  {
    id: "spec",
    eyebrow: "Chapter 4",
    title: "Spec 思維",
    description: "把想法整理成可交付的需求格式，讓後續迭代更穩定。",
    startStepId: "write-spec",
  },
];

export const steps: GuideStep[] = [
  {
    id: "check-node",
    chapterId: "setup",
    title: "確認 Node.js 已安裝",
    shortTitle: "Node.js 檢查",
    goal: "先確認電腦能執行 Node.js，避免 Gemini CLI 安裝失敗。",
    summary: [
      "按下 Win + R，輸入 cmd，開啟 Command Prompt。",
      "輸入 node -v 檢查版本。如果看得到版本號，代表環境已經就緒。",
      "如果沒有版本號，先到 nodejs.org 安裝 LTS 版本後再回來。",
    ],
    checklist: [
      "看到 node -v 的版本輸出",
      "若尚未安裝，先完成 Node.js LTS 安裝",
      "確認安裝後重新開一個終端機再測一次",
    ],
    tip: "如果安裝完還是無法辨識指令，通常是舊的終端機視窗還沒重新開啟。",
    image: {
      src: "/images/check-node.svg",
      alt: "Node.js 檢查步驟示意圖，包含 Win + R、cmd 與 node -v。",
    },
    copyBlocks: [
      {
        id: "check-node-command",
        type: "command",
        label: "檢查 Node.js",
        content: "node -v",
        caption: "看到版本號就代表這一步完成。",
      },
    ],
  },
  {
    id: "install-gemini-cli",
    chapterId: "setup",
    title: "安裝 Gemini CLI",
    shortTitle: "安裝 CLI",
    goal: "把 Gemini CLI 裝到全域環境，之後就能在任何專案資料夾使用。",
    summary: [
      "在終端機輸入安裝指令，等待套件安裝完成。",
      "這一步只需要做一次，之後就能在不同專案重複使用 gemini 指令。",
      "如果學校網路較慢，可以請同學先確認 npm 已能正常連線。",
    ],
    checklist: [
      "執行全域安裝指令",
      "等待安裝完成且沒有 error",
      "保留終端機，下一步直接啟動 gemini",
    ],
    image: {
      src: "/images/install-gemini-cli.svg",
      alt: "Gemini CLI 安裝步驟示意圖，顯示 npm install 指令。",
    },
    copyBlocks: [
      {
        id: "install-gemini-command",
        type: "command",
        label: "全域安裝指令",
        content: "npm install -g @google/gemini-cli",
        caption: "第一次使用時先完成這個安裝。",
      },
    ],
  },
  {
    id: "launch-gemini",
    chapterId: "setup",
    title: "切到資料夾並啟動 Gemini",
    shortTitle: "啟動 Gemini",
    goal: "進入你要工作的資料夾，啟動 Gemini CLI 並完成 Google 登入。",
    summary: [
      "先用 cd 切到你要操作的資料夾。如果是 Unity 專案，後面也會用到同樣方式。",
      "輸入 gemini 後，依畫面提示登入 Google 帳號。",
      "完成登入後，先確認你能進入互動模式並看到可輸入 prompt 的畫面。",
    ],
    checklist: [
      "切到正確資料夾",
      "執行 gemini 進入互動模式",
      "完成 Google 登入",
    ],
    tip: "若資料夾名稱有空白，記得用雙引號把整段路徑包起來。",
    image: {
      src: "/images/launch-gemini.svg",
      alt: "切換到專案資料夾並啟動 Gemini CLI 的示意圖。",
    },
    copyBlocks: [
      {
        id: "change-directory-command",
        type: "command",
        label: "切換資料夾",
        content: "cd \"C:\\\\你的專案資料夾\"",
        caption: "把路徑替換成你自己的資料夾位置。",
      },
      {
        id: "launch-gemini-command",
        type: "command",
        label: "啟動 Gemini CLI",
        content: "gemini",
        caption: "登入完成後，確認可以進入互動模式。",
      },
    ],
  },
  {
    id: "understand-context",
    chapterId: "context",
    title: "先理解 Context 在做什麼",
    shortTitle: "理解 Context",
    goal: "知道 Agent 為什麼需要上下文，避免每次都重新說明整個專案背景。",
    summary: [
      "Gemini CLI 不是只看你眼前的 prompt，它也會根據目前資料夾、檔案內容與你提供的文件理解任務。",
      "當需求越長、步驟越多時，上下文越重要，因為它會影響 Agent 怎麼拆解任務。",
      "這一步先建立觀念：之後你會把專案規則寫進 GEMINI.md，讓 Agent 每次都能讀到。",
    ],
    checklist: [
      "知道 context 會影響 Agent 的判斷",
      "知道 GEMINI.md 是讓 Agent 讀懂專案規則的入口",
      "準備進入初始化與規則整理步驟",
    ],
    image: {
      src: "/images/understand-context.svg",
      alt: "Context 與 Agent 關係的概念示意圖。",
    },
    copyBlocks: [],
  },
  {
    id: "init-gemini-md",
    chapterId: "context",
    title: "用 /init 建立 GEMINI.md",
    shortTitle: "建立 GEMINI.md",
    goal: "讓 Gemini CLI 幫你建立初始的 GEMINI.md，作為這個專案的規則檔。",
    summary: [
      "在 Gemini CLI 互動模式下輸入 /init，讓它產生初始化文件。",
      "這個文件可以記錄專案目標、檔案結構、風格偏好、工作方式與常用指令。",
      "完成後你可以直接在編輯器中打開 GEMINI.md，再依你的課程需求補充內容。",
    ],
    checklist: [
      "在 Gemini CLI 中執行 /init",
      "確認專案目錄出現 GEMINI.md",
      "用編輯器打開並開始補充規則",
    ],
    image: {
      src: "/images/init-gemini-md.svg",
      alt: "使用 /init 建立 GEMINI.md 的示意圖。",
    },
    copyBlocks: [
      {
        id: "init-command",
        type: "command",
        label: "初始化命令",
        content: "/init",
        caption: "在 Gemini CLI 互動模式裡輸入，不是在系統終端機。",
      },
    ],
  },
  {
    id: "refine-gemini-md",
    chapterId: "context",
    title: "補齊 GEMINI.md 的專案規則",
    shortTitle: "補規則",
    goal: "把專案目標、語言、輸出方式與風格要求寫清楚，讓後續生成更穩定。",
    summary: [
      "你可以直接請 Gemini CLI 閱讀目前的 GEMINI.md，並建議還缺哪些規則。",
      "對課堂專案來說，最重要的是把輸出語言、Unity 版本、遊戲玩法與檔案命名習慣寫清楚。",
      "規則越清楚，之後讓 Agent 生成程式碼或說明時，越不容易偏題。",
    ],
    checklist: [
      "確認 GEMINI.md 已描述專案目標",
      "補上 Unity 2D、射擊玩法與輸出風格",
      "用 Gemini CLI 重新檢查文件是否足夠清楚",
    ],
    image: {
      src: "/images/refine-gemini-md.svg",
      alt: "補充 GEMINI.md 規則內容的示意圖。",
    },
    copyBlocks: [
      {
        id: "review-gemini-md-prompt",
        type: "prompt",
        label: "檢查 GEMINI.md 的 prompt",
        content:
          "@GEMINI.md 請幫我檢查這份專案規則是否足夠讓你協助我完成 Unity 2D 射擊遊戲 demo，並列出還缺少的重點。",
        caption: "用來快速補齊專案規則。",
      },
    ],
  },
  {
    id: "open-unity-project",
    chapterId: "unity-vibe",
    title: "進入 Unity 專案並啟動 Gemini",
    shortTitle: "進入 Unity 專案",
    goal: "把工作資料夾切到 Unity 專案根目錄，讓 Agent 能讀到真實檔案結構。",
    summary: [
      "先在 Unity Hub 建好或打開你的 2D 專案，再找到該專案的資料夾位置。",
      "終端機切進專案根目錄後，重新執行 gemini。",
      "這樣 Agent 才能看到 Assets、ProjectSettings 與其他專案檔案。",
    ],
    checklist: [
      "打開正確的 Unity 專案",
      "找到專案根目錄位置",
      "在該資料夾重新啟動 Gemini CLI",
    ],
    image: {
      src: "/images/open-unity-project.svg",
      alt: "切到 Unity 專案並啟動 Gemini 的示意圖。",
    },
    copyBlocks: [
      {
        id: "unity-directory-command",
        type: "command",
        label: "切換到 Unity 專案",
        content: "cd \"C:\\\\你的 Unity 專案資料夾\"",
        caption: "建議直接複製專案資料夾路徑，避免打錯。",
      },
      {
        id: "unity-launch-command",
        type: "command",
        label: "在 Unity 專案啟動 Gemini",
        content: "gemini",
        caption: "讓 Agent 直接讀到專案內容。",
      },
    ],
  },
  {
    id: "generate-shooter-demo",
    chapterId: "unity-vibe",
    title: "請 Gemini 產生 2D 射擊遊戲原型",
    shortTitle: "生成遊戲原型",
    goal: "用明確 prompt 定義玩法與最小可玩條件，讓 Agent 先做出第一版。",
    summary: [
      "這一步要描述清楚最小可玩版的條件，例如玩家移動、射擊、敵人生成、碰撞判定與簡單勝敗條件。",
      "如果你希望輸出更穩，可以在 prompt 中要求它先列計畫，再開始修改專案。",
      "完成後先回 Unity 測試能不能跑，再決定下一輪修正。",
    ],
    checklist: [
      "明確描述玩法與最小可玩條件",
      "要求 Gemini 先說明修改計畫",
      "回 Unity 測試原型是否可玩",
    ],
    tip: "如果輸出太長，可以要求 Gemini 先分成 3 到 5 個小步驟執行。",
    image: {
      src: "/images/generate-shooter-demo.svg",
      alt: "用 prompt 生成 Unity 2D 射擊遊戲原型的示意圖。",
    },
    copyBlocks: [
      {
        id: "shooter-demo-prompt",
        type: "prompt",
        label: "2D 射擊遊戲原型 prompt",
        content:
          "請幫我在這個 Unity 2D 專案中實作一個最小可玩版的 top-down shooter demo。需求包含：玩家可以 WASD 移動、按空白鍵或滑鼠左鍵射擊、場上會生成敵人、子彈碰到敵人會造成傷害、玩家碰到敵人會扣血、畫面上至少要顯示生命值，並請先列出你準備修改哪些檔案與步驟，再開始實作。",
        caption: "先要求計畫，再讓 Agent 開始修改專案。",
      },
    ],
  },
  {
    id: "iterate-with-agent",
    chapterId: "unity-vibe",
    title: "測試、除錯、再交給 Agent 修正",
    shortTitle: "迭代修正",
    goal: "學會把 Unity 測到的錯誤回饋給 Gemini CLI，讓它幫你做下一輪修正。",
    summary: [
      "第一次生成後，最重要的是回 Unity 測試 Console、遊戲流程與操作手感。",
      "把錯誤訊息、目前症狀與你期望的結果貼回 Gemini CLI，讓 Agent 聚焦修正。",
      "這種來回迭代才是 Vibe Coding 的核心：先做出來，再逐步修正到能玩。",
    ],
    checklist: [
      "把 Unity Console 的關鍵錯誤貼給 Agent",
      "說明目前發生了什麼、理想上應該怎樣",
      "每次修正後都回 Unity 重新測試",
    ],
    image: {
      src: "/images/iterate-with-agent.svg",
      alt: "把 Unity 測試結果回饋給 Agent 進行修正的示意圖。",
    },
    copyBlocks: [
      {
        id: "bug-fix-prompt",
        type: "prompt",
        label: "回報錯誤的 prompt",
        content:
          "目前我在 Unity 測試時遇到以下問題，請先分析可能原因，再告訴我你要修改哪些檔案後再實作。\n\n問題描述：\n1. 玩家可以移動，但沒有成功發射子彈。\n2. Console 出現錯誤訊息：<把你的錯誤貼在這裡>\n3. 我希望修正後可以正常射擊，並且保留原本玩家移動功能。",
        caption: "把實際錯誤與期望結果一起提供，修正會更快。",
      },
    ],
  },
  {
    id: "write-spec",
    chapterId: "spec",
    title: "把需求整理成 Spec",
    shortTitle: "寫 Spec",
    goal: "把你要做的功能拆成 User Story、Input/Output、Rules、Test Case、Notes。",
    summary: [
      "當專案越來越大，只靠口頭描述會讓 Agent 容易漏需求。",
      "Spec 可以讓你先說清楚功能要做什麼、規則有哪些、怎樣算成功。",
      "這份格式也很適合在課堂上讓學生練習把模糊想法轉成可執行需求。",
    ],
    checklist: [
      "列出 User Story",
      "說清楚 Input / Output",
      "補上 Rules、Test Case 與 Notes",
    ],
    image: {
      src: "/images/write-spec.svg",
      alt: "Spec 結構示意圖，包含 User Story、Input/Output、Rules、Test Case 與 Notes。",
    },
    copyBlocks: [
      {
        id: "spec-template-prompt",
        type: "prompt",
        label: "請 Gemini 幫你整理 Spec",
        content:
          "請根據我現在要做的 Unity 2D 射擊遊戲功能，幫我整理成一份 spec，格式要包含：User Story、Input/Output、Rules、Test Case、Notes。先列出內容草稿，再等我確認。",
        caption: "先讓 Agent 產草稿，再由你修正語意。",
      },
    ],
  },
  {
    id: "review-with-cases",
    chapterId: "spec",
    title: "用測試案例檢查需求是否完整",
    shortTitle: "檢查需求完整性",
    goal: "用具體測試案例回頭檢查 spec，避免需求描述太空泛。",
    summary: [
      "最後一步不是再寫更多功能，而是回頭檢查需求是否明確、可驗證。",
      "你可以要求 Gemini 找出還模糊的地方，例如規則衝突、缺少失敗情境或輸入條件不明。",
      "這會讓後續要繼續擴充遊戲時，有比較穩定的需求基礎。",
    ],
    checklist: [
      "檢查規則是否有衝突",
      "補上成功與失敗的測試案例",
      "整理下一輪要延伸的功能方向",
    ],
    image: {
      src: "/images/review-with-cases.svg",
      alt: "用測試案例回頭檢查 spec 的示意圖。",
    },
    copyBlocks: [
      {
        id: "spec-review-prompt",
        type: "prompt",
        label: "檢查 spec 完整性的 prompt",
        content:
          "請幫我檢查這份 spec 是否足夠明確，特別檢查：規則是否互相衝突、是否缺少失敗情境、測試案例是否能驗證這個功能真的完成。如果不完整，請列出缺漏並給我修正建議。",
        caption: "讓 Agent 從規格品質的角度再幫你看一次。",
      },
    ],
  },
];

export const totalSteps = steps.length;

export const stepIndexById = new Map(steps.map((step, index) => [step.id, index]));

export function getStepById(stepId: string): GuideStep | undefined {
  return steps.find((step) => step.id === stepId);
}

export function getChapterById(chapterId: string): GuideChapter | undefined {
  return chapters.find((chapter) => chapter.id === chapterId);
}

export function getChapterSteps(chapterId: string): GuideStep[] {
  return steps.filter((step) => step.chapterId === chapterId);
}
