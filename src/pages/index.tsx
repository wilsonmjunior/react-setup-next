import React from 'react'
import Head from 'next/head'

import Logo from '../assets/logo.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Logo width="400" />

      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js strucutre made by Junior</p>
    </Container>
  )
}

export default Home
