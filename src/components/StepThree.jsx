import { useState } from "react";

// eslint-disable-next-line react/prop-types
const StepThree = ({handler, setInfo, info}) => {
    // eslint-disable-next-line react/prop-types
    const durationBilling = info.duration;
    const [addOns, setAddOns] = useState({online:false,storage:false, profile:false});
    const getAddOnsForm = () => {       
        if(durationBilling === "mo"){
        const online = addOns.online ? 1: null;
        const storage = addOns.storage ? 2: null;
        const profile = addOns.profile ? 2: null;
        setInfo({...info,onlineBilling:online,storageBilling:storage, profileBilling:profile  })
        }else{
        const online = addOns.online ? 10: null;
        const storage = addOns.storage ? 20: null;
        const profile = addOns.profile ? 20: null;
        setInfo({...info,onlineBilling:online,storageBilling:storage, profileBilling:profile  })
        } 
    }
    return (
        <section className="stepThree">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <form action="#" onSubmit={(e) => {
                e.preventDefault();
                handler('four');    
                getAddOnsForm()
            }}>
            <div className={addOns.online? "box_addOns" : ""} >
                <input  onClick={(e) => {setAddOns({...addOns, online:e.target.checked})}} type="checkbox" name="online" id="online" />
                <h5><span>Online service</span> <br /> Access to multiplayer games</h5>
                <p>{durationBilling === "mo" ? `$1/${durationBilling}` : `$10/${durationBilling}` }</p>
            </div>
            <div className={addOns.storage? "box_addOns" : ""}>
                <input onClick={(e) => {setAddOns({...addOns, storage:e.target.checked})}} type="checkbox" name="storage" id="storage" />
                <h5><span>Larger storage</span> <br /> Extra 1TB of cloud save</h5>
                <p>{durationBilling === "mo" ? `$2/${durationBilling}` : `$20/${durationBilling}`}</p>
            </div>
            <div className={addOns.profile? "box_addOns" : ""}>
                <input onClick={(e) => {setAddOns({...addOns, profile:e.target.checked})}} type="checkbox" name="profile" id="profile" />
                <h5><span>Customizable Profile</span> <br /> Custom theme on your profile</h5>
                <p>{durationBilling === "mo" ? `$2/${durationBilling}` : `$20/${durationBilling}` }</p>
            </div>
                <button className="btn_back" onClick={(e) => {e.preventDefault();
                    handler('two');
                }} >Go Back</button>
                <button className="btn_next" type="submit">Next step</button>
                </form>            
        </section>
    );
}

export default StepThree;
