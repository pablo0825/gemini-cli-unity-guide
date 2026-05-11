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

export type InstructionBlock = {
  id: string;
  title: string;
  body?: string;
  codeBlockIds?: string[];
  hint?: string;
};

export type DropdownContentItem = string | { text: string; url: string };

export type DropdownBlock = {
  id: string;
  title: string;
  codeNote?: string;
  content: DropdownContentItem[];
};

export type GuideStep = {
  id: string;
  chapterId: string;
  title: string;
  shortTitle: string;
  goal: string;
  estimatedTime: string;
  intro: string[];
  instructions: InstructionBlock[];
  dropdown?: DropdownBlock;
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
    startStepId: "init-gemini-md",
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
    goal: "",
    estimatedTime: "\u7d04 2 \u5206\u9418",
    intro: [
      "Gemini CLI 需要安裝 Node.js 才能執行，我們先用一個指令，確認電腦是否已經安裝好 Node.js。",
    ],
    instructions: [
      {
        id: "開啟-cmd",
        title: "按下 Win + R，輸入 cmd，按 Enter",
        body: "這會開啟 Windows 的命令提示字元（Command Prompt）。",
      },
      {
        id: "輸入-node-v",
        title: "輸入 node -v，按 Enter",
        body: "在 cmd 視窗中輸入以下指令，再按 Enter。",
        codeBlockIds: ["check-node-command"],
      },
      {
        id: "確認版本號",
        title: "確認版本號",
        body: "在 cmd 中，看到版本號，例如 v20.x.x，代表有安裝 Node.js。",
        hint: "沒看到版本號？請展開下方說明。",
      },
    ],
    dropdown: {
      id: "install-node-steps",
      title: "Node.js 安裝流程",
      content: [
        {
          text: "前往 Node.js 官網，點選標有 LTS 的版本下載安裝檔。",
          url: "https://nodejs.org/zh-tw",
        },
        "執行下載的安裝檔，畫面上一路按 Next 直到安裝完成。",
        "安裝完成後，關掉目前的 cmd 視窗",
        "重新按 Win + R → 輸入 cmd → Enter，開啟新的終端機。",
        "再次輸入 node -v，確認看到版本號後繼續下一步。",
      ],
    },
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
        caption: "",
      },
    ],
  },
  {
    id: "install-gemini-cli",
    chapterId: "setup",
    title: "安裝 Gemini CLI",
    shortTitle: "安裝 CLI",
    goal: "",
    estimatedTime: "\u7d04 2 \u5206\u9418",
    intro: ["把 Gemini CLI 安裝到全域環境，之後就能在任何專案資料夾使用。"],
    instructions: [
      {
        id: "執行安裝指令",
        title: "執行安裝指令",
        body: "在 cmd 中，輸入以下指令，安裝 Gemini CLI。",
        codeBlockIds: ["install-gemini-command"],
      },
      {
        id: "Gemini CLI 安裝成功",
        title: "Gemini CLI 安裝成功",
        body: "安裝成功後，相關資訊會顯示在 cmd 中，例如有 🎉 的 emoji。",
        hint: "如果出現 Error 的話，請聯繫助教，或是把 Error 資訊丟給 ChatGPT 尋求幫助。",
      },
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
        caption: "",
      },
    ],
  },
  {
    id: "launch-gemini",
    chapterId: "setup",
    title: "啟動 Gemini CLI",
    shortTitle: "啟動 Gemini CLI",
    goal: "",
    estimatedTime: "\u7d04 2 \u5206\u9418",
    intro: ["進入你要工作的專案資料夾，啟動 Gemini CLI，並完成 Google 登入。"],
    instructions: [
      {
        id: "切到專案資料夾",
        title: "切到專案資料夾",
        body: "在 cmd 中，輸入以下指令，進到專案資料夾。",
        codeBlockIds: ["change-directory-command"],
      },
      {
        id: "啟動 Gemini CLI",
        title: "啟動 Gemini CLI",
        body: "在專案資料夾的路徑中，輸入以下指令，啟動 Gemini CLI。",
        codeBlockIds: ["launch-gemini-command"],
        hint: "若資料夾名稱有空白，記得用雙引號把整段路徑包起來。",
      },
      {
        id: "完成-google-登入",
        title: "完成 Google 登入",
        body: "一開始 Gemini CLI 會請你登入，你可以選「Login with Google」完成登入。",
        hint: "登入的 Google 帳號，需要有 Google AI Pro 方案。",
      },
    ],
    image: {
      src: "/images/launch-gemini.svg",
      alt: "切換到專案資料夾並啟動 Gemini CLI 的示意圖。",
    },
    copyBlocks: [
      {
        id: "change-directory-command",
        type: "command",
        label: "切換資料夾",
        content: 'cd "C:\\\\你的專案資料夾"',
        caption: "cd 指令是在終端機中，移動資料夾路徑的方式",
      },
      {
        id: "launch-gemini-command",
        type: "command",
        label: "啟動 Gemini CLI",
        content: "gemini",
        caption: "",
      },
    ],
  },
  {
    id: "init-gemini-md",
    chapterId: "context",
    title: "建立 GEMINI.md",
    shortTitle: "建立 GEMINI.md",
    goal: "",
    estimatedTime: "\u7d04 2 \u5206\u9418",
    intro: [
      "GEMINI.md 是給 Gemini CLI 看的文件，可以記錄專案目標、技術棧、檔案結構等資訊。",
      "換句話說，GEMINI.md 是 Gemini CLI 的員工手冊，寫什麼規則它就照著做。",
    ],
    instructions: [
      {
        id: "執行-init",
        title: "執行 /init",
        body: "在 Gemini CLI 中輸入 /init，讓它自動產生 GEMINI.md。",
        codeBlockIds: ["init-command"],
      },
      {
        id: "確認-gemini-md-出現",
        title: "確認目錄出現 GEMINI.md",
        body: "執行完畢後，檢查專案資料夾，確認 GEMINI.md 已經建立。",
      },
      {
        id: "寫入日文規則",
        title: "請 Gemini CLI 把規則寫進 GEMINI.md",
        body: "用以下 prompt，請 Gemini CLI 把日文規則加到 GEMINI.md 裡。",
        codeBlockIds: ["add-rule-prompt"],
      },
      {
        id: "驗證規則生效",
        title: "確認它用日文回覆",
        body: "規則寫入後馬上生效。用以下 prompt 測試，看 Gemini CLI 是否改用日文回答。",
        codeBlockIds: ["verify-prompt"],
      },
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
        caption: "",
      },
      {
        id: "add-rule-prompt",
        type: "prompt",
        label: "寫入規則",
        content:
          "@GEMINI.md 請在這個檔案最後，加入這條規則：接下來的回覆，請用日文說明",
        caption: "",
      },
      {
        id: "verify-prompt",
        type: "prompt",
        label: "驗證規則",
        content: "你好，我是XXX，很高興認識你。你可以介紹你自己嗎?",
        caption: "",
      },
    ],
  },
  {
    id: "refine-gemini-md",
    chapterId: "context",
    title: "補齊 GEMINI.md 的專案規則",
    shortTitle: "補規則",
    goal: "把專案目標、語言、輸出方式與風格要求寫清楚，讓後續生成更穩定。",
    estimatedTime: "\u7d04 2 \u5206\u9418",
    intro: [
      "你可以直接請 Gemini CLI 閱讀目前的 GEMINI.md，並建議還缺哪些規則。",
      "對課堂專案來說，最重要的是把輸出語言、Unity 版本、遊戲玩法與檔案命名習慣寫清楚。",
      "規則越清楚，之後讓 Agent 生成程式碼或說明時，越不容易偏題。",
    ],
    instructions: [
      {
        id: "確認-gemini-md-已描述專案目標",
        title: "確認 GEMINI.md 已描述專案目標",
        codeBlockIds: ["review-gemini-md-prompt"],
      },
      {
        id: "補上-unity-2d-射擊玩法與輸出風格",
        title: "補上 Unity 2D、射擊玩法與輸出風格",
      },
      {
        id: "用-gemini-cli-重新檢查文件是否足夠清楚",
        title: "用 Gemini CLI 重新檢查文件是否足夠清楚",
      },
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
    estimatedTime: "\u7d04 2 \u5206\u9418",
    intro: [
      "先在 Unity Hub 建好或打開你的 2D 專案，再找到該專案的資料夾位置。",
      "終端機切進專案根目錄後，重新執行 gemini。",
      "這樣 Agent 才能看到 Assets、ProjectSettings 與其他專案檔案。",
    ],
    instructions: [
      {
        id: "打開正確的-unity-專案",
        title: "打開正確的 Unity 專案",
        codeBlockIds: ["unity-directory-command"],
      },
      {
        id: "找到專案根目錄位置",
        title: "找到專案根目錄位置",
        codeBlockIds: ["unity-launch-command"],
      },
      {
        id: "在該資料夾重新啟動-gemini-cli",
        title: "在該資料夾重新啟動 Gemini CLI",
      },
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
        content: 'cd "C:\\\\你的 Unity 專案資料夾"',
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
    estimatedTime: "\u7d04 2 \u5206\u9418",
    intro: [
      "這一步要描述清楚最小可玩版的條件，例如玩家移動、射擊、敵人生成、碰撞判定與簡單勝敗條件。",
      "如果你希望輸出更穩，可以在 prompt 中要求它先列計畫，再開始修改專案。",
      "完成後先回 Unity 測試能不能跑，再決定下一輪修正。",
    ],
    instructions: [
      {
        id: "明確描述玩法與最小可玩條件",
        title: "明確描述玩法與最小可玩條件",
        codeBlockIds: ["shooter-demo-prompt"],
      },
      {
        id: "要求-gemini-先說明修改計畫",
        title: "要求 Gemini 先說明修改計畫",
      },
      {
        id: "回-unity-測試原型是否可玩",
        title: "回 Unity 測試原型是否可玩",
        hint: "如果輸出太長，可以要求 Gemini 先分成 3 到 5 個小步驟執行。",
      },
    ],
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
    estimatedTime: "\u7d04 2 \u5206\u9418",
    intro: [
      "第一次生成後，最重要的是回 Unity 測試 Console、遊戲流程與操作手感。",
      "把錯誤訊息、目前症狀與你期望的結果貼回 Gemini CLI，讓 Agent 聚焦修正。",
      "這種來回迭代才是 Vibe Coding 的核心：先做出來，再逐步修正到能玩。",
    ],
    instructions: [
      {
        id: "把-unity-console-的關鍵錯誤貼給-agent",
        title: "把 Unity Console 的關鍵錯誤貼給 Agent",
        codeBlockIds: ["bug-fix-prompt"],
      },
      {
        id: "說明目前發生了什麼-理想上應該怎樣",
        title: "說明目前發生了什麼、理想上應該怎樣",
      },
      {
        id: "每次修正後都回-unity-重新測試",
        title: "每次修正後都回 Unity 重新測試",
      },
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
    estimatedTime: "\u7d04 2 \u5206\u9418",
    intro: [
      "當專案越來越大，只靠口頭描述會讓 Agent 容易漏需求。",
      "Spec 可以讓你先說清楚功能要做什麼、規則有哪些、怎樣算成功。",
      "這份格式也很適合在課堂上讓學生練習把模糊想法轉成可執行需求。",
    ],
    instructions: [
      {
        id: "列出-user-story",
        title: "列出 User Story",
        codeBlockIds: ["spec-template-prompt"],
      },
      {
        id: "說清楚-input-output",
        title: "說清楚 Input / Output",
      },
      {
        id: "補上-rules-test-case-與-notes",
        title: "補上 Rules、Test Case 與 Notes",
      },
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
    estimatedTime: "\u7d04 2 \u5206\u9418",
    intro: [
      "最後一步不是再寫更多功能，而是回頭檢查需求是否明確、可驗證。",
      "你可以要求 Gemini 找出還模糊的地方，例如規則衝突、缺少失敗情境或輸入條件不明。",
      "這會讓後續要繼續擴充遊戲時，有比較穩定的需求基礎。",
    ],
    instructions: [
      {
        id: "檢查規則是否有衝突",
        title: "檢查規則是否有衝突",
        codeBlockIds: ["spec-review-prompt"],
      },
      {
        id: "補上成功與失敗的測試案例",
        title: "補上成功與失敗的測試案例",
      },
      {
        id: "整理下一輪要延伸的功能方向",
        title: "整理下一輪要延伸的功能方向",
      },
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

export const stepIndexById = new Map(
  steps.map((step, index) => [step.id, index]),
);

export function getStepById(stepId: string): GuideStep | undefined {
  return steps.find((step) => step.id === stepId);
}

export function getChapterById(chapterId: string): GuideChapter | undefined {
  return chapters.find((chapter) => chapter.id === chapterId);
}

export function getChapterSteps(chapterId: string): GuideStep[] {
  return steps.filter((step) => step.chapterId === chapterId);
}

export function getInstructionCopyBlocks(
  step: GuideStep,
  instruction: InstructionBlock,
): CopyBlock[] {
  const copyBlockById = new Map(
    step.copyBlocks.map((block) => [block.id, block]),
  );
  return (instruction.codeBlockIds ?? [])
    .map((blockId) => copyBlockById.get(blockId))
    .filter((block): block is CopyBlock => Boolean(block));
}

export function getMissingInstructionCopyBlockIds(): Array<{
  stepId: string;
  instructionId: string;
  blockId: string;
}> {
  return steps.flatMap((step) => {
    const copyBlockIds = new Set(step.copyBlocks.map((block) => block.id));

    return step.instructions.flatMap((instruction) =>
      (instruction.codeBlockIds ?? [])
        .filter((blockId) => !copyBlockIds.has(blockId))
        .map((blockId) => ({
          stepId: step.id,
          instructionId: instruction.id,
          blockId,
        })),
    );
  });
}
