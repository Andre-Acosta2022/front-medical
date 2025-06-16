import LOGO from '@/assets/image/logo.webp'

import '@/presentation/styles/common/header.css'
import { Link } from 'react-router-dom'

export default function Header() {

    const List = [

        {
            id: 1,
            name: 'Medicos',
            link: '/medicos'
        },
        {
            id: 2,
            name: 'Pacientes',
            link: '/pacientes'
        },
        {
            id: 3,
            name: 'Servicios',
            link: '/servicios'
        },
        {
            id: 4,
            name: 'Paquetes',
            link: '/paquetes'
        },
        {
            id: 5,
            name: 'Turno',
            link: '/turno'
        },
        {
            id: 6,
            name: 'Consulta',
            link: '/consulta'
        },
        {
            id: 7,
            name: 'Facturacion',
            link: '/facturacion'
        },
    ]

    return (
        <div className='header'>
            <div className='header__navbar'>
                <div className='header__logo'>
                    <img src={LOGO} alt="logo__header" />
                </div>
                <div className='header__navbar--list'>
                    <nav>
                        <ul>
                            {
                                List.map((item) => (
                                    <li key={item.id}>
                                        <Link to={item.link} className='header__navbar--style' >{item.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='header__button'>
                <button>
                    <Link
                        to='/login'
                        className='header__button--style'
                        >
                        Iniciar Sesion
                    </Link>
                </button>
            </div>
        </div>
    )
}