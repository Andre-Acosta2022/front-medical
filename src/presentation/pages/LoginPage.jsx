import Header from '@/presentation/components/login/header'
import Form from '@/presentation/components/login/form'
import '@/presentation/styles/login/login.css'


export default function Login() {
    return (
        <div className="login" >
            <div className='login__header'>
                <Header />
            </div>
            <div className='login__form'>
                <Form />
            </div>
        </div>
    )
}