import React from 'react'
import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import SelectMenu from '../../components/selectMenu'
import { withRouter } from 'react-router-dom'
import LancamentoService from '../../app/service/lancamentoService'
import * as messages from '../../components/toastr'
import LocalStorageService from '../../app/service/localstorageService'

class CadastroLancamentos extends React.Component {

  state = {
    id: null,
    descricao: '',
    valor: '',
    mes: '',
    ano: '',
    tipo: '',
    status: '',
    usuario: null,
    atualizando: false
  }

  constructor() {
    super()
    this.service = new LancamentoService()
  }

  componentDidMount() {
    const params = this.props.match.params
    if(params.id) {
      this.service.obterPorId(params.id)
            .then(response => {
              this.setState({...response.data, atualizando: true})
            })
            .catch(error => {
              messages.mensagemErro(error.response.data)
            })

    }
  }

  submit = () => {
    
    const usuarioLogado = LocalStorageService.obterItem('_usuario_logado')
    
    const { descricao, valor, mes, ano, tipo } = this.state;
    
    const lancamento = {
      descricao,
      valor,
      mes,
      ano,
      tipo,
      usuario: usuarioLogado.id
    }
    
    try{
      this.service.validar(lancamento)
    }catch(erro) {
      const mensagens = erro.mensagens
      mensagens.forEach(msg => {
        messages.mensagemErro(msg)
      })
      return false
    }


    this.service
        .salvar(lancamento)
        .then(resposta => {
          this.props.history.push('/consulta-lancamentos')
          messages.mensagemSucesso('Lancamento cadastrado com sucesso')
        })
        .catch(error => {
          messages.mensagemErro(error.response.data)
        })
  }

  atualizar = () => {
    const usuarioLogado = LocalStorageService.obterItem('_usuario_logado')

    const { descricao, valor, mes, ano, tipo, id, usuario } = this.state;

    const lancamento = {
      descricao,
      valor,
      mes,
      ano,
      tipo,
      id
    }

    this.service
        .atualizar(lancamento)
        .then(resposta => {
          this.props.history.push('/consulta-lancamentos')
          messages.mensagemSucesso('Lancamento atualizado com sucesso')
        })
        .catch(error => {
          messages.mensagemErro(error.response.data)
        })
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({[name]: value})
  }

  render() {
    const tipos = this.service.obterListaTipos();
    const meses = this.service.obterListaMeses();

    return (
      <Card title={this.state.atualizando ? 'Atualizacao de lancamento' : 'Cadastro de lancamento'}>
        <div className="row">
          <div className="col-md-12">
            <FormGroup id="inputDescricao" label="Descricao: ">
              <input id="inputDescricao" 
                      type="text" 
                      className="form-control"
                      name="descricao"
                      value={this.state.descricao}
                      onChange={this.handleChange}
                      ></input>
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <FormGroup id="inputAno" label="Ano: ">
              <input id="inputAno" 
                      type="text" 
                      className="form-control"
                      name="ano"
                      value={this.state.ano}
                      onChange={this.handleChange} ></input>
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup id="inputMes" label="Mes: ">
              <SelectMenu id="inputMes" 
                          lista={meses} 
                          value={this.state.mes}
                          onChange={this.handleChange}
                          name="mes"
                          className="form-control"
                           />
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <FormGroup id="inputValor" label="Valor: ">
              <input id="inputValor" 
                          type="text"
                          name="valor"
                          value={this.state.valor}
                          onChange={this.handleChange}
                          className="form-control" />
            </FormGroup>
          </div>
          <div className="col-md-4">
            <FormGroup id="inputTipo" label="Tipo: ">
              <SelectMenu id="inputTipo" 
                          lista={tipos} 
                          name="tipo"
                          value={this.state.tipo}
                          onChange={this.handleChange}
                          className="form-control" ></SelectMenu>
            </FormGroup>
          </div>
          <div className="col-md-4">
            <FormGroup id="inputStatus" label="Status: ">
              <input type="text"
                     className="form-control"
                     name="status"
                     value={this.state.status} 
                     disabled></input>
            </FormGroup>
          </div>
        </div>
        
          <div className="row">
            {this.state.atualizando ?
            (
              <button className="btn btn-success" onClick={this.atualizar}>
                <i className="pi pi-refresh"></i>  Atualizar
              </button>
            ): (
              <button className="btn btn-success" onClick={this.submit}>
                <i className="pi pi-save"></i>  Salvar
              </button>
            )
            }
            <button className="btn btn-danger" onClick={e => this.props.history.push('/consulta-lancamentos')}>
              <i className="pi pi-times"></i>  Cancelar
            </button>
          </div>
      </Card>
    )
  }
}

export default withRouter(CadastroLancamentos);