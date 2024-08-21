document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'YOUR_API_KEY'; // Remplacez par votre clé API
    const url = `https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const articles = data.articles;
            const newsContainer = document.getElementById('news-content');
            newsContainer.innerHTML = ''; // Efface le contenu actuel
            
            if (articles.length > 0) {
                articles.forEach(article => {
                    const articleElement = document.createElement('div');
                    articleElement.classList.add('news-article');
                    articleElement.innerHTML = `
                        <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                        <p>${article.description}</p>
                    `;
                    newsContainer.appendChild(articleElement);
                });
            } else {
                newsContainer.innerHTML = '<p>Aucune actualité disponible.</p>';
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des actualités :', error);
        });
});
