import axios from "axios";
import { useState, useEffect } from 'react';
import NewsItems from "./components/NewsItems";

const App = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(null);

  useEffect(() => {
    const addParams = id ? `/${id}` : "";
    axios.get(`https://jsonplaceholder.typicode.com/posts${addParams}`)
    .then((res) => {
      setArticles(res.data);
      setLoading(false);
    })
    .catch((err) => console.error(err));
  }, [id]);
 
  if(loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>뉴스 뷰어</h1>
      <NewsItems articles={articles} setId={setId} />
    </div>
  )
};

export default App;