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
    id: "unity-vibe",
    eyebrow: "Chapter 2",
    title: "Unity Vibe Coding",
    description: "進入 Unity 專案後，用 Gemini CLI 生成與修正 2D 射擊遊戲。",
    startStepId: "create-unity-project",
  },
  {
    id: "spec",
    eyebrow: "Chapter 3",
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
    chapterId: "setup",
    title: "建立 GEMINI.md",
    shortTitle: "建立 GEMINI.md",
    goal: "",
    estimatedTime: "\u7d04 2 \u5206\u9418",
    intro: [
      "GEMINI.md 是給 Gemini CLI 看的文件，它可以記錄專案目標、技術棧、檔案結構等等資訊。",
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
        caption: "@ 是 Gemini CLI 中引用檔案的方式",
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
    id: "create-unity-project",
    chapterId: "unity-vibe",
    title: "建立 Unity 2D 專案",
    shortTitle: "建立專案",
    goal: "",
    estimatedTime: "\u7d04 2 \u5206\u9418",
    intro: [
      "開始 Vibe Coding 之前，先在 Unity Hub 建立一個全新的 2D 專案。",
      "這樣後面讓 Gemini CLI 幫你生成程式碼時，它才有真實的專案檔案可以讀取與修改。",
    ],
    instructions: [
      {
        id: "打開-unity-hub",
        title: "打開 Unity Hub",
        body: "在桌面或開始選單找到 Unity Hub，雙擊開啟它。",
        hint: "第一次開啟 Unity Hub 可能會要求你登入 Unity 帳號並啟用授權，請依畫面指示完成，或請助教協助。",
      },
      {
        id: "按下-new-project",
        title: "按下「New project」",
        body: "進入 Unity Hub 後，點選右上角的「New project」按鈕。",
      },
      {
        id: "選擇-2d-並建立專案",
        title: "選擇 2D 範本，按下「Create project」",
        body: "在範本列表中選擇「2D」，確認專案名稱與儲存位置後，按下「Create project」完成建立。",
      },
    ],
    image: {
      src: "/images/create-unity-project.svg",
      alt: "在 Unity Hub 建立 2D 專案的示意圖，依序為 New project、選 2D 範本、Create project。",
    },
    copyBlocks: [],
  },
  {
    id: "open-unity-project",
    chapterId: "unity-vibe",
    title: "在專案資料夾中啟動 Gemini",
    shortTitle: "啟動 Gemini",
    goal: "",
    estimatedTime: "\u7d04 2 \u5206\u9418",
    intro: [
      "把工作資料夾切到 Unity 專案根目錄，並啟動 Gemini，這樣 Gemini CLI 才能夠協助我們進行開發。",
    ],
    instructions: [
      {
        id: "打開-unity-hub-project-列表",
        title: "打開 Unity Hub 的 Projects",
        body: "開啟 Unity Hub，切到左側的「Projects」頁籤，確認能看到剛建立的專案。",
      },
      {
        id: "show-in-explorer",
        title: "按下「Show in Explorer」",
        body: "找到剛建立的專案，點右側的「...」按鈕，從選單中選擇「Show in Explorer」，這會直接打開專案所在的資料夾。",
      },
      {
        id: "複製專案路徑",
        title: "從位址列複製資料夾路徑",
        body: "在 Explorer 上方的位址列點一下，路徑文字會變成可選取的格式，按 Ctrl + A 全選後再按 Ctrl + C 複製。",
      },
      {
        id: "cd-到專案資料夾",
        title: "輸入 cd 指令切換到專案資料夾",
        body: "按 Win + R，輸入 cmd 開啟命令提示字元，再輸入以下指令並把剛才複製的路徑貼上。",
        codeBlockIds: ["unity-directory-command"],
      },
      {
        id: "啟動-gemini",
        title: "啟動 Gemini CLI",
        body: "確認路徑正確後，輸入以下指令啟動 Gemini CLI，讓它讀取到 Unity 的專案檔案。",
        codeBlockIds: ["unity-launch-command"],
      },
    ],
    image: {
      src: "/images/open-unity-project.svg",
      alt: "從 Unity Hub 找到專案路徑、切換 cmd 並啟動 Gemini 的示意圖。",
    },
    copyBlocks: [
      {
        id: "unity-directory-command",
        type: "command",
        label: "切換到 Unity 專案",
        content: 'cd "C:\\\\你的 Unity 專案資料夾"',
        caption: "把引號內的路徑換成剛才複製的實際路徑。",
      },
      {
        id: "unity-launch-command",
        type: "command",
        label: "啟動 Gemini CLI",
        content: "gemini",
        caption: "讓 Agent 直接讀取到專案內容。",
      },
    ],
  },
  {
    id: "setup-gemini-rules",
    chapterId: "unity-vibe",
    title: "建立 GEMINI.md 寫入協作規則",
    shortTitle: "協作規則",
    goal: "",
    estimatedTime: "\u7d04 2 \u5206\u9418",
    intro: [
      "在開始讓 Gemini 協助開發前，先建立一份 GEMINI.md，寫入協作規則。",
      "這些規則會告訴 Gemini 怎麼和你合作：不捏造資料、步步說明、主動釐清需求，以及照顧 Unity 初學者的節奏。",
    ],
    instructions: [
      {
        id: "執行-init-建立-gemini-md",
        title: "執行 /init",
        body: "輸入以下指令，讓 Gemini CLI 自動掃描專案，並產生 GEMINI.md。",
        codeBlockIds: ["init-command"],
      },
      {
        id: "寫入協作規則",
        title: "把協作規則寫進 GEMINI.md",
        body: "用以下 prompt，請 Gemini CLI 將協作規則加到 GEMINI.md，它可以自行調整成比較好閱讀的語言。",
        codeBlockIds: ["write-rules-prompt"],
      },
    ],
    image: {
      src: "/images/setup-gemini-rules.svg",
      alt: "執行 /init 並寫入協作規則到 GEMINI.md 的示意圖。",
    },
    copyBlocks: [
      {
        id: "init-command",
        type: "command",
        label: "建立 GEMINI.md",
        content: "/init",
        caption: "",
      },
      {
        id: "write-rules-prompt",
        type: "prompt",
        label: "寫入協作規則",
        content:
          "@GEMINI.md 請在這份文件中，加入以下協作規則，你可以自行調整成比較好閱讀的語言：\n\n禁止捏造：數據、發現與引用必須來自文章或提供網址中明確記載的內容；若不確定，直接說不知道。\n一問一答：遇到需要討論多個問題時，改用一問一答模式，確認後再繼續，避免資訊量過多導致回答品質下降。\n步步思考：在回答前先展示思考過程，確保每一步的推論都清楚可見。\n主動釐清：若 prompt 不清楚、不明確或模糊空間大，應要求說明，或透過持續討論明確使用者的意圖與目的，再開始執行。\nUnity 初學者支援：使用者是 Unity 初學者，不清楚怎麼使用 Unity，請一步步協助其建立遊戲內容。",
        caption: "以上協作規則可以自行調整，不一定要參照上面的內容",
      },
    ],
  },
  {
    id: "iterate-with-agent",
    chapterId: "unity-vibe",
    title: "用 Gemini CLI 建立 2D 射擊遊戲",
    shortTitle: "建立遊戲",
    goal: "",
    estimatedTime: "\u7d04 2 \u5206\u9418",
    intro: [
      "不需要先想清楚所有細節，直接用一句話告訴 Gemini 你想做什麼，讓它帶著你走。",
      "過程中跟著指示一步步完成，遇到問題直接交給 Gemini 處理就好。",
    ],
    instructions: [
      {
        id: "輸入初始-prompt",
        title: "輸入初始 prompt",
        body: "不用想太多，直接告訴 Gemini 你想做什麼，它會幫你規劃接下來的步驟。",
        codeBlockIds: ["start-prompt"],
      },
      {
        id: "跟著指示一步步完成",
        title: "按照 Gemini 的指示實作",
        body: "跟著 Gemini 給的步驟走，做完一步再繼續下一步。不確定的地方可以直接問它。",
      },
      {
        id: "遇到手動貼程式碼",
        title: "遇到 Gemini 叫你手動貼程式碼時",
        body: "有時候 Gemini 會把程式碼顯示出來，叫你自己複製貼上。這時候可以直接請它幫你處理，可以輸入以下 prompt。",
        codeBlockIds: ["auto-write-prompt"],
      },
      {
        id: "遇到錯誤-bug",
        title: "遇到錯誤或 bug 時",
        body: "把 Unity Console 出現的錯誤訊息複製，直接貼給 Gemini CLI，或按照它的指示排除問題。",
        codeBlockIds: ["bug-report-prompt"],
      },
    ],
    image: {
      src: "/images/iterate-with-agent.svg",
      alt: "從初始 prompt 出發，跟著 Gemini CLI 指示建立 2D 射擊遊戲的示意圖。",
    },
    copyBlocks: [
      {
        id: "start-prompt",
        type: "prompt",
        label: "初始 prompt",
        content: "我要做一款 2D 射擊遊戲，請問我該怎麼做？",
        caption: "選擇 2D 射擊遊戲只是比較容易實作，你可以替換成其他類型",
      },
      {
        id: "auto-write-prompt",
        type: "prompt",
        label: "請 Gemini 直接寫入檔案",
        content: "可以幫我直接處理嗎？",
        caption: "",
      },
      {
        id: "bug-report-prompt",
        type: "prompt",
        label: "回報錯誤的 prompt",
        content:
          "我遇到了以下錯誤，請幫我分析原因並修正：\n\n<把 Unity Console 的錯誤訊息貼在這裡>",
        caption: "把錯誤訊息貼上後直接送出，Gemini 會幫你排除問題。",
      },
    ],
  },
  {
    id: "write-spec",
    chapterId: "spec",
    title: "將現有功能整理成 Spec 文件",
    shortTitle: "整理 Spec",
    goal: "",
    estimatedTime: "\u7d04 2 \u5206\u9418",
    intro: [
      "Spec（規格）是把你跟 AI Agent 討論功能的過程，壓縮成一份文件。",
      "Spec 讓每一項功能都有明確記錄，讓後續維護或擴充都有依據。",
    ],
    instructions: [
      {
        id: "輸入-spec-整理-prompt",
        title: "將現有功能整理成 Spec 文件",
        body: "一個功能，寫一個 Spec 結構。這樣之後要維護或擴充某個功能時，只需要找到那份 Spec，不會互相干擾。可以在 Gemini CLI 輸入以下的 prompt。",
        codeBlockIds: ["spec-gen-prompt"],
        hint: "不建議太早進行 spec 分類，可以先把所有功能集中寫在一個檔案中就好。",
      },
      {
        id: "用-vs-code-確認-spec-格式",
        title: "檢查 Spec 格式是否符合要求",
        body: "用 VSCode 打開 Spec 文件，確認每個功能都有獨立的 Spec 結構，包含 User Story、Input/Output、Rules、Test Case、Notes 等欄位。",
        hint: "怎麼檢查：看 Test case 有沒有同時測試兩件事，有的話代表這個 Spec 混了兩個功能，需要拆開。",
      },
    ],
    image: {
      src: "/images/write-spec.svg",
      alt: "用 Gemini CLI 整理現有功能成 Spec 文件，再用 VS Code 確認格式的示意圖。",
    },
    copyBlocks: [
      {
        id: "spec-gen-prompt",
        type: "prompt",
        label: "整理 Spec 的 prompt",
        content:
          "請按照「單一責任原則」將現有功能整理成一份 Spec 文件。Spec 結構包含以下欄位：User Story、Input/Output、Rules、Test Case、Notes。",
        caption: "",
      },
    ],
  },
  {
    id: "review-with-cases",
    chapterId: "spec",
    title: "用 Spec 的方式新增功能",
    shortTitle: "Spec 新增功能",
    goal: "",
    estimatedTime: "\u7d04 2 \u5206\u9418",
    intro: [
      "有了 Spec 之後，新增功能不再是直接叫 Gemini 去做，而是先討論、再整理、再實作。",
      "這個流程讓每個功能在動工前就有清楚的邊界，避免做到一半才發現方向不對。",
    ],
    instructions: [
      {
        id: "討論新功能",
        title: "討論新功能",
        body: "用以下 prompt 告訴 Gemini 你想討論一個新功能。",
        codeBlockIds: ["new-feature-prompt"],
      },
      {
        id: "基於-spec-實作功能",
        title: "基於 Spec 實作新功能",
        body: "Spec 確認沒問題後，請 Gemini 根據這份 Spec 開始實作，不需要另外說明需求。",
      },
    ],
    image: {
      src: "/images/review-with-cases.svg",
      alt: "用 Spec 流程討論並實作新功能的示意圖。",
    },
    copyBlocks: [
      {
        id: "new-feature-prompt",
        type: "prompt",
        label: "開啟新功能討論的 prompt",
        content:
          "我想要討論一個新功能，可以請你跟我討論嗎？討論我想要分成兩階段，第一階段，確認新功能的 User Story、要做什麼、不做什麼的邊界。第二階段，把前面的討論，整理成 Spec，並經過我確認沒問題後，請幫我寫入到檔案中。",
        caption:
          "Gemini 會先跟你確認功能細節，再整理成 Spec，不會直接開始實作。",
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
