import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import konzulternaLogo from '../assets/konzulterna-logo.png'
import './HomePage.css'

interface ContactForm {
  organizationName: string
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

const HomePage = () => {
  const [formData, setFormData] = useState<ContactForm>({
    organizationName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '+46',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    // Scroll to top when component mounts (only when navigating to homepage from another page)
    if (window.location.hash === '') {
      window.scrollTo(0, 0)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Tack för ditt meddelande! Vi återkommer till dig inom kort.')
      setIsSubmitting(false)
      setFormData({
        organizationName: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '+46',
        message: '',
      })
    }, 1000)
  }

  const services = [
    {
      title: 'Bokföring',
      description: 'Löpande bokföring och ekonomisk administration för ditt företag',
    },
    {
      title: 'Redovisning',
      description: 'Bokslut, deklaration och årsredovisning med hög kvalitet',
    },
    {
      title: 'Administration',
      description:
        'Rådgivning i flera områden kring skatt, ekonomi, administration och företagsutveckling',
    },
    {
      title: 'Företagsrådgivning',
      description:
        'Företagsrådgivning med fokus på både enskild firma, handelsbolag, kommanditbolag, ekonomisk förening eller aktiebolag',
    },
    {
      title: 'Skatteadministration',
      description: 'Vi hjälper dig att välja den bästa företagsformen för din verksamhet',
    },
    {
      title: 'Personaluthyrning',
      description:
        'Uthyrning av personal inom bokföring och administration för dina tillfälliga behov',
    },
    {
      title: 'Webbutveckling',
      description: 'Utveckling av enkla och professionella statiska webbplatser för ditt företag',
    },
  ]

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="nav-links">
              <a href="#services">Bokföring</a>
              <a href="#services">Redovisning</a>
              <a href="#services">Administration</a>
              <a href="#services">Företagsrådgivning</a>
              <a href="#services">Skatteadministration</a>
              <a href="#services">Personaluthyrning</a>
              <a href="#services">Webbutveckling</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="company-logo">
              <h1 className="company-name">
                FÖRETAG
                <br />
                <span className="highlight">KONZULTERNA</span>
              </h1>
              <div className="company-symbol">
                <img src={konzulternaLogo} alt="Konzulterna Logo" className="logo-image" />
              </div>
              <p className="company-subtitle">iGrit AB</p>
            </div>

            <div className="hero-text">
              <p className="hero-description">
                Våra tjänster är skräddarsydda för små företag med 1 – 20 anställda.
              </p>
              <p className="hero-details">
                De flesta av våra kunder är <strong>enmansföretag</strong> eller{' '}
                <strong>familjeföretag</strong>. Enskild firma, Handelsbolag eller privat
                aktiebolag.
              </p>
              <p className="availability">
                Våra konsulter är tillgängliga 24 - 7. Och du får snabbt svar på dina frågor.
              </p>
              <p className="quality-promise">
                Vi har en trimmad organisation vilket gör att vi kan erbjuda prisvärda tjänster med
                hög kvalitet för ditt företag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section section">
        <div className="container">
          <h2 className="section-title text-center">Våra tjänster</h2>
          <div className="services-grid grid grid-3">
            {services.map((service, index) => (
              <div key={index} className="service-card card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.title === 'Företagsrådgivning' && (
                  <div className="service-details">
                    <p>
                      <strong>
                        Enskild firma, Handelsbolag, Kommanditbolag, Ekonomisk förening eller
                        Aktiebolag.
                      </strong>
                    </p>
                    <p>
                      Vi hjälper dig att välja den bästa företagsformen för din verksamhet. 1 timma
                      gratis rådgivning.
                    </p>
                  </div>
                )}
                {service.title === 'Webbutveckling' && (
                  <div className="service-details">
                    <p>
                      <strong>
                        Vi skapar enkla, professionella webbplatser anpassade för mindre företag.
                      </strong>
                    </p>
                    <p>
                      <strong>Exempel på webbplatser vi utvecklar:</strong>
                    </p>
                    <ul>
                      <li>Företagspresentationer och portfolios</li>
                      <li>Kontaktsidor med formulär</li>
                      <li>Produktkataloger och prisinformation</li>
                      <li>Enklare landningssidor för marknadsföring</li>
                      <li>Informationssidor för tjänster</li>
                    </ul>
                    <p>
                      Alla webbplatser är responsiva, SEO-optimerade och enkla att uppdatera.
                      Perfekt för företag som behöver en professionell närvaro online utan
                      komplicerade funktioner.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section">
        <div className="container">
          <h2 className="section-title text-center">
            Kontakta oss för kostnadsfri konsultation och offert
          </h2>

          <div className="contact-content">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="organizationName" className="form-label">
                    Organisationsnummer / Personnummer*
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    Förnamn och efternamn
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Förnamn"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label" style={{ opacity: 0 }}>
                    Efternamn
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Efternamn"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    E-post*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Telefonnummer*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Beskriv vad du behöver hjälp med
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows={6}
                ></textarea>
              </div>

              <p className="required-note">* Obligatoriskt fält</p>

              <button type="submit" className="btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
              </button>

              {submitMessage && <div className="success-message">{submitMessage}</div>}
            </form>

            <div className="privacy-notice">
              <h3>Integritet och personuppgifter</h3>
              <p>
                När du fyller i dina uppgifter ovan kommer dina personuppgifter behandlas enligt vår{' '}
                <Link to="/integritetspolicy">integritetspolicy</Link>.
              </p>
              <p>
                Vi på iGrit AB värnar om din personliga integritet och eftersträvar alltid en hög
                nivå av dataskydd. Läs mer om hur vi behandlar dina uppgifter i vår fullständiga
                integritetspolicy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
