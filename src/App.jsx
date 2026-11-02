import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  ArrowUpRight,
  BarChart3,
  Braces,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Wrench,
  Mail,
  Menu,
  Moon,
  Send,
  Server,
  Sun,
  X,
} from 'lucide-react'

const projects = [
  {
    title: 'Tasty Recipe',
    category: 'Development',
    type: 'Recipe sharing platform',
    description:
      'A responsive recipe-sharing application with authentication, profiles, protected routes, CRUD operations, search, and favorites.',
    stack: ['Vue.js', 'Firebase', 'Bootstrap'],
    image: '/assets/project-thumbnails/tasty-recipe.png',
    link: 'https://tasty-recipe-silverius.vercel.app/',
  },
  {
    title: 'CalVein Cafe',
    category: 'Development',
    type: 'Landing page',
    description:
      'A responsive cafe landing page with interactive navigation, dynamic content sections, and accessible semantic markup.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: '/assets/project-thumbnails/calvein-hero.jpg',
    link: 'https://calvein-cafe.netlify.app/',
  },
  {
    title: 'MathOLearn',
    category: 'Development',
    type: 'Learning application',
    description:
      'An interactive learning application with practice exercises, discussion forums, notifications, and gamification features.',
    stack: ['React.js', 'CSS', 'Figma'],
    image: '/assets/portfolio/MathOLearn-Website.png',
    link: 'https://math-o-learn.vercel.app/',
  },
  {
    title: 'Asphalt 9: ReJends',
    category: 'Development',
    type: 'Website redesign',
    description:
      'A responsive, original redesign inspired by Asphalt 9: Legends, with game information, event updates, and media sections.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: '/assets/portfolio/Asphatl9-Rejends-Thumbnail.png',
    link: 'https://asphatl9-rejends.vercel.app/',
  },
  {
    title: 'Asphalt 9: ReJends — Figma',
    category: 'Design',
    type: 'Visual redesign',
    description:
      'A visual redesign concept for Asphalt 9: ReJends, exploring interface layouts, visual direction, and user flows in Figma.',
    stack: ['Figma', 'UI/UX', 'Prototyping'],
    image: '/assets/portfolio/Asphatl9-Figma.png',
    link: 'https://www.figma.com/design/icgpT3442JUy57BrpCWrlw/Asphatl9?node-id=0-1&t=6dwxZmKPB8YFrV4C-1',
  },
  {
    title: 'BSLC Main Website',
    category: 'Design',
    type: 'UI/UX redesign',
    description:
      'A collaborative redesign for the Binus Student Learning Community website focused on usability, clarity, and visual consistency.',
    stack: ['Figma', 'UI/UX', 'Teamwork'],
    image: '/assets/portfolio/BSLC-MainWeb-Figma.png',
    link: 'https://www.figma.com/design/cZDAYcvwFVCtWgfK1DmDvw/Web-Main-BSLC-2025--Copy-?m=auto&t=Rh7uHaCTPUhJes49-1',
  },
  {
    title: 'MathOLearn — Figma',
    category: 'Design',
    type: 'Product design',
    description:
      'The product design system and user flows for MathOLearn, developed alongside the team using a Scrum framework.',
    stack: ['Figma', 'UI/UX', 'Scrum'],
    image: '/assets/portfolio/MathOLearn-Figma.png',
    link: 'https://www.figma.com/design/uYTsrshxThk8Q2iQw6o5zU/MathOLearn',
  },
]

const skills = [
  {
    name: 'Programming Languages',
    technologies: [['Python', 'python'], ['Java', 'openjdk', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'], ['C', 'c'], ['Go', 'go'], ['JavaScript', 'javascript', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'], ['HTML', 'html5', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'], ['CSS', 'css3', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg']],
    icon: Braces,
  },
  {
    name: 'Frameworks & Libraries',
    technologies: [['Vue.js', 'vuedotjs'], ['React.js', 'react'], ['Bootstrap', 'bootstrap'], ['Tailwind CSS', 'tailwindcss']],
    icon: Code2,
  },
  {
    name: 'DevOps & Infrastructure',
    technologies: [['Git', 'git'], ['GitLab CI/CD', 'gitlab'], ['Jenkins', 'jenkins'], ['Docker', 'docker'], ['Red Hat OpenShift', 'redhatopenshift'], ['VMware Workstation', 'vmware'], ['Linux', 'linux']],
    icon: Server,
  },
  {
    name: 'Monitoring & Observability',
    technologies: [['Grafana', 'grafana'], ['Splunk', 'splunk']],
    icon: BarChart3,
  },
  {
    name: 'Databases',
    technologies: [['MySQL', 'mysql'], ['Microsoft SQL Server', 'microsoftsqlserver', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'], ['Firebase Realtime Database', 'firebase']],
    icon: Database,
  },
  {
    name: 'Developer Tools',
    technologies: [['Visual Studio Code', 'visualstudiocode', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg'], ['Eclipse', 'eclipseide'], ['Postman', 'postman'], ['Figma', 'figma']],
    icon: Wrench,
  },
]

const experiences = [
  {
    date: 'Feb 2026 — Present',
    role: 'DevOps Engineer Intern',
    company: 'Phintraco Consultant',
    description:
      'Supporting CI/CD with GitLab and Jenkins, monitoring services with Grafana and Splunk, and troubleshooting containerized workloads in Red Hat OpenShift.',
    icon: Server,
  },
  {
    date: 'Jul 2026 — Present',
    role: 'Part-Time Programming Teacher',
    company: 'Timedoor Academy',
    description:
      'Teaching 40+ students across age groups, adapting lessons to different learning needs, and communicating progress with parents.',
    icon: Code2,
  },
]

const navItems = ['About', 'Experience', 'Projects', 'Contact']

function SocialLogo({ name }) {
  if (name === 'GitHub') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.4.7-4.1-1.6-4.1-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z" /></svg>
  }
  if (name === 'LinkedIn') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.2 3.5A2.2 2.2 0 1 1 .8 3.5a2.2 2.2 0 0 1 4.4 0ZM1.1 8h4.2v13H1.1V8Zm6.8 0h4v1.8h.1c.6-1.1 2-2.2 4.1-2.2 4.3 0 5.1 2.8 5.1 6.4V21H17v-6.2c0-1.5 0-3.5-2.2-3.5s-2.5 1.7-2.5 3.4V21H7.9V8Z" /></svg>
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.4" cy="6.7" r="1.1" fill="currentColor" /></svg>
}

function TechLogo({ name, slug, iconUrl }) {
  return (
    <span className="tech-chip">
      <img src={iconUrl || `https://cdn.simpleicons.org/${slug}`} alt="" aria-hidden="true" loading="lazy" />
      <span>{name}</span>
    </span>
  )
}

function BrandMark() {
  return (
    <svg className="brand-logo" viewBox="18 18 144 144" fill="none" role="img" aria-label="Silverius Calvin logo">
      <defs>
        <linearGradient id="brand-aurora" x1="24" y1="18" x2="150" y2="158" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7CF7D4" />
          <stop offset="0.52" stopColor="#47D9F4" />
          <stop offset="1" stopColor="#7C8CFF" />
        </linearGradient>
        <linearGradient id="brand-glass" x1="20" y1="18" x2="130" y2="145" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity="0.2" />
          <stop offset="0.45" stopColor="#7CF7D4" stopOpacity="0.08" />
          <stop offset="1" stopColor="#7C8CFF" stopOpacity="0.18" />
        </linearGradient>
      </defs>
      <g transform="translate(18 18)">
        <rect x="0" y="0" width="144" height="144" rx="34" fill="var(--logo-surface)" fillOpacity="0.72" stroke="var(--logo-border)" strokeOpacity="0.62" strokeWidth="2" />
        <rect x="2" y="2" width="140" height="140" rx="32" fill="url(#brand-glass)" />
        <path d="M25 25C50 8 94 9 119 27" stroke="#FFFFFF" strokeOpacity="0.18" strokeWidth="3" strokeLinecap="round" />
        <path d="M93 35H57C42 35 34 44 34 57C34 69 42 77 57 77H87C101 77 110 85 110 98C110 111 101 120 87 120H48" stroke="url(#brand-aurora)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M49 57H83M61 98H96" stroke="var(--logo-cutout)" strokeWidth="5" strokeLinecap="round" />
        <path d="M49 57H78M66 98H96" stroke="url(#brand-aurora)" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="110" cy="35" r="5" fill="#7CF7D4" />
        <circle cx="34" cy="120" r="5" fill="#7C8CFF" />
      </g>
    </svg>
  )
}

function AmbientEffects() {
  const pointerRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return undefined

    let frameId
    let targetX = -100
    let targetY = -100
    let currentX = targetX
    let currentY = targetY
    const handlePointerMove = (event) => {
      targetX = event.clientX
      targetY = event.clientY
    }

    const animatePointer = () => {
      currentX += (targetX - currentX) * 0.16
      currentY += (targetY - currentY) * 0.16
      if (pointerRef.current) {
        pointerRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      }
      frameId = requestAnimationFrame(animatePointer)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    frameId = requestAnimationFrame(animatePointer)
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <div className="ambient-effects" aria-hidden="true">
      <div className="ambient-orb ambient-orb-one" />
      <div className="ambient-orb ambient-orb-two" />
      <div className="ambient-particles">
        {Array.from({ length: 12 }, (_, index) => <span className={`ambient-particle particle-${index + 1}`} key={index} />)}
      </div>
      <div className="pointer-trail"><span className="pointer-particle" ref={pointerRef} /></div>
    </div>
  )
}

function handleMessageInput(event) {
  const textarea = event.currentTarget
  textarea.style.height = 'auto'
  textarea.style.height = `${Math.min(textarea.scrollHeight, 240)}px`
}

function getFieldError(name, value) {
  const trimmedValue = value.trim()
  if (name === 'email') {
    if (!trimmedValue) return 'Please enter your email address.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) return 'Please enter a valid email address.'
  } else if (!trimmedValue) {
    return `Please enter your ${name}.`
  }
  return ''
}

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const [sendState, setSendState] = useState('idle')
  const [validationErrors, setValidationErrors] = useState({})
  const [activeSection, setActiveSection] = useState(null)
  const progressRef = useRef(null)
  const scrollDirectionRef = useRef('down')

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.toLowerCase())).filter(Boolean)
    const revealElements = document.querySelectorAll('.reveal-on-scroll')
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target
        if (entry.isIntersecting) {
          element.classList.remove('reveal-from-top', 'reveal-from-bottom')
          element.classList.add(
            scrollDirectionRef.current === 'up' ? 'reveal-from-top' : 'reveal-from-bottom',
            'is-visible',
          )
        } else {
          element.classList.remove('is-visible')
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
    revealElements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add('is-visible')
      }
      revealObserver.observe(element)
    })
    let progressFrameId = null
    const updateScrollProgress = () => {
      if (progressFrameId !== null) return
      progressFrameId = requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`
        }
        progressFrameId = null
      })
    }
    const updateActiveSection = () => {
      const headerOffset = 105
      const currentPosition = window.scrollY + Math.max(headerOffset, window.innerHeight * 0.25)
      updateScrollProgress()
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const isAtPageBottom = window.scrollY >= scrollableHeight - 2
      if (isAtPageBottom) {
        setActiveSection(sections.at(-1)?.id ?? null)
        return
      }
      const currentSection = sections.reduce((active, section) => {
        return section.offsetTop <= currentPosition ? section : active
      }, null)
      setActiveSection(currentSection?.id ?? null)
    }

    let lastScrollY = window.scrollY
    const handleScroll = () => {
      scrollDirectionRef.current = window.scrollY >= lastScrollY ? 'down' : 'up'
      lastScrollY = window.scrollY
      updateActiveSection()
    }

    updateActiveSection()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateActiveSection)
      if (progressFrameId !== null) cancelAnimationFrame(progressFrameId)
      revealObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    if (sendState !== 'sent') return undefined

    const fadeTimeoutId = window.setTimeout(() => setSendState('fading'), 4000)
    const removeTimeoutId = window.setTimeout(() => setSendState('idle'), 4500)
    return () => {
      window.clearTimeout(fadeTimeoutId)
      window.clearTimeout(removeTimeoutId)
    }
  }, [sendState])

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((project) => project.category === filter)

  const handleFieldInput = (event) => {
    const { name, value } = event.currentTarget
    const error = getFieldError(name, value)
    setValidationErrors((currentErrors) => {
      if (!error && !currentErrors[name]) return currentErrors
      return { ...currentErrors, [name]: error }
    })
  }

  const handleMessageFieldInput = (event) => {
    handleMessageInput(event)
    handleFieldInput(event)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const messageField = form.querySelector('textarea[name="message"]')

    const name = form.elements.namedItem('name').value.trim()
    const email = form.elements.namedItem('email').value.trim()
    const subject = form.elements.namedItem('subject').value.trim()
    const message = messageField.value.trim()

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const errors = {}

    if (!name) errors.name = 'Please enter your name.'

    if (!email) {
      errors.email = 'Please enter your email address.'
    } else if (!emailPattern.test(email)) {
      errors.email = 'Please enter a valid email address.'
    }

    if (!subject) errors.subject = 'Please enter a subject.'
    if (!message) errors.message = 'Please enter a message.'

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors)
      setSendState('validation-error')
      return
    }

    setValidationErrors({})
    setSendState('sending')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setSendState('configuration-error')
      return
    }

    // Escape HTML to prevent unwanted HTML injection
    const escapeHtml = (text) =>
      text.replace(/[&<>"']/g, (char) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      }[char]))

    // Convert message into HTML with controlled paragraph spacing
    const messageHtml = message
      .replace(/\r\n/g, '\n')
      .split(/\n\s*\n/)
      .map((paragraph) => {
        const lines = paragraph
          .split('\n')
          .map((line) => escapeHtml(line.trim()))
          .filter(Boolean)
          .join('<br>')

        return `<p style="margin:0 0 18px 0;padding:0;line-height:26px;">${lines}</p>`
      })
      .join('')

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          email,
          subject,
          message,
          message_html: messageHtml,
        },
        { publicKey }
      )

      form.reset()

      if (messageField) {
        messageField.style.height = ''
      }

      setSendState('sent')
    } catch (error) {
      console.error('EmailJS contact form failed:', error)
      setSendState('error')
    }
  }

  return (
    <div className={darkMode ? 'app dark motion-ready' : 'app motion-ready'}>
      <AmbientEffects />
      <header className="nav-wrap">
        <div className="scroll-progress" aria-hidden="true">
          <span ref={progressRef} />
        </div>
        <nav className="nav container">
          <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark"><BrandMark /></span>
            <span>Silverius Calvin</span>
          </a>
          <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
            {navItems.map((item) => (
              <a className={activeSection === item.toLowerCase() ? 'active' : ''} key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
              Let&apos;s talk <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="nav-actions">
            <button
              className="icon-button"
              onClick={() => setDarkMode((value) => !value)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="menu-button icon-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container reveal-on-scroll">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Available for opportunities</p>
            <h1>Turning technical challenges into reliable solutions.</h1>
            <p className="hero-text">
              I&apos;m Silverius Calvin, a Computer Science undergraduate exploring DevOps, infrastructure, and web development.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="/assets/Silverius-Calvin-CV.pdf" download>
                <Download size={16} /> Download CV
              </a>
            </div>
            <div className="socials">
              <a href="https://github.com/Slaxius" target="_blank" rel="noreferrer" aria-label="GitHub"><SocialLogo name="GitHub" /></a>
              <a href="https://www.linkedin.com/in/silverius-calvin-1a56b8294/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialLogo name="LinkedIn" /></a>
              <a href="https://www.instagram.com/silveriuscalvin" target="_blank" rel="noreferrer" aria-label="Instagram"><SocialLogo name="Instagram" /></a>
              <span className="social-line" />
              <span className="social-caption">Jakarta, Indonesia</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-grid" />
            <div className="hero-orbit orbit-one"><span className="orbit-dot" /></div>
            <div className="hero-orbit orbit-two"><span className="orbit-dot" /></div>
            <div className="hero-card card-top"><Server size={17} /><span>DevOps<br /><b>in progress</b></span></div>
            <div className="hero-card card-bottom"><Code2 size={17} /><span>Always<br /><b>learning</b></span></div>
            <div className="portrait-frame"><img src="/assets/myself-rmvbg.png" alt="Silverius Calvin" /></div>
          </div>
        </section>

        <section className="section container reveal-on-scroll" id="oabout">
          <div className="section-heading"><p className="eyebrow">01 / About me</p><h2>Curious by nature,<br /><em>intentional</em> by design.</h2></div>
          <div className="about-grid">
            <div className="about-copy">
              <p>Hi, I&apos;m a tech enthusiast who enjoys understanding how systems work and turning complex ideas into clear, useful experiences.</p>
              <p>My current focus is on Cloud Infrastructure, Virtualization, popular network technologies, and DevOps practices. I also love working on frontend products where design and engineering meet.</p>
              <a className="text-link" href="#contact">Let&apos;s connect <ArrowUpRight size={15} /></a>
            </div>
            <div className="education-card">
              <GraduationCap size={22} />
              <div><p className="card-label">Education</p><h3>Bina Nusantara University</h3><p>Undergraduate in Computer Science · Sep 2023 — Present</p></div>
            </div>
          </div>
          <div className="skill-grid">
            {skills.map(({ name, technologies, icon: Icon }) => (
              <div className="skill-row" key={name}>
                <span className="skill-label"><Icon size={15} />{name}</span>
                <div className="skill-technologies">{technologies.map(([technology, slug, iconUrl]) => <TechLogo key={technology} name={technology} slug={slug} iconUrl={iconUrl} />)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-muted reveal-on-scroll" id="experience">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">02 / Experience</p><h2>Where I&apos;ve been<br /><em>putting it to work.</em></h2>
            </div>
            <div className="timeline">{experiences.map(({ date, role, company, description, icon: Icon }) => <article className="timeline-item" key={role}><div className="timeline-date">{date}</div><div className="timeline-dot"><Icon size={16} /></div><div className="timeline-content"><h3>{role}</h3><p className="company">{company}</p><p>{description}</p></div></article>)}</div>
          </div>
        </section>

        <section className="section container reveal-on-scroll" id="projects">
          <div className="section-heading split-heading"><div><p className="eyebrow">03 / Selected work</p><h2>Things I&apos;ve <em>made.</em></h2></div><div className="filter-tabs">{['All', 'Development', 'Design'].map((tab) => <button className={filter === tab ? 'active' : ''} onClick={() => setFilter(tab)} key={tab}>{tab}</button>)}</div></div>
          <div className="project-grid">{filteredProjects.map((project) => <article className="project-card" key={project.title}><a className="project-image" href={project.link} target="_blank" rel="noreferrer"><img src={project.image} alt="" /><span><ExternalLink size={17} /></span></a><div className="project-meta"><span>{project.type}</span><span>{project.category}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
        </section>

        <section className="contact-section reveal-on-scroll" id="contact">
          <div className="container contact-grid">
            <div><p className="eyebrow">04 / Contact</p><h2>Have an idea?<br /><em>Let&apos;s make it real.</em></h2><p className="contact-copy">I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of something meaningful.</p><a className="email-link" href="mailto:silveriuscalvin35@gmail.com"><Mail size={18} /> silveriuscalvin35@gmail.com</a></div>
            <form className="contact-form" noValidate onSubmit={handleSubmit}>
              <div className="form-row">
                <label>Name<input name="name" autoComplete="name" spellCheck={false} placeholder="Your name" onInput={handleFieldInput} />{validationErrors.name && <span className="field-error">{validationErrors.name}</span>}</label>
                <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" onInput={handleFieldInput} />{validationErrors.email && <span className="field-error">{validationErrors.email}</span>}</label>
              </div>
              <label>Subject<input name="subject" autoComplete="off" placeholder="What can I help with?" onInput={handleFieldInput} />{validationErrors.subject && <span className="field-error">{validationErrors.subject}</span>}</label>
              <label>Message<textarea name="message" autoComplete="off" rows="4" placeholder="Tell me a little about your project..." onInput={handleMessageFieldInput} />{validationErrors.message && <span className="field-error">{validationErrors.message}</span>}</label>
              <button className="button button-primary" type="submit" disabled={sendState === 'sending'}>
                {sendState === 'sending' ? 'Sending...' : <><Send size={16} /> Send message</>}
              </button>
              {(sendState === 'sent' || sendState === 'fading') && <p className={`form-status success${sendState === 'fading' ? ' fading' : ''}`}><CheckCircle2 size={15} /> Message sent successfully.</p>}
              {sendState === 'configuration-error' && <p className="form-status error">Email service is not configured yet. Please add the EmailJS environment variables.</p>}
              {sendState === 'error' && <p className="form-status error">Message could not be sent. Please try again later.</p>}
            </form>
          </div>
        </section>
      </main>
      <footer className="footer container">
        <span>© 2026 Silverius Calvin</span>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <div className="footer-socials">
          <a href="https://github.com/Slaxius" target="_blank" rel="noreferrer" aria-label="GitHub"><SocialLogo name="GitHub" /></a>
          <a href="https://www.linkedin.com/in/silverius-calvin-1a56b8294/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialLogo name="LinkedIn" /></a>
          <a href="mailto:silveriuscalvin35@gmail.com" aria-label="Email"><Mail size={15} /></a>
        </div>
      </footer>
    </div>
  )
}

export default App
