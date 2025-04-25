



import React from 'react';
import './App.css';

function App() {
  const sections = [
    {
      id: 1,
      title: 'Centros de Poder y Difusión',
      description: 'Los centros metropolitanos crean y difunden narrativas globales a través de fábricas intelectuales y medios de comunicación.',
      image: 'power_diffusion.png', // AI-generated image placeholder
      imageAlt: 'World map with power centers highlighted',
      icons: ['globe', 'factory', 'media'], // FontAwesome icon names (or similar)
      quote: '"Quote from Said about power centers"'
    },
    {
      id: 2,
      title: 'Fabricando Consenso',
      description: 'Las \'fábricas intelectuales\' transforman información en narrativas que resuenan globalmente.',
      image: 'consensus_manufacturing.png', // AI-generated image placeholder
      imageAlt: 'Funnel converting information into narratives',
      icons: ['brain', 'assembly-line', 'megaphone'], // FontAwesome icon names
      quote: '"Quote from Said about manufactured consent"'
    },
    {
      id: 3,
      title: 'Campo de Batalla Cultural',
      description: 'Las comunidades locales enfrentan las narrativas globales de dos maneras: subordinación o resistencia creativa.',
      image: 'cultural_battlefield.png', // AI-generated image placeholder
      imageAlt: 'Intersection of global narratives and local experiences',
      icons: ['people', 'shield', 'flag'], // FontAwesome icon names
      quote: '"Quote from Said about cultural resistance"'
    },
    {
      id: 4,
      title: 'Reclamando la Narrativa',
      description: 'La resistencia se manifiesta en la creación de contra-narrativas que desafían las definiciones impuestas.',
      image: 'reclaiming_narrative.png', // AI-generated image placeholder
      imageAlt: 'Tree representing local experiences leading to new narratives',
      icons: ['book', 'microphone', 'brush', 'music'], // FontAwesome icon names
      quote: '"Quote from Said about reclaiming narratives"'
    },
    {
      id: 5,
      title: 'Navegando el Laberinto',
      description: 'Los intelectuales deben analizar críticamente el sistema de articulación y empoderar las voces marginadas.',
      image: 'navigating_labyrinth.svg', // AI-generated image placeholder
      imageAlt: 'Person navigating a maze with a compass',
      icons: ['search', 'balance', 'book'], // FontAwesome icon names
      quote: '"Quote from Said about intellectual responsibility"'
    }
  ];

  return (
    <div className="infographic-container">
      <header className="infographic-header">
        <h1>Figuras, Configuraciones, Transfiguraciones</h1>
        <p className="subtitle">Navegando el Sistema de Articulación Global</p>
      </header>

      <main className="infographic-content">
        {sections.map((section) => (
          <section key={section.id} className="infographic-section">
            <h2 className="section-title">{section.title}</h2>
            <div className="section-image">
              <img src={section.image} alt={section.imageAlt} />
            </div>
            <p className="section-description">{section.description}</p>
            <div className="section-icons">
              {section.icons.map((icon, index) => (
                <i key={index} className={`fas fa-${icon}`} aria-hidden="true"></i> // Example using FontAwesome
              ))}
            </div>
            <blockquote className="section-quote">{section.quote}</blockquote>
          </section>
        ))}
      </main>

      <footer className="infographic-footer">
        <p>&copy; 2024 Said's Articulation System</p>
      </footer>
    </div>
  );
}

export default App;
