'use client'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [click, setClick] = useState(false)

  function handleChangeClick() {
    setClick(!click)
    console.log(click)
  }

  return (
    <header className="border-b-2 border-b-gray-700 bg-gray-900 px-8 py-4">
      <nav className="flex h-[8vh] items-center justify-around">
        <span className="cursor-pointer font-alt text-5xl text-white sm:text-3xl">
          {'<Yuri Monteiro/>'}
        </span>
        <button className="hidden sm:block" onClick={handleChangeClick}>
          {click ? <X size={28} /> : <Menu size={28} />}
        </button>
        <ul
          className={`flex items-center justify-around gap-8 bg-gray-900 sm:absolute sm:top-[10vh] sm:h-[95vh] sm:w-screen sm:flex-col sm:p-16 ${
            click ? 'sm:translate-x-0' : 'sm:translate-x-full'
          } transition-transform`}
        >
          <li
            onClick={handleChangeClick}
            className="py-1 sm:w-[50vw] sm:border-b sm:border-b-gray-400 sm:text-center"
          >
            <Link
              href="#home"
              className="cursor-pointer text-xl transition-colors hover:text-gray-50"
            >
              Inicio
            </Link>
          </li>
          <li
            onClick={handleChangeClick}
            className="py-1 sm:w-[50vw] sm:border-b sm:border-b-gray-400 sm:text-center"
          >
            <Link
              href="#skills"
              className="cursor-pointer text-xl transition-colors hover:text-gray-50"
            >
              Habilidades
            </Link>
          </li>
          <li
            onClick={handleChangeClick}
            className="py-1 sm:w-[50vw] sm:border-b sm:border-b-gray-400 sm:text-center"
          >
            <Link
              href="#projects"
              className="cursor-pointer text-xl  transition-colors hover:text-gray-50"
            >
              Projetos
            </Link>
          </li>
          <li
            onClick={handleChangeClick}
            className="py-1 sm:w-[50vw] sm:border-b sm:border-b-gray-400 sm:text-center"
          >
            <Link
              href="#contact"
              className="cursor-pointer text-xl  transition-colors hover:text-gray-50"
            >
              Entrar em contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
