import './about.css'
import Screenshot1 from '../assets/Screenshot1.png'
import NewJoannaHomepage from '../assets/NewJoannaHomepage.jpeg'

const About = () => {
    return ( 
        <div className="aboutPg">
            <div className="left">
                <a href=""><img src={Screenshot1} alt="" /></a>
            </div>
            <div className="right">
                <a href=""><img src={NewJoannaHomepage} alt="" /></a>
                <h5>Joanna Goddard</h5>
                <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-pinterest-p"></i></a>
            </div>
        </div>
     );
}
 
export default About;