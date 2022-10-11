import { FC, useEffect, useState } from "react";
import { api } from "../constants";

interface ArticlesTypes {
  id: string;
  title: string;
}

export const Articles: FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [articles, setArticles] = useState<ArticlesTypes[]>([]);

  useEffect(() => {
    getFetchArticles();
  }, []);

  const getFetchArticles = async () => {
    setLoading(true);
    setError('');
    setArticles([]);

    await new Promise((resolve) => setTimeout(resolve, 1000))

    try {
      const res = await fetch(`${api}/v3/articles`);
      const data: ArticlesTypes[] = await res.json();
      setArticles(data);
    } catch(err) {
      if(err instanceof Error) {
        setError(err.message);
      } else {
        setError('error');
      }
    } finally {
      setLoading(false);
    }

    // if (Math.random() > 0.5) {
    //   fetch(`${api}/v3/articles`)
    //     .then(response => response.json())
    //     .then((data) => setArticles(data))
    //     .catch((error: Error) => setError(error.message))
    //     .finally(() => setLoading(false));
    // } else {
    //   setError('custom error');
    //   setLoading(false);
    // }
  };

  return (
    <>
      <h2>Articles</h2>
      {loading && <div>Loading</div>}
      <button onClick={getFetchArticles}>Reload</button>
      <ul>
        {articles.map((article) => <li key={article.id}>{article.title}</li>)}
      </ul>

      {error && <p style={{color: 'red'}}>{error}</p>}
    </>
  );
};