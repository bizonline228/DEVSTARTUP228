document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature');
    const summary = document.getElementById('summary');

    const details = {
        'basic-conversion': `
            <h2>Conversion Basique</h2>
            <p>Notre service de Conversion Basique vous permet d'échanger rapidement vos cryptomonnaies en toute simplicité. Idéal pour les utilisateurs cherchant une solution directe sans la complexité des options de trading avancées.</p>
            <ul>
                <li>Processus de conversion rapide</li>
                <li>Support des principales cryptomonnaies</li>
                <li>Interface simple et intuitive</li>
            </ul>
        `,
        'pro-conversion': `
            <h2>Conversion Pro</h2>
            <p>L'option Conversion Pro est conçue pour les traders expérimentés cherchant des fonctionnalités et outils avancés. Avec des capacités améliorées, vous pouvez gérer vos transactions plus efficacement et accéder à des analyses plus détaillées.</p>
            <ul>
                <li>Fonctionnalités de trading avancées</li>
                <li>Accès à des outils professionnels</li>
                <li>Analyses et rapports approfondis</li>
            </ul>
        `,
        'binance-direct': `
            <h2>Binance Direct</h2>
            <p>Avec Binance Direct, vous pouvez échanger des cryptomonnaies directement via la plateforme Binance. Profitez d'une intégration fluide et de transactions efficaces sans quitter notre site.</p>
            <ul>
                <li>Intégration directe avec Binance</li>
                <li>Processus de trading simplifié</li>
                <li>Transactions sécurisées et fiables</li>
            </ul>
        `,
        'latoken-direct': `
            <h2>Latoken Direct</h2>
            <p>Le service Latoken Direct vous permet de gérer rapidement et facilement les transactions via la plateforme Latoken. Bénéficiez d'échanges rapides et d'une expérience utilisateur fluide.</p>
            <ul>
                <li>Intégration facile avec Latoken</li>
                <li>Traitement rapide des transactions</li>
                <li>Expérience utilisateur sans effort</li>
            </ul>
        `
    };

    features.forEach(feature => {
        feature.addEventListener('click', () => {
            const id = feature.id;
            if (details[id]) {
                summary.innerHTML = details[id];
            }
        });
    });
});
