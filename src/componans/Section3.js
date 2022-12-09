import Menu1 from '../images/menu-1.png';
import Menu2 from '../images/menu-2.png';
import Menu3 from '../images/menu-3.png';
import Menu4 from '../images/menu-4.png';
import Menu5 from '../images/menu-5.png';
import Menu6 from '../images/menu-6.png';
function Section3() {
    return(
        <div>
<section class="menu" id="menu">

<h1 class="heading"> our <span>menu</span> </h1>

<div class="box-container">

    <div class="box">
        <img src={Menu1} />
        <h3>tasty and healty</h3>
        <div class="price">$15.99 <span>20.99</span></div>
        <a href="#" class="btn">add to cart</a>
    </div>

    <div class="box">
        <img src={Menu2} />
        <h3>tasty and healty</h3>
        <div class="price">$15.99 <span>20.99</span></div>
        <a href="#" class="btn">add to cart</a>
    </div>

    <div class="box">
        <img src={Menu3} />
        <h3>tasty and healty</h3>
        <div class="price">$15.99 <span>20.99</span></div>
        <a href="#" class="btn">add to cart</a>
    </div>

    <div class="box">
        <img src={Menu4} />
        <h3>tasty and healty</h3>
        <div class="price">$15.99 <span>20.99</span></div>
        <a href="#" class="btn">add to cart</a>
    </div>

    <div class="box">
        <img src={Menu5} />
        <h3>tasty and healty</h3>
        <div class="price">$15.99 <span>20.99</span></div>
        <a href="#" class="btn">add to cart</a>
    </div>

    <div class="box">
        <img src={Menu6} />
        <h3>tasty and healty</h3>
        <div class="price">$15.99 <span>20.99</span></div>
        <a href="#" class="btn">add to cart</a>
    </div>

</div>

</section>

            
        </div>
);
}
export default Section3;