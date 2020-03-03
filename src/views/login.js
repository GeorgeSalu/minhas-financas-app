import React from 'react'
import Card from '../components/card'
import FromGrop from '../components/form-group'

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
            <div className="bs-docs-section">
              <Card title="login">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="bs-component">
                      <fieldset>
                        <FromGrop label="Email" htmlFor="examlpleInputEmail">
                          <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="Digite o Email"/>
                        </FromGrop>
                        <FromGrop label="senha" htmlFor="">
                          <input type="password" className="form-control" 
                              id="exampleInputPassword1" placeholder="Password"/>
                        </FromGrop>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login