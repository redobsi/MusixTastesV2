import {useState} from 'react';
import PlaylistMusic from './PlaylistMusic';

const Playlist = ({playlistName}) => {
    const [isShowingAll, setIsShowingAll] = useState(false);
    const [playlistMusics, setPlaylistMusics] = useState(["Night Shift", "Minecraft-00", "Among Us"]) 
    return (
        <div className='playlist-wrapper'>
            <h2 className="big-playlist-title">{playlistName}<span className='gradiant-point'>.</span></h2>
            <div className="musics-playlist-wrapper">
                <div className="playlist-music-info">
                    {/* The title/artists/Time/Genre/Recommendation */}
                    {playlistMusics.map((musicName) => {
                        return <PlaylistMusic musicName={musicName}/>
                    })}
                </div>
            </div>
            <h3 className="show-all-playlist">ShowAll</h3>
        </div>
    );
}

export default Playlist;
