import Image from "next/image";

interface SkillsProps {
  skill: string;
}

export function Skills({ skill }: SkillsProps) {
  return (
    <li className="cursor-pointer">
      <Image
        src={`https://api.iconify.design/devicon:${skill}.svg`}
        width={48}
        height={48}
        alt={`${skill} icon`}
      />
    </li>
  );
}
