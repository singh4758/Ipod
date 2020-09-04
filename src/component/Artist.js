import React from 'react';

class Artist extends React.Component{
    render(){
        return(
            <div style={{height:199 , display:"flex", justifyContent:'center'}}>
                <div style={{alignSelf:"center" , fontWeight:"bolder", fontSize:30}}>Artist</div>
            </div>
        );
    }
}

export default Artist;