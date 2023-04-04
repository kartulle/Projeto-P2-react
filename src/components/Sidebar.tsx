import logoUfal from '../assets/ufal-logo.png'
import './Sidebar.css'
export function Sidebar(){
    return(
    <div className="side-bar">
        {/* <!-- header section --> */}
        <header>
            {/* <!-- <div className="close-btn">
                <i className="fas fa-times"></i>
            </div> --> */}
            {/* <!-- logo  --> */}
            <img src={logoUfal} alt=""/>

            {/* <!-- menu admin --> */}
            <div className="menu">
                <div className="item"><a className="sub-btn">Gerenciamento
                {/* <!-- dropdown de gerenciamento --> */}
                <i className="fas fa-angle-right dropdown"></i>
                </a>
                <div className="sub-menu">
                    <a href="lista-usuarios.html" className="sub-item">Usuários</a>
                    <a href="lista-cursos.html" className="sub-item">Cursos</a>
                    <a href="lista-disciplinas.html" className="sub-item">Disciplinas</a>
                </div>
                </div>
                {/* <!-- logout  --> */}
                <div className="item"><a href="">Sair</a></div>
            </div>

        </header>
    </div>
    )
}