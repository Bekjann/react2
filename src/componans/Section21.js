import Product from '../images/product-1.png';
import Product2 from '../images/product-2.png';
import Product3 from '../images/product-3.png';
function Section21() {
return(
    <div>
  <section class="products" id="products">

<h1 class="heading"> our <span>products</span> </h1>

<div class="box-container">

    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={Product} />
        </div>
        <div class="content">
            <h3>fresh coffee</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="price">$15.99 <span>$20.99</span></div>
        </div>
    </div>

    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={Product2} />
        </div>
        <div class="content">
            <h3>fresh coffee</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="price">$15.99 <span>$20.99</span></div>
        </div>
    </div>

    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={Product3} />
        </div>
        <div class="content">
            <h3>fresh coffee</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="price">$15.99 <span>$20.99</span></div>
        </div>
    </div>

</div>

</section>


    </div>
);
}
export default Section21;