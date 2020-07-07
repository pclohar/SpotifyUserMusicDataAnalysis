import React from 'react';
import Redirect from '../common/Redirect';
import { getLoginRedirect, registerSpotify } from '../util/auth';
import { getUrlParams } from '../util/url';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  btnLogin: {
    //background : '#3ec247',
    marginTop : '25%',
    marginLeft: '43%',
    width: '200px'
  }
});

class Login extends React.Component {
  constructor(props) {
        super(props);
        this.state = { redirectUrl: '' };

    };

  redirectToSpotify = async () => {
    const redirect = await getLoginRedirect();
    this.setState({ redirectUrl: redirect });
  }

  async componentDidMount() {
    const params = getUrlParams();
    const code = params.code || null;
    const { setUserInfo, history, userInfo, setTopSongs, setRecentSongs} = this.props;

    if (userInfo.id) {
      console.log('user id : '+userInfo.id)
      await fetch("https://spotify-music-analytics-server.herokuapp.com/songs/top")
      .then(response => response.json()).then(data => setTopSongs(data));

      await fetch("https://spotify-music-analytics-server.herokuapp.com/songs/recent")
      .then(response => response.json()).then(data => setRecentSongs(data));

      history.push('/');
      return;
    };
    if (!code) return;

    const user = await registerSpotify(code);
    setUserInfo(user);

    
  }

  render() {
    const {classes} = this.props;
    
    if (this.state.redirectUrl) {
      return <Redirect url={this.state.redirectUrl} />
    }

    return (
      <div>
            <Button className = {classes.btnLogin} variant="contained" color="primary" onClick={this.redirectToSpotify}>Login with Spotify</Button>
      </div>
    );
  }
}
 

export default withStyles(useStyles)(Login);