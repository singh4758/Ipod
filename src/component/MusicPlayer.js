import React from 'react';

class MusicPlayer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentTime : 0
        }
        this.intervalId = '';
    }


    componentDidMount(){
        this.setState({
            currentTime : this.props.store.audio.currentTime
        });

        this.intervalId = setInterval(()=>{
            this.setState({
                currentTime : this.props.store.audio.currentTime
            });

            if(this.props.store.audio.currentTime === this.props.store.audio.duration){
                this.props.autoNext();
            }
        },100);

    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    
    render(){
        var currentTimeRender = Math.floor(this.state.currentTime / 60) + ":" + Math.floor(this.state.currentTime % 60);
        var durationRender = Math.floor(this.props.store.audio.duration / 60) + ":" + Math.floor(this.props.store.audio.duration % 60);
        const percentageComplete = { width: (this.state.currentTime / this.props.store.audio.duration * 100) + "%" };
        if(durationRender==="NaN:NaN"){
            durationRender="0:00";
        }
        if(Math.floor(this.state.currentTime%60<10)){
            currentTimeRender = Math.floor(this.state.currentTime / 60) + ":0" + Math.floor(this.state.currentTime % 60);
        }

        return(
            <div className='musicplayer'>
                <div className='title'>Music Player</div>
                <div className='imagename'>
                    <img className='songImage' alt='Song picbox' src={this.props.store.songImgUrl}></img>
                    <div className='nameplapau'>
                        <div className='songname'> {this.props.store.songName[this.props.store.songIndex]} </div>
                        <div className='playpause'>
                            {this.props.store.playing === false && 'Paused'}
                            {this.props.store.playing === true && 'Playing'}
                        </div>
                    </div>
                </div>
                <div className='timer'>
                    <div id='start'> {currentTimeRender} </div>
                    <div id='timerContainer'>
                        <div style={percentageComplete } id='timer' ></div>
                    </div>
                    <div id='end'> {durationRender} </div>
                </div>
            </div>
        );
    }
}

export default MusicPlayer;