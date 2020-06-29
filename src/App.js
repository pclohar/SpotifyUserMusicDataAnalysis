import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';
import { getSpotifyUser } from './util/auth';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import darkTheme from './theme/muiTheme'
import CssBaseline from "@material-ui/core/CssBaseline";
class App extends Component {
  state = {
    userInfo: {},
    top_songs : [],
    recent_songs : []
  }

  setUserInfo = (userInfo) => this.setState({ userInfo: userInfo });
  setTopSongs = (top_songs) => this.setState({ top_songs: top_songs });
  setRecentSongs = (recent_songs) => this.setState({ recent_songs: recent_songs});

  async componentDidMount() {
    const userInfo = await getSpotifyUser();
    
    if (userInfo) {
      this.setUserInfo(userInfo);
    }
    //document.body.style.backgroundColor = 'black'
  }
  

  
  render() {
    const { userInfo, top_songs, recent_songs } = this.state;
    return (
      <MuiThemeProvider theme={darkTheme} >
      <CssBaseline />
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/login" component={(props) => 
                <Login {...props} setUserInfo={this.setUserInfo} userInfo={userInfo} setTopSongs={this.setTopSongs} top_songs={top_songs}
                setRecentSongs={this.setRecentSongs} recent_songs={recent_songs}/>
              }/>
              <Route path="/" component={(props) => 
                <Home {...props} userInfo={userInfo} top_songs={top_songs} recent_songs={recent_songs}/>
              }/>
            </Switch>
          </div>
        </Router>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
