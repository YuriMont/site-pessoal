import { Mail, Phone } from 'lucide-react'
import ContactForm from './contactForm'

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen w-screen items-center bg-zinc-950 p-16 sm:flex-col sm:px-0"
    >
      <div className="flex-1">
        <ContactForm />
      </div>
      <div className="flex flex-1 flex-col items-center gap-2 p-16 text-center">
        <h1 className="mb-2 text-4xl font-bold text-white">
          Vamos entrar em contato
        </h1>
        <p className="text-lg">
          Sinta-se à vontade para entrar em contato comigo usando as informações
          abaixo, ou preenchendo o formulário.
        </p>
        <div className="mt-4 flex items-center gap-2 text-lg font-light">
          <Phone />
          {'+55 (83) 99314-3157'}
        </div>
        <div className="flex items-center gap-2 text-lg font-light">
          <Mail />
          {'yuri.mont1043@gmail.com'}
        </div>
      </div>
    </section>
  )
}
