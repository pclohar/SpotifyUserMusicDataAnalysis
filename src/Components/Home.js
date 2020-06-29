import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SongCard from './SongCard';
import SearchBar from '../common/SearchBar';
import TopSongs from './TopSongs';
import SimpleTable from './SimpleTable';
const useStyles = theme => ({


  });

class Home extends React.Component {
    constructor(props) {
          super(props);
          this.state = { 
            imageUrl : '',
           };
      };


      async componentDidMount() {
        const { userInfo, history } = this.props; 

        if (!userInfo.id) {
          history.push('/login');
          return;
        }
        
      }

      

    render() {
      const {classes} = this.props;

      const topsongList = this.props.top_songs.map(song => 
        <div key={song.id}>
          <SongCard data={song} />
        </div>
        
      );

          
      return (
        <div className={classes.mainSection}>
        <SearchBar />
        <TopSongs top_songs = {topsongList}/>
        <SimpleTable recent_songs = {this.props.recent_songs}/>
        </div>
      );
    }
  }

  export default withStyles(useStyles)(Home);