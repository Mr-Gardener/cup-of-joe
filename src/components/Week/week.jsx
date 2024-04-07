import './week.css';
import pics from '../assets/Screenshot 2024-04-06 2122453.png';

const Week = () => {
    return ( 
        <div className="fun">
            <div className="azu">
                <p className='date'>APRIL 29, 2024 <span>.</span> JOANNA GODDARD</p>
                <h4>Have a Fun Weekend.</h4>
                <p className='week-abt'>What are you up to this weekend? We've had a busy week, so I'm excited to catch up on sleep! We're 
                    also doing an Easter egg hunt with these little bunnies. Have a good one – take gentle care of yourself
                    <br />
                     — and here are a few fun links from around the web...</p>
                <div className="week-link">
                    <button>CONTINUE READING</button>
                    <a href="">75 COMMENTS</a>
                </div>
                <hr />
            </div>
            <div className="iru">
                <a href=""><img className='rite' src={pics} alt="" /></a>
                <hr />
            </div>
        </div>
     );
}
 
export default Week;