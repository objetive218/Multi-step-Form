// eslint-disable-next-line react/prop-types
const StepFour = ({handler}) => {
    return (
        <section>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
            <form action="#">
            <div>
                <input type="checkbox" name="" id="online" />
                <h5>Online service</h5>
                <p>Access to multiplayer games</p>
                <p>{ `$1/${"duracion"}`}</p>
            </div>
            <div>
                <input type="checkbox" name="" id="storage" />
                <h5>Larger storage</h5>
                <p>Extra 1TB of cloud save</p>
                <p>{ `$2/${"duracion"}`}</p>
            </div>
            <div>
                <input type="checkbox" name="" id="profile" />
                <h5>Customizable Profile</h5>
                <p>Custom theme on your profile</p>
                <p>{ `$2/${"duracion"}`}</p>
            </div>
                <button onClick={(e) => {e.preventDefault();
                    handler('three');
                }} type="submit">Go Back</button>
                <button onClick={(e) => {e.preventDefault();
                    handler('finish');
                }} type="submit">Next step</button>
                </form>            
        </section>
    );
}

export default StepFour;
