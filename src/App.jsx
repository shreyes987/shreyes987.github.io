import { useEffect, useState } from 'react'

const profile = {
  name: 'Shreyas Basutkar',
  role: 'Senior .NET Developer',
  location: 'Mumbai, India',
  email: 'shreyes987@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shreyas-basutkar-a06a27124/',
}

const portraitUrl = `${import.meta.env.BASE_URL}shreyas-basutkar.jpg`

const projects = [
  {
    number: '01',
    title: 'MP2S ATM Software',
    type: 'Banking · Transaction platform',
    description:
      'Enterprise ATM software supporting customer-facing banking and bill-payment journeys, dynamic provider-driven screens, secure host communication, transaction validation, and production-critical workflows.',
    stack: ['WPF', 'MVVM', 'C#', '.NET', 'REST APIs'],
    accent: 'azure',
  },
  {
    number: '02',
    title: 'Poly ERP',
    type: 'Chemical industry · ERP',
    description:
      'ERP software for chemical-industry operations, covering business modules, database workflows, reports, application support, production defect analysis, and maintainable delivery across technical and business requirements.',
    stack: ['C#', '.NET', 'SQL Server', 'ERP', 'Reporting'],
    accent: 'mint',
  },
  {
    number: '03',
    title: 'Azure Application Delivery',
    type: 'Cloud · DevOps',
    description:
      'Cloud delivery patterns for .NET applications with managed identity, secure secret access, asynchronous messaging, production telemetry, automated tests, and deployment gates.',
    stack: ['Azure', 'App Service', 'Functions', 'Key Vault', 'Service Bus'],
    accent: 'violet',
  },
]

const experience = [
  {
    years: 'Jul 2023 — Present',
    role: 'Senior Software Engineer / Acting Team Lead',
    company: 'Inssemble Technologies',
    location: 'Mumbai, India',
    details: [
      'Develop and maintain WPF-based ATM applications supporting customer-facing transaction screens and production banking workflows.',
      'Integrate external banking, bill-payment, and payment-processing APIs with validation, transaction execution, error handling, and response mapping.',
      'Lead development activities, code reviews, technical documentation, team support, and delivery coordination for high-priority changes.',
    ],
  },
  {
    years: 'Jul 2021 — Jul 2023',
    role: '.NET Developer',
    company: 'Tecsoim',
    location: 'Bangalore, India',
    details: [
      'Developed ERP modules using C#, .NET, SQL, and object-oriented design principles.',
      'Delivered business logic, database operations, reports, application fixes, and root-cause analysis with technical and business stakeholders.',
    ],
  },
  {
    years: 'Jan 2020 — Mar 2020',
    role: 'Software Developer — API Integration',
    company: 'Fresh VNF',
    location: 'India',
    details: [
      'Built API-driven application features with C#, .NET, and SQL, including REST endpoints, service-layer logic, validation, and exception handling.',
    ],
  },
]

const skillGroups = [
  {
    number: '01',
    title: 'Core engineering',
    summary: 'The tools I use to turn business workflows into maintainable application systems.',
    items: ['C#', '.NET 8 / 10', 'ASP.NET Core', 'Web API', 'WPF', 'MVVM', 'LINQ', 'async / await'],
  },
  {
    number: '02',
    title: 'Data & architecture',
    summary: 'Reliable data access, explicit boundaries, and secure application structure.',
    items: ['Entity Framework Core', 'SQL Server', 'PostgreSQL', 'REST APIs', 'SOLID', 'JWT', 'Layered architecture'],
  },
  {
    number: '03',
    title: 'Cloud delivery',
    summary: 'Production-aware deployment, observability, messaging, and secret management.',
    items: ['Microsoft Azure', 'App Service', 'Azure Functions', 'Key Vault', 'Service Bus', 'Application Insights', 'CI/CD', 'Docker'],
  },
  {
    number: '04',
    title: 'Interface layer',
    summary: 'Clear, responsive interfaces that stay connected to robust backend services.',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Material UI', 'DataTables'],
  },
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      {diagonal ? <path d="M7 17 17 7M8 7h9v9" /> : <path d="M5 12h14m-5-5 5 5-5 5" />}
    </svg>
  )
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M3 6.5h18v11H3z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.24 7.64H1.66V22h3.58V7.64ZM3.45 2A2.07 2.07 0 1 0 3.45 6.14 2.07 2.07 0 0 0 3.45 2ZM22 13.76c0-4.33-2.31-6.34-5.39-6.34-2.48 0-3.59 1.37-4.21 2.33V7.64H8.82V22h3.58v-7.11c0-1.88.36-3.71 2.7-3.71 2.31 0 2.34 2.16 2.34 3.83V22H22v-8.24Z" />
    </svg>
  )
}

