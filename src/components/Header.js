import '../App.css';
import { FiShoppingCart } from "react-icons/fi";


function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >Shopping Cart App</div>
            <div onClick={() => props.handleShow(true)}> <FiShoppingCart />
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;
