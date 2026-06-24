export default function About() {
  return (
    <main className="about">
      <h1>About Me</h1>
      <div className="about-grid">
        <div className="about-photo-stack">
          <aside className="note">
            <div className="paperclip" aria-hidden="true">
              <svg width="32" height="72" viewBox="0 0 32 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 4 C8 4 4 10 4 16 L4 52 C4 62 10 68 16 68 C22 68 28 62 28 52 L28 20 C28 14 24 10 18 10 C12 10 10 14 10 20 L10 50 C10 54 12 56 16 56 C20 56 22 54 22 50 L22 22"
                  stroke="#8a8a8a"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
            <h2>Navya Kaur</h2>
            <ul>
              <li>based in Boston</li>
              <li>journaling since 7th grade</li>
              <li>knitter and crocheter</li>
              <li>ice cream lover (but not after 9 p.m.)</li>
              <li>always curious</li>
            </ul>
            <p className="building">And founder of Sector 71!</p>
          </aside>
          <figure className="about-photo">
            <img className="portrait" src="/assets/profile-picture.jpg" alt="Portrait of Navya Kaur" />
          </figure>
        </div>
        <div className="about-body">
          <p>Dear reader,</p>
          <p>
            Those who know me know I&rsquo;ve always loved sending and receiving mail.
            In my opinion, handwritten letters are a lost art and one of the truest
            ways to communicate, because of the deliberation and anticipation they require.
          </p>
          <p>
            I started this mail club to reintroduce care and intimacy into how we connect.
            In a digital world where everything is always at our fingertips, there&rsquo;s
            something special about letting things take their time to come to you.
          </p>
          <p>
            My work has been featured in Oyster River Pages and The San Franciscan,
            but my main credentials come from my sixth grade elementary school teacher
            who told me I was going to be a writer one day. Mr. Rivera, you got it so right.
          </p>
          <p>
            Sincerely,<br />
            Navya
          </p>
        </div>
      </div>
    </main>
  )
}
