import React from 'react';
import musicimg from '../static/music.jpg'
import gameimg from '../static/game.jpg'
import settingimg from '../static/settings.png'

class Menu extends React.Component{

    render(){
        return(
            <div>
                <div className='title'>Menu</div>
                <div className='listImg'>
                    <ul className='menuList'>
                        <li className={this.props.store.active===0  ?'active':'null'}>Now Playing</li>
                        <li className={this.props.store.active===1  ?'active':'null'}>Music</li>
                        <li className={this.props.store.active===2  ?'active':'null'}>Games</li>
                        <li className={this.props.store.active===3  ?'active':'null'}>Setting</li>
                    </ul>
                    {this.props.store.active===0 && <img className='imagecontainer' alt='songImg' src={this.props.store.songImgUrl}></img>}
                    {this.props.store.active===1 && <img className='imagecontainer' alt='Music' src={musicimg}></img>}
                    {this.props.store.active===2 && <img className='imagecontainer' alt='Game' src={gameimg}></img>}
                    {this.props.store.active===3 && <img className='imagecontainer' alt='Setting' src={settingimg}></img>}
                </div>
            </div>
        );
    }
}

export default Menu;