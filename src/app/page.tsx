import { activityPreview, careerPaths, navigation, packages, samples, services, whatsappUrl } from "@/data/site";

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
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Career Draft home">
            <LogoMark />
            <div>
              <strong>Career Draft</strong>
              <span>Professional CV & Career Services</span>
            </div>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <a className="btn btn-primary btn-small" href={whatsappUrl} target="_blank" rel="noreferrer">
            Order Now
          </a>
        </div>
      </header>

      <section className="hero section" id="top">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Not just a CV. Your career launchpad.</div>
            <h1>Build a CV that <span>gets you noticed.</span></h1>
            <p className="hero-lead">
              Professional, modern and ATS-friendly CVs designed around your career story, target role, and industry.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Get Your CV</a>
              <a className="btn btn-ghost" href="#samples">View Samples</a>
            </div>
            <div className="trust-row" aria-label="Service highlights">
              <span>ATS-Friendly</span><span>Modern Design</span><span>Fast Delivery</span><span>Confidential</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Career Draft CV preview mockups">
            <div className="cv-card cv-card-back">
              <div className="cv-accent" />
              <div className="cv-line wide" /><div className="cv-line" /><div className="cv-line short" />
              <div className="cv-block" /><div className="cv-block small" />
            </div>
            <div className="cv-card cv-card-front">
              <div className="cv-head">
                <div className="avatar-placeholder">CD</div>
                <div><strong>YOUR NAME</strong><span>Target Role</span></div>
              </div>
              <div className="cv-section"><b>PROFILE</b><div className="cv-line wide"/><div className="cv-line"/></div>
              <div className="cv-section"><b>EXPERIENCE</b><div className="cv-block"/><div className="cv-line wide"/><div className="cv-line short"/></div>
              <div className="cv-section"><b>SKILLS</b><div className="skill-bars"><i/><i/><i/></div></div>
            </div>
            <div className="floating-note note-one">Tailored by industry</div>
            <div className="floating-note note-two">Clean • Modern • Focused</div>
          </div>
        </div>
      </section>

      <section className="pulse-section section">
        <div className="container">
          <div className="section-heading compact">
            <div><span className="eyebrow">Career Draft Pulse</span><h2>A live-service feel, built on real data.</h2></div>
            <span className="demo-chip">Demo counters for launch</span>
          </div>
          <div className="stats-grid">
            {[['24','CVs created'],['06','In progress'],['11','Free reviews'],['08','Industries covered']].map(([value,label]) => (
              <div className="stat-card" key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
          <p className="microcopy">These are placeholder launch values. Replace them with real database totals before using them as public social proof.</p>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">What we do</span><h2>Career documents that feel intentional.</h2></div><p>Every service is structured to make your application clearer, more polished, and easier to act on.</p></div>
          <div className="service-grid">
            {services.map((service) => <article className="service-card" key={service.title}><span className="service-index">{service.icon}</span><h3>{service.title}</h3><p>{service.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">Choose your career path</span><h2>Different goals. A better-fit CV.</h2></div><p>Pick the direction that matches your next move. The site can later route each option to tailored samples and packages.</p></div>
          <div className="path-grid">
            {careerPaths.map((path) => <article className="path-card" key={path.title}><span>{path.tag}</span><h3>{path.title}</h3><p>{path.note}</p><a href="#samples">Explore samples →</a></article>)}
          </div>
        </div>
      </section>

      <section className="section" id="samples">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">CV Samples</span><h2>Three directions. One premium standard.</h2></div><p>Dummy content is used here so no customer information is exposed.</p></div>
          <div className="sample-grid">
            {samples.map((sample) => (
              <article className="sample-card" key={sample.title}>
                <div className={`sample-top ${sample.accent}`}><span>{sample.initials}</span><div><b>{sample.title}</b><small>{sample.category}</small></div></div>
                <div className="sample-body"><div className="sample-rule wide"/><div className="sample-rule"/><div className="sample-rule short"/><h4>CORE STRENGTHS</h4><div className="tag-row">{sample.skills.map((skill)=><span key={skill}>{skill}</span>)}</div><div className="sample-block"/><div className="sample-block small"/></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section transform-section">
        <div className="container transform-grid">
          <div>
            <span className="eyebrow">Before → After</span>
            <h2>Show the transformation, not just the promise.</h2>
            <p>Use this section for real anonymized before-and-after samples once you have customer permission. For now it demonstrates the website experience.</p>
            <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Request a CV redesign →</a>
          </div>
          <div className="comparison-card">
            <div className="comparison-half old"><span>BEFORE</span><div className="messy-line"/><div className="messy-line short"/><div className="messy-line"/><div className="messy-box"/></div>
            <div className="comparison-divider">→</div>
            <div className="comparison-half new"><span>CAREER DRAFT</span><div className="clean-header"/><div className="clean-line"/><div className="clean-line short"/><div className="clean-box"/></div>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">How it works</span><h2>Simple from first message to final file.</h2></div></div>
          <div className="steps-grid">
            {[['01','Send your details','Share your current CV or your education, experience and target role.'],['02','We build your CV','Your information is organized into a professional, role-focused structure.'],['03','Review & receive','Check the draft, request the included revisions, then receive the final files.']].map(([n,t,d]) => <article className="step-card" key={n}><strong>{n}</strong><h3>{t}</h3><p>{d}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section activity-section">
        <div className="container activity-grid">
          <div><span className="eyebrow">Recent Career Activity</span><h2>A transparent social-proof system.</h2><p>This launch version uses clearly labeled demo activity. Later, connect this feed to real anonymized orders and only show information you are comfortable publishing.</p></div>
          <div className="activity-list">{activityPreview.map((item)=><div className="activity-item" key={item.title}><span className="activity-dot"/><div><strong>{item.title}</strong><small>{item.meta}</small></div></div>)}</div>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">Packages</span><h2>Choose the level of support you need.</h2></div><p>Prices are intentionally left open so you can finalize them before launch.</p></div>
          <div className="pricing-grid">{packages.map((pkg)=><article className={`price-card ${pkg.featured ? 'featured' : ''}`} key={pkg.name}>{pkg.featured && <span className="popular">Popular</span>}<span className="price-eyebrow">{pkg.eyebrow}</span><h3>{pkg.name}</h3><p>{pkg.description}</p><div className="price-placeholder">Price on request</div><ul>{pkg.features.map((feature)=><li key={feature}>✓ {feature}</li>)}</ul><a className={`btn ${pkg.featured ? 'btn-primary':'btn-ghost'}`} href={whatsappUrl} target="_blank" rel="noreferrer">Choose {pkg.name}</a></article>)}</div>
        </div>
      </section>

      <section className="section review-section" id="free-review">
        <div className="container review-card">
          <div><span className="eyebrow">Free CV Review</span><h2>Is your CV job-ready?</h2><p>Send your current CV for a quick review of structure, clarity, formatting and presentation. Add secure file upload later when the backend is connected.</p></div>
          <a className="btn btn-light" href={whatsappUrl} target="_blank" rel="noreferrer">Request a Free Review</a>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div><span className="eyebrow">Ready when you are</span><h2>Make your next application feel stronger.</h2><p>Start with a WhatsApp message. Send your existing CV if you have one, or send your details and Career Draft can build from scratch.</p></div>
          <div className="contact-card"><span>WhatsApp</span><strong>075 182 5676</strong><a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Chat with Career Draft</a></div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="brand"><LogoMark/><div><strong>Career Draft</strong><span>Connect • Apply • Grow</span></div></div>
          <p>Professional CV & career services designed for modern job seekers.</p>
          <div className="footer-links"><a href="#services">Services</a><a href="#samples">Samples</a><a href="#pricing">Pricing</a><a href="#free-review">Free Review</a></div>
        </div>
      </footer>
    </main>
  );
}
