import './footer.css'

const Footer = () => {
    return ( 
        <div className="footer_content">
            <h4>Come for the blog, stay for the comments.</h4>
            <p className='upperP'>Welcome! Cup of Jo is a daily lifestyle site for women. We cover everything from fashion to culture to parenthood, and we strive to be authentic. As Olive Kitteridge said, “There’s no such thing as a simple life.” Thank you for reading. <a href="">Read More</a></p>
            <div className='ft_line'></div>
            <div className="ft_btm phase_2">
                <div className="ft_inbox">
                    <p>Brighten up your inbox</p>
                    <input type="text" placeholder='JOIN OUR NEWSLETTER' />
                    <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-pinterest-p"></i></a>
                </div>
                <div className="ft_options">
                    <div className="op_links">
                        <p><a href="">STYLE</a></p>
                        <p><a href="">FOOD</a></p>
                        <p><a href="">DESIGN</a></p>
                        <p><a href="">TRAVEL</a></p>
                        <p><a href="">RELATIONSHIPS</a></p>
                        <p><a href="">MOTHERHOOD</a></p>
                        <p><a href="">ABOUT</a></p>
                        <p><a href="">FAQ & PRIVACY</a></p>
                    </div>
                    <div className='op_rite'><p>ALL MATERIALS COPYRIGHT JOANNA GODDARD INC 2007-2024</p></div>
                </div>
                <div className="ft_note"><p>Disclosure — In order to grow our small business, Cup of Jo earns revenue in a few different ways. We publish several sponsored posts each month, which are always labeled at the top. We also sometimes earn an affiliate commission on the sales of products we link to. We feature only items we genuinely love and want to share, and this is an arrangement between the retailer and Cup of Jo (readers never pay more for products). These are the ways we support Cup of Jo, and allow us to run the site and engage with this community we truly love. Thank you for reading!</p></div>
            </div>
        </div>

     );
}
 

export default Footer;