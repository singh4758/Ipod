import React from 'react';

class Album extends React.Component{
    render(){
        return(
            <div style={{height:199 , display:"flex", justifyContent:'center'}}>
                <div style={{alignSelf:"center" , fontWeight:"bolder", fontSize:30}}>Album</div>
            </div>
        );
    }
}

export default Album;