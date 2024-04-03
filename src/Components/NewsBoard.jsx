import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

function NewsBoard() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_API_KEY}`;
        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles.filter(article => article.urlToImage))) // Filter out articles without image
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <h2 className='text-center'>Latest <span className='badge bg-black'>News</span> </h2>
            <div className="container text-center">
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4'>
                    {loading ? (<Spinner/>) : articles.map((news, index) =>
                        <div key={index} className="col">
                            <NewsItem title={news.title} description={news.description} imageUrl={news.urlToImage} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NewsBoard;
