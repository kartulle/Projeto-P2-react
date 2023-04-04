import { Sidebar } from "../../components/Sidebar";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Modal';
import input from 'react-bootstrap/Modal';
import './Admin.css'

export function Admin(){
    return(
        <div className="total">
            <Sidebar></Sidebar>
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

                <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

                <Table striped bordered hover variant="dark">
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
                </Table>
            </div>
        </div>
    </main>

        </div>
    )
}