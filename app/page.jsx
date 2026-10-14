
import React from 'react'


const games = [
  {
    id: 1,
    name: 'Cyberpunk 2077',
    category: 'ACTION RPG',
    rating: '9.2',
    price: '$59.99',
    image:
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 2,
    name: 'Gaming Universe',
    category: 'ADVENTURE',
    rating: '9.5',
    price: '$39.99',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 3,
    name: 'Neon Legends',
    category: 'SCI-FI',
    rating: '8.9',
    price: '$49.99',
    image:
      'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 4,
    name: 'Esports Arena',
    category: 'COMPETITIVE',
    rating: '9.1',
    price: '$29.99',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=700&q=85',
  },
]

const categories = [
  {
    title: 'ACTION',
    subtitle: 'Fast. Fierce. Fearless.',
    image:
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=85',
  },
  {
    title: 'ADVENTURE',
    subtitle: 'Worlds without limits.',
    image:
      'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=85',
  },
  {
    title: 'ESPORTS',
    subtitle: 'Play to be legendary.',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=85',
  },
]

const news = [
  {
    title: 'The future of gaming is here',
    tag: 'TECHNOLOGY',
    image:
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=85',
  },
  {
    title: 'Build your ultimate gaming setup',
    tag: 'GAMING GEAR',
    image:
      'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=85',
  },
  {
    title: 'Inside the world of esports',
    tag: 'ESPORTS',
    image:
      'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=800&q=85',
  },
]

