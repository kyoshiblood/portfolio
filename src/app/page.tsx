import { Skills } from "@/components/skills";
import { Mail } from "lucide-react";
import Image from "next/image";
import GithubIcon from "../assets/github-mark-white.svg";

const skills = [
  "html5",
  "css3",
  "javascript",
  "go",
  "react",
  "fastify",
  "tailwindcss",
  "linux",
  "postgresql",
];

export default function Home() {
  return (
    <main className="flex gap-16 items-center justify-center py-5 text-gray-100">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-6xl font-bold py-5">
              Fernando <span className="text-amber-300">Rocha</span>
            </h1>
            <p className="font-semibold text-2xl">
              Brazilian <span className="text-amber-300">back-end</span>{" "}
              developer, programming enthusiast.
            </p>

            <ol className="flex items-center gap-4 mt-4">
              <li className="cursor-pointer">
                <Image
                  className="size-10"
                  width={48}
                  src={GithubIcon}
                  alt="github icon logo"
                />
              </li>

              <li className="cursor-pointer">
                <Mail className="size-10" />
              </li>
            </ol>
          </div>

          <img
            className="rounded-[50%] border-4 border-amber-300"
            src="https://github.com/kyoshiblood.png"
            width={256}
            height={256}
            alt="kyoshi blood avatar github "
          />
        </div>

        <div>
          <h2 className="text-5xl font-bold text-gray-50">
            About <span className="text-amber-300">me</span>
          </h2>
          <p className="text-[22px] mt-2.5 mb-2.5 max-w-256">
            I started my journey in software development in 2022 when I I made a
            website for a friend to bot on Discord, after that I try to increase
            my knowledge day by day. Nowadays, I'm “starting over”, gaining
            back-end knowledge and starting on the front-end.
          </p>

          <a
            href="https://kyoshiscrawl.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-[20px] cursor-pointer text-amber-600 hover:text-blue-400 font-semibold"
          >
            See my blog.
          </a>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-amber-300 mt-5">Skills</h2>
          <ol className="flex items-center gap-4 mt-4">
            {skills.map((skill) => (
              <Skills key={skill} skill={skill} />
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}
