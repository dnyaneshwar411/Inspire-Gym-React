import { NavLink } from "react-router-dom";
const Blog = ({ blog }) => {
    return (
        <div className="blog-container">
            <img src={blog.backgroundImage} alt="blog image" />
            <div className="blog-content">
                <div className="blog-heading">
                    <h3>{blog.blogHeading}</h3>
                </div>
                <div className="blog-description">
                    <p>{blog.blogDesc}</p>
                </div>
                <div className="flex">
                    <div className="blog-release-date">{blog.blogReleaseDate}</div>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Blog;