
import '../App.css'

// eslint-disable-next-line react/prop-types
const StepOne = ({handler, setInfo}) => {
    
    const getDataForm = (e) => {
        const name = e.target.name.value;
        const email = e.target.email.value; 
        const phone = e.target.phone.value;  
        setInfo({name:name,email:email,phone:phone})
    }
    return (
        <section className="stepOne">
            <h1>Personal info</h1>
            <p>Please provide your name, email adress, and phone number.</p>
            <form onSubmit={(e) => {
                e.preventDefault();
                handler("two");
                getDataForm(e);
            }}>
                <label htmlFor="name_input">Name</label>
                <input type="text" name='name' placeholder='Carlos Mint' minLength={5} required/>
                <label htmlFor="email_input">Email Adress</label>
                <input type="email" name="email" id="" placeholder='example@example.com' required/>
                <label htmlFor="phone_input">Phone Number</label>
                <input type="number" name="phone" id="" placeholder='e.g. +1 234 567 890' min={8} required/>
                <button  type="submit">Next step</button>
                </form>            
        </section>
    );  
}

export default StepOne;
