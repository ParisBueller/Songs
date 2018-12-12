import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                        Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}
//get state object from reducer to be passed as a prop
const mapStateToProps = state => {
    return { songs: state.songs };
};
//mapStateToProps(required!) and selectSong action(if an action is needed!) to be passed to the connect() function,
//followed by our our component as the second function call, in this case (SongList)
export default connect(mapStateToProps, { selectSong })(SongList);