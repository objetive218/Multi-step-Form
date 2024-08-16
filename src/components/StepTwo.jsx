import { useState} from 'react';
import '../App.css'

// eslint-disable-next-line react/prop-types
const StepTwo = ({handler, setInfo, info }) => {
    const [current, setCurrent]= useState(true);
    const [selectBox, setSelectBox]= useState("arcade")
    const getInfo = (element) => {
        switch (element) {
            case "arcade":
                setSelectBox("arcade")
                break;
            case "advanced":
                setSelectBox("advanced")
                break;
            case "pro":
                setSelectBox("pro")
                break;
        }
    }
    const getDataBling = () => {
        let data ="";
        switch (selectBox) {
            case "arcade":
                data = current ? 9: 108;
                setInfo({...info,planName: "Arcade",plan: data, duration: current? "mo": "yr"})
                break;
            case "advanced":
                data = current ? 12: 144;
                setInfo({...info,planName: "Advanced",plan: data, duration: current? "mo": "yr"})
                break;
            case "pro":
                data = current ? 15: 180;
                setInfo({...info,planName: "Pro",plan: data, duration: current? "mo": "yr"})
                break;
        }
    }
    return (
        <section className='stepTwo'>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly biling.</p>
            <form onSubmit={(e) => {
                e.preventDefault();
                getDataBling()
                handler('three');
            }
                }>
                <article>
                <span onClick={() => getInfo("arcade")} className={selectBox === "arcade" ? 'select_box' : ""}><img src="\images\icon-arcade.svg" alt="icon arcade" /> <h4>Arcade</h4> <p>{current?"$9/mo":"$108/yr"}</p><h6>{!current?"2 months free":""}</h6></span>
                <span onClick={() => getInfo("advanced")} className={selectBox === "advanced" ? 'select_box': ""}><img src="\images\icon-advanced.svg" alt="" /> <h4>Advanced</h4> <p>{current?"$12/mo":"$144/yr"}</p> <h6>{!current?"2 months free":""}</h6></span>
                <span onClick={() => getInfo("pro")} className={selectBox === "pro" ? 'select_box' : ""}><img src="\images\icon-pro.svg" alt="" /> <h4>Pro</h4> <p>{current?"$15/mo":"$180/yr"}</p> <h6>{!current?"2 months free":""}</h6></span>
                </article>
                <div>
                    <h5 className={current ? "" : 'active'}>Monthly</h5>
                    <span onClick={() => {
                        setCurrent(!current)
                    }} className={current?'active_current_btn': ""}></span>
                    <h5 className={current ? 'active' : ""}>Yearly</h5>
                </div>
                 <button className='btn_back' onClick={(e) => {e.preventDefault();
                    handler('one');
                }} >Go Back</button>
                <button className='btn_next' type="submit">Next step</button>
                </form>            
        </section>
    );
}

export default StepTwo;
