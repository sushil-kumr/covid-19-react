import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import {connect} from 'react-redux'

import Layout from '../component/Layout'
import ViewUpdateCard  from '../component/ViewUpdateCard'

class AddUpdates extends Component {

  constructor(props){
    super(props)
    this.state={
      error:"",
      success:"",
      updates:[],
      headline :"",
      desc: "",
      tags: "",
      link: "",
      id:""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount(){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category : "" })
    };
    const response = await fetch('https://curecovid19.in/readings/updates/get_updates', requestOptions);
    const data = await response.json();
    this.setState({ updates: data.updates});
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit=(e) =>{
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({headline : this.state.headline,
                            link: this.state.link,
                            tags: this.state.tags,
                            body: this.state.desc,
                            id:this.state.id
                          })
  };
  fetch('https://curecovid19.in/readings/updates/add_update', requestOptions)
      .then(response => response.json())
      .then(data => {
        if(data.success){
            if(this.state.id===""){
              let newUpdates = [...this.state.updates];
              const newItem={
                headline : this.state.headline,
                link: this.state.link,
                tags: this.state.tags,
                body: this.state.desc,
                id:data.id //we have to update id here from response for new item added
              } 
              newUpdates.push(newItem);
              this.setState({
                success:data.message,
                error:"",
                headline :"",
                desc: "",
                tags: "",
                link: "",
                id:"",
                updates:newUpdates
              })
          }else{
            let newUpdates = [...this.state.updates]; 
            let index = newUpdates.findIndex(item => item.id===this.state.id);
            newUpdates[index].headline = this.state.headline;
            newUpdates[index].link = this.state.link
            newUpdates[index].tags = this.state.tags
            newUpdates[index].body = this.state.desc
            this.setState({
              success:data.message,
              error:"",
              headline :"",
              desc: "",
              tags: "",
              link: "",
              id:"",
              updates:newUpdates
            })
          }
        }
        else
          this.setState({error:data.message,success:""})
  })};

  handleclear=()=>{
    this.setState({
      headline :"",
      desc: "",
      tags: "",
      link: "",
      id:""
    })
  }

  handleDelete=(id)=>{
    var r = window.confirm("Are you sure you want to delete Update?");
    if (r == true) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id : id })
      };
      fetch('https://curecovid19.in/readings/updates/delete_update', requestOptions)
        .then(response => response.json())
        .then(data => {
          
          window.scrollTo(0, 0);
          if(data.success){
            this.setState(prevState => ({updates:prevState.updates.filter(item => item.id !== id),
                                          error:"",
                                          success:data.message, headline :"", desc: "", tags: "", link: "", id:""}))}
          else
            this.setState({error:data.message,
                            success:""})
        })
    } 

    

  }

  handleUpdate=(values)=>{
    window.scrollTo(0, 0);
    this.setState({
      headline :values.headline,
      desc: values.body,
      tags: values.tags,
      link: values.link,
      id:values.id,
      error:"",
      success:""
    })
  }

  render() {

    // if(!this.props.login){
    //   this.props.history.push('/login')
    //   return<></>
    // }
    // else{

    return (
        <Layout>

        <Helmet>
          <title>Login | curecovid19</title>
          <meta name="description" content="Login"  data-react-helmet="true" />
          <meta name="theme-color" content="#008f68"  data-react-helmet="true"/>
        </Helmet>
        
        <div className="content-w"><div className="content-i"><div className="content-box">
        <div className="col-lg-8">
          <div className="element-wrapper">
            <h6 className="element-header">
              Details for Post
            </h6>
            <div className="element-box" id="top">
              {/* <form> */}
                <div className="form-desc">
                  Please fill all the details and re-check before posting. 
                </div>
                
                <div className="form-group row">
                  <label className="col-form-label col-sm-4" htmlFor="">Headline</label>
                  <div className="col-sm-8">
                    <input className="form-control" placeholder="This will be the Main Headline of the Post" name="headline" type="text" value={this.state.headline} onChange={(e)=> (this.handleChange(e))}/>
                  </div>
                </div>
              
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Description</label>
                    <div className="col-sm-8">
                      <textarea className="form-control" rows="3" value={this.state.desc} name="desc" onChange={(e)=> this.handleChange(e)}></textarea>
                    </div>
                  </div> 
                  <div className="form-group row">
                  <label className="col-form-label col-sm-4" htmlFor="">Tags</label>
                  <div className="col-sm-8">
                    <input className="form-control" placeholder="Enter Tags/keywords separated by comma" name="tags" type="text" value={this.state.tags} onChange={(e)=> this.handleChange(e)}/>
                  </div>
                </div>
                  <div className="form-group row">
                  <label className="col-form-label col-sm-4" htmlFor="">Full Link</label>
                  <div className="col-sm-8">
                    <input className="form-control" placeholder="Link to the article" type="text" name="link" value={this.state.link} onChange={(e)=> this.handleChange(e)}/>
                  </div>
                </div>
                <div className="alert alert-danger" style={{display:(this.state.error===""?"none":"inline-block")}}>{this.state.error}</div>
                <div className="alert alert-success" style={{display:(this.state.success===""?"none":"inline-block")}}>{this.state.success}</div>
              
          
                <div className="form-buttons-w">
                  <button className="btn btn-primary"  onClick={this.handleSubmit}> Submit</button>
                  <button className="btn btn-primary"  onClick={this.handleclear}> Clear</button>
                </div>{/* </form> */}
            </div>
          </div>
        </div>
        </div></div>
        
        <div className="element-box-tp">
          {this.state.updates.map(element=><ViewUpdateCard data={element} key={element.id} onDelete={this.handleDelete} onUpdate={this.handleUpdate}/>)}
        </div>
        </div>
        <br/>
        </Layout>
    )}
  }
// }

const mapStateToProps = (state)=>{
  return{
    login:state.login
  }
}

export default connect(mapStateToProps)(AddUpdates);