export default function Home() {
  return (
    <main className="gamezone">
      <header className="navbar">
        <a href="#home" className="logo">
          GAME<span>ZONE</span><b>.</b>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#games">Games</a>
          <a href="#categories">Categories</a>
          <a href="#news">News</a>
        </nav>

        <a href="#games" className="nav-button">
          Explore <span>↗</span>
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow"></div>

        <div className="hero-content">
          <div className="eyebrow">
            <span className="live-dot"></span>
            WELCOME TO THE GAMEZONE
          </div>

          <h1>
            ENTER THE
            <br />
            <span>GAMEVERSE</span>
            <br />
            <span className="outline">UNLIMITED.</span>
          </h1>

          <p>
            Discover epic games, explore new worlds
            and experience gaming like never before.
            Your next adventure starts here.
          </p>

          <div className="hero-buttons">
            <a href="#games" className="button-primary">
              ▶ EXPLORE GAMES
            </a>
            <a href="#categories" className="button-secondary">
              DISCOVER MORE ↗
            </a>
          </div>

          <div className="stats">
            <div>
              <strong>500<span>+</span></strong>
              <small>GAMES</small>
            </div>
            <div>
              <strong>120<span>K</span></strong>
              <small>GAMERS</small>
            </div>
            <div>
              <strong>24<span>/7</span></strong>
              <small>COMMUNITY</small>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1000&q=85"
              alt="Futuristic gaming universe"
            />
            <div className="hero-image-overlay"></div>
            <div className="hero-image-text">
              <span>FEATURED EXPERIENCE</span>
              <h2>Beyond Reality</h2>
              <p>YOUR NEXT LEVEL AWAITS</p>
            </div>
          </div>

          <div className="floating-card">
            <span className="floating-icon">✦</span>
            <div>
              <strong>LEVEL UP</strong>
              <small>Start your adventure</small>
            </div>
          </div>

          <div className="online-card">
            <span className="live-dot"></span>
            GAMING MODE: ON
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-content">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="ticker-group" key={index}>
              <span>LEVEL UP</span>
              <b>✦</b>
              <span>PLAY DIFFERENT</span>
              <b>✦</b>
              <span>OWN THE GAME</span>
              <b>✦</b>
              <span>ENTER THE ZONE</span>
              <b>✦</b>
            </div>
          ))}
        </div>
      </div>

      <section className="section games-section" id="games">
        <div className="section-header">
          <div>
            <span className="section-label">PICK YOUR NEXT ADVENTURE</span>
            <h2>
              TRENDING <span>GAMES.</span>
            </h2>
            <p>Discover the games everyone is talking about.</p>
          </div>
          <a href="#categories" className="text-link">
            VIEW ALL ↗
          </a>
        </div>

        <div className="games-grid">
          {games.map((game) => (
            <article className="game-card" key={game.id}>
              <a href="#categories" className="game-cover">
                <img src={game.image} alt={game.name} loading="lazy" />
                <div className="cover-overlay"></div>
                <span className="game-tag">{game.category}</span>
                <span className="rating">★ {game.rating}</span>
                <span className="game-arrow">↗</span>
              </a>

              <div className="game-info">
                <div>
                  <h3>{game.name}</h3>
                  <p>PC · DIGITAL EDITION</p>
                </div>
                <strong>{game.price}</strong>
              </div>

              <a href="#categories" className="game-link">
                DISCOVER GAME <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="categories-section" id="categories">
        <div className="section category-inner">
          <div className="section-header">
            <div>
              <span className="section-label">FIND YOUR PLAYSTYLE</span>
              <h2>
                CHOOSE YOUR <span>ZONE.</span>
              </h2>
            </div>
            <p className="section-description">
              Every gamer is different. Find the world that fits you.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category, index) => (
              <a
                href="#games"
                className="category-card"
                key={category.title}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                />
                <div className="category-overlay"></div>
                <div className="category-info">
                  <span>0{index + 1} / EXPLORE</span>
                  <h3>{category.title}</h3>
                  <p>{category.subtitle}</p>
                  <b>↗</b>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="tournament section" id="tournaments">
        <div className="tournament-content">
          <span className="section-label">THE BATTLE STARTS HERE</span>
          <h2>
            BUILT TO
            <br />
            <span>COMPETE.</span>
          </h2>
          <p>
            Sharpen your skills, find your squad,
            and get ready for the next challenge.
            Your legend starts with one match.
          </p>
          <a href="#news" className="button-primary">
            EXPLORE ESPORTS ↗
          </a>
        </div>

        <div className="tournament-image">
          <img
            src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=1000&q=85"
            alt="Esports gaming arena"
            loading="lazy"
          />
          <div className="tournament-image-text">
            <span>YOUR TIME</span>
            <h3>TO WIN.</h3>
            <p>NO LIMITS · NO FEAR</p>
          </div>
        </div>
      </section>

      <section className="section news-section" id="news">
        <div className="section-header">
          <div>
            <span className="section-label">LATEST UPDATES</span>
            <h2>
              INSIDE THE <span>ZONE.</span>
            </h2>
            <p>Fresh stories from the gaming universe.</p>
          </div>
        </div>

        <div className="news-grid">
          {news.map((item) => (
            <article className="news-card" key={item.title}>
              <a href="#home" className="news-image">
                <img src={item.image} alt={item.title} loading="lazy" />
                <span>{item.tag}</span>
              </a>
              <div className="news-info">
                <small>GAMEZONE EDITORIAL</small>
                <h3>{item.title}</h3>
                <a href="#home" className="read-more">
                  READ STORY <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="community">
        <div className="community-glow"></div>
        <span className="section-label">YOUR NEXT LEVEL STARTS NOW</span>
        <h2>
          YOUR GAME.
          <br />
          <span>YOUR LEGACY.</span>
        </h2>
        <p>
          Step into a new universe. Discover your next
          favorite game and make every moment count.
        </p>
        <a href="#games" className="button-primary">
          START EXPLORING ↗
        </a>
        <div className="big-logo">GZ<span>.</span></div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo">
              GAME<span>ZONE</span><b>.</b>
            </a>
            <p>
              Beyond the screen.
              <br />
              Into your next adventure.
            </p>
            <div className="socials">
              <a href="#news" aria-label="Gaming news">N</a>
              <a href="#games" aria-label="Games">G</a>
              <a href="#tournaments" aria-label="Esports">E</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>EXPLORE</h4>
            <a href="#home">Home</a>
            <a href="#games">Games</a>
            <a href="#categories">Categories</a>
          </div>

          <div className="footer-column">
            <h4>COMMUNITY</h4>
            <a href="#tournaments">Esports</a>
            <a href="#news">Gaming news</a>
            <a href="#games">Discover games</a>
          </div>

          <div className="footer-column">
            <h4>GAMEZONE</h4>
            <p>Made for gamers.<br />Powered by imagination.</p>
            <a href="mailto:hello@gamezone.example">CONTACT US ↗</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 GAMEZONE. ALL RIGHTS RESERVED.</p>
          <a href="#home">BACK TO TOP ↑</a>
          <p>PRESS START TO EXPLORE.</p>
        </div>
      </footer>
    </main>
  )
}
