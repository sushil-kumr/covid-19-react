import React, {Component} from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../component/Layout'


export default class Updates extends Component {

  constructor(props){
    super(props)
    this.state={
      password :""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({password: e.target.value});
  }

  handleSubmit=(e) =>{
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password : this.state.password })
  };
  fetch('https://curecovid19.in/readings/updates/login', requestOptions)
      .then(response => response.json())
      .then(data => {
            console.log(data);
            if(data["success"] == true){
              this.props.history.push('/addupdate');
            }});
}

  render() {

    return (
        <Layout>

        <Helmet>
          <title>Login | curecovid19</title>
          <meta name="description" content="Login"  data-react-helmet="true" />
          <meta name="theme-color" content="#008f68"  data-react-helmet="true"/>
        </Helmet>
        
        <div className="content-w"><div className="content-i"><div className="content-box">
          <div class="all-wrapper menu-side with-pattern">
            <div class="auth-box-w">
              <div class="logo-w" style={{paddingLeft: "0", paddingBottom: "30px"}}>
                <a href="/"><img alt="" src="img/logos2.png" width="250px"/></a>
              </div>
              <form action="" method="POST">
                <div class="form-group">
                  <label for="">Code</label>
                  <input class="form-control" placeholder="Enter your code" type="password" value={this.state.password} onChange={this.handleChange}/>
                  <div class="pre-icon os-icon os-icon-fingerprint"></div>
                </div>
                <div class="buttons-w">
                  <button class="btn btn-primary" onClick={this.handleSubmit}>Log me in</button>
                </div>
              </form>
            </div>
          </div>
        </div></div></div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </Layout>
    )
}
}
