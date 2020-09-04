import React from 'react';
import Display from './Display';
import Wheel from './Wheel';

//import song name and wallpaper
import song2 from "../static/songs/Laung Gwacha.mp3"
import song1 from "../static/songs/Shape of you.mp3"
import song3 from "../static/songs/Let Me Love You.mp3"

import song2Img from "../static/laung_gwacha.jpg";
import song1Img from "../static/shape_of_you.png";
import song3Img from "../static/let_me.jpg";

//import wallpaper

import jupiterWallpaper from "../static/jupiter.png"
import earthWallpaper from "../static/earth.jpg"
import moonWallpaper from "../static/moon.jpg"





class Container extends React.Component{
    constructor(){
        super();
        this.state = {
            active : 0,
            currentMenu : '-2',
            mainMenu : ["Now Playing","Music","Games","Setting"],
            musicMenu : ["All Songs","Album","Artist"],
            songItemsUrl : [song1,song2,song3],
            songImg : [song1Img,song2Img,song3Img],
            songName : ['Shape of You','Laung Gwacha','Let me Love you'],
            wallpaperItems : [earthWallpaper, jupiterWallpaper, moonWallpaper],
            songIndex: 0,
            lengthMenuKey: { '-1': 3, 1: 2 , 7:2, 2:2, 9:3, 8:4 ,10 :2},
            menuMapping: { '-2':'-1' ,'-1': [0, 1, 6, 7], 1: [2, 4, 5] , 2 : [3,3,3] , 7: [8, 9, 10], },
            navigationStack: [],
            songUrl: song1,
            playing: false,
            theme: "black",
            audio: new Audio(song1),
            songImgUrl: song1Img,
            wheelColor: "white",
            wallpaper: earthWallpaper
        }
    }


    backMenu = ()=>{

        if(this.state.currentMenu==='-2'){
            return;
        }

        const navigationStack = this.state.navigationStack.slice();
        const currentMenu = navigationStack.pop();
        this.setState({
            navigationStack : navigationStack,
            currentMenu : currentMenu,
            active : 0
        });

        return;
    }

    forwardMenu = () =>{
        if( this.state.currentMenu ==='-2'  || this.state.currentMenu === '-1' ||  this.state.currentMenu=== 1 || this.state.currentMenu=== 7){


            let navigationStack = this.state.navigationStack.slice();
            navigationStack.push(this.state.currentMenu);
            if(this.state.currentMenu==='-2'){
                this.setState({
                    navigationStack : navigationStack,
                    currentMenu : '-1',
                    active: 0
                });
                return;
            }
            this.setState({
                navigationStack : navigationStack,
                currentMenu : this.state.menuMapping[this.state.currentMenu][this.state.active],
                active :0
            });
            return;
        }

        if(this.state.currentMenu===9){
            if(this.state.active===0){
                this.setState({
                    wheelColor : 'rgb(33, 33, 33)'
                });
            }else if(this.state.active===1){
                this.setState({
                    wheelColor : 'white'
                });
            }else if(this.state.active===2){
                this.setState({
                    wheelColor : 'brown'
                });
            }else if(this.state.active===3){
                this.setState({
                    wheelColor : 'purple'
                });
            }
            return;
        }

        if(this.state.currentMenu === 8){
            if(this.state.active===0){
                this.setState({
                    theme : 'rgb(253, 220, 215)'
                });
            }
            else if(this.state.active===1){
                this.setState({
                    theme : 'rgb(210, 210, 210)'
                });
            }
            else if(this.state.active===2){
                this.setState({
                    theme : 'rgb(245, 221, 197)'
                });
            }
            else if(this.state.active===3){
                this.setState({
                    theme : 'rgb(209, 205, 218)'
                });
            }
            else if(this.state.active===4){
                this.setState({
                    theme : 'black'
                });
            }

            return;
        }



        if(this.state.currentMenu===10){
            this.setState({
                wallpaper : this.state.wallpaperItems[this.state.active]
            });
            return;
        }

        if(this.state.currentMenu===2){
            let navigationStack = this.state.navigationStack.slice();
            navigationStack.push(this.state.currentMenu);
            this.setState({
                navigationStack : navigationStack,
                songIndex : this.state.active,
                songUrl : this.state.songItemsUrl[this.state.active],
                songImgUrl : this.state.songImg[this.state.active],
                audio : new Audio(this.state.songItemsUrl[this.state.active]),
                currentMenu : 3,
            });
            return;
        }


    }

    
    seekForward = (e)=>{
        if(this.state.currentMenu==='-2'){
            return;
        }

        if (this.state.playing===false) {
            return;
        }

        let interval = e.detail.interval/100;


        this.state.audio.pause();
        if(interval<2){
            if (this.state.songIndex>=(this.state.songItemsUrl).length-1) {
                this.setState({
                    songIndex : 0,
                    songUrl : this.state.songItemsUrl[0],
                    songImgUrl : this.state.songImg[0],
                    audio : new Audio(this.state.songItemsUrl[0])
                });
            }else{
                this.setState({
                    songIndex : this.state.songIndex+1,
                    songUrl : this.state.songItemsUrl[this.state.songIndex+1],
                    songImgUrl : this.state.songImg[this.state.songIndex+1],
                    audio : new Audio(this.state.songItemsUrl[this.state.songIndex + 1])
                });
            }
        }else{
            if ((this.state.audio.currentTime + interval) < this.state.audio.duration) {
                this.setState((prevState)=>{
                    prevState.audio.currentTime += interval
                });
            }else{
                if (this.state.songIndex>=(this.state.songItemsUrl).length-1) {
                    this.setState({
                        songIndex : 0,
                        songUrl : this.state.songItemsUrl[0],
                        songImgUrl : this.state.songImg[0],
                        audio : new Audio(this.state.songItemsUrl[0])
                    });
                }else{
                    this.setState({
                        songIndex : this.state.songIndex+1,
                        songUrl : this.state.songItemsUrl[this.state.songIndex+1],
                        songImgUrl : this.state.songImg[this.state.songIndex+1],
                        audio : new Audio(this.state.songItemsUrl[this.state.songIndex + 1])
                    });
                }
            }
        }
        this.state.audio.play();
    }

    seekBackward = (e)=>{
        if(this.state.currentMenu==='-2'){
            return;
        }

        if (this.state.playing===false) {
            return;
        }

        let interval = e.detail.interval/100;

        this.state.audio.pause();
        if(interval<2){
            if (this.state.songIndex<=0) {
                this.setState({
                    songIndex : (this.state.songItemsUrl).length-1,
                    songUrl : this.state.songItemsUrl[(this.state.songItemsUrl).length-1],
                    songImgUrl : this.state.songImg[(this.state.songItemsUrl).length-1],
                    audio : new Audio(this.state.songItemsUrl[(this.state.songItemsUrl).length-1])
                });
            }else{
                this.setState({
                    songIndex : this.state.songIndex-1,
                    songUrl : this.state.songItemsUrl[this.state.songIndex-1],
                    songImgUrl : this.state.songImg[this.state.songIndex-1],
                    audio : new Audio(this.state.songItemsUrl[this.state.songIndex - 1])
                });
            }
        }else{
            if ((this.state.audio.currentTime - interval) >= 0) {
                this.setState((prevState)=>{
                    prevState.audio.currentTime -= interval
                });
            }else{
                if (this.state.songIndex<=0) {
                    this.setState({
                        songIndex : (this.state.songItemsUrl).length-1,
                        songUrl : this.state.songItemsUrl[(this.state.songItemsUrl).length-1],
                        songImgUrl : this.state.songImg[(this.state.songItemsUrl).length-1],
                        audio : new Audio(this.state.songItemsUrl[(this.state.songItemsUrl).length-1])
                    });
                }else{
                    this.setState({
                        songIndex : this.state.songIndex-1,
                        songUrl : this.state.songItemsUrl[this.state.songIndex-1],
                        songImgUrl : this.state.songImg[this.state.songIndex-1],
                        audio : new Audio(this.state.songItemsUrl[this.state.songIndex - 1])
                    });
                }
            }
        }
        this.state.audio.play();
    }

    autoNext=()=>{
        this.state.audio.pause();
        if (this.state.songIndex>=(this.state.songItemsUrl).length-1) {
            this.setState({
                songIndex : 0,
                songUrl : this.state.songItemsUrl[0],
                songImgUrl : this.state.songImg[0],
                audio : new Audio(this.state.songItemsUrl[0])
            });
        }else{
            this.setState({
                songIndex : this.state.songIndex+1,
                songUrl : this.state.songItemsUrl[this.state.songIndex+1],
                songImgUrl : this.state.songImg[this.state.songIndex+1],
                audio : new Audio(this.state.songItemsUrl[this.state.songIndex + 1])
            });
        }
        this.state.audio.play();
    }

    onOff = () =>{
        if(this.state.currentMenu==='-2'){
            return;
        }

        if(this.state.playing===false){
            this.setState({
                playing : true,
            });
            this.state.audio.play();
        }
        else{
            this.setState({
                playing : false
            });
            this.state.audio.pause();
        }
    }


    updateActive = (value)=>{
        let min = 0;
        let max = this.state.lengthMenuKey[this.state.currentMenu];
        if(max===undefined){
            max =0;
        }

        if(value==='clock'){
            if(this.state.active<max){
                this.setState({
                    active : this.state.active + 1
                });
            }else{
                this.setState({
                    active : min
                });
            }
        }
        else{
            if(this.state.active>min){
                this.setState({
                    active : this.state.active -1
                });
            }else{
                this.setState({
                    active : max
                });
            }
        }
    }



    


    render(){
        return(
            <div className='container' style={{backgroundColor:this.state.theme}}>
                <Display store = {this.state}  autoNext={this.autoNext} />
                <Wheel backMenu = {this.backMenu} updateActive = {this.updateActive} forwardMenu = {this.forwardMenu} currentMenu = {this.state.currentMenu} active={this.state.active} onOff={this.onOff} seekForward={this.seekForward} seekBackward={this.seekBackward} wheelColor={this.state.wheelColor} store={this.state} />
            </div>
        );
    }
}

export default Container;