import { Link } from 'react-router-dom'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <div className="container">
        <header className="page-header">
          <Link to="/" className="back-link">
            ← Tillbaka till startsidan
          </Link>
          <h1>Integritetspolicy</h1>
          <p className="last-updated">
            Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
          </p>
        </header>

        <div className="policy-content">
          <section>
            <h2>Inledning</h2>
            <p>
              När du fyller i dina uppgifter på vår webbplats kommer dina personuppgifter behandlas
              enligt denna integritetspolicy.
            </p>
            <p>
              Vi på iGrit AB vill att du ska känna dig trygg när du lämnar dina personuppgifter till
              oss. Vi värnar om din personliga integritet och eftersträvar alltid en hög nivå av
              dataskydd.
            </p>
          </section>

          <section>
            <h2>Så här behandlar vi personuppgifter</h2>
            <p>
              iGrit AB behandlar personuppgifter för att administrera vårt kundförhållande till dig.
              De personuppgifter vi behandlar har antingen lämnats av dig, inhämtas från publika
              databaser eller från någon av våra samarbetspartners. Vi sparar aldrig personuppgifter
              längre än vi behöver. Vissa personuppgifter raderas direkt, andra sparas enligt lag
              för viss tid beroende på vad uppgifterna är.
            </p>
            <p>
              Utöver att fullgöra vårt avtal med dig kan vi komma att använda dina personuppgifter
              för att lämna relevant information om våra tjänster eller i marknadsföringssyfte.
            </p>
            <p>
              Vidare kan vi komma att behandla vissa personuppgifter för att tillgodose säkerheten i
              våra tjänster och för att uppfylla våra lagstadgade krav från myndigheter.
            </p>
            <p>
              I de fall det är nödvändigt för att vi ska kunna erbjuda våra tjänster delar vi dina
              personuppgifter med företag som är s.k. personuppgiftsbiträden för oss. Ett
              personuppgiftsbiträde är ett företag som behandlar informationen för vår räkning och
              enligt våra instruktioner. Vi kan också dela personuppgifter med andra
              personuppgiftsansvariga om det är nödvändigt.
            </p>
          </section>

          <section>
            <h2>Dina rättigheter</h2>
            <p>
              Dataskyddslagstiftningen ger dig ett antal rättigheter i förhållande till behandlingen
              av dina personuppgifter. Du har till exempel rätt att begära tillgång till dina
              personuppgifter (ett så kallat registerutdrag) och till dataportabilitet. Du har även
              rätt att begära att dina uppgifter rättas eller raderas, att behandlingen begränsas,
              att eventuella samtycken återkallas och att dina uppgifter inte ska användas för
              direktmarknadsföring.
            </p>
            <p>
              För att utöva dina rättigheter eller om du har frågor om hur vi behandlar dina
              personuppgifter, kontakta oss via kontaktuppgifterna nedan.
            </p>
          </section>

          <section>
            <h2>Klagomål</h2>
            <p>
              Om du anser att dina personuppgifter behandlas i strid med gällande regelverk, bör du
              anmäla det till oss snarast. Du har också rätt att lämna klagomål till
              Integritetsskyddsmyndigheten (IMY).
            </p>
          </section>

          <section>
            <h2>Kontaktinformation</h2>
            <div className="contact-info">
              <h3>Personuppgiftsansvarig</h3>
              <p>
                <strong>iGrit AB</strong>
                <br />
                Organisationsnummer: [Organisationsnummer]
                <br />
                E-post: kontakt@igrit.se
                <br />
                Telefon: [Telefonnummer]
              </p>
            </div>
          </section>

          <section>
            <h2>Ändringar av denna policy</h2>
            <p>
              Vi kan komma att uppdatera denna integritetspolicy från tid till annan. När vi gör
              väsentliga ändringar kommer vi att informera dig genom att publicera den nya policyn
              på vår webbplats och uppdatera datumet för "Senast uppdaterad" överst på denna sida.
            </p>
          </section>
        </div>

        <footer className="policy-footer">
          <Link to="/" className="back-link">
            Tillbaka till startsidan
          </Link>
        </footer>
      </div>
    </div>
  )
}

export default PrivacyPolicy
