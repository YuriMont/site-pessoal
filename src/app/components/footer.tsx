import Link from 'next/link'
import Image from 'next/image'
import linkedin from '../assets/linkedIn.png'
import github from '../assets/github.png'
import telegram from '../assets/telegram.png'

export default function Footer() {
  return (
    <footer className="flex justify-between gap-4 border-t-2 border-t-gray-700 bg-gray-900 px-16 py-8 sm:flex-col sm:items-center sm:p-8">
      <div className="flex flex-col sm:text-center">
        <h1 className="mb-2 font-alt text-4xl font-bold uppercase text-white sm:text-3xl">
          {'<Yuri Monteiro/>'}
        </h1>
        <span className="">Yuri Monteiro© 2023.</span>
        <span className="">Todos os direitos reservados</span>
      </div>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="font-alt text-2xl font-bold text-white">Paginas</h1>
        <Link href="#about" className="hover:opacity-80">
          Inicio
        </Link>
        <Link href="#skills" className="hover:opacity-80">
          Habilidades
        </Link>
        <Link href="#projects" className="hover:opacity-80">
          Projetos
        </Link>
        <Link href="#contact" className="hover:opacity-80">
          Contato
        </Link>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-alt text-2xl font-bold text-white">Sociais</h1>
        <span className="flex items-center justify-center gap-4 sm:justify-between">
          <Link
            href="https://www.linkedin.com/in/yuri-monteiro-5b6b48205/"
            className="flex items-center justify-center rounded-full border border-white p-2 transition-colors hover:opacity-70"
          >
            <Image alt="" className="h-6 w-6" src={linkedin} />
          </Link>

          <Link
            href="https://github.com/YuriMont"
            className="flex items-center justify-center rounded-full border border-white p-2 transition-colors hover:opacity-70"
          >
            <Image alt="" className="h-6 w-6" src={github} />
          </Link>

          <Link
            href="https://t.me/yuri_monteiro1043"
            className="flex items-center justify-center rounded-full border border-white p-2 transition-colors hover:opacity-70"
          >
            <Image alt="" className="h-6 w-6" src={telegram} />
          </Link>
        </span>
      </div>
    </footer>
  )
}
