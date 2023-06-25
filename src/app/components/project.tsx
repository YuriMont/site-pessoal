'use client'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

interface ProjectsParams {
  name: string
  image: string
  resume: string
  link: string
}

export default function Project(project: ProjectsParams) {
  const [readMore, setReadMore] = useState(false)

  function handleShowText() {
    setReadMore(!readMore)
  }

  return (
    <div className="flex flex-col hover:opacity-80">
      <div className="flex h-[352px] items-center rounded-md bg-gray-700 px-8 py-12 transition-all sm:h-auto">
        {readMore ? (
          <p className="">{project.resume}</p>
        ) : (
          <Image
            className="aspect-video w-full rounded-md"
            width={592}
            height={280}
            src={project.image}
            alt="imagem"
          />
        )}
      </div>
      <Link href={project.link} className="mt-3 text-2xl font-bold">
        {project.name}
      </Link>
      <button onClick={handleShowText} className="transition-all">
        {readMore ? (
          <span className="flex items-center text-red-500">
            {'Ler menos'}
            <ChevronUp />
          </span>
        ) : (
          <span className="flex items-center text-green-500">
            {'Ler mais'}
            <ChevronDown />
          </span>
        )}
      </button>
    </div>
  )
}
