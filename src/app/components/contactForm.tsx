'use client'

import { FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const [status, setStatus] = useState(400)
  const [disabled, setDisabled] = useState(false)
  async function handleSubmitMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setDisabled(true)
    const formData = new FormData(event.currentTarget)

    const data = {
      name: formData.get('name'),
      message: formData.get('content'),
      email: formData.get('email'),
    }

    await emailjs
      .send('service_7u4p6b4', 'template_u3khtmk', data, 'G-qNd35FPC0KMpIP_')
      .then((response) => setStatus(response.status))
    setDisabled(false)
  }

  return (
    <form
      onSubmit={handleSubmitMessage}
      className="flex flex-col gap-4 rounded-md bg-gray-900 p-16 shadow-md sm:p-8"
    >
      <h1 className="mb-2 text-center text-4xl text-white">Entre em contato</h1>
      <input
        className="rounded-md bg-gray-500 px-4 py-2 placeholder:text-gray-300"
        type="text"
        name="name"
        placeholder="Nome"
      />
      <input
        className="rounded-md bg-gray-500 px-4 py-2 placeholder:text-gray-300"
        type="email"
        name="email"
        placeholder="Email"
      />
      <textarea
        name="content"
        spellCheck={false}
        rows={5}
        className="mt-4 w-full flex-1 resize-none rounded bg-gray-500 p-4 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
        placeholder="Informe sua mensagem"
      />

      <button
        type="submit"
        disabled={disabled}
        className="inline-block self-end rounded-full bg-green-500 px-5 py-3 font-alt text-sm font-bold uppercase leading-none text-black transition-colors hover:bg-green-600 disabled:cursor-wait disabled:opacity-80"
      >
        Salvar
      </button>
      <p className="text-center text-sm">
        {status !== 400 && 'Enviado com sucesso'}
      </p>
    </form>
  )
}
