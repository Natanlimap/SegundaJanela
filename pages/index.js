import React from 'react';
import Head from 'next/head';
import NavBar from '../components/navbar';
import PlataformasDigitaisHorizontal from '../components/plataformashorizontal'

const Home = () => (
  <div className='bg-black'>
    <Head>

      <title>Banda Segunda Janela</title>
      <link rel="canonical" href="http://segundajanela.com.br"></link>
      <meta name='description' content='Banda potiguar independente formada em 2020 que mistura influências de rock indie, pop, pop-rock, rock alternativo pra formar a própria identidade musical.' />
      <meta name='robots' content='index, follow' />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta charSet='UTF-8' />
      <meta httpEquiv='content-language' content='pt-br'/>
      <meta httpEquiv='content-type' content='text/html' charSet='UTF-8'/>
      <meta name="abstract" content="EP Meio do caminho disponível em todas as plataformas digitais"/>
      <meta name="keywords" content=" mpb rock  musica  arte   pop       spotify indie   lançamento guitarra banda baixista bateria  artistas independentes  indie   musica nova brasil segundajanela seu olhar por ai vestido xadrez azul janela banda potiguar brasileira"/>
      <meta name="robot" content="All"/>
      <meta name="rating" content="general"/>
      <meta name="distribution" content="global"/>
      <meta name="language" content="PT"/>

     
      <meta name='author' content='Natan de Lima'/>
      <meta name='creator' content='Natan de Lima'/>
  
      <meta property='og:locale' content='pt_BR'/>
      <meta property='og:type' content='website'/>
      <meta property='og:title' content='Banda Segunda Janela' />
      <meta name='og:description' content='Banda potiguar independente formada em 2020 que mistura influências de rock indie, pop, pop-rock, rock alternativo pra formar a própria identidade musical.' />
      <meta property='og:url' content='http://segundajanela.com.br/' />
  
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


