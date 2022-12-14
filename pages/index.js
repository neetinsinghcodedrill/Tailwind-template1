import Head from 'next/head'
import Navbar from '../components/Navbar'
import TopContent from '../components/TopContent'
import GetStartedToday from '../components/GetStartedToday'
import SimpleEveryday from '../components/SimpleEveryday'
import LoveWorldWide from '../components/LoveWorldWide'
import Pricing from '../components/Pricing'
import FrequentlyAsked from '../components/FrequentlyAsked'
import FooterNavigation from '../components/FooterNavigation'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="font-Lexend font-thin">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <TopContent/>
      <GetStartedToday/>
      <SimpleEveryday/>
      <LoveWorldWide/>
      <Pricing/>
      <FrequentlyAsked/>
      <FooterNavigation/>
      <Footer/>
    </div>
  )
}
