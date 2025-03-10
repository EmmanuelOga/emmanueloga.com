import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("blog", [
    index("routes/blog.tsx"),
    route("balancing-prepping-and-making", "routes/blog/post-2025-01-22.tsx"),
  ]),
] satisfies RouteConfig;
