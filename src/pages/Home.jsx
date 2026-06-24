import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className="home-wrapper">
      <h2 className="home-headline">a monthly mail club</h2>
      <div className="home">
        <div className="stamp stamp-photo">
          <img src="/assets/home-image.jpg" alt="A pink envelope sealed with a sticker, held against a floral bedsheet" />
        </div>
        <div className="stamp stamp-card">
          <p>
            Original writing, a handwritten letter, and a small gift in your
            mailbox &ndash; every month.
          </p>
          <button onClick={() => navigate('/about-sector71')} className="signup-btn">
            Learn more
          </button>
        </div>
      </div>
    </main>
  )
}
