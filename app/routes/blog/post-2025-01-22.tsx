import type { Route } from "./+types/post-2025-01-22";

export const TITLE = "Balancing Prepping and Making";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: TITLE },
    { name: "description", content: "Welcome to Emmanuel Oga's Blog!" },
  ];
}

export default function BlogPost() {
  return (
    <article className="prose-container">
      <h1>{TITLE}</h1>
      <p>Jan 2025</p>
      <p>
        Your technology stack can make or break your project. You can never be too careful, right?
        Taken to its logical conclusion, this leads to building our own engine or stack from scratch.
      </p>
      <p>
        This pattern is well known (and maybe even cherished!) in the indie game development community. It's not uncommon to see devs spend years building game engines, tools, and frameworks. Sometimes, the game never comes.
      </p>
      <p>
        Writing our own tools isn't always a dead end. I recently <a href="https://news.ycombinator.com/item?id=42799507">came across this cool project</a> that uses BabylonJS and Clojure to create a web game. A success case! And yet, the author lamented the lack of good tooling while working on the project.
      </p>
      <p>
        I did something similar for my website <a href="https://plangs.page">Plangs!</a>. Instead of picking an established framework, I decided to build my own static site generator on top of <a href="https://esbuild.github.io/">ESBuild</a>, <a href="https://preactjs.com/">Preact</a>, and <a href="https://tailwindcss.com/">TailwindCSS</a>. While I'm overall happy with how it turned out, I sometimes wonder, should I have focused more on the content?
      </p>
      <p>
        This dilemma isn't limited to programming. It is easy to fall in the trap in other areas: waiting to take notes until we figure out the perfect Obsidian workflow, postponing workouts until we establish the ideal routine, and so on. Someone else who identified this pattern suggested aiming for a <a href="https://news.ycombinator.com/item?id=42905900">"minimum viable dose"</a>. I like that idea.
      </p>
      <p>
        With that in mind, I've decided to:
      </p>
      <ul>
        <li><strong>Rely on well-known tools</strong> for future projects.</li>
        <li><strong>Embrace progress over perfection</strong>, even when the tooling isn't ideal.</li>
      </ul>
      <p>
        A side note (re:tooling): these days, when writing web apps, I'm choosing <a href="https://reactrouter.com/">React Router</a> and enjoying it! Hope to write more about that on future posts.
      </p>
    </article>
  )
}