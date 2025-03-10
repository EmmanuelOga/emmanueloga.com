import { GITHUB, LINKEDIN, LOBSTERS, MASTODON, PLANGS, TWITTER, YNEWS } from "~/components/icons";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Emmanuel Oga's Blog" },
    { name: "description", content: "Welcome to Emmanuel Oga's Home Page!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <article className="prose-container">
      <h1>Welcome!</h1>
      <p>
        I'm Emmanuel, a software developer based on San Francisco, California.
      </p>
      <p>Checkout some of my profiles around the web:</p>
      <ul className="flex gap-4 justify-center">
        {ELSEWHERE.map(({ href, icon }) => <li className="list-none" key={href}><a href={href}>{icon}</a></li>)}
      </ul>
      <p>
        Visit my website <a href="https://plangs.page">Plangs!</a>  to find your next favorite programming language!
      </p>
      <p className="text-center">
        <a className="inline-block" href="https://plangs.page">{PLANGS}</a>
      </p>
      <p>
        Or maybe checkout <a href="/blog">my latest blog posts</a>?
      </p>
      <p>
        Thanks for visiting!
      </p>
    </article>
  )
}

const ELSEWHERE = [
  { href: "https://github.com/emmanueloga", icon: GITHUB },
  { href: "https://linkedin.com/in/emmanueloga", icon: LINKEDIN },
  { href: "https://lobste.rs/~emmanueloga", icon: LOBSTERS },
  { href: "https://news.ycombinator.com/user?id=emmanueloga_", icon: YNEWS },
  { href: "https://mastodon.gamedev.place/@EmmanuelOga", icon: MASTODON },
  { href: "https://x.com/emmanueloga", icon: TWITTER },
]