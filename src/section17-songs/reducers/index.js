import { combineReducers } from 'redux';

const songReducer = () => {
  return [
    { title: 'Free Wing', duration: '5:20' },
    { title: 'Sk8ter Boi', duration: '3:24' },
    { title: 'My Happy Ending', duration: '4:02' },
    { title: 'Mascara', duration: '4:56' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
