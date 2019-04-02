import React, { Component } from 'react';
// import AngusIcon from "./AngusIcon";
// import ChatBox from "./ChatBox";
import angusRead from "./angusRead.png";
import angusCoffee from "./angusCoffee.png";

export default class Angus extends Component {
  static propTypes = {

  };

  componentDidMount = () => {
    console.log(this.props.data);
    console.log(this.props.hoveredArticleIndex);
  }

  // getContent(){
  //   return this.props.hover? this.hoverComponent:this.notHoverComponent
  // }

  // get hoverComponent(){
  //   return <p>This is a summary.</p> /// <Article_Summary/>  
  // }
  
  // get notHoverComponent(){
  //   return <p>This is a legend.</p> ///<Legend/>
  // }

  renderContent = () => {
    if (!this.props.hoveredArticleTitle){
     return <span> 
       i'm a legend.
        </span>  
    } else {
      return <p>
          {this.props.hoveredArticleTitle}
         </p>
    }
  }
  
  renderImage = () => {
    if(!this.props.hoveredArticleTitle){
      return <img className="img-fluid" src={angusCoffee} alt="Angus drinks coffee"/>
    }else {
      return <img className="img-fluid" src={angusRead} alt="Angus reads newspaper"/>
    }
  }

  render() {
    return (
      <div className="container">
        <br/><br/>
        <div className="row">
          <div className="col-6">
            <div className="angus-card alert alert-light">
              <div className="row">
                <div className="col-2">
                  {this.renderImage()}
                </div>
                <div className="col-10">
                  {this.renderContent()}
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
          </div>
        </div>
      </div>
    );
  }
}
