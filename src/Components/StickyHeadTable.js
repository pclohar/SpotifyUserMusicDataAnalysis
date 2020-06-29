import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'track', label: 'Track', width: '40%' },
  { id: 'artist', label: 'Artist', width: '20%' },
  {
    id: 'release_date',
    label: 'Release Date',
    width: '15%',
    align: 'left',

  },
  {
    id: 'duration',
    label: 'Duration',
    width: '15%',
    align: 'left'
  },
  {
    id: 'popularity',
    label: 'Popularity',
    width: '10%',
    align: 'right',
  },
];

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

function createData(track, artist, release_date, duration, popularity) {
  return { track, artist, release_date, duration, popularity };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    opacity : '0.5'
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable({recent_songs}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
    const recentSongList = recent_songs.map(song => 
        createData(song.track.name, song.track.album.artists[0].name, song.track.album.release_date, millisToMinutesAndSeconds(song.track.duration_ms)+" mins", song.track.popularity)
        
      );
  return (

    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ width: column.width }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {recentSongList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((recentSongList) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={recentSongList.code}>
                  {columns.map((column) => {
                    const value = recentSongList[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={recentSongList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
