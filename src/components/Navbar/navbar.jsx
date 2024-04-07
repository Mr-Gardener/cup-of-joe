import CoJ_Logo_Optimized from '../assets/CoJ_Logo_Optimized.webp'
import './navbar.css'

const Navbar = () => {
    return ( 
        <div className="content">
                    <a>Style</a>
                    <a>Design</a>
                    <a>Food</a>
                    <a>Relationships</a>
                    <a href=""><img src={CoJ_Logo_Optimized} alt="" /></a>
                    <a>Travel</a>
                    <a>Motherhood</a>
                    <a>About</a>
                    <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
        </div>
     );
}
 
export default Navbar;