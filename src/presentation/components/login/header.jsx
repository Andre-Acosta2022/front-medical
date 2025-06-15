import LOGO from '@/assets/image/logo.webp'

import '@/presentation/styles/login/header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className='header__navbar'>
                <div className='header__logo'>
                    <img src={LOGO} alt="logo__header" />
                </div>
                <div className='header__navbar--list'>
                    <nav>
                        <ul>
                            <li>Medicos</li>
                            <li>Pacientes</li>
                            <li>Servicios</li>
                            <li>Paquetes</li>
                            <li>Turno</li>
                            <li>Consulta</li>
                            <li>Facturacion</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='header__button'>
                <button>
                    Iniciar Sesion
                </button>
            </div>
        </div>
    )
}