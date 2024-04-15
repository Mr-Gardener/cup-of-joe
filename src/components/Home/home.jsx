import About from "../About/about";
import Comment from "../Comments/comments";
import Editor from "../EditorPick/EditorP";
import Footer from "../Footer/footer";
import Week from '../Week/week';

const Home = () => {

    return ( 
        <div>
            <About />
            <Week />
            <Comment /> 
            <Editor />  
            <Footer /> 
        </div>
     );
}
 
export default Home;