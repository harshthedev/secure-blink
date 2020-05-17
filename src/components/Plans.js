import React,{Component} from 'react'
class Plans extends Component{


    render(){
        return(
            <div className="plan">
                <div className="p-title">No Hidden Charges! Choose your Plan.</div>
                <div className="time-buttons">
                    <div className="monthly">Monthly</div>
                    <div className="annual">Annual</div>
                </div>
                <div className="subscriptions">
                    <div className="cost">$0.00</div>
                    <div className="free">FREE</div>
                    <div className="f">Features</div> 
                    <div className="f-points">
                        
                        <div className="blue-tick1"></div>
                        <div className="blue-line1">Limited Acess</div>
                        <div className="blue-tick2"></div>
                        <div className="blue-line2">Single User</div>
                        <div className="blue-tick3"></div>
                        <div className="blue-line3">No Updates</div>
                         
                    
                        
                    </div>                      
                    <div className="upgrade">Upgrade</div>
                    </div>
                    <div className="subscription1">
                    <div className="cost1">$560.25</div>
                    <div className="free">FREE</div>
                    <div className="f">Features</div> 
                    <div className="f-points">
                        
                        <div className="blue-tick1"></div>
                        <div className="blue-line1">Full Access</div>
                        <div className="blue-tick2"></div>
                        <div className="blue-line2">Multiple User</div>
                        <div className="blue-tick3"></div>
                        <div className="blue-line3">Fast</div>
                         
                    
                        
                    </div>                      
                    <div className="upgrade">Upgrade</div>
                    </div>

                    <div className="subscription2">
                    <div className="cost2">$999.15</div>
                    <div className="free">FREE</div>
                    <div className="f">Features</div> 
                    <div className="f-points">
                        
                        <div className="blue-tick1"></div>
                        <div className="blue-line1">Full Access</div>
                        <div className="blue-tick2"></div>
                        <div className="blue-line2">Multiple User</div>
                        <div className="blue-tick3"></div>
                        <div className="blue-line3">Super Fast</div>
                        <div className="blue-tick4"></div>
                        <div className="blue-line4">Support 24x7</div>
                    
                        
                    </div>                      
                    <div className="upgrade">Upgrade</div>
                    </div>
                
            </div>
        )
    }
} 

export default Plans;