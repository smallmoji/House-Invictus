import React from 'react';
import '../css/login.css';
import '../css/common.css';
import {CssBaseline, Container, TextField, Grid, Link, FormControl} from '@material-ui/core';
import {ReactComponent as RoyalLion} from "../misc/svg/royal-lion.svg";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  lightOutlined: {
    '& label.Mui-focused': {
      color: '#ececec',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ececec',
      },
      '&:hover fieldset': {
        borderColor: '#ececec',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ececec',
      },
    },
  },
  textLight: {
    color : "#ececec",
  }
});

class Login extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showLogin:false,
      showSignup:false,
      bg:"#242335"
    };
  }

  showLogin(){
    if(this.state.showLogin){
      this.setState({showLogin:false,bg:"#242335"});
    }else{
      this.setState({showLogin:true,bg:"#fff"});
    }
  }

  showSignup(){
    if(this.state.showSignup){
      this.setState({showSignup:false,bg:"#fff"});
    }else{
      this.setState({showSignup:true,bg:"#242335"});
    }
  }

  handleLionClick(event){
    event.target.parentElement.parentElement.style.transform = "scale(.9)";
    setTimeout(() => {
      event.target.parentElement.parentElement.style.transform = "scale(1)";
      this.showLogin();

      if(this.state.showSignup){
        this.setState({showSignup:false,bg:"#fff"});
        this.setState({showLogin:true,bg:"#fff"});
      }
     
    }, 100);
  }

  handleShowSignup(event){
    this.showSignup();
    this.showLogin();
  }
  
  handleHideSignup(){
     if(this.state.showSignup){
        this.setState({showSignup:false,bg:"#fff"});
        this.setState({showLogin:true,bg:"#fff"});
      }
  }

  handleLogin(){
    
  }

  render(){
    const { classes } = this.props;
    return(
      <CssBaseline>
        <div style={{backgroundColor:this.state.bg}} className="login-wrapper">
          <Container style={{height:"100%"}}>
            <div style={{height:"100%"}}>
              <div className="landing-page" >             
                <div className="login-form" autoComplete="off">
                    <RoyalLion className="lion-button" onMouseDown={this.handleLionClick.bind(this)}/> 
                    
                    <br/>
                    <FormControl>
                      <Grid direction="column" container spacing={1} style={{display:this.state.showLogin ? "block" : "none", opacity: this.state.showLogin ? "9" : "0"}}>
                        <Grid item>
                          <TextField 
                            className={classes.textLight}
                            fullWidth
                            type="text" 
                            label="Username"
                            variant="standard"
                            size="small"
                            />
                        </Grid>
                        <Grid item>
                          <TextField
                            className="textfield"
                            fullWidth
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            size="small"
                          />
                        </Grid>
                        <Grid item>
                          <button className="gold-button" style={{marginBottom:"10px"}} onClick={this.handleLogin.bind(this)}>Login</button>  <br/>
                          <Link
                            style={{marginTop:"10px",cursor:"pointer"}}
                            onClick={this.handleShowSignup.bind(this)}
                          >
                            Create an account
                          </Link>
                        </Grid>
                      </Grid>
                    </FormControl>
                     
                      

                    <Grid direction="column" container spacing={2} style={{display:this.state.showSignup ? "block" : "none", opacity: this.state.showSignup ? "9" : "0"}}>
                      <Grid item>
                        <TextField 
                          label="Username" 
                          variant="outlined"
                          className={classes.lightOutlined}
                          inputProps = {{className: classes.textLight}}
                          InputLabelProps={{className: classes.textLight}}
                          size="small"/>
                      </Grid>
                      <Grid item>
                        <TextField 
                          label="Password"
                          type="password"
                          variant="outlined"
                          className={classes.lightOutlined}
                          inputProps = {{className: classes.textLight}}
                          InputLabelProps={{className: classes.textLight}} 
                          size="small"/>
                      </Grid>
                      <Grid item>
                        <TextField 
                          label="Confirm Password"
                          type="password"
                          variant="outlined"
                          className={classes.lightOutlined}
                          inputProps = {{className: classes.textLight}}
                          InputLabelProps={{className: classes.textLight}} 
                          size="small"/>
                      </Grid>
                      <Grid item>
                        <TextField 
                          label="Invitation Code"
                          variant="outlined"
                          className={classes.lightOutlined}
                          inputProps = {{className: classes.textLight}}
                          InputLabelProps={{className: classes.textLight}} 
                          size="small"/>
                      </Grid>
                      <Grid item>
                        <button className="gold-button" style={{marginBottom:"10px"}}>Sign up</button> <br/>

                        <Link
                          style={{marginTop:"10px",cursor:"pointer"}}
                          onClick={this.handleHideSignup.bind(this)}
                        >
                          Back to Login
                        </Link>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
          </Container>
        </div>
      </CssBaseline>

    );
  }
}

export default withStyles(styles)(Login);