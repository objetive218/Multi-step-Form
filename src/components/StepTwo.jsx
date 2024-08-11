// eslint-disable-next-line react/prop-types
const StepTwo = ({handler}) => {
    return (
        <section>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly biling.</p>
            <form action="#">
                <span><img src="" alt="" /> <h4>Arcade</h4> <p>{ `$9/${"duracion"}`}</p></span>
                <span><img src="" alt="" /> <h4>Advanced</h4> <p>{ `$12/${"duracion"}`}</p></span>
                <span><img src="" alt="" /> <h4>Pro</h4> <p>{ `$15/${"duracion"}`}</p></span>
                <div>
                    <h5>Monthly</h5>
                    <button></button>
                    <h5>Yearly</h5>
                </div>
                 <button onClick={(e) => {e.preventDefault();
                    handler('one');
                }} type="submit">Go Back</button>
                <button onClick={(e) => {e.preventDefault();
                    handler('three');
                }} type="submit">Next step</button>
                </form>            
        </section>
    );
}

export default StepTwo;
