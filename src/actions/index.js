//Action creator
export const selectSong = song => {
    //Return an action
    return {
        //type is required, payload is not
        type: 'SONG_SELECTED',
        payload: song
    };
};

