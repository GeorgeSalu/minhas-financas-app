import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import SelectMenu from '../components/selectMenu'

class ConsultaLancamentos extends React.Component {
  render() {
    const meses = [
      { label: 'Selecione....', value: '' },
      { label: 'Janeiro', value: 1 },
      { label: 'Fevereiro', value: 2 },
      { label: 'Marco', value: 3 },
      { label: 'Abril', value: 4 },
      { label: 'Maio', value: 5 },
      { label: 'Junho', value: 6 },
      { label: 'Julho', value: 7 },
      { label: 'Agosto', value: 8 },
      { label: 'Setembro', value: 9 },
      { label: 'Outubro', value: 10 },
      { label: 'Novembro', value: 11 },
      { label: 'Dezembro', value: 12 },
    ]

    const tipos = [
      {label: 'Selecione...', value: ''},
      {label: 'Despesa', value: 'DESPESA'},
      {label: 'Receita', value: 'RECEITA'}
    ]

    return(
      <Card title="Consulta Lancamentos" >
        <div className="row">
          <div className="col-md-6">
            <div className="bs-component">
              <FormGroup htmlFor="inputAno" label="Ano:">
                <input type="text"
                       className="form-control"
                       id="inputAno"
                       aria-describedby="emailHelp"
                       placeholder="Digite o Ano"/>
              </FormGroup>

              <FormGroup htmlFor="inputMes" label="Mes:">
                <SelectMenu lista={meses} className="form-control" />
              </FormGroup>

              <FormGroup htmlFor="inputTipo" label="Tipo Lancamento:">
                <SelectMenu lista={tipos} className="form-control" />
              </FormGroup>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

export default withRouter( ConsultaLancamentos);