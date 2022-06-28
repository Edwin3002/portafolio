import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Home1 from '../components/Home'
import Navb from '../components/Navb'
import Portafolio from '../components/Portafolio'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Edwin / Frontend Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navb/>
      <Home1/>
      <About/>
      <Portafolio/>
      <Contact/>
    </div>
  )
}
