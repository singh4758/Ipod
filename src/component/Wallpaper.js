import React from 'react';

class Wallpaper extends React.Component{
    render(){
        return(
            <div>
                <div className='title'>Wallpaper</div>
                <ul>
                    <li className={this.props.store.active===0  ?'active':'null'}>Earth</li>
                    <li className={this.props.store.active===1  ?'active':'null'}>Jupyter</li>
                    <li className={this.props.store.active===2  ?'active':'null'}>Moon</li>
                </ul>
            </div>
        );
    }
}

export default Wallpaper;