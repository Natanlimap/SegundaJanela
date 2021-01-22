import Image from 'next/image'
import Link from 'next/link'
export default function MusicaDesc(props) {
    return (
        <div className='pb-6'>
            <figure className="grid  grid-cols-1 md:grid-cols-6 xl:grid-cols-7 h-full w-full bg-gray-900 rounded-xl text-white ">
                <div className='col-span-1 md:col-span-2 lg:px-0 xl:col-span-2 w-full my-auto '>
                    <img className="mt-5 md:mt-0 mx-auto musicImage rounded-full" src="/musicas/1.jpg" alt="" />

                </div>
                <div className="col-span-1 md:col-span-4 xl:col-span-5 pt-6 mx-10 lg:mx-0 lg:p-8 text-center md:text-left opacity-75">
                    <figcaption className="font-bold text-lg">
                        <div>
                           <h2>{props.title}</h2>
                         </div>
                       
                    </figcaption>
                    <blockquote>
                        <p className="text-base font-normal pt-5">
                            {props.descricao}
                        </p>
                    </blockquote>
                    <div className='pt-5 text-center font-semibold pb-5 md:text-left lg:pb-0'>
                        <Link href=''><a>Clique aqui para escutar agora!</a></Link>
                    </div>
                </div>
            </figure>
        </div>
    )
}