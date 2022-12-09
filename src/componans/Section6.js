import Blog1 from '../images/blog-1.jpeg';
import Blog2 from '../images/blog-2.jpeg';
import Blog3 from '../images/blog-3.jpeg';
function Section6() {
    return(
        <div>
            <section class="blogs" id="blogs">

<h1 class="heading"> our <span>blogs</span> </h1>

<div class="box-container">

    <div class="box">
        <div class="image">
            <img src={Blog1} />
        </div>
        <div class="content">
            <a href="#" class="title">tasty and refreshing coffee</a>
            <span>by admin / 21st may, 2021</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
            <a href="#" class="btn">read more</a>
        </div>
    </div>

    <div class="box">
        <div class="image">
            <img src={Blog2} />
        </div>
        <div class="content">
            <a href="#" class="title">tasty and refreshing coffee</a>
            <span>by admin / 21st may, 2021</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
            <a href="#" class="btn">read more</a>
        </div>
    </div>

    <div class="box">
        <div class="image">
            <img src={Blog3} />
        </div>
        <div class="content">
            <a href="#" class="title">tasty and refreshing coffee</a>
            <span>by admin / 21st may, 2021</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
            <a href="#" class="btn">read more</a>
        </div>
    </div>

</div>

</section>

            </div>
);
}
export default Section6;