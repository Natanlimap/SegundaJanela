import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
    return (
        <div>
            <nav className="nav flex flex-wrap items-center justify-between px-4">
                <div className="flex flex-no-shrink items-center mr-6 py-3 text-color">
                    <div className='mx-2'>
                    <Image
                        src='/logo.png'
                        width={23.91}
                        height={33}
                        alt='Logo da Banda Segunda Janela. Uma Janela de duas portas com um arco curvado em cima.'
                    />
                    </div>
                </div>

                <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
                <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"  for="menu-btn">
                    <span className="navicon bg-grey-darkest flex items-center relative"></span>
                </label>

                <ul className="menu  md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
                    <li className=" md:border-none">
                        <a href="/" className="block md:inline-block px-4 py-3 no-underline text-color hover:text-grey-darker font-bold">Início</a>
                    </li>

                    <li className=" md:border-none">
                    <Link href="/meiodocaminho"> <a href="/meiodocaminho" className="block md:inline-block px-4 py-3 no-underline text-color hover:text-grey-darker">Meio do caminho</a></Link>
                    </li>

                    <li className=" md:border-none">
                        <Link href="/sobre"><a href="#" className="block md:inline-block px-4 py-3 no-underline text-color hover:text-grey-darker">Sobre nós</a></Link>
                    </li>
                    <li className=" md:border-none">
                        <a href="/contato" className="block md:inline-block px-4 py-3 no-underline text-color hover:text-grey-darker">Contato</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}