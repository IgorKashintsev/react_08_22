import { ThunkDispatch } from "@reduxjs/toolkit";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../store";
import { fetchData } from "../store/articles/slice";

// interface ArticlesTypes {
//   id: string;
//   title: string;
// }

export const Articles: FC = () => {
  const loading = useSelector((state: StoreState) => state.articles.loading);
  const error = useSelector((state: StoreState) => state.articles.error);
  const articles = useSelector((state: StoreState) => state.articles.articles);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState('');
  // const [articles, setArticles] = useState<ArticlesTypes[]>([]);

  const fetchDispatch = useDispatch<ThunkDispatch<StoreState, void, any>>();

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = () => {
    fetchDispatch(fetchData());
  }

  // const getFetchArticles = async () => {
  //   setLoading(true);
  //   setError('');
  //   setArticles([]);

  //   await new Promise((resolve) => setTimeout(resolve, 1000))

  //   try {
  //     const res = await fetch(`${api}/v3/articles`);
  //     const data: ArticlesTypes[] = await res.json();
  //     setArticles(data);
  //   } catch(err) {
  //     if(err instanceof Error) {
  //       setError(err.message);
  //     } else {
  //       setError('error');
  //     }
  //   } finally {
  //     setLoading(false);
  //   }

  //   // if (Math.random() > 0.5) {
  //   //   fetch(`${api}/v3/articles`)
  //   //     .then(response => response.json())
  //   //     .then((data) => setArticles(data))
  //   //     .catch((error: Error) => setError(error.message))
  //   //     .finally(() => setLoading(false));
  //   // } else {
  //   //   setError('custom error');
  //   //   setLoading(false);
  //   // }
  // };

  return (
    <>
      <h2>Articles</h2>
      {loading && <div>Loading</div>}
      <button onClick={() => handleFetchData()}>Reload</button>
      <ul>
        {articles.map((article) => <li key={article.id}>{article.title}</li>)}
      </ul>

      {error && <p style={{color: 'red'}}>{error}</p>}
    </>
  );
};