import { Button } from '../components'

import { Form } from '../styles/pages/contact'

import axios from 'axios'
import React, { useState } from 'react'

export default function Contact() {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    axios.post('https://formsubmit.co/ajax/hello@lebueno.com.br', { name: 'teste' })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <section>
        <div>
          <label htmlFor="name">nome *</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="lastName">sobrenome *</label>
          <input type="text" id="lastName" />
        </div>
      </section>
      <section>
        <div>
          <label htmlFor="email">email *</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="whatsApp">whatsapp *</label>
          <input type="text" id="whatsApp" placeholder="Ex: (11) 93705-4095" />
        </div>
        <div>
          <label htmlFor="city">de onde você é? *</label>
          <input type="text" id="city" placeholder="Ex: São Paulo/SP" />
        </div>
      </section>
      <div>
        <label htmlFor="meeting">você tem disponibilidade para uma reunião? *</label>
        <span>Faz parte do processo de criação. A reunião é rápida, em torno de 20 minutinhos =)</span>
        <input type="text" id="meeting" />
      </div>
      <div>
        <label htmlFor="brand">qual o nome da sua marca? *</label>
        <span>Não trabalho com a parte de criação de naming da marca. Por isso é essencial que já possua um nome.</span>
        <input type="text" id="brand" />
      </div>
      <div>
        <label htmlFor="segment">qual é o segmento em que atua ou irá atuar? *</label>
        <input type="text" id="segment" placeholder="Ex: Veterinária, Joalheria, Dentista, Arquitetura" />
      </div>
      <div>
        <label htmlFor="brandDetails">me conte um pouco da sua empresa. quais os serviços oferecidos? o que ela faz? *</label>
        <textarea id="brandDetails" rows={5} />
      </div>
      <div>
        <label htmlFor="site">sua marca possui site ou redes sociais? *</label>
        <span>Se sim, por gentileza inserir o link abaixo.</span>
        <input type="text" id="site" />
      </div>
      <div>
        <label htmlFor="utilization">onde a identidade visual será usada? *</label>
        <input type="text" id="utilization" placeholder="Ex: Site, Redes sociais, Papelaria/Impressos" />
      </div>
      <div>
        <label htmlFor="materials">além da identidade visual, de quais outros materiais você precisa? *</label>
        <textarea id="materials" placeholder="Ex: Cartão de visitas, Assinatura de e-mail, Envelope" rows={5} />
      </div>
      <div>
        <label htmlFor="find">por onde você me encontrou? *</label>
        <input type="text" id="find" />
      </div>
      <div>
        <label htmlFor="doubt">tem alguma dúvida que possa te ajudar? *</label>
        <span>Caso prefira, fique a vontade para entrar em contato comigo via WhatsApp: (11) 93705-4095 =)</span>
        <textarea id="doubt" rows={5} />
      </div>
      <Button type="submit">enviar</Button>
    </Form>
  )
}
