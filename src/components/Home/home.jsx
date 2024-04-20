import About from "../About/about";
import Blogs from "../Blogs/blogs";
import Comment from "../Comments/comments";
import Editor from "../EditorPick/EditorP";
import Footer from "../Footer/footer";
import Week from '../Week/week';
import wed from '../assets/couple.jpg';
import neutral from '../assets/parenting.jpg';
import veg from '../assets/kitchen.jpg';
import selfie from '../assets/selfie.jpg';


const Home = () => {

    return ( 
        <div>
            <About />
            <Week />
            <div className="blogs_each">                
                <Blogs pics={wed} name="RELATIONSHIP" topic="How Magical is This NYC Wedding?" desc='"We put together the perfect New York day"' engage="65 COMMENTS" />
                <Blogs pics={neutral} name="MOTHERHOOD" topic="On the Joy of Parenting" desc='"I am going through that age where romance is IT."' engage="285 COMMENTS" />
                <Blogs pics={veg} name="FOOD" topic="A Kitchen Gadget that Upgrades Everything" desc='"I was not looking for love, but it found me anyway."' engage="182 COMMENTS" />
                <Blogs pics={selfie} name="STYLE" topic="Three Pieces I'm Wearing on Repeat" desc='"How is the weather where you live? After the eclipse..."' engage="285 COMMENTS" />
            </div>
            
            
            
            <Comment /> 
            <Editor />  
            <Footer /> 
        </div>
     );
}
 
export default Home;