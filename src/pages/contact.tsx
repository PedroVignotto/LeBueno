import { Button, Input, Textarea } from '../components'

import { Title, Form } from '../styles/pages/contact'

import Image from 'next/image'
import axios from 'axios'
import React, { useState } from 'react'

export default function Contact() {
  const url = 'https://formsubmit.co/ajax/hello@lebueno.com.br'

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsApp, setWhatsApp] = useState('')
  const [city, setCity] = useState('')
  const [meeting, setMeeting] = useState('')
  const [brand, setBrand] = useState('')
  const [segment, setSegment] = useState('')
  const [brandDetails, setBrandDetails] = useState('')
  const [site, setSite] = useState('')
  const [employees, setEmployees] = useState('')
  const [utilization, setUtilization] = useState('')
  const [materials, setMaterials] = useState('')
  const [find, setFind] = useState('')
  const [doubt, setDoubt] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    axios.post(url, { name, lastName, email, whatsApp, city, meeting, brand, segment, brandDetails, site, employees, utilization, materials, find, doubt })

    setName('')
    setLastName('')
    setEmail('')
    setWhatsApp('')
    setCity('')
    setMeeting('')
    setBrand('')
    setSegment('')
    setBrandDetails('')
    setSite('')
    setEmployees('')
    setUtilization('')
    setMaterials('')
    setFind('')
    setDoubt('')
  }

  return (
    <>
      <Title>
        <Image src="/images/logo/symbol-black.svg" alt="Simbolo" width={30} height={30} />
        <h1>conte-me mais sobre <span>você</span> e sua <span>empresa</span></h1>
      </Title>
      <Form onSubmit={handleSubmit}>
        <section>
          <Input
            label="nome *"
            state={name}
            setState={setName}
          />
          <Input
            label="sobrenome *"
            state={lastName}
            setState={setLastName}
          />
        </section>
        <section>
          <Input
            label="email *"
            state={email}
            setState={setEmail}
          />
          <Input
            label="whatsapp *"
            placeholder="Ex: (11) 93705-4095"
            state={whatsApp}
            setState={setWhatsApp}
          />
          <Input
            label="de onde você é? *"
            placeholder="Ex: São Paulo/SP"
            state={city}
            setState={setCity}
          />
        </section>
        <Input
          label="você tem disponibilidade para uma reunião? *"
          description="Faz parte do processo de criação. A reunião é rápida, em torno de 20 minutinhos =)"
          state={meeting}
          setState={setMeeting}
        />
        <Input
          label="qual o nome da sua marca? *"
          description="Não trabalho com a parte de criação de naming da marca. Por isso é essencial que já possua um nome."
          state={brand}
          setState={setBrand}
        />
        <Input
          label="qual é o segmento em que atua ou irá atuar? *"
          placeholder="Ex: Veterinária, Joalheria, Dentista, Arquitetura"
          state={segment}
          setState={setSegment}
        />
        <Textarea
          label="me conte um pouco da sua empresa. quais os serviços oferecidos? o que ela faz? *"
          state={brandDetails}
          setState={setBrandDetails}
        />
        <Input
          label="sua marca possui site ou redes sociais? *"
          description="Se sim, por gentileza inserir o link abaixo."
          state={site}
          setState={setSite}
        />
        <Input
          label="quantos funcionários tem na sua empresa? *"
          state={employees}
          setState={setEmployees}
        />
        <Input
          label="onde a identidade visual será usada? *"
          placeholder="Ex: Site, Redes sociais, Papelaria/Impressos"
          state={utilization}
          setState={setUtilization}
        />
        <Textarea
          label="além da identidade visual, de quais outros materiais você precisa? *"
          placeholder="Ex: Cartão de visitas, Assinatura de e-mail, Envelope"
          state={materials}
          setState={setMaterials}
        />
        <Input
          label="por onde você me encontrou? *"
          state={find}
          setState={setFind}
        />
        <Textarea
          label="tem alguma dúvida que possa te ajudar? *"
          description="Caso prefira, fique a vontade para entrar em contato comigo via WhatsApp: (11) 93705-4095 =)"
          state={doubt}
          setState={setDoubt}
        />
        <Button type="submit">enviar</Button>
      </Form>
    </>
  )
}
