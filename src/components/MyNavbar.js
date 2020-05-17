import React,{Component} from 'react';


class MyNavbar extends Component{
    

render(){
    return(
        
        <div className="nav">
            <div className="logo"></div>
            <div className="center">
            <div className="home">Home</div>
            <div className="features">Features</div>
            <div className="plans">Plans</div>
            <div className="testimonials">Testimonials</div>

              
            </div>
            <div className="right">
                <div className="call"><div className="c">Call Us
                </div></div>
                <div className="mail"><div className="m">Mail Us</div></div>
            </div>
        
        </div>
        
    )
}


}
export default MyNavbar