function MenuIcon({ open }) {
  return (
    <span className={`menu-icon ${open ? 'is-open' : ''}`} aria-hidden="true">
      <span />
      <span />
    </span>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Shreyas Basutkar, home">
        <span className="brand-monogram">SB</span><i />
        <span className="brand-copy"><b>Shreyas Basutkar</b><small>Senior .NET Developer</small></span>
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        aria-controls="site-nav"
        onClick={() => setMenuOpen((value) => !value)}
      >
        <MenuIcon open={menuOpen} />
      </button>
      <nav id="site-nav" className={menuOpen ? 'is-open' : ''} aria-label="Main navigation">
        <a href="#work" onClick={close}>Work</a>
        <a href="#experience" onClick={close}>Experience</a>
        <a href="#expertise" onClick={close}>Capabilities</a>
        <a className="nav-cta" href={`mailto:${profile.email}`}>
          Contact <ArrowIcon diagonal />
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy reveal">
        <p className="kicker"><span /> Senior Software Engineer / Acting Team Lead · {profile.location}</p>
        <h1>
          Senior .NET engineering for<br />
          <span>business-critical systems.</span>
        </h1>
        <p className="hero-intro">
          I design, deliver, and support secure enterprise applications across banking,
          ATM, ERP, and Microsoft Azure. My work combines hands-on C# and .NET engineering
          with API integration, production troubleshooting, and technical leadership.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            Review professional work <ArrowIcon />
          </a>
          <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedinIcon /> LinkedIn profile
          </a>
        </div>
      </div>

      <div className="hero-portrait reveal reveal-delay">
        <div className="portrait-frame">
          <span className="portrait-code">SENIOR ENGINEER</span>
          <img src={portraitUrl} alt="Shreyas Basutkar in professional attire" />
          <div className="portrait-caption">
            <span>Senior Software Engineer</span>
            <strong>Shreyas Basutkar</strong>
          </div>
        </div>
        <div className="portrait-orbit orbit-a" />
        <div className="portrait-orbit orbit-b" />
      </div>

      <div className="hero-metrics reveal reveal-delay-2" aria-label="Career highlights">
        <div><strong>5+</strong><span>Years of enterprise .NET delivery</span></div>
        <div><strong>.NET</strong><span>C#, WPF, APIs, data, and Azure</span></div>
        <div><strong>Lead</strong><span>Hands-on engineering and team support</span></div>
      </div>
    </section>
  )
}

function SignalBand() {
  const items = ['C# / .NET', 'Enterprise APIs', 'WPF & MVVM', 'Microsoft Azure']
  return (
    <div className="signal-band" aria-hidden="true">
      <div className="signal-track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}><i /> {item}</span>
        ))}
      </div>
    </div>
  )
}

