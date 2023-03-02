import "./CartItem.css";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";


const CartItem = ({imgSrc, proName, proPrice}) => {
    const [visible, isVisible] = useState(true);

    const decreaseQuantity = () => {
        var value = document.getElementById('quantity').value;
        if(value > 1 ) { 
            value--;
            document.getElementById('quantity').value = value;
        }
    }

    const increaseQuantity = () => {
        var value = document.getElementById('quantity').value;
        if(value > 0 ) { 
            value++;
            document.getElementById('quantity').value = value;
        }
    }

    const removeItem = () => {
        isVisible(visible => false);
    }

    return (
    <>
        {visible && (
            <div className="cart-item container">
                <div className="row">
                    {/* <div className="test-hello"> Hello from cart component </div> */}
                    <div className="col-5">
                        <img src= {imgSrc} alt="" />
                    </div>
                    <div className="col-7">
                        <h1 className="product-name row"> {proName} </h1>
                        <h2 className="product-price row">{proPrice} </h2>
                        
                        
                        <div className="quantity-button row">
                            <button className="btn btn-sm col" onClick={decreaseQuantity}><i className="fa fa-solid fa-minus"></i></button>
                            <input type="text" className="col m-1" id="quantity" value="4" disabled></input>
                            <button className="btn btn-sm col" onClick={increaseQuantity}><i className="fa fa-solid fa-plus"></i></button>
                        </div>
                        <button className="remove-button btn btn-outline-secondary row mt-2" onClick={removeItem}> Remove </button>
                    </div>
                </div>
            </div> 
        )}
    </>
    );
};

export default CartItem;