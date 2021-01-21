import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
                <Navbar.Brand href="#home">
                    <Image
                        src='/logo.png'
                        alt="Logo da Banda Segunda Janela. Esta logo é uma Janela curvada com duas aberturas e vidrais em cima formado uma meia lua"
                        width={25}
                        height={30}
                        >
                        
                    </Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                       
                    </Nav>
                    <Nav>
                        <Nav.Link href="/"><h1 className='text-base mx-3'>Inicio</h1></Nav.Link>
                        <Nav.Link href="/meiodocaminho"><h2 className='text-base mx-3'>Meio do caminho</h2></Nav.Link>
                        <Nav.Link href="/sobre"><h3 className='text-base mx-3'>Sobre nós</h3></Nav.Link>
                        <Nav.Link href="/contato"><h4 className='text-base mx-3'>Contato</h4></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}