import React from 'react';
import { Card, CardHeader, CardContent, CardActions } from '@material-ui/core';
import { Avatar, withStyles } from '@material-ui/core';

const styles = theme => ({
  avatar: {
    backgroundColor: "red"
  }
});

const dummyData = {
  dummy1 : {
    title: "Jayson Alakazam",
    subheader: "December 1, 2020"
  },
  dummy2 : {
    title: "Edgardo Abra",
    subheader: "September 24, 2020"
  },
  dummy3: {
    title: "John Christoper Kadabra",
    subheader: "November 11, 2020"
  }
}
class Discussions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title:"",
      subheader:""
    }
  }

  componentDidMount(){
    let dummyNum = {};
    switch(this.props.discussionId){
      case 1 : 
        dummyNum = dummyData.dummy1
        break;
      case 2 :
        dummyNum = dummyData.dummy2
        break;
      case 3 :
        dummyNum = dummyData.dummy3
        break;
      default: 
        dummyNum = dummyData.dummy1
        break;
    }
    this.setState({title:dummyNum.title,subheader:dummyNum.subheader});
  }
  render(){
    const { classes } = this.props;
    return(
      <div>
        <Card>
          <CardHeader 
            avatar={
              <Avatar className={classes.avatar}
              >J</Avatar>
            }
            title={this.state.title}
            subheader={this.state.subheader}
            >
          </CardHeader>
          <CardContent>{this.props.discussionId}</CardContent>
          <CardActions>This is Actions</CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Discussions);