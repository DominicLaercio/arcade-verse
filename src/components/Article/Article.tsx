import type React from 'react';
import './Article.scss';
import type ArticleProps from './Article.types';

const Article: React.FC<ArticleProps> = ({
    children,
    mainImageUrl,
    articleTitle = 'Default Article Title',
    articleDescription = '',
    authorName = 'Unknown',
    publishDate = 'N/A'
}) => {
    return (
        <article className='article'>
            <div className='title'>
                <h2>{articleTitle}</h2>
                <h6>{articleDescription}</h6>
            </div>

            <div className='info'>
                <div className='author'>
                <p>Author:</p>
                <p>{authorName}</p>
                </div>
                <div className='date'>
                <p>Date:</p>
                <p>{publishDate}</p>
                </div>
            </div>

            <div className='article-body'>
                {mainImageUrl && (
                    <div className='article-image'>
                        <img src={mainImageUrl} alt={articleTitle} />
                    </div>
                )}
                {children}
            </div>
        </article>
    )
}

export default Article;