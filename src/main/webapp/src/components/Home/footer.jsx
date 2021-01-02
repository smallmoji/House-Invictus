import React from 'react';
import '../../css/home.css';

class Footer extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    return(
      <div className="footer">
          House Invictus &#169; 2020
      </div>
    )
  }
}

export default Footer;