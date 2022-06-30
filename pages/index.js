import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Home1 from '../components/Home'
import Navb from '../components/Navb'
import Portafolio from '../components/Portafolio'
import { I18nextProvider } from "react-i18next"
import i18next from 'i18next'
import globalEspanol from '../translations/español/global.json'
import globalEnglish from '../translations/english/global.json'

export default function Home() {
  i18next.init({
    interpolation: { escapeValue: false },
    lng: "espanol",
    resources:{
      espanol:{
        global: globalEspanol
      },
      english:{
        global: globalEnglish
      }
    }
  });
  
  return (
    <I18nextProvider i18n={i18next}>
      <div>
        <Head>
          <title>Ed / Frontend Developer</title>
          <link rel = "icon" href="https://res.cloudinary.com/edwin3002/image/upload/v1656561250/portafolio/logo-fondo_xiky4w.png" type = "image/x-icon"></link>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navb />
        <Home1 />
        <About />
        <Portafolio />
        <Contact />
      </div>
    </I18nextProvider>
  )
}
