//Action creator
export const selectSong = song => {
    //Return an action to watch for in our reducer
    return {
        //type is required, payload is not
        type: 'SONG_SELECTED',
        payload: song
    };
};

