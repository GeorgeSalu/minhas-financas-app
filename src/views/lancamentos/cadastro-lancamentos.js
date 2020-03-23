import React from 'react'
import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import SelectMenu from '../../components/selectMenu'
import { withRouter } from 'react-router-dom'
import LancamentoService from '../../app/service/lancamentoService'

class CadastroLancamentos extends React.Component {

  state = {
    id: null,
    descricao: '',
    valor: '',
    mes: '',
    ano: '',
    tipo: '',
    status: '' 
  }

  constructor() {
    super()
    this.service = new LancamentoService()
  }

  submit = () => {
    console.log(this.state)
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
      <Card title="Cadastro Lancamento">
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
            <button className="btn btn-success" onClick={this.submit}>Salvar</button>
            <button className="btn btn-danger">Cancelar</button>
          </div>
      </Card>
    )
  }
}

export default withRouter(CadastroLancamentos);