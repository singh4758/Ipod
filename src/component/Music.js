import React from 'react';

class Music extends React.Component{
    render(){
        return(
            <div>
                <div className='title'>Music</div>
                <ul>
                    <li className={this.props.store.active===0  ?'active':'null'}>All Song</li>
                    <li className={this.props.store.active===1  ?'active':'null'}>Artist</li>
                    <li className={this.props.store.active===2  ?'active':'null'}>Album</li>
                </ul>
            </div>
        );
    }
}

export default Music;