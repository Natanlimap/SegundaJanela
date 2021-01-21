import React from 'react';
import Head from 'next/head';
import NavBar from '../components/navbar';
import PlataformasDigitaisHorizontal from '../components/plataformashorizontal'

const Home = () => (
  <div className='bg-black'>
    <Head>
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>
      
      <title>Segunda Janela</title>
      <link rel="canonical" href="https://segundajanela.com.br"></link>
      <meta name='description' content='Banda potiguar independente formada em 2020 que mistura influências de rock indie, pop, pop-rock, rock alternativo pra formar a própria identidade musical.' />
      <meta name='robots' content='index, follow' />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="google-site-verification" content="cw-yW_6fseH4-gTGtxZ5HVW4G3HXnRAEvYYV0uAlBtk" />
    </Head>

    <main className='h-screen'>
      <div className='bg-fusca bg-main'>
        <NavBar />

      </div>
      <div className='h-25 bg-color'>
        <PlataformasDigitaisHorizontal/>
      </div>
    </main>

  </div>
);

export default Home;
