import bg from '../assets/bg.png'
import logoBranca from '../assets/logo-ufal-branca.png'
import './Login.css'
export function Login() {
    return (
        <div>
            <div className="area-login">
                <div>
                    <a href="../home/index.html"><div id="seta"></div></a>
                    <div className="login">

                        <div>
                            <img src={logoBranca} alt=""/>
                        </div>

                        <form action="POST">
                            <input type="text" name="nome" placeholder="Nome de usuario" autoFocus/>
                                <input type="password" name="senha" placeholder="Sua senha"/>
                                    <input type="submit" value="entrar"/>
                                    </form>
                                    <p>Esqueceu sua senha?<a href="#">Redefinir senha</a></p>
                                </div>
                            </div>
                    </div>
                </div>
            )
}