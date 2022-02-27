import BlogItem from "./BlogItem"
import "./Blog.css"
import Foooter from '../Footer/Footer'

const Blog = () => {
    return (
        <section className="blog">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <br /> <br />
                            <hr />
                            <h1 className="title text-center">Ads</h1>
                            <hr />
                            <br /> <br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <BlogItem link="blog-1" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        <BlogItem link="blog-2" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        <BlogItem link="blog-3" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        <BlogItem link="blog-4" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        <BlogItem link="blog-5" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        <BlogItem link="blog-6" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        <BlogItem link="blog-7" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        <BlogItem link="blog-8" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        <BlogItem link="blog-9" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                    </div>
                </div>
            </div>
            <br />
            <Foooter />
        </section>
    )
}

export default Blog