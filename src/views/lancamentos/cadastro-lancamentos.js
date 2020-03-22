import React from 'react'
import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import SelectMenu from '../../components/selectMenu'
import { withRouter } from 'react-router-dom'
import LancamentoService from '../../app/service/lancamentoService'

class CadastroLancamentos extends React.Component {
  constructor() {
    super()
    this.service = new LancamentoService()
  }

  render() {
    const tipos = this.service.obterListaTipos()
    const meses = this.service.obterListaMeses()
    return (
      <Card title="Cadastro Lancamento">
        <div className="row">
          <div className="col-md-12">
            <FormGroup id="inputDescricao" label="Descricao: ">
              <input id="inputDescricao" type="text" className="form-control"></input>
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <FormGroup id="inputAno" label="Ano: ">
              <input id="inputAno" type="text" className="form-control" ></input>
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup id="inputMes" label="Mes: ">
              <SelectMenu id="inputMes" lista={meses} className="form-control" ></SelectMenu>
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <FormGroup id="inputTipo" label="Tipo: ">
              <SelectMenu id="inputTipo" lista={tipos} className="form-control" ></SelectMenu>
            </FormGroup>
          </div>
          <div className="col-md-4">
            <FormGroup id="inputStatus" label="Status: ">
              <input type="text" className="form-control" disabled></input>
            </FormGroup>
          </div>
        </div>
        
          <div className="row">
            <button className="btn btn-success">Salvar</button>
            <button className="btn btn-danger">Cancelar</button>
          </div>
      </Card>
    )
  }
}

export default withRouter(CadastroLancamentos);