import React from 'react';
import Rotas from './rotas'
import NavBar from '../components/navbar'

import { Button } from 'primereact/button'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.min.css'

import 'toastr/build/toastr.min.js'

import 'toastr/build/toastr.css'

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'


class App extends React.Component {
  render() {
    return (
      <>
      <NavBar />
      <Button label="Click" icon="pi pi-check" iconPos="right"></Button>
      <div className="container">
        <Rotas />
      </div>
      </>
    )
  }
}

export default App;
