const NewsItem = ({article, setId}) => {
    const clickHandler = () => setId(article.id);
    
    return (
        <li onClick={clickHandler}>
            <div>{article.title}</div>
            <div>{article.body}</div>
            <div>작성자 : {article.userId}</div>
        </li>
    )
};

export default NewsItem;