import React, { Component } from 'react'
import AudioPlayer from 'react-playlist-player'


const URL = 'http://localhost/user/2';
const mp31 = 'https://gate-aicc.vbeecore.com/streaming/15805280514370.079697602310938810.0484477329890495860.5895274140842885.mp3';
const mp32 = 'https://gate-aicc.vbeecore.com/streaming/15805282712960.63996738141998160.96403569683832240.6992288369013859.mp3';
const playlist = [
    { name: 'p1', path: mp31, id: 'p1' },
    { name: 'p2', path: mp32, id: 'p2' },

];

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stplaylist: [],
            currentPlayList: {}
        };
    }

 loadPlayList = () =>
    this.setState({
      currentPlayList: {
        playlistCoverUrl: 'https://znews-photo.zadn.vn/w660/Uploaded/qfssu/2020_01_27/82841139_857755504681149_4114126273817628938_n.jpg',
        playlistName: 'playlist name',
        bandName: 'HUYTEST',
        songs: [
          {
            position: '1',
            songName: 'foo',
            songUrl: 'https://gate-aicc.vbeecore.com/streaming/15805306983230.169165479535226650.214855905782039840.20247035053231022.mp3'
          },
          {
            position: '2',
            songName: 'bar',
            songUrl: 'https://gate-aicc.vbeecore.com/streaming/15805307381910.27305303070101350.96168344441451730.6482551041290074.mp3'
          },
        ],
        type: 'album'
      }
    })

    async componentDidMount() {
        this.setState({ stplaylist: playlist })
    }

    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]

        audioEl.play()
    }
    pauseAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        console.log('audioEl')
        console.log(audioEl)
        audioEl.pause()
    }

    render() {
        return (
            <div className={'Demo'}>
            <button className={'Demo__load-btn'} onClick={this.loadPlayList}>
              load playlist
            </button>
            <AudioPlayer currentPlayList={this.state.currentPlayList} onToggle={({audioPlaying}) => console.log({audioPlaying})}/>
          </div>
        );
    }
}

export default Demo;
