import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=250&fit=crop',
      date: 'Dec 15, 2025',
      category: 'Delivery',
      title: 'The Future of Medicine Delivery',
      description: 'Discover how on-demand medicine delivery is transforming healthcare accessibility and making it easier for patients to get their medications.',
      alt: 'Medicine delivery'
    },
    {
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=250&fit=crop',
      date: 'Dec 10, 2025',
      category: 'Health Tips',
      title: 'How to Store Medicines Properly at Home',
      description: 'Learn essential tips for storing your medicines safely to maintain their effectiveness and ensure your family\'s health and safety.',
      alt: 'Pharmacy medicines'
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop',
      date: 'Dec 5, 2025',
      category: 'Savings',
      title: 'Generic vs Branded Medicines: What You Need to Know',
      description: 'Understanding the difference between generic and branded medicines can help you save money without compromising on quality.',
      alt: 'Generic medicines'
    }
  ];

  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>LATEST <span className="highlight">BLOG</span> POSTS</h2>
        <p className="blog-subtitle">Stay informed with the latest healthcare and medicine delivery insights</p>
      </div>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <article className="blog-card" key={index}>
            <div className="blog-image">
              <img src={post.image} alt={post.alt} />
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
                <span className="blog-category">{post.category}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a href="#" className="blog-read-more">Read More</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;