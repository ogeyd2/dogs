import React from 'react'
import Feed from './Feed/Feed'
import Head from './Helper/Head'
import Loading from './Helper/Loading'

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Home site mamacos, com feed de fotos" />
      <Feed />
    </section>
  )
}

export default Home
