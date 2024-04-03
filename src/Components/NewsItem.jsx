import React from 'react';

function NewsItem({ title, description, imageUrl }) {
  return (
    <div className="card p-2 m-4 col" style={{ width: '18rem', height: '100%' }}>
      <img src={imageUrl} className="card-img-top" alt="News" style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <a href="#" className="btn btn-primary mt-2">Read More</a>
      </div>
    </div>
  );
}

export default NewsItem;
