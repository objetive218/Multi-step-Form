import '../App.css'

// eslint-disable-next-line react/prop-types
const Navbar = ({select}) => {
    return (
        <nav className='navBar'>
            <ul>
                <li>
                    <span className={select === "one" ? 'active_back' : ""}>1</span>
                    <h5><span className={select === "one" ? 'active' : ""}>STEP 1</span> <br /> YOUR INFO</h5>
                </li>
                <li>
                    <span className={select === "stepTwo" ? 'active_back' : ""}>2</span>
                    <h5><span className={select === "stepTwo"? 'active': ""}>STEP 2</span><br /> SELECT PLAN</h5>
                </li>
                <li>
                    <span className={select === "stepThree" ? 'active_back' : ""}>3</span>
                    <h5><span className={select === "stepThree" ? 'active': ""}>STEP 3</span><br /> ADD-ONS</h5>
                </li>
                <li>
                    <span className={select === "stepFour" ? 'active_back' : ""}>4</span>
                    <h5><span className={select === "stepFour" ? 'active': ""}>STEP 4</span><br /> SUMMARY</h5>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

