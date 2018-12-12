import { combineReducers } from 'redux';
//build our songs reducer as an array of objects
const songsReducer = () => {
    return [
        { title: 'No scrubs', duration: '4:05'},
        { title: 'Macarena', duration: '2:30'},
        { title: 'All Star', duration: '3:15'},
        { title: 'I Want it That Way', duration: '1:45'}
    ];
};
//build our selected songs reducer, passing the action and type as arguments
const selectedSongReducer = (selectedSong = null, action) => {
    if( action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong;
};
//export our reducers for use in our application
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});