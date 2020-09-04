import React from 'react';
import Zingtouch from 'zingtouch';




class Wheel extends React.Component{
    constructor(){
        super();
        this.angle =0;
    }

    render(){
        let color = this.props.wheelColor;
        let iconcol = this.props.store.theme;
        return(
            <div>
                <div className='wheel' id='wheel' >
                    <div className='menu' id='menu' style={{color:iconcol}}>MENU</div>
                    <i className="fas fa-fast-backward" id='backward' style={{color:iconcol}}></i>
                    <div className='outercircle' id='outercircle' style={{backgroundColor: color}}>
                    </div>
                    <i className="fas fa-fast-forward" id='forward' style={{color:iconcol}}></i>
                    <div className='playpause' id='playpause' style={{color:iconcol}}>
                        <i className="fas fa-play"></i>
                        <i className="fas fa-pause"></i>
                    </div>
                </div>
                <div className='innercircle' id='innercircle' style={{backgroundColor:iconcol}} onClick={this.props.forwardMenu}></div>
            </div>
        );
    }

    wheelControl = (e)=>{
        const {updateActive} = this.props;
        if(e.detail.distanceFromOrigin === 0 ){
            this.angle = e.detail.angle;
        }

        if(Math.abs(this.angle - e.detail.angle)>300){
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            else if (e.detail.distanceFromLast < 0) {
                updateActive('clock');
            } else {
                updateActive('anti');
            }

        }
        else if (Math.abs(this.angle - e.detail.angle) > 15) {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            else if (e.detail.distanceFromLast > 0) {
                updateActive('clock');
            } else {
                updateActive('anti');
            }
        }
    }

    componentDidMount(){
        const wheelControl = this.wheelControl;
        const wheel = document.getElementById('wheel');
        const wheelRegion = Zingtouch.Region(wheel);
        const menu = document.getElementById('menu');
        const forward = document.getElementById('forward');
        const backward = document.getElementById('backward');
        const playpause = document.getElementById('playpause');
        const {backMenu,onOff,seekBackward,seekForward} = this.props;

        const longTapGesture = new Zingtouch.Tap({
            maxDelay : 10000,
            numInputs :1,
            tolerance : 1
        });

        wheelRegion.bind(menu,'tap',function(e){
            backMenu();
        });

        wheelRegion.bind(playpause,'tap',function(e){
            onOff();
        });

        wheelRegion.bind(wheel,'rotate',function(e){
            wheelControl(e);
        });

        wheelRegion.bind(forward,longTapGesture,function(e){
            setTimeout(seekForward(e),150);
        });

        wheelRegion.bind(backward,longTapGesture,function(e){
            setTimeout(seekBackward(e),150);
        });

    }

}

export default Wheel;