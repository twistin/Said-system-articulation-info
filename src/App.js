import React from 'react';
import './App.css';

function App() {
  const sections = [
    {
      id: 1,
      title: 'Centros de Poder y Difusión',
      description: 'Los centros metropolitanos crean y difunden narrativas globales a través de fábricas intelectuales y medios de comunicación.',
      image: `${process.env.PUBLIC_URL}/power_diffusion.png`,
      imageAlt: 'Mapa del mundo con los centros de poder resaltados',
      icons: ['globe', 'factory', 'media'],
      quote: '"Cita de Edward Said acerca de los centro de poder"',
    },
    {
      id: 2,
      title: 'Fabricando Consenso',
      description: 'Las \'fábricas intelectuales\' transforman información en narrativas que resuenan globalmente.',
      image: `${process.env.PUBLIC_URL}/consensus_manufacturing.png`,
      imageAlt: 'Embudo que convierte la información en narraciones',
      icons: ['brain', 'assembly-line', 'megaphone'],
      quote: '"Cita de Said sobre el consentimiento fabricado"',
    },
    {
      id: 3,
      title: 'Campo de Batalla Cultural',
      description: 'Las comunidades locales enfrentan las narrativas globales de dos maneras: subordinación o resistencia creativa.',
      image: `${process.env.PUBLIC_URL}/cultural_battlefield.png`,
      imageAlt: 'Intersección de narrativas globales y experiencias locales',
      icons: ['people', 'shield', 'flag'],
      quote: '"Cita de Said sobre la resistencia cultural"',
    },
    {
      id: 4,
      title: 'Reclamando la Narrativa',
      description: 'La resistencia se manifiesta en la creación de contra-narrativas que desafían las definiciones impuestas.',
      image: `${process.env.PUBLIC_URL}/reclaiming_narrative.png`,
      imageAlt: 'Árbol que representa experiencias locales que dan lugar a nuevas narrativas',
      icons: ['book', 'microphone', 'brush', 'music'],
      quote: '"Cita de Said sobre la reivindicación de las narrativas"',
    },
    {
      id: 5,
      title: 'Navegando el Laberinto',
      description: 'Los intelectuales deben analizar críticamente el sistema de articulación y empoderar las voces marginadas.',
      image: `${process.env.PUBLIC_URL}/navegando_laberinto.png`,
      imageAlt: 'Persona navegando por un laberinto con una brújula',
      icons: ['search', 'balance', 'book'],
      quote: '"Cita de Said sobre la responsabilidad intelectual"',
    },
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
                <i key={index} className={`fas fa-${icon}`} aria-hidden="true"></i>
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