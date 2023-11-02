import Blog from './Blog';
import './blogs.css'
import image1 from '/assets/blog-1.jpg';
import image2 from '/assets/blog-2.jpg';
import image3 from '/assets/blog-3.jpg';

const BlogListing = () => {
    const blogs = [
        {
            id: 1,
            icon: 'fa-regular fa-heart',
            blogHeading: 'Unlock Your Full Potential: The Benefits of Strength Training',
            blogDesc: 'Discover how strength training can transform your body and improve your overall fitness in this informative blog.',
            blogReleaseDate: '20th May 2003',
            backgroundImage: image1
        }, {
            id: 2,
            icon: 'fa-solid fa-dumbbell',
            blogHeading: 'Fueling Your Workout: A Guide to Pre- and Post-Exercise Nutrition',
            blogDesc: 'Learn the essential nutrition tips to maximize your gym performance and recovery for better results.',
            blogReleaseDate: '20th May 2003',
            backgroundImage: image2
        }, {
            id: 3,
            icon: 'fa-solid fa-headphones',
            blogHeading: 'Incorporating Yoga for Flexibility and Mind-Body Balance',
            blogDesc: 'Explore how yoga can complement your gym routine, enhance flexibility, and promote mental well-being for a holistic fitness approach.',
            blogReleaseDate: '20th May 2003',
            backgroundImage: image3
        }
    ]
    return (
        <div id="blogs">
            <h2>OUR BLOGS</h2>
            <div className="blogs-container flex">
                {blogs.map((blog, index) => (<Blog key={index} blog={blog} />))}
            </div>
        </div>
    )
}
export default BlogListing;