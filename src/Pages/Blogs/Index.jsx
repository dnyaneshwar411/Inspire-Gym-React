import BlogListing from "../../Components/Blogs/BLogs";

const BlogsListing = () => {
    return (
        // <h1>Blogs</h1>
        <div id="blog-listing-page" style={{ backgroundColor: '#111' }}>
            <div className="container">
                <BlogListing />
            </div>
        </div>
    )
}

export default BlogsListing;