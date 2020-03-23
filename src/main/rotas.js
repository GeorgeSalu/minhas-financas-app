import React from 'react'
import {Route, Switch, HashRouter, Redirect} from 'react-router-dom'
import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'
import Home from '../views/home'
import ConsultaLancamento from '../views/lancamentos/consulta-lancamentos'
import CadastroLancamentos from '../views/lancamentos/cadastro-lancamentos'


const isUsuarioAutenticado = () => {
  return true;
}

function RotaAutenticada({ component: Component, ...props }) {
  return (
    <Route {...props} render={(componentProps) => {
      if(isUsuarioAutenticado()) {
        return (
          <Component {...componentProps} />
        )
      }else {
        return (
          <Redirect to={{pathname: '/login', state: {from: componentProps.location}}} />
        )
      }
    }}></Route>
  )
}

function Rotas() {
  return (
    <HashRouter >
      <Switch>
        <Route path="/home" component={Home } />
        <Route path="/cadastro-usuarios" component={CadastroUsuario} />

        <RotaAutenticada path="/login" component={Login } />
        <RotaAutenticada path="/consulta-lancamentos" component={ConsultaLancamento} />
        <RotaAutenticada path="/cadastro-lancamentos/:id?" component={CadastroLancamentos} />
      </Switch>
    </HashRouter>
  )
}

export default Rotas