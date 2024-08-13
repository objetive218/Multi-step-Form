import '../App.css'

// eslint-disable-next-line react/prop-types
const StepOne = ({handler}) => {
    return (
        <section className="stepOne">
            <h1>Personal info</h1>
            <p>Please provide your name, email adress, and phone number.</p>
            <form action="#">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Carlos Mint' minLength={5} required/>
                <label htmlFor="email">Email Adress</label>
                <input type="email" name="email" id="" placeholder='example@example.com' required/>
                <label htmlFor="phone">Phone Number</label>
                <input type="number" name="phone" id="" placeholder='e.g. +1 234 567 890' min={8} required/>
                <button onClick={(e) => {e.preventDefault();
                    handler("two");
                }} type="submit">Next step</button>
                </form>            
        </section>
    );  
}

export default StepOne;
