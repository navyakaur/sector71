export default function AboutSector71() {
  return (
    <main className="about">
      <h1>About Sector 71</h1>
      <div className="about-grid">
        <div className="about-photo-stack">
          <div className="video-embed">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/5_VYlFEOhqE"
              title="Sector 71 introduction video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="about-body">
          <p>
            Sector 71, named after the neighborhood in Punjab where my grandparents
            lived, is a monthly mail club.
          </p>
          <p>Each month, subscribers receive:</p>
          <ul className="about-list">
            <li>a handwritten letter</li>
            <li>a piece of original writing (essay, short story, and/or poetry)</li>
            <li>and a little gift chosen with care</li>
          </ul>
          <p>
            Every month has a theme. Past themes have been connection, love,
            creativity, happiness, desire, and New York.
          </p>
          <button
            className="signup-btn"
            onClick={() => window.open('https://buy.stripe.com/3cIaEXdPl9JUcYjdjl8ww00', '_blank')}
          >
            Purchase a subscription
          </button>

          <h2 className="pricing-heading">Pricing</h2>
          <p>
            Sector 71 operates on a pay-scale, meaning you pay what feels right
            to you. For a 6-month subscription, the cost range is $60&ndash;$100.
          </p>
          <p>
            I make almost no profit from this right now. I do it because I love it.
            I hope you do too.
          </p>
        </div>
      </div>
    </main>
  )
}
