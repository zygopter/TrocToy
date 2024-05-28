// services/api.js
const BASE_URL = 'http://localhost:5000/api';

const api = {
  getArticles: async () => {
    const response = await fetch(`${BASE_URL}/articles`);
    return response.json();
  },
  createArticle: async (article) => {
    const response = await fetch(`${BASE_URL}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
    });
    if (!response.ok) {
      throw new Error('Bad API request');
    }
    return response.json();
  }
};

export default api;
