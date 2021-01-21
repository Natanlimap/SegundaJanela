import Image from 'next/image'

export default function NavBar() {
    return (
        <div>
            <nav class="nav flex flex-wrap items-center justify-between px-4">
                <div class="flex flex-no-shrink items-center mr-6 py-3 text-color">
                    <div className='mx-2'>
                    <Image
                        src='/logo.png'
                        width={28}
                        height={33}
                    />
                    </div>
                </div>

                <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
                <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"  for="menu-btn">
                    <span class="navicon bg-grey-darkest flex items-center relative"></span>
                </label>

                <ul class="menu  md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
                    <li class=" md:border-none">
                        <a href="/" class="block md:inline-block px-4 py-3 no-underline text-color hover:text-grey-darker font-bold">Início</a>
                    </li>

                    <li class=" md:border-none">
                        <a href="/meiodocaminho" class="block md:inline-block px-4 py-3 no-underline text-color hover:text-grey-darker">Meio do caminho</a>
                    </li>

                    <li class=" md:border-none">
                        <a href="/sobre" class="block md:inline-block px-4 py-3 no-underline text-color hover:text-grey-darker">Sobre nós</a>
                    </li>
                    <li class=" md:border-none">
                        <a href="/contato" class="block md:inline-block px-4 py-3 no-underline text-color hover:text-grey-darker">Contato</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}