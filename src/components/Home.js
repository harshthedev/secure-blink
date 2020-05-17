import React,{Component} from 'react';
class Home extends Component{


render(){
    return(

        <div className="home-div">

         <div className="triangle-img"></div>
         <div className="tab"></div>
         <div className="mobile"></div>
         <div className="discount">
             <div className="discount-text"> 
                 <span className="red">70% Off </span>
                 <span className="T">For First 3 Month</span>
             </div>
         </div>
         <div className="left-text">Ultimate web app for you customer support</div>
         <div className="more">
             
             More About Us
             </div>
        </div>
    )
}


}

export default Home; 