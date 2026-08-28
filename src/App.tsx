import { FormEvent, useMemo, useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Scissors, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "./order";

const WHATSAPP = "917039081439";

const garments = [
  { id: "bandhgala", name: "The Bandhgala", type: "Signature tailoring", price: "From ₹1,899", image: "/garments/bandhgala.jpg", tone: "Obsidian wool · tonal satin lapel" },
  { id: "kurta", name: "The Ivory Kurta", type: "Everyday occasion", price: "From ₹999", image: "/garments/ivory-kurta.jpg", tone: "Textured cotton · relaxed collar" },
  { id: "linen", name: "The Linen Shirt", type: "Quiet essentials", price: "From ₹799", image: "/garments/linen-shirt.jpg", tone: "European linen · soft sand" },
  { id: "sherwani", name: "The Emerald Sherwani", type: "Ceremonial edit", price: "From ₹2,499", image: "/garments/sherwani.jpg", tone: "Woven jacquard · deep emerald" },
  { id: "evening-suit", name: "The Evening Suit", type: "Formal tailoring", price: "From ₹2,899", image: "/garments/evening-suit.jpg", tone: "Midnight wool · soft ivory shirt" },
  { id: "olive-waistcoat", name: "The Olive Waistcoat", type: "Occasion layer", price: "From ₹1,499", image: "/garments/olive-waistcoat.jpg", tone: "Deep olive wool · matte horn buttons" },
];

const faqs = [
  ["How do I send my measurements?", "Choose a garment, complete the short measurement form, and send your details to us on WhatsApp. We will guide you if any measurement needs clarification."],
  ["Can I use measurements from another tailor?", "Yes. Share them with your request and we will review the set before confirming the cut. We may ask for one or two additional measurements for a better fit."],
  ["How long does a garment take?", "Timing depends on the garment and fabric. We confirm the estimated completion date with your quote before we begin."],
  ["Can I request a different fabric or colour?", "Yes. Mention your preferred colour, fabric, and occasion in the WhatsApp request. We will reply with the closest available options and final price."],
];

function App() {
  const [selected, setSelected] = useState(garments[0]);
  const [showForm, setShowForm] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", chest: "", waist: "", shoulder: "", sleeve: "", length: "", note: "" });

  const whatsappUrl = useMemo(() => buildWhatsAppUrl(WHATSAPP, selected.name, form), [form, selected]);

  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Firoz Tailor home"><span className="mark">FT</span><span>FIROZ <em>TAILOR</em></span></a>
        <nav className="desktop-nav" aria-label="Main navigation"><a href="#collection">Collection</a><a href="#process">Our process</a><a href="#faq">FAQ</a></nav>
        <button className="nav-cta" onClick={() => setShowForm(true)}>Start a fitting <ArrowUpRight size={16} /></button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> MADE TO MEASURE · MUMBAI</p>
            <h1>Clothes that<br /><i>belong to you.</i></h1>
            <p className="hero-lede">Personal tailoring for men who notice the details. Choose your silhouette, share your measurements, and let us make the fit yours.</p>
            <div className="hero-actions"><button className="button button-dark" onClick={() => setShowForm(true)}>Begin your fitting <ArrowUpRight size={17} /></button><a className="text-link" href="#collection">Explore the edit <span>↓</span></a></div>
            <div className="hero-note"><span className="dot" /> Hand-finished in small batches <span className="rule" /> Secure WhatsApp ordering</div>
          </div>
          <div className="hero-visual"><img src="/garments/hero-bandhgala.jpg" alt="Tailor wearing a charcoal bandhgala in a warm atelier" /><div className="hero-stamp"><span>FT</span><small>Made<br />for you</small></div><div className="hero-caption">01 / The Firoz signature</div></div>
        </section>

        <section className="intro-band section-pad"><div className="section-kicker">THE HOUSE NOTE</div><p>There is a difference between wearing a garment and <strong>feeling at home in it.</strong> Firoz Tailor brings the patience of traditional tailoring to a simpler, more personal way to order.</p><div className="intro-aside">One fitting.<br />Your proportions.<br />A better everyday.</div></section>

        <section id="collection" className="collection section-pad"><div className="section-heading"><div><p className="eyebrow">THE FIRST EDIT <span className="muted">/ 06 PIECES</span></p><h2>Considered <i>essentials.</i></h2></div><p className="section-description">A focused wardrobe of pieces designed to work hard, wear well, and fit like they were always yours.</p></div><div className="garment-grid">{garments.map((garment, i) => <article className={`garment-card ${selected.id === garment.id ? "selected" : ""}`} key={garment.id} onClick={() => setSelected(garment)}><div className="garment-image"><img src={garment.image} alt={garment.name} loading={i === 0 ? "eager" : "lazy"} /><span className="card-index">0{i + 1}</span><button className="card-arrow" aria-label={`Choose ${garment.name}`} onClick={(e) => { e.stopPropagation(); setSelected(garment); setShowForm(true); }}><ArrowUpRight size={17} /></button></div><div className="garment-meta"><div><p className="garment-type">{garment.type}</p><h3>{garment.name}</h3><p className="garment-tone">{garment.tone}</p></div><div className="garment-price">{garment.price}</div></div></article>)}</div></section>

        <section id="process" className="process section-pad"><div className="process-intro"><p className="eyebrow">THE FITTING RITUAL</p><h2>Made around<br /><i>your life.</i></h2><p>Good tailoring begins with listening. Our process stays personal from the first message to the final stitch.</p><button className="button button-outline" onClick={() => setShowForm(true)}>Request a fitting <ArrowUpRight size={16} /></button></div><div className="steps"><div className="step"><span>01</span><div><h3>Choose your piece</h3><p>Start with a silhouette from the edit. Tell us where you plan to wear it and what you like.</p></div></div><div className="step"><span>02</span><div><h3>Share your measure</h3><p>Send a few simple measurements over WhatsApp. We clarify the details before cutting.</p></div></div><div className="step"><span>03</span><div><h3>We make the fit</h3><p>Your garment is cut and finished with care, then we keep you posted until it is ready.</p></div></div></div></section>

        <section className="trust-row section-pad"><div><ShieldCheck size={20} /><p><strong>Your details stay yours.</strong><br />We use your measurements only to make your order.</p></div><div><Scissors size={20} /><p><strong>Cut for your proportions.</strong><br />Not a standard size with your name on it.</p></div><div><Sparkles size={20} /><p><strong>Small-batch attention.</strong><br />Every piece gets a final human check.</p></div></section>

        <section id="faq" className="faq section-pad"><div><p className="eyebrow">GOOD TO KNOW</p><h2>Questions, <i>answered.</i></h2></div><div className="faq-list">{faqs.map(([question, answer], i) => <div className={`faq-item ${openFaq === i ? "is-open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{question}</span><ChevronDown size={18} /></button>{openFaq === i && <p>{answer}</p>}</div>)}</div></section>

        <section className="closing section-pad"><div className="closing-mark">FT</div><p className="eyebrow">THE NEXT PIECE IS YOURS</p><h2>Ready for a better<br /><i>fit?</i></h2><p>Send us a message. We will help you choose the right starting point.</p><button className="button button-light" onClick={() => setShowForm(true)}>Start on WhatsApp <MessageCircle size={17} /></button></section>
      </main>

      <footer className="footer"><a className="wordmark" href="#top"><span className="mark">FT</span><span>FIROZ <em>TAILOR</em></span></a><p>Made to measure in Mumbai.</p><a href="mailto:kaif.qr1@gmail.com">kaif.qr1@gmail.com</a><span>© 2026 Firoz Tailor</span></footer>

      {showForm && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && setShowForm(false)}><section className="measurement-modal" role="dialog" aria-modal="true" aria-labelledby="fitting-title"><button className="modal-close" aria-label="Close fitting form" onClick={() => setShowForm(false)}>×</button><p className="eyebrow">YOUR FITTING REQUEST</p><h2 id="fitting-title">Let’s make it <i>yours.</i></h2><p className="modal-lede">Choose a piece and share the basics. We’ll continue the conversation on WhatsApp.</p><label>Selected piece<select value={selected.id} onChange={(e) => setSelected(garments.find((item) => item.id === e.target.value) || selected)}>{garments.map((g) => <option value={g.id} key={g.id}>{g.name} · {g.price}</option>)}</select></label><form onSubmit={submit}><div className="field-grid"><label>Your name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Firoz Khan" /></label><label>Chest (in)<input inputMode="decimal" value={form.chest} onChange={(e) => setForm({ ...form, chest: e.target.value })} placeholder="40" /></label><label>Waist (in)<input inputMode="decimal" value={form.waist} onChange={(e) => setForm({ ...form, waist: e.target.value })} placeholder="34" /></label><label>Shoulder (in)<input inputMode="decimal" value={form.shoulder} onChange={(e) => setForm({ ...form, shoulder: e.target.value })} placeholder="18" /></label><label>Sleeve (in)<input inputMode="decimal" value={form.sleeve} onChange={(e) => setForm({ ...form, sleeve: e.target.value })} placeholder="24" /></label><label>Garment length (in)<input inputMode="decimal" value={form.length} onChange={(e) => setForm({ ...form, length: e.target.value })} placeholder="29" /></label></div><label>Anything else? <textarea value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} placeholder="Colour, occasion, fabric preference..." /></label><button className="button button-dark modal-submit" type="submit">Send request on WhatsApp <MessageCircle size={17} /></button>{sent && <p className="success-note"><Check size={16} /> WhatsApp is opening with your request.</p>}</form></section></div>}
    </div>
  );
}

export default App;
