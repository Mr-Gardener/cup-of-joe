import './comments.css'

const Comment = () => {
    return ( 
        <div className="comm_contents">
            {/* Title */}
            <h5>Most Commented</h5>
            <div className='creative'></div>

            {/* sectors of comments */}
            <div className='comm_navs'>
                <div>
                    <a href=""><h6  className='l_sect'>FOOD</h6></a>
                    <a href=""><p  className='l_contents'>My 10 Favorite Trader Joe's Products</p></a>
                    <hr />
                </div>
                <div>
                    <a href=""><h6 className='l_sect'>STYLES</h6></a>
                    <a href=""><p className='l_contents'>What Do You Love About the Way You Look?</p></a>
                    
                </div>
                <div>
                    <a href=""><h6 className='l_sect'>TRAVEL</h6></a>
                    <a href=""><p className='l_contents'>The Weirdest Part of Trips</p></a>
                </div>
                <div>
                    <a href=""><h6 className='l_sect'>MOTHERHOOD</h6></a>
                    <a href=""><p className='l_contents'>21 Completely Subjective Rules For Raising Teenage Boys</p></a>
                </div>
                <div>
                    <a href=""><h6 className='l_sect'>DESIGN</h6></a>
                    <a href=""><p className='l_contents'>The #1 Thing Not to Say in a Job Interview and More Reader Questions</p></a>
                </div>
            </div>
        </div>
     );
}
 
export default Comment;