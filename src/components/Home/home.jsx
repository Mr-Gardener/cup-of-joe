import About from "../About/about";
import Comment from "../Comments/comments";
import Editor from "../EditorPick/EditorP";
import Week from '../Week/week';

const Home = () => {

    return ( 
        <div>
            <About />
            <Week />
            <Comment /> 
            <Editor />   
        </div>
     );
}
 
export default Home;