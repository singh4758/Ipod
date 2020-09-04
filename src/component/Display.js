import React from 'react';
//import component
import Album from './Album';
import AllSong from './AllSong';
import Artist from './Artist';
import Games from './Games';
import LockScreen from './LockScreen';
import Menu from './Menu';
import Music from './Music';
import MusicPlayer from './MusicPlayer';
import Setting from './Setting';
import Themes from './Themes';
import WheelColor from './WheelColor';
import Wallpaper from './Wallpaper';
import Navbar from './Navbar';


class Display extends React.Component{
    render(){

        const {currentMenu} = this.props.store; 
        return(
            <div className='display' style={{backgroundColor:'#e3f2fd'}}>
                <Navbar store={this.props.store}/>
                { currentMenu ===  '-2' && <LockScreen store= {this.props.store}/>}
                { currentMenu === '-1' && <Menu store= {this.props.store}/> } 
                { (currentMenu === 0 || currentMenu === 3) && <MusicPlayer store= {this.props.store} autoNext={this.props.autoNext} />}
                { currentMenu === 1 && <Music store= {this.props.store}/>}
                { currentMenu === 2 && <AllSong store= {this.props.store}/>}
                { currentMenu === 4 && <Artist store= {this.props.store}/>}
                { currentMenu === 5 && <Album store= {this.props.store}/>}
                { currentMenu === 6 && <Games store= {this.props.store}/>}
                { currentMenu === 7 && <Setting store= {this.props.store}/>}
                { currentMenu === 8 && <Themes store= {this.props.store}/>}
                { currentMenu === 9 && <WheelColor store= {this.props.store}/>}
                { currentMenu === 10 && <Wallpaper store= {this.props.store}/>}
            </div>
        );
    }
}

export default Display;