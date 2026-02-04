import "./Blog.css";

function Blog() {
  return (
    <section className="blog" id="blog">
      {/* HEADER */}
      <div className="blog-header">
        <h2 className="b-head">Insights <br/>from CogniMuse</h2>

        <p>
          Stay ahead with the latest trends in automation, robotics, and
          manufacturing. Our blog offers insights on new technologies,
          real-world case studies, and industry innovations.
        </p>
      </div>

      {/* BLOG CARD */}
      <div className="blog-card">
        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Blog"
        />

        <div className="blog-overlay">
          <h3>
            The Benefits of a Vendor-Agnostic Automation Platform
          </h3>

          <p>
            A vendor-agnostic solution offers flexibility and scalability.
            Learn why choosing an open-source platform for your automation
            needs can benefit your business in the long run.
          </p>

          <button>Read more</button>
        </div>
      </div>
    </section>
  );
}

export default Blog;
