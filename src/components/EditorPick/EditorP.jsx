import './EditorP.css'
import Book from '../assets/book3.webp';
import Sweater from '../assets/heart-sweater.webp';
import Lipstick from '../assets/lip-pallet.webp';
import Ring from '../assets/gumball.webp';
import Boots from '../assets/boots.webp';


const Editor = () => {
    return ( 
        <div className="editor_content">
            <p>Editors' Picks</p>

            <div className='editor_img'>
                <div>
                    <a href=""><img src={Book} alt="" /></a>
                    <a href="" className='desc'><p>Funny Book</p></a>
                </div>
                <div>
                    <a href=""><img src={Sweater} alt="" /></a>
                    <a href="" className='desc'><p>Heart Sweat</p></a>
                </div>
                <div>
                    <a href=""><img src={Lipstick} alt="" /></a>
                    <a href="" className='desc'><p>Lipstick Palette</p></a>
                </div>
                <div>
                    <a href=""><img src={Ring} alt="" /></a>
                    <a href="" className='desc'><p>Gumball Ring</p></a>
                </div>
                <div>
                    <a href=""><img src={Boots} alt="" /></a>
                    <a href="" className='desc'><p>Great Boots</p></a>
                </div>
            </div>
        </div>
     );
}
 
export default Editor;