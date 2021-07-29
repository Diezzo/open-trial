import feed from "./pages/feed/feed.tsx";
import article from "./pages/article/article.tsx";

export const routes = [
  { path: "/", component: feed, exact: true },
  { path: "/article/:slug", component: article },
];
