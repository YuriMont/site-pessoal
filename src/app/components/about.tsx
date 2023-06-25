import Image from 'next/image'
import Link from 'next/link'
import linkedin from '../assets/linkedIn.png'
import github from '../assets/github.png'
import telegram from '../assets/telegram.png'
import person from '../assets/image.png'

export default function About() {
  return (
    <section
      id="#home"
      className="flex min-h-screen w-screen items-center sm:flex-col-reverse"
    >
      <div className="flex h-full flex-col justify-center gap-1 p-16 sm:p-12">
        <p className="text-lg">👋 Seja bem-vindo ao meu portfolio!</p>
        <h1 className="font-alt text-5xl text-green-500">Yuri Monteiro </h1>
        <p className="text-xl font-bold">Desenvolvedor FullStack 💻 📱</p>
        <p className="my-4 w-[550px] sm:w-auto">
          Sou um estudante de graduação em Ciência da Computação na Universidade
          Estadual da Paraíba, com formação técnica em Informática pelo
          Instituto Federal da Paraíba. Atuo no desenvolvimento de aplicativos
          mobile e web utilizando Typescript, Java e Python.
        </p>
        <div className="flex w-full items-center gap-8 sm:flex-col sm:gap-6">
          <Link
            href="#contact"
            className="font-2xl rounded-full bg-green-500 px-8 py-2 text-center font-alt font-bold text-black transition-colors hover:bg-green-600 sm:w-full"
          >
            Contact-me
          </Link>
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
      </div>
      <div className="flex items-start justify-center px-16 sm:mt-16 sm:rounded-full sm:border-2 sm:border-white sm:bg-gray-600/80 sm:px-8 sm:py-0">
        <Image
          className="h-full w-auto sm:h-[250px] sm:rounded-full"
          src={person}
          alt="person"
        />
      </div>
    </section>
  )
}
