import React from 'react';

class WheelColor extends React.Component{
    render(){
        return(
            <div>
                <div className='title'>WheelColor</div>
                <ul>
                    <li className={this.props.store.active===0  ?'active':'null'}>Black</li>
                    <li className={this.props.store.active===1  ?'active':'null'}>White</li>
                    <li className={this.props.store.active===2  ?'active':'null'}>Brown</li>
                    <li className={this.props.store.active===3  ?'active':'null'}>Purple</li>
                </ul>
            </div>
        );
    }
}

export default WheelColor;