import ufalLogo from '../../assets/ufal-logo.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Admin.css'

function Admin(){
    return(
        <div>
            <div className="side-bar">
        {/* <!-- header section --> */}
        <header>
            {/* <!-- <div className="close-btn">
                <i className="fas fa-times"></i>
            </div> --> */}
            {/* <!-- logo  --> */}
            <img src={ufalLogo}alt=""/>

            {/* <!-- menu admin --> */}
            <div className="menu">
                <div className="item"><a className="sub-btn"><i className="fas fa-table"></i>Gerenciamento
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
                <div className="item"><a href=""><i className="fas fa-sign-out"></i>Sair</a></div>
            </div>

        </header>
    </div>
    {/* <!-- //MENU  --> */}
    
    <main>
        <div className="container d-flex flex-column align-items-center text-center">
            {/* <!-- input de busca  --> */}
            <div className="login">
                <input type="text" name="search" placeholder="Pesquise aqui..."/>
            </div>
            
            {/* <!-- titulo  --> */}
            <div className="title">
                <h1>Cursos</h1> 
                <p>Gerenciamento de Cursos</p>
            </div>
            <div className="table-box">
                {/* <!-- tabela bootstrap  --> */}
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>
                                <div className="btn-acoes">
                                    {/* <!-- Button trigger modal --> */}
                                    <a type="button" data-bs-toggle="modal" data-bs-target="#infoModal">
                                        <i className="fa-solid fa-info"></i>
                                    </a>
                                    <a type="button" data-bs-toggle="modal" data-bs-target="#editModal">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </a>
                                    <a type="button" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                        <i className="fa-sharp fa-solid fa-trash"></i>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>

    {/* <!-- MODAIS  -->
    <!-- INFO MODAL  --> */}
    <div className="modal fade" id="infoModal" aria-labelledby="infoModalLabel" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
            <h1 className="modal-title fs-5" id="infoModalLabel">Informações Gerais</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <b>ID</b>: 1 <br/>
                <b>Nome</b>: CC <br/>
                <b>Disciplinas Vinculadas</b>: P2 - P3 - TG - TC<br/>
            </div>
        </div>
        </div>
    </div>
    {/* <!-- EDIT MODAL  --> */}
    <div className="modal fade" id="editModal" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
            <h1 className="modal-title fs-5" id="editModalLabel">Editar Informações</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form action="POST">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label" >Nome</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" value="lalalala" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                        <label htmlFor="exampleInputEmail1" className="form-label">Disciplinas Vinculadas</label>
                        <button type="button" className="btn btn-primary btn-sm">+</button>
                    </div>
                    <div className="mb-3 d-flex flex-column">
                        <div className="d-flex justify-content-center align-items-center gap-3 p-2">
                            <p>ID: 2 | Código: 001CC | Nome: P1</p>
                            <button className="btn btn-danger btn-sm"><i className="fa-sharp fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                      <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        </div>
        </div>
    </div>
    {/* <!-- DELETE MODAL  --> */}
    <div className="modal fade" id="deleteModal" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
            <h1 className="modal-title fs-5" id="deleteModalLabel">Deseja excluir este curso?</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <b>ID</b>: 1 <br/>
                <b>Nome</b>: Ciência da Computação <br/>
                <b>Disciplinas Vinculadas</b>: <br/>
                <p>ID: 2 | Código: 001CC | Nome: P1</p>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-danger">Excluir</button>
            </div>
        </div>
        </div>
    </div>
        </div>
    )
}
export default Admin;
{/* linha 130 :tabindex="-1" 
          100 : tabIndex="-1"
          84: tabindex="-1"
*/}
