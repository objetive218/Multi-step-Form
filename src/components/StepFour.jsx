// eslint-disable-next-line react/prop-types
const StepFour = ({handler}) => {
    return (
        <section>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
            <form action="#">
            <div>
                <h5>{`Arcade(${"duration"})`}</h5>
                <a href="">Change</a>
                <p>{ `$9/${"duracion"}`}</p>
            </div>
            <div>
                <h5>{`Online service(${"duration"})`}</h5>
                <a href="">Change</a>
                <p>{ `$1/${"duracion"}`}</p>
            </div>
            <div>
                <h5>{`Larger storage(${"duration"})`}</h5>
                <a href="">Change</a>
                <p>{ `$2/${"duracion"}`}</p>
            </div>
            <div>
                <h5>{`Total (per${"duration"})`}</h5>
                <a href="">Change</a>
                <p>{ `$12/${"duracion"}`}</p>
            </div>
                <button onClick={(e) => {e.preventDefault();
                    handler('three');
                }} >Go Back</button>
                <button onClick={(e) => {e.preventDefault();
                    handler('Thank');
                }} type="submit">Finish</button>
                </form>            
        </section>
    );
}

export default StepFour;
