import React from 'react';

class Themes extends React.Component{
    render(){
        return(
            <div>
                <div className='title'>Themes</div>
                <ul>
                    <li className={this.props.store.active===0  ?'active':'null'}>Rose Gold</li>
                    <li className={this.props.store.active===1  ?'active':'null'}>Space Gray</li>
                    <li className={this.props.store.active===2  ?'active':'null'}>Gold</li>
                    <li className={this.props.store.active===3  ?'active':'null'}>Light Purple</li>
                    <li className={this.props.store.active===4  ?'active':'null'}>Black</li>
                </ul>
            </div>
        );
    }
}

export default Themes;