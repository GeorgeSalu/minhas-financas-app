import React from 'react'
import Card from '../components/card'

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
            <div className="bs-docs-section">
              <Card title="login">
                meu cartao
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login