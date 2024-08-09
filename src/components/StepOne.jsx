

const StepOne = () => {
    return (
        <section>
            <h1>Personal Info</h1>
            <p>Please provide your name, email adress, and phone number.</p>
            <form action="#">
                <label htmlFor="name">Name</label>
                <input type="text" />
                <label htmlFor="email">Email Adress</label>
                <input type="email" name="email" id="" />
                <label htmlFor="phone">Phone Number</label>
                <input type="number" name="phone" id="" />
                <button type="submit">Next step</button>
                </form>            
        </section>
    );  
}

export default StepOne;
