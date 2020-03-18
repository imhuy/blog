import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import styles from './styles';

const mp31 = 'https://gate-aicc.vbeecore.com/streaming/15805280514370.079697602310938810.0484477329890495860.5895274140842885.mp3';
const mp32 = 'https://gate-aicc.vbeecore.com/streaming/15805282712960.63996738141998160.96403569683832240.6992288369013859.mp3';
const playlist = [
    { name: 'p1', path: mp31, id: 'p1' },
    { name: 'p2', path: mp32, id: 'p2' },

];
const url = 'https://beta.vbee.vn/api/v1/convert-tts?voice=hn_male_manhdung_news_48k-h&bit_rate=128000&input_text='
class TTA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stplaylist: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    async getlinkAudio() {
        var getlink = `${url}` + this.state.value;
        var data = await fetch(getlink, { mode: 'no-cors' })
        const responseJson = await data.json();
        console.log('responseJson')
        console.log(responseJson)
        return responseJson
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

 
    async handleSubmit(event) {
        var link = await this.getlinkAudio();
        // alert(link);
        console.log('link54654234')
        console.log(link)
        event.preventDefault();
    }

    render() {
        return (


            <div>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
          <input style={styles.input} type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

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
                                src={item.path}
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
