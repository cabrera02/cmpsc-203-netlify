import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">

        <p>
        "SE1 - Software Engineering has been seen and described as “programming” which
        decreases the value of the discipline. Like other engineering disciplines
        such as civil engineers and aeronautical engineers, software engineers have 
        similarly rigorous practices. Software engineers have to think far into the 
        future since what they write now has to be able to adapt and work in the 
        future. If the programs written can’t evolve with the time, what’s the point 
        of developing them in the first place? This is especially important because so
        much of society and one’s life is dependent on technology that is quickly 
        changing for the better."  </p>
        
  

       <p>
       "FB1 - Testing a program before deployment is extremely important to the
        development of a functional program. While testing may be long and tedious
        it is important to exam all aspects for a possible flaw before made public.
        The best programs are tested with many different inputs to ensure that
        nothing can break it or cause a failure." </p>

        </p>
      </main>

      <Footer />
    </div>
  )
}
