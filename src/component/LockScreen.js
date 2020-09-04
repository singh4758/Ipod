import React from 'react';

class LockScreen extends React.Component{
    render(){
        return(
            <div>
                <div className='lockscreen' style={{backgroundImage : 'url('+ this.props.store.wallpaper +')' }}>
                    <i className="fas fa-lock lock" aria-hidden='true'></i>
                </div>
                <div className='locktext'>Press Center Button To Unlock</div>
            </div>
        );
    }
}

export default LockScreen;