import React, { Component } from 'react'
import AudioPlayer from 'react-playlist-player'


 
const mp31 = 'https://gate-aicc.vbeecore.com/streaming/15805280514370.079697602310938810.0484477329890495860.5895274140842885.mp3';
const mp32 = 'https://gate-aicc.vbeecore.com/streaming/15805282712960.63996738141998160.96403569683832240.6992288369013859.mp3';
 
class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stplaylist: [],
            currentPlayList: {},
            sttext: 'Đã là người của giới võ lâm, tất phải nghe đến uy danh lừng lẫy của tay kiếm vô địch thiên hạ: Yến Nam Thiên!'
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
                        songUrl: 'https://gate-aicc.vbeecore.com/streaming/15805331015670.53754082767662250.33128800691649030.7941169743114536.mp3'
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

    }



    getText = () => {

    }



    render() {
        return (
            <div className={'Demo'}>
                <button className={'Demo__load-btn'} onClick={this.loadPlayList}>
                    load playlist
            </button>
                <AudioPlayer currentPlayList={this.state.currentPlayList} onToggle={({ audioPlaying }) => console.log({ audioPlaying })} />
            </div>
        );
    }
}

export default Demo;
