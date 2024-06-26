const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Lê Thiện Phước",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend & backend developer",
    bio: "I develop everything using Database (Oracle, SQL Server, MySQL, Postgres,...), C#, Nodejs, Nextjs, Reactjs.",
    email: "lebaokhaky@gmail.com",
    github: "phuocvj", 
    instagram: "phuocpeony",
    facebook: "phuocpeony",
    linkedin: "",
  },
  projects:[],
  // projects: [
  //   {
  //     name: `morethan-blog`,
  //     href: "https://github.com/phuocvj/morethan-log",
  //   },
  // ],
  // blog setting (required)
  blog: {
    title: "Morethan-Blog",
    description: "Welcome to Morethan-Blog!",
  },

  // CONFIG configration (required)
  link: "https://blog.changshin.vn",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Comment",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "aaf0e69a-9be9-4221-96e1-e69ca32d6e3e", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
