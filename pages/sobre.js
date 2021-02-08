import MusicaDesc from "../components/musicaDesc";
import NavBar from "../components/navbar";
import Image from 'next/image'
const Sobre = () => (
    <div className=' bg-outros'>
       <NavBar/>
        <div className='lg:mx-64 mx-20 mt-20'>
            <div className='rounded'>
                <Image src='/sobre.png' width={3000} height={1200} />
            </div>
            <div className='lg:py-20 lg:px-20 py-5 px-5 text-center md:text-left h-full bg-gray-900 rounded text-white '>
                <h1 className='text-6xl font-bold tracking-widest'>Sobre nós</h1>
                <h2>A banda segunda janela se formou, inicialmente em 2019, com a junção de 3 amigos da mesma escola que gostavam de produzir músicas e gostavam de tocar juntos: Shock, Nathan, Túlio. </h2>
                <h3>Shock, o mais experiente, sempre tocou bateria na escola onde estudava Salesiano Dom Bosco, e desde pequeno já era desenrolado na bateria, tendo tocando inclusive com outros artistas, como Pytero e Melly. Nathan, um dos mais talentosos, começou sua trajetória tocando violão e segunda guitarra, também tendo tocado na banda do colégio. Túlio, por sua vez, aprendeu a tocar guitarra em pouco tempo quando viu que Nathan e Shock estavam pensando em tocar juntos, com o intuito de também participar. Entre idas e vindas, trocas de integrantes e lançamento de single, os 3 decidiram chamar uma vocal amiga em comum dos três, que é a Gics, dona de uma voz muito poderosa e ao mesmo tempo suave, que inclusive já fazia cover e letras no YouTube.</h3>
                <h4>Os 4 então começaram a arquitetar o início do EP (XXXXX NOME DO EP XXXX), e foi justamente nesse meio termo que Nathan decidiu largar a segunda guitarra e ir para o baixo, dando um ponto final à ausência desse instrumento. </h4>
                <p>O nome da banda foi escolhido com o intuito de que a “primeira janela” da nossa vida seria justamente a janela da nossa casa, do trabalho ou escola, isto é, se refere ao fato de apreciarmos a bela e calma paisagem que está ao nosso redor, contemplada através de uma simples janela. Já “segunda janela” seria algo mais subjetivo e de comum costume da banda, que seria justamente um momento similar onde a pessoa estaria apreciando não somente a música, como também qualquer estilo de arte, sendo a sensação de parar o tempo para apreciar a arte algo tão prazeroso que se assemelha à esse admirar de uma paisagem. </p>
                <p>O grupo gosta de tocar e produzir músicas por hobby, e os integrantes investiram muito tempo da pandemia na produção dessas músicas, que foram motivadas não somente pelo orgulho de se ter um material autoral de boa qualidade nas plataformas músicas, como também saber que alguém, em algum local do planeta, se sentiu impactado positivamente ao ouvir as músicas.</p>
           </div>
        </div>
    </div>
)

export default Sobre;
