import React, {Component} from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../component/Layout'

import {connect} from 'react-redux'


class Login extends Component {

  constructor(props){
    super(props)
    this.state={
      password :"",
      error:""
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
              this.props.changeLogin(true)
              this.props.history.push('/addupdate');
            }else{
              this.setState({error:"Password Incorrect."});
            }
          });
}

  render() {

    if(this.props.login){
      this.props.history.push('/addupdate')
      return<></>
    }
    else{

    return (
        <Layout>

        <Helmet>
          <title>Login | curecovid19</title>
          <meta name="description" content="Login"  data-react-helmet="true" />
          <meta name="theme-color" content="#008f68"  data-react-helmet="true"/>
        </Helmet>
        
        <div className="content-w"><div className="content-i"><div className="content-box">
          <div className="all-wrapper menu-side with-pattern">
            <div className="auth-box-w">
              <div className="logo-w" style={{paddingLeft: "0", paddingBottom: "30px"}}>
                <a href="/"><img alt="" src="img/logos2.png" width="250px"/></a>
              </div>
              <form action="" method="POST">
                <div className="form-group">
                  <label htmlFor="">Code</label>
                  <input className="form-control" placeholder="Enter your code" type="password" value={this.state.password} onChange={this.handleChange}/>
                  <div className="pre-icon os-icon os-icon-fingerprint"></div>
                </div>
                <div>{this.state.error}</div>
                <div className="buttons-w">
                  <button className="btn btn-primary" onClick={this.handleSubmit}>Log me in</button>
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
}

const mapStateToProps = (state)=>{
  return{
    login:state.login
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    changeLogin:(flag)=>{dispatch({type:"CHANGE_FLAG",payload:flag})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
