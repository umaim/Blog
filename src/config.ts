export const SITE = {
  website: "https://uma.im/", // replace this with your deployed domain
  author: "Cloud",
  profile: "https://uma.im/",
  desc: "Cloud's Blog | Stay Hungry, Stay Foolish.",
  title: "Cloud's Time Capsule",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerIndex: 8,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "编辑",
    url: "https://github.com/umaim/Blog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
