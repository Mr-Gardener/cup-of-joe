function Blogs({pics, name, topic, desc, engage}) {
    return ( 
        <div className="blog_content">
            <img className="blog_pic" src={pics} alt="" />
            <br />
            <a className="blog_head" href="">{name}</a>
            <h3 className="blog_topics">{topic}</h3>
            <p className="blog_text">{desc}</p>
            <a className="blog_comms" href="">{engage}</a>
        </div>
     );
}
 
export default Blogs;