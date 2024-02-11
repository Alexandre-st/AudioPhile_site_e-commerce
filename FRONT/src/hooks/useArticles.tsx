// export type IArticles = {
// id: number;
// title: string;
// price: number;
// description: string;
// category: string;
// image: string;
// };

// export const useArticles = () => {
//   const fetchArticles = async () => {
//     const res: Response = await fetch("../data/data.js");

//     if (!res.ok) {
//       throw new Error("Failed to fetch articles");
//     }
//     return res.json().then((response) => {
//       const articles: IArticles[] = response.data;
//       return articles;
//     });
//   };

//   return { fetchArticles };
// };
