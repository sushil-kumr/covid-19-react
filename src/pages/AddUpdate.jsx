import React, {Component} from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../component/Layout'

export default class Updates extends Component {

  constructor(props){
    super(props)
    this.state={
      headline :"",
      desc: "",
      tags: "",
      link: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit=(e) =>{
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ headline : this.state.headline,
                             link: this.state.link,
                             tags: this.state.tags,
                             body: this.state.desc
                           })
  };
  fetch('https://curecovid19.in/readings/updates/add_update', requestOptions)
      .then(response => response.json())
      .then(data => {
        this.props.history.push('/addupdates');
  })};

  render() {
    return (
        <Layout>

        <Helmet>
          <title>Login | curecovid19</title>
          <meta name="description" content="Login"  data-react-helmet="true" />
          <meta name="theme-color" content="#008f68"  data-react-helmet="true"/>
        </Helmet>
        
        <div className="content-w"><div className="content-i"><div className="content-box">
        <div class="col-lg-8">
          <div class="element-wrapper">
            <h6 class="element-header">
              Details for Post
            </h6>
            <div class="element-box">
              <form>
                <div class="form-desc">
                  Please fill all the details and re-check before posting. 
                </div>
                
                <div class="form-group row">
                  <label class="col-form-label col-sm-4" for="">Headline</label>
                  <div class="col-sm-8">
                    <input class="form-control" placeholder="This will be the Main Headline of the Post" name="headline" type="text" value={this.state.headline} onChange={(e)=> (this.handleChange(e))}/>
                  </div>
                </div>
               
                <div class="form-group row">
                    <label class="col-sm-4 col-form-label">Description</label>
                    <div class="col-sm-8">
                      <textarea class="form-control" rows="3" value={this.state.desc} name="desc" onChange={(e)=> this.handleChange(e)}></textarea>
                    </div>
                  </div> 
                  <div class="form-group row">
                  <label class="col-form-label col-sm-4" for="">Tags</label>
                  <div class="col-sm-8">
                    <input class="form-control" placeholder="Enter Tags/keywords separated by comma" name="tags" type="text" value={this.state.tags} onChange={(e)=> this.handleChange(e)}/>
                  </div>
                </div>
                   <div class="form-group row">
                  <label class="col-form-label col-sm-4" for="">Full Link</label>
                  <div class="col-sm-8">
                    <input class="form-control" placeholder="Link to the article" type="text" name="link" value={this.state.link} onChange={(e)=> this.handleChange(e)}/>
                  </div>
                </div>
           
                <div class="form-buttons-w">
                  <button class="btn btn-primary" type="submit" onClick={this.handleSubmit}> Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div></div></div>
        <br/>
        </Layout>
    )
}
}
