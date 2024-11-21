import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.jsx",
  defaultShowCopyCode: true,
  readingTime: true,
});

export default withNextra({
  reactStrictMode: true,
  cleanDistDir: true,
});

// If you have other Next.js configurations, you can pass them as the parameter:
// export default withNextra({ /* other next.js config */ })
