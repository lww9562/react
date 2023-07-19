import NewsItem from "./NewsItem";

const NewsItems = ({ articles, setId }) => {
    articles = Array.isArray(articles) ? articles : [articles];
    const items = articles.map(article => <NewsItem key={article.id} article = {article} setId={setId} />);

    return (
        <ul>
            {items}
        </ul>
    );
};

export default NewsItems;