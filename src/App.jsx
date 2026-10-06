import { useState } from "react";
import { FAVORITES, MENU, WHATSAPP } from "./data.js";

function Drip() {
  return (
    <svg className="drip" viewBox="0 0 1440 130" preserveAspectRatio="none" aria-hidden="true">
      <path
        fill="currentColor"
        d="M0 0H1440V36H1290C1270 36 1262 44 1260 70C1258 108 1218 108 1216 70C1214 44 1206 36 1186 36H930C910 36 902 44 900 60C898 88 866 88 864 60C862 44 854 36 834 36H560C540 36 532 44 530 82C528 128 480 128 478 82C476 44 468 36 448 36H190C170 36 162 44 160 62C158 94 124 94 122 62C120 44 112 36 92 36H0Z"
      />
    </svg>
  );
}

function Goo() {
  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9" />
        </filter>
      </svg>
      <div className="goo" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>
    </>
  );
}

function Hero() {
  return (
    <>
      <header className="hero">
        <Goo />
        <div className="wrap">
          <div className="top">
            <span>Pattiserie</span>
            <nav>
              <a href="#menu">Menu</a>
              <a href="#order">Custom orders</a>
              <a href="#visit">Visit</a>
            </nav>
          </div>
          <h1>IMBI</h1>
          <p>Cakes, pastries and bread, baked fresh every morning a few streets from you.</p>
          <div className="btns">
            <a className="btn fill" href="#menu">See the menu</a>
            <a className="btn" href="#order">Order a cake</a>
          </div>
        </div>
      </header>
      <Drip />
    </>
  );
}

function Favorites() {
  return (
    <section id="favorites">
      <div className="wrap">
        <h2>Today's favorites</h2>
        <p className="lede">The three things people ask for first.</p>
        <div className="sig">
          {FAVORITES.map((f, i) => (
            <article key={f.name}>
              <div className="disc" style={{ background: f.color }} aria-hidden="true">{i + 1}</div>
              <h3>{f.name}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const categories = Object.keys(MENU);
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="menu">
      <div className="wrap">
        <h2>Menu</h2>
        <div className="tabs" role="tablist" aria-label="Menu categories">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={c === active} onClick={() => setActive(c)}>
              {c}
            </button>
          ))}
        </div>
        <ul className="menu" role="tabpanel">
          {MENU[active].map((item) => (
            <li key={item.name}>
              <div className="row">
                <span>{item.name}</span>
                <i />
                <span>Rp {item.price}k</span>
              </div>
              {item.desc && <small>{item.desc}</small>}
            </li>
          ))}
        </ul>
        <p className="note">Sample menu and prices. Real items will replace these.</p>
      </div>
    </section>
  );
}

function Order() {
  const link = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi IMBI, I'd like to order a cake")}`;
  return (
    <section className="order" id="order">
      <div className="wrap">
        <div>
          <h2>Custom orders</h2>
          <p>Birthday cakes, wedding boxes and office orders. Message us at least 3 days ahead with the date, size and flavor you want.</p>
        </div>
        <a className="btn fill" href={link}>Message on WhatsApp</a>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="visit" id="visit">
      <div className="wrap">
        <h2>Visit us</h2>
        <dl>
          <dt>Address</dt><dd>Street name and number, your neighborhood</dd>
          <dt>Mon to Fri</dt><dd>7:00 to 19:00</dd>
          <dt>Sat and Sun</dt><dd>7:00 to 21:00</dd>
          <dt>Instagram</dt><dd>@imbipattiserie</dd>
        </dl>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Favorites />
        <Menu />
        <Order />
        <Visit />
      </main>
      <footer>
        <div className="wrap">IMBI Pattiserie. Website concept, details are placeholders.</div>
      </footer>
    </>
  );
}