function SpiceProject() {
  return (
    <article className="spice-project reveal">
      <div className="spice-copy">
        <div className="project-meta">
          <span>Independent product — Current build</span>
          <span className="status"><i /> In active development</span>
        </div>
        <p className="spice-label">SPICE ERP</p>
        <h3>One connected workspace for inventory, vendors, orders, and revenue.</h3>
        <p className="spice-summary">
          A full-stack B2B inventory and revenue platform for spice and pickle businesses.
          It connects warehouse stock, vendor-held inventory, purchasing, sales, approval
          workflows, billing, payment status, and reporting in one operational system.
        </p>
        <div className="spice-stack" aria-label="Spice ERP technology stack">
          {['ASP.NET Core 10', 'React 19', 'TypeScript', 'SQL Server', 'Azure'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>

      <div className="spice-system" aria-label="Spice ERP system overview">
        <div className="system-topbar">
          <span><i /> SPICE ERP</span>
          <small>Operations overview</small>
        </div>
        <div className="system-grid">
          <div className="system-sidebar" aria-hidden="true">
            <b>Overview</b><span>Products</span><span>Vendors</span><span>Orders</span><span>Reports</span>
          </div>
          <div className="system-main">
            <div className="system-cards">
              <div><span>Warehouse stock</span><strong>Live</strong><i className="up" /></div>
              <div><span>Vendor orders</span><strong>Tracked</strong><i /></div>
              <div><span>Revenue reports</span><strong>PDF</strong><i className="wide" /></div>
            </div>
            <div className="system-chart">
              <span>Weekly operations</span>
              <div className="bars" aria-hidden="true">
                {[40, 68, 52, 82, 64, 92, 76].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
              </div>
            </div>
            <div className="system-feed">
              <span><i className="dot green" /> Stock and low-stock alerts</span>
              <span><i className="dot orange" /> Manager-reviewed order tickets</span>
              <span><i className="dot blue" /> GST invoices and payment status</span>
            </div>
          </div>
        </div>
      </div>

      <div className="spice-capabilities">
        <div><span>01</span><strong>Secure access</strong><p>Mobile OTP, hashed verification codes, JWT authorization, and role-aware manager and vendor views.</p></div>
        <div><span>02</span><strong>Operational workflows</strong><p>Products, stock, suppliers, order approvals, invoices, and payments share one consistent data model.</p></div>
        <div><span>03</span><strong>Business visibility</strong><p>Weekly and monthly PDF reporting covers revenue, purchases, gross margin, orders, and current stock.</p></div>
        <div><span>04</span><strong>Production thinking</strong><p>Request audit logs, protected secrets, deployment infrastructure, telemetry, and secure integration boundaries.</p></div>
      </div>
    </article>
  )
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card accent-${project.accent} reveal`}>
      <div className="project-card-top">
        <span>{project.number}</span>
        <span>{project.type}</span>
      </div>
      <div className="project-visual" aria-hidden="true">
        <span className="visual-grid" />
        <strong>{project.number}</strong>
        <i />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-stack">
        {project.stack.map((item) => <span key={item}>{item}</span>)}
      </div>
    </article>
  )
}

function Work() {
  return (
    <section className="section work-section" id="work">
      <div className="section-heading reveal">
        <p className="section-index">01 — Professional work</p>
        <h2>Selected engineering work.<br /><span>Delivered with ownership.</span></h2>
        <p>
          Business-critical systems across banking, industrial ERP, and cloud delivery,
          supported from implementation and integration through production operation.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
      <SpiceProject />
    </section>
  )
}

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-intro reveal">
        <p className="section-index light">02 — Experience</p>
        <h2>Engineering ownership<br /><span>across delivery.</span></h2>
        <p>
          I work across implementation, production troubleshooting, technical design,
          code review, and delivery coordination—staying close to both the system and
          the people who depend on it.
        </p>
      </div>
      <div className="timeline">
        {experience.map((item, index) => (
          <article className="timeline-item reveal" key={`${item.company}-${item.years}`}>
            <div className="timeline-marker"><span>0{index + 1}</span><i /></div>
            <div className="timeline-content">
              <p className="timeline-years">{item.years}</p>
              <h3>{item.role}</h3>
              <p className="timeline-company">{item.company} <span>·</span> {item.location}</p>
              <ul>
                {item.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Expertise() {
  return (
    <section className="section expertise-section" id="expertise">
      <div className="expertise-heading reveal">
        <p className="section-index">03 — Capabilities</p>
        <h2>Enterprise .NET capability,<br /><span>end to end.</span></h2>
        <p>
          A toolkit shaped by enterprise delivery: secure services, data-heavy workflows,
          operational interfaces, and production cloud environments.
        </p>
      </div>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <article className="skill-group reveal" key={group.title}>
            <div className="skill-title"><span>{group.number}</span><h3>{group.title}</h3></div>
            <p>{group.summary}</p>
            <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Leadership() {
  return (
    <section className="leadership-section">
      <div className="leadership-quote reveal">
        <p className="section-index light">04 — How I work</p>
        <blockquote>
          Reliable software comes from clear decisions, disciplined engineering, and <span>ownership in production.</span>
        </blockquote>
      </div>
      <div className="leadership-detail reveal">
        <div className="leadership-list">
          <span>Technical design</span>
          <span>Code review</span>
          <span>Root-cause analysis</span>
          <span>Secure delivery</span>
          <span>Team enablement</span>
        </div>
        <div className="education-card">
          <span>Education</span>
          <strong>Master of Science</strong>
          <p>Software Product Engineering</p>
          <small>Jönköping University, Sweden · 2017—2019</small>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <footer id="contact">
      <div className="footer-main reveal">
        <p className="section-index light">05 — Contact</p>
        <h2>Discuss your next<br />engineering challenge.</h2>
        <p className="footer-intro">
          Available for conversations about senior .NET engineering, enterprise application
          delivery, secure API integration, Microsoft Azure, and technical leadership.
        </p>
        <div className="footer-actions">
          <a className="button button-light" href={`mailto:${profile.email}`}>
            <MailIcon /> Email me <ArrowIcon diagonal />
          </a>
          <a className="footer-link" href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedinIcon /> Connect on LinkedIn
          </a>
          <button className="copy-button" type="button" onClick={copyEmail}>
            {copied ? 'Email copied' : 'Copy email address'}
          </button>
        </div>
      </div>
      <div className="footer-bottom">
        <a className="brand footer-brand" href="#top" aria-label="Back to top"><span className="brand-monogram">SB</span><i /></a>
        <p>{profile.role} · {profile.location}</p>
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  )
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <SignalBand />
        <Work />
        <Experience />
        <Expertise />
        <Leadership />
      </main>
      <Footer />
    </>
  )
}

export default App
