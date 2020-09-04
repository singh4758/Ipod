import React from 'react';

class Setting extends React.Component{
    render(){
        return(
            <div>
                <div className='title'>Setting</div>
                <ul>
                    <li className={this.props.store.active===0  ?'active':'null'}>Themes</li>
                    <li className={this.props.store.active===1  ?'active':'null'}>Wheel Color</li>
                    <li className={this.props.store.active===2  ?'active':'null'}>Wallpaper</li>
                </ul>
            </div>
        );
    }
}

export default Setting;