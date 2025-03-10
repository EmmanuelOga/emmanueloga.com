import type { Route } from "./+types/blog";
import * as post20250122 from "./blog/post-2025-01-22";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Emmanuel Oga's Blog" },
    { name: "description", content: "Welcome to Emmanuel Oga's Blog!" },
  ];
}

export default function Blog({ loaderData }: Route.ComponentProps) {
  return (
    <article className="prose-container">
      <h1>Blog Posts</h1>
      <h2><a href="/blog/balancing-prepping-and-making">{post20250122.TITLE}</a></h2>
    </article>
  )
}