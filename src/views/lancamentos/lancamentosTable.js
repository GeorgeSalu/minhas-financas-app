import React from 'react'
import currencyFormatter from 'currency-formatter'

export default props => {

  const rows = props.lancamentos.map((lancamento, index) => {
    return (
      <tr key={index}>
        <td>{lancamento.descricao}</td>
        <td>{ currencyFormatter.format( lancamento.valor, { locale: 'pt_BR' })}</td>
        <td>{lancamento.tipo}</td>
        <td>{lancamento.mes}</td>
        <td>{lancamento.status}</td>
        <td>
          <button onClick={e => props.alterarStatus(lancamento, 'EFETIVADO')}
                disabled={lancamento.status !== 'PENDENTE'}
                type="button"
                className="btn btn-success">
                  <i className="pi pi-check"></i>
          </button>
          <button onClick={e => props.alterarStatus(lancamento, 'CANCELADO')}
                disabled={lancamento.status !== 'PENDENTE'}
                type="button"
                className="btn btn-success">
                  <i className="pi pi-times"></i>
          </button>
          <button type="button" className="btn btn-primary" onClick={e => props.editarAction(lancamento)}>
            <i className="pi pi-pencil"></i>
          </button>
          <button type="button" className="btn btn-danger" onClick={e => props.deleteAction(lancamento)}>
            <i className="pi pi-trash"></i>
          </button>
        </td>
      </tr>
    )
  })

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Descricao</th>
          <th scope="col">Valor</th>
          <th scope="col">Tipo</th>
          <th scope="col">Mes</th>
          <th scope="col">Situacao</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody >
        {rows}
      </tbody>
    </table>
  )
}