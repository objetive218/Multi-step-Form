import { useMemo } from "react";

// eslint-disable-next-line react/prop-types
const StepFour = ({handler, info}) => {
    const allInfo = useMemo(() =>info ,[info])
    const billingDuration = allInfo.duration === "mo"? "Monthly": "Yearly";
    const billingDurationNormal = allInfo.duration === "mo"? "Month": "Year";
    const total = allInfo.plan + allInfo.onlineBilling+ allInfo.storageBilling + allInfo.profileBilling;
    return (
        <section className="stepFour">
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
            <form action="#">
            <div>
                <h5>{`${allInfo.planName} (${billingDuration})`} <br /> <a href="#"  onClick={() => handler("two")}>Change</a></h5>
                <p>{ `$${allInfo.plan}/${allInfo.duration}`}</p>
            </div>
            <section>
            {allInfo.onlineBilling ? <div className="medium_box">
                <h5>{`Online service`}</h5>
                <p>{ `+$${allInfo.onlineBilling}/${allInfo.duration}`}</p>
            </div> : ""}
            {allInfo.storageBilling?<div className="medium_box">
                <h5>{`Larger storage`}</h5>
                <p>{ `+$${allInfo.storageBilling}/${allInfo.duration}`}</p>
            </div>:""}
            {allInfo.profileBilling?<div className="medium_box">
                <h5>{`Customizable profile`}</h5>
                <p>{ `+$${allInfo.profileBilling}/${allInfo.duration}`}</p>
            </div>:""}
            </section>
                
            <div>
                <h5>{`Total (per ${billingDurationNormal})`}</h5>
                <p>{ `$${total}/${allInfo.duration}`}</p>
            </div>
                <button className="btn_back" onClick={(e) => {e.preventDefault();
                    handler('three');
                }} >Go Back</button>
                <button className="btn_finish" onClick={(e) => {e.preventDefault();
                    handler('Thank');
                }} type="submit">Finish</button>
                </form>            
        </section>
    );
}

export default StepFour;
