import React from 'react';
import { CssBaseline, Container, Grid, GridList, GridListTile } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './appbar';
import Footer from './footer';
import DiscussionsContent from './content/discussions';
import '../../css/home.css';
const styles = theme => ({

});
const api = {
  discussionIds : [
    {key:1,id:1},
    {key:2,id:3},
    {key:3,id:1},
    {key:4,id:2},
  ]
}
class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    api.discussionIds.map((id)=>{console.log(id)})
  }

  render(){
    const { classes } = this.props;
    return(
      <CssBaseline>
        <div className="home-wrapper">
          <div>
            <AppBar />
          </div>
         
          <div className="home-body"> 
            <Container maxWidth="sm">
              <GridList cols={1}>
                {api.discussionIds.map((item)=>{ 
                  return <GridListTile key={item.key}>
                    <DiscussionsContent discussionId={item.id} />
                  </GridListTile>;
                })}
              </GridList>
            </Container>
          </div>

          <div className="home-footer">
            <Footer />
          </div>
        </div>
      </CssBaseline>
    )
  }
}

export default withStyles(styles)(Home);