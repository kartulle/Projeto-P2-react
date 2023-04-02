import './Timeline.css'
import ufallogo from '../assets/ufal-logo.png'
import background from '../assets/bg.png'
import { Link } from 'react-router-dom'
export function Timeline(){
    return(
        <div>
        <header>
        <div className="navbar">
            <div className="logo"><a href="#">Projeto P2</a></div>
            <ul className="links">
                <li><a href="hero">
                        Início
                        <hr/>
                    </a>
                </li>
            </ul>
            <a href="../login/login.html" className="action_btn">
                <Link to="/login">Acessar</Link>
            </a>
            <div className="toggle_btn">
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>

        <div className="dropdown_menu">
            <li><a href="hero">Início</a></li>
            <li><a href="login.html" className="action_btn"><b>Acessar</b></a></li>
        </div>
    </header>

    <main>
        <section id="hero">
            <div className='style-logo'>
                <img src={ufallogo} alt="Logo da Ufal Branco"/>
            </div>
            <h1>Aconselhamento de Matrícula</h1>
            <p>
                Este é um sistema de aconselhamento de matrícula que <br/>utiliza conceitos de programação orientada a objeto e algoritmos de computação evolucionária
            </p>
        </section>
    </main>
        </div>
    )
}