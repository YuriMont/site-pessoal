import { mySkills } from '../lib/skills'
import Skill from './skill'

interface SkillParams {
  name: string
  years: number
}

export default function Skills() {
  const skills: Array<SkillParams> = mySkills

  return (
    <section
      id="skills"
      className="flex min-h-screen w-screen flex-col gap-4 py-8"
    >
      <h1 className="text-center text-5xl font-bold text-white sm:text-3xl">
        Habilidades
      </h1>
      <div className="grid grid-cols-2 gap-8 px-16 py-8 sm:flex sm:flex-col sm:gap-4">
        {skills.map((item, index) => (
          <Skill key={index} name={item.name} years={item.years} />
        ))}
      </div>
    </section>
  )
}
