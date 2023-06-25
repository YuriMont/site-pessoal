'use client'
import { useState } from 'react'
import Project from './project'
import { ChevronDown, ChevronUp } from 'lucide-react'
import myProjects from '../lib/projects'

export default function Projects() {
  const projects = myProjects

  const [view, setView] = useState(4)

  function handleView() {
    if (view <= 4) {
      setView(projects.length)
    } else {
      setView(4)
    }
  }

  return (
    <section id="projects" className="min-h-screen w-screen pb-16">
      <div className="flex justify-between px-16 py-8 sm:px-8">
        <h1 className="text-5xl font-bold text-white sm:text-3xl">Projetos</h1>
        <button
          onClick={handleView}
          className={`rounded-md border px-8 py-2 uppercase transition-all hover:opacity-80  sm:px-4 ${
            view <= 4
              ? 'border-green-500 text-green-500'
              : 'border-red-500 text-red-500'
          }`}
        >
          {view <= 4 ? (
            <span className="flex items-center">
              Ver todos <ChevronDown />{' '}
            </span>
          ) : (
            <span className="flex items-center text-red-500">
              Ver menos <ChevronUp />{' '}
            </span>
          )}
        </button>
      </div>
      <div className="grid grid-cols-2 gap-8 px-16 sm:flex sm:flex-col sm:px-8">
        {projects.slice(0, view).map((item, index) => (
          <Project key={index} {...item} />
        ))}
      </div>
    </section>
  )
}
