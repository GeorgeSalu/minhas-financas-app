import React from 'react'

import Card from '../components/card'
import FormGroup from '../components/form-group'
import {withRouter} from 'react-router-dom'
import UsuarioService from '../app/service/usuarioService'
import { mensagemErro, mensagemSucesso } from '../components/toastr'

class CadastroUsuario extends React.Component {
  state = {
    nome: '',
    email: '',
    senha: '',
    senhaRepeticao: ''
  }

  constructor() {
    super()
    this.service = new UsuarioService();
  }



  cadastrar = () => {
    const {nome, email, senha, senhaRepeticao} = this.state

    const usuario = {
      nome,
      email,
      senha,
      senhaRepeticao
    }

    try {
      this.service.validar(usuario);
    }catch(erro) {
      const msg = erro.mensagens;
      msg.forEach(msg => mensagemErro(msg))
      return false
    } 

    this.service.salvar(usuario)
      .then(response => {
        mensagemSucesso('Usuario cadastrado com sucesso! faca o login para acessar o sitema')
        this.props.history.push('/login')
      })
      .catch(error => {
        mensagemErro(error.response.data)
      })
  }

  cancelar = () => {
    this.props.history.push("/login")
  }

  render() {
    return (
      
        <Card title="cadastro de usuario">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
                <FormGroup label="Nome: *" htmlFor="inputName">
                  <input type="text"
                          id="inputName"
                          className="form-control" 
                          name="nome" onChange={ e => this.setState({nome: e.target.value})} />
                </FormGroup>
                <FormGroup label="Email:" htmlFor="inputEmail" >
                  <input type="email"
                          id="inputEmail" 
                          className="form-control"
                          name="email" onChange={e => this.setState({email: e.target.value})} />
                </FormGroup>
                <FormGroup label="Senha:" htmlFor="inputSenha" >
                  <input type="password"
                          id="inputSenha" 
                          className="form-control"
                          name="senha" onChange={e => this.setState({senha: e.target.value})}/>
                </FormGroup>
                <FormGroup label="Repita a senha:" htmlFor="inputRepitaSenha" >
                  <input type="password"
                          id="inputRepitaSenha" 
                          className="form-control"
                          name="senha" onChange={e => this.setState({senhaRepeticao: e.target.value})}/>
                </FormGroup>

                <button type="button" onClick={this.cadastrar} className="btn btn-success">Salvar</button>
                <button onClick={this.cancelar} type="button" className="btn btn-danger" >Cancelar</button>
              </div>
            </div>
          </div>
        </Card>
      
    )
  }
}

export default withRouter( CadastroUsuario )