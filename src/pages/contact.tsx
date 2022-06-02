import { Button, Input, Spinner, Textarea } from '../components'

import { Title, Main, Form } from '../styles/pages/contact'

import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import React, { useState } from 'react'

export default function Contact() {
  const url = 'https://formsubmit.co/ajax/hello@lebueno.com.br'

  const [loading, setLoading] = useState(false)

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

  const formError = !name || !lastName || !email || !whatsApp || !city || !meeting || !brand || !segment || !brandDetails || !site || !employees || !utilization || !materials || !find || !doubt

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    if (formError || loading) return

    setLoading(true)

    await axios.post(url, { name, lastName, email, whatsApp, city, meeting, brand, segment, brandDetails, site, employees, utilization, materials, find, doubt })

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
    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>Contato ✽ Letícia Bueno</title>
      </Head>
      <Title>
        <Image src="/images/logo/symbol-black.svg" alt="Simbolo" width={30} height={30} />
        <h1>conte-me mais sobre <span>você</span> e sua <span>empresa</span></h1>
      </Title>
      <Main>
        <Image src="/images/general/contact.png" alt="Contato" width={350} height={350} />
        <article>
          <p>Estou muito feliz que tenha se interessado em trabalhar comigo para realizar o sonho da sua marca.</p>
          <p>Para que eu possa enviar seu orçamento personalizado, vou precisar que você me forneça algumas informações neste formulário. Por isso, <strong>é de extrema importância que as respostas sejam bem claras e descritivas.</strong></p>
          <p>Irei entrar em contato com você em até <strong>24h</strong> para enviar a proposta e conversarmos.</p>
          <p>Até lá!</p>
        </article>
      </Main>
      <Form onSubmit={handleSubmit}>
        <section>
          <Input
            label="nome *"
            name="name"
            state={name}
            setState={setName}
          />
          <Input
            label="sobrenome *"
            name="lastName"
            state={lastName}
            setState={setLastName}
          />
        </section>
        <section>
          <Input
            label="email *"
            name="email"
            state={email}
            setState={setEmail}
          />
          <Input
            label="whatsapp *"
            placeholder="Ex: (11) 93705-4095"
            name="whatsApp"
            state={whatsApp}
            setState={setWhatsApp}
          />
          <Input
            label="de onde você é? *"
            placeholder="Ex: São Paulo/SP"
            name="city"
            state={city}
            setState={setCity}
          />
        </section>
        <Input
          label="você tem disponibilidade para uma reunião? *"
          description="Faz parte do processo de criação. A reunião é rápida, em torno de 20 minutinhos =)"
          name="meeting"
          state={meeting}
          setState={setMeeting}
        />
        <Input
          label="qual o nome da sua marca? *"
          description="Não trabalho com a parte de criação de naming da marca. Por isso é essencial que já possua um nome."
          name="brand"
          state={brand}
          setState={setBrand}
        />
        <Input
          label="qual é o segmento em que atua ou irá atuar? *"
          placeholder="Ex: Veterinária, Joalheria, Dentista, Arquitetura"
          name="segment"
          state={segment}
          setState={setSegment}
        />
        <Textarea
          label="me conte um pouco da sua empresa. quais os serviços oferecidos? o que ela faz? *"
          name="brandDetails"
          state={brandDetails}
          setState={setBrandDetails}
        />
        <Input
          label="sua marca possui site ou redes sociais? *"
          description="Se sim, por gentileza inserir o link abaixo."
          name="site"
          state={site}
          setState={setSite}
        />
        <Input
          label="quantos funcionários tem na sua empresa? *"
          name="employees"
          state={employees}
          setState={setEmployees}
        />
        <Input
          label="onde a identidade visual será usada? *"
          placeholder="Ex: Site, Redes sociais, Papelaria/Impressos"
          name="utilization"
          state={utilization}
          setState={setUtilization}
        />
        <Textarea
          label="além da identidade visual, de quais outros materiais você precisa? *"
          placeholder="Ex: Cartão de visitas, Assinatura de e-mail, Envelope"
          name="materials"
          state={materials}
          setState={setMaterials}
        />
        <Input
          label="por onde você me encontrou? *"
          name="find"
          state={find}
          setState={setFind}
        />
        <Textarea
          label="tem alguma dúvida que possa te ajudar? *"
          description="Caso prefira, fique a vontade para entrar em contato comigo via WhatsApp: (11) 93705-4095 =)"
          name="doubt"
          state={doubt}
          setState={setDoubt}
        />
        <Button type="submit" disabled={formError}>{loading ? <><Spinner /><span>Enviando</span></> : 'Enviar'}</Button>
      </Form>
    </>
  )
}
