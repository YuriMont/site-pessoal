'use client'
import ReactStars from 'react-rating-star-with-type'

interface SkillParams {
  name: string
  years: number
}

export default function Skill({ name, years }: SkillParams) {
  return (
    <div className="flex items-end gap-3">
      <span className="font-alt text-3xl font-bold text-gray-50 sm:text-xl">
        {name}
      </span>
      <div className="flex flex-col items-center">
        <span className="sm>text-sm">Anos</span>
        <ReactStars
          size={24}
          value={years}
          isEdit={false}
          activeColor="#04d361"
        />
      </div>
    </div>
  )
}
