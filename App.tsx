import React from 'react';

// Version simplifiée pour tester le déploiement
const App: React.FC = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: 'red', fontSize: '30px' }}>
        L'application fonctionne ! 🚀
      </h1>
      <p>
        La connexion entre GitHub et Netlify est parfaite.
      </p>
      <p>
        Maintenant, nous allons pouvoir rajouter le contenu (Hero, InfoGrid) petit à petit.
      </p>
    </div>
  );
};

export default App;
