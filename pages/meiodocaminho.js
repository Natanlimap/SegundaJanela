import MusicaDesc from "../components/musicaDesc";
import NavBar from "../components/navbar";

const Album = () => (
    <div className=' bg-outros'>
        <NavBar />
        <div>
            <h1 className='text-center font-semibold text-white my-auto text-3xl mt-10 opacity-75 lg:mt-20'>Saiba um pouco sobre nossas músicas!</h1>
            <h1 className='text-center font-semibold text-white my-auto text-xl opacity-75 lg:mt-2'>Confira nossa descrição sobre Meio do caminho</h1>

        </div>
        <div className='flex mt-10 '>
            <div className=' p-5 lg:p-0 h-96 w-full md:px-4 lg:px-4 xl:px-40'>
                <figure class="rounded-xl lg:p-8">
                    <div className='pt-6'>
                        <MusicaDesc title={"01 - Violão da Maldade"} descricao = {'"Eu escrevi essa música na perspectiva de um término, não necessariamente de um namoro, mas usei essa letra pra refletir sobre toda a culpa que estava guardando sobre esse assunto. É uma música que me trouxe conforto depois de escrever, por que essas coisas acontecem querendo ou não, as vezes machucamos as pessoas que amamos e temos que lidar com isso de alguma forma."'} />
                        <MusicaDesc title={"02 - Por ai é o Meu Lugar"} descricao = {'"A sensação que serviu de inspiração para a letra da música foi a sensação de ficar em casa muito tempo, preso e sem estar em contato com outras pessoas. A letra em si fala sobre a vontade de sair da sua rotina para se sentir vivo e conectado com o mundo, o que muitas pessoas já passaram em algum momento da vida. A melodia, por outro lado, apresenta acordes maiores, trazendo uma sensação alegre à música, criando uma atmosfera positiva de mudança e de que, no final, tudo irá dar certo."'} />
                        <MusicaDesc title={"03 - Seu Olhar"} descricao = {'"Seu olhar é uma musica inteiramente sobre saudade. Uma saudade que até mesmo a distancia do dia a dia é o suficiente para causá-la. Essa saudade me faz lembrar de tantos momentos que vivi e que poderia estar vivendo se não fosse a rotina do dia a dia. Fico tão nostálgico que perco um pouco da noção do tempo e tudo parece tão mais distante do que realmente é. O que me faz relembrar outros momentos no qual a saudade quase foi o sentimento que ficou."'} />
                        <MusicaDesc title={"04 - Vestido Xadrez Azul"} descricao = {'"È a reflexão sobre a simplicidade e ao mesmo tempo sobre a profundidade que a vivência do cotidiano com a minha namorada consegue me proporcionar. Retratando, sentimentos de saudade, de apego, de amor, de muita sinceridade e de certeza."'} />
                        <MusicaDesc title={"05 - Parece Black Mirror"} descricao = {'" Essa música é sobre se sentir perdido e sem rumo após o termino de um relacionamento, seja qual for ele, e de todas as consequências em tentar seguir em frente. Consumido por lembranças, duvidas e incertezas paradoxadas por sonhos, desejos e vontades, eu me sinto, no fim de tudo, culpado por causar algo que não cabia a mim."'} />
                    </div>
                </figure>
            </div>
        </div>
    
    </div>
)

export default Album;
