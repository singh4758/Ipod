import React from 'react';

class AllSong extends React.Component{
    render(){
        return(
            <div>
                <div className='title'>All Songs</div>
                <ul>
                    <li className={this.props.store.active===0  ?'active':'null'}>Shape Of You</li>
                    <li className={this.props.store.active===1  ?'active':'null'}>Laung Gwacha</li>
                    <li className={this.props.store.active===2  ?'active':'null'}>Let Me Love You</li>
                </ul>
            </div>
        );
    }
}

export default AllSong;