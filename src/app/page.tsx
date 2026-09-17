import MotionEffects from "@/components/MotionEffects";
import { activityPreview, careerPaths, navigation, packages, services, whatsappUrl } from "@/data/site";

const navMeta: Record<string, string> = {
  "#services": "S",
  "#samples": "CV",
  "#pricing": "P",
  "#free-review": "R",
  "#contact": "C",
};

const cvSamples = [
  { title: "Software Engineer", category: "IT & Software", image: "/cv-samples/software.svg", tone: "blue" },
  { title: "Banking Executive", category: "Banking & Finance", image: "/cv-samples/banking.svg", tone: "cyan" },
  { title: "Fresh Graduate", category: "Entry Level", image: "/cv-samples/graduate.svg", tone: "violet" },
];

function LogoMark() {
  return (
    <div className="logo-mark" aria-hidden="true">
      <span>C</span>
      <span>D</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <MotionEffects />
      <div className="scroll-progress" aria-hidden="true" />

      <nav className="floating-nav" aria-label="Primary navigation">
        <div className="nav-dock">
          <a className="nav-home" href="#top" aria-label="Career Draft home">
            <LogoMark />
          </a>
          <div className="nav-links">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} aria-label={item.label}>
                <span className="nav-mini" aria-hidden="true">{navMeta[item.href] ?? "•"}</span>
                <span className="nav-label">{item.label}</span>
              </a>
            ))}
          </div>
          <a className="nav-order" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Order your CV on WhatsApp">
            <span className="nav-order-label">Order</span><b>↗</b>
          </a>
        </div>
      </nav>

      <section className="hero section" id="top">
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
        <div className="hero-mesh" />

        <div className="container hero-grid">
          <div className="hero-copy hero-enter">
            <a className="hero-brand" href="#top" aria-label="Career Draft home">
              <LogoMark />
              <div><strong>Career Draft</strong><span>Professional CV & Career Services</span></div>
            </a>

            <div className="hero-kicker"><span className="live-dot" />Career documents for modern job seekers</div>
            <h1>Build a CV that <span>gets you noticed.</span></h1>
            <p className="hero-lead">Professional, modern and ATS-friendly CVs shaped around your career story, target role and industry — with a simple, personal process from first message to final file.</p>

            <div className="hero-actions">
              <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Get Your CV <span>↗</span></a>
              <a className="btn btn-ghost" href="#samples">Explore Samples <span>↓</span></a>
            </div>

            <div className="trust-row" aria-label="Service highlights">
              <span>ATS-Friendly</span><span>Modern Design</span><span>Fast Delivery</span><span>Confidential</span>
            </div>

            <div className="hero-proof">
              <div><strong>01</strong><span>Send details</span></div>
              <div><strong>02</strong><span>We craft</span></div>
              <div><strong>03</strong><span>Review & receive</span></div>
            </div>
          </div>

          <div className="hero-visual hero-enter hero-enter-delay" aria-label="Career Draft CV preview">
            <div className="hero-visual-glow" />
            <div className="hero-sheet sheet-back-one" />
            <div className="hero-sheet sheet-back-two" />
            <div className="hero-sample-frame">
              <img src="/cv-samples/software.svg" alt="Fictional modern software engineer CV sample" loading="eager" decoding="async" />
            </div>
            <div className="floating-chip chip-one"><span>✦</span><div><small>TAILORED</small><strong>Industry-focused</strong></div></div>
            <div className="floating-chip chip-two"><span>✓</span><div><small>READY</small><strong>Application-ready</strong></div></div>
          </div>
        </div>

        <a className="scroll-cue" href="#services" aria-label="Scroll to services"><span>Explore</span><i /></a>
      </section>

      <section className="pulse-section section" data-reveal>
        <div className="container">
          <div className="section-heading compact">
            <div><span className="eyebrow">Career Draft Pulse</span><h2>Designed to feel active, not static.</h2></div>
            <span className="demo-chip">Demo values until database launch</span>
          </div>
          <div className="stats-grid reveal-stagger">
            {[['24','CVs created'],['06','In progress'],['11','Free reviews'],['08','Industries covered']].map(([value,label]) => <div className="stat-card" key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
          <p className="microcopy">These launch values are placeholders and should be replaced with verified database totals before public social-proof claims.</p>
        </div>
      </section>

      <section className="section defer-render" id="services" data-reveal>
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">What we do</span><h2>Sharper applications, built around you.</h2></div><p>Clear structure, modern presentation and content that fits the role you are actually applying for.</p></div>
          <div className="service-grid reveal-stagger">
            {services.map((service) => <article className="service-card" key={service.title}><span className="service-index">{service.icon}</span><h3>{service.title}</h3><p>{service.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section alt-section defer-render" data-reveal>
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">Choose your career path</span><h2>Different goals deserve different CVs.</h2></div><p>Choose a direction and explore a style matched to the kind of opportunity you are targeting.</p></div>
          <div className="path-grid reveal-stagger">
            {careerPaths.map((path) => <article className="path-card" key={path.title}><span>{path.tag}</span><h3>{path.title}</h3><p>{path.note}</p><a href="#samples">Explore samples →</a></article>)}
          </div>
        </div>
      </section>

      <section className="section defer-render" id="samples" data-reveal>
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">CV Samples</span><h2>Realistic previews. Lightweight delivery.</h2></div><p>These optimized SVG mockups use fictional information, so they load quickly without exposing customer data.</p></div>
          <div className="sample-showcase reveal-stagger">
            {cvSamples.map((sample) => (
              <article className={`sample-visual-card ${sample.tone}`} key={sample.title}>
                <div className="sample-image-wrap"><img src={sample.image} alt={`${sample.title} CV sample`} loading="lazy" decoding="async" /></div>
                <div className="sample-caption"><div><span>{sample.category}</span><h3>{sample.title}</h3></div><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Request a ${sample.title} CV`}>↗</a></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section transform-section defer-render" data-reveal>
        <div className="container transform-grid">
          <div>
            <span className="eyebrow">Before → After</span>
            <h2>Show the difference at a glance.</h2>
            <p>An effective redesign is not just prettier. It improves hierarchy, readability and the way your strongest information is discovered.</p>
            <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Request a CV redesign →</a>
          </div>
          <div className="comparison-stage">
            <div className="old-cv"><span>BEFORE</span><i/><i/><i className="short"/><b/><i/><i/></div>
            <div className="after-cv"><span>CAREER DRAFT</span><img src="/cv-samples/banking.svg" alt="Redesigned banking CV sample" loading="lazy" decoding="async" /></div>
            <div className="comparison-arrow">→</div>
          </div>
        </div>
      </section>

      <section className="section alt-section defer-render" data-reveal>
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">How it works</span><h2>Simple from message to final file.</h2></div></div>
          <div className="steps-grid reveal-stagger">
            {[['01','Send your details','Share your existing CV or your education, experience and target role.'],['02','We build your CV','Your information is organized into a clean, role-focused professional structure.'],['03','Review & receive','Check the draft, request your included revision and receive the final files.']].map(([n,t,d]) => <article className="step-card" key={n}><strong>{n}</strong><h3>{t}</h3><p>{d}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section activity-section defer-render" data-reveal>
        <div className="container activity-grid">
          <div><span className="eyebrow">Recent Career Activity</span><h2>Social proof without exposing people.</h2><p>At launch this section is clearly demo content. Later it can display real, anonymized order activity from your database.</p></div>
          <div className="activity-list">{activityPreview.map((item)=><div className="activity-item" key={item.title}><span className="activity-dot"/><div><strong>{item.title}</strong><small>{item.meta}</small></div></div>)}</div>
        </div>
      </section>

      <section className="section defer-render" id="pricing" data-reveal>
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">Packages</span><h2>Choose the support you need.</h2></div><p>Final pricing can be added once your launch rates are confirmed.</p></div>
          <div className="pricing-grid reveal-stagger">{packages.map((pkg)=><article className={`price-card ${pkg.featured ? 'featured' : ''}`} key={pkg.name}>{pkg.featured && <span className="popular">Popular</span>}<span className="price-eyebrow">{pkg.eyebrow}</span><h3>{pkg.name}</h3><p>{pkg.description}</p><div className="price-placeholder">Price on request</div><ul>{pkg.features.map((feature)=><li key={feature}>✓ {feature}</li>)}</ul><a className={`btn ${pkg.featured ? 'btn-primary':'btn-ghost'}`} href={whatsappUrl} target="_blank" rel="noreferrer">Choose {pkg.name}</a></article>)}</div>
        </div>
      </section>

      <section className="section review-section defer-render" id="free-review" data-reveal>
        <div className="container review-card">
          <div><span className="eyebrow">Free CV Review</span><h2>Is your CV job-ready?</h2><p>Send your current CV for a quick review of structure, clarity, formatting and presentation.</p></div>
          <a className="btn btn-light" href={whatsappUrl} target="_blank" rel="noreferrer">Request a Free Review</a>
        </div>
      </section>

      <section className="section contact-section defer-render" id="contact" data-reveal>
        <div className="container contact-grid">
          <div><span className="eyebrow">Ready when you are</span><h2>Make your next application feel stronger.</h2><p>Start with a WhatsApp message. Send your current CV if you have one, or send your details and Career Draft can build from scratch.</p></div>
          <div className="contact-card"><span>WhatsApp</span><strong>075 182 5676</strong><a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Chat with Career Draft</a></div>
        </div>
      </section>

      <footer className="footer defer-render" data-reveal>
        <div className="container footer-grid">
          <div className="brand"><LogoMark/><div><strong>Career Draft</strong><span>Connect • Apply • Grow</span></div></div>
          <p>Professional CV & career services designed for modern job seekers.</p>
          <div className="footer-links"><a href="#services">Services</a><a href="#samples">Samples</a><a href="#pricing">Pricing</a><a href="#free-review">Free Review</a></div>
        </div>
      </footer>
    </main>
  );
}
