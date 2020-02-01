import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';


const URL = 'http://localhost/user/2';
const mp31 = 'https://gate-aicc.vbeecore.com/streaming/15805280514370.079697602310938810.0484477329890495860.5895274140842885.mp3';
const mp32 = 'https://gate-aicc.vbeecore.com/streaming/15805282712960.63996738141998160.96403569683832240.6992288369013859.mp3';
const playlist = [
    { name: 'p1', path: mp31, id: 'p1' },
    { name: 'p2', path: mp32, id: 'p2' },

];

class TTA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stplaylist: [],
        };
    }


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
            // <div>
            //     <button onClick={this.playAudio}>
            //         <span>Play Audio</span>
            //     </button>
            //     <a href="#" class="audio prev">Prev</a>
            //     <audio controls className="audio-element">
            //         <source src={mp3} type="audio/mpeg"></source>
            //     </audio>
            //     <a href="#" class="audio next">Next</a>

            //     <button onClick={this.pauseAudio}>
            //         <span>Pause Audio</span>
            //     </button>

            // </div>


            // <div>
            //     <button onClick={this.playAudio}>
            //         <span>Play Audio</span>
            //     </button>

            //      <button onClick={this.pauseAudio}>
            //         <span>Pause Audio</span>
            //   </button>
            //     {this.state.stplaylist.map((item, i) =>
            //         <ul key={item.id}>
            //             <li >
            //                 <p> {item.name}</p>
            //                 <audio controls className="audio-element">
            //                     <source src={item.path} type="audio/mpeg"></source>
            //                 </audio>
            //             </li>
            //         </ul>

            //     )}
            // </div>

            <div>
                <button onClick={this.playAudio}>
                    <span>Play Audio</span>
                </button>

                <button onClick={this.pauseAudio}>
                    <span>Pause Audio</span>
                </button>
                {this.state.stplaylist.map((item, i) =>
                    <ul key={item.id}>
                        <li >
                            <p> {item.name}</p>
                            <ReactAudioPlayer
                                src= {item.path}
                                autoPlay
                                controls
                            />
                        </li>
                    </ul>

                )}
            </div>
        );
    }
}



export default TTA;
