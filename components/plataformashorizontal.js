import Image from 'next/image'
export default function PlataformasDigitaisHorizontal(){
    return(
        <div className='h-full'>
            <div className='block sm:hidden'>
                <div className='text-center pt-0 animate-bounce	'>
                <Image
                    src='/arraste.png'
                    width={50}
                    height={50}
                />  
                </div>
                <h5 className='text-color text-center text-4xl pt-1'>Arraste pra cima!</h5>
            </div>
            <div className='my-auto text-center flex flex-row flex-wrap justify-center bg-color'>
                <div className='animate-pulse'>
                    <a href='/'>
                        <Image
                            src='/spotify.png'
                            width={200}
                            height={200}
                        />
                    </a>
                </div>

                <div className='animate-pulse'>
                    <a href='https://open.spotify.com/artist/7Hb0buOfAUdCXqccuBfAOj'>
                        <Image
                            src='/spotify.png'
                            width={200}
                            height={200}
                        />
                    </a>
                </div>

                <div className='animate-pulse'>
                    <a href='https://open.spotify.com/artist/7Hb0buOfAUdCXqccuBfAOj'>
                        <Image
                            src='/spotify.png'
                            width={200}
                            height={200}
                        />
                    </a>
                </div>

                <div className='animate-pulse'>
                    <a href='https://open.spotify.com/artist/7Hb0buOfAUdCXqccuBfAOj'>
                        <Image
                            src='/spotify.png'
                            width={200}
                            height={200}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}