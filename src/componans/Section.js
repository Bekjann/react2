import Cart from '../images/cart-item-1.png'
import Cart2 from '../images/cart-item-2.png'
import Cart3 from '../images/cart-item-3.png'
import Cart4 from '../images/cart-item-4.png'
function Section() {
    return(
        <div>
            <div class="cart-items-container">
                <div class="cart-item">
                    <span class="fas fa-times"></span>
                    <img src={Cart} />
                    <div class="content">
                        <h3>cart item 01</h3>
                        <div class="price">$15.99/-</div>
                    </div>
                </div>
                <div class="cart-item">
                    <span class="fas fa-times"></span>
                    <img src={Cart2}/>
                    <div class="content">
                        <h3>cart item 02</h3>
                        <div class="price">$15.99/-</div>
                    </div>
                </div>
                <div class="cart-item">
                    <span class="fas fa-times"></span>
                    <img src={Cart3}/>
                    <div class="content">
                        <h3>cart item 03</h3>
                        <div class="price">$15.99/-</div>
                    </div>
                </div>
                <div class="cart-item">
                    <span class="fas fa-times"></span>
                    <img src={Cart4}/>
                    <div class="content">
                        <h3>cart item 04</h3>
                        <div class="price">$15.99/-</div>
                    </div>
                </div>
        </div>
        <div/>
        </div>
);
}
export default Section;