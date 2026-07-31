import { MapPin, Navigation, Phone } from 'lucide-react';

const venueDetails = {
  name: 'DCCAI',
  address:
    'Units Nos. 3037 – A1 Wing, 3rd Floor, Oberoi Garden Estate, Near Chandivali Studio, Andheri (East), Mumbai – 400072, INDIA',
  phone: '+91 22 4608 0974',
  mapQuery:
    'Units Nos. 3037 – A1 Wing, 3rd Floor, Oberoi Garden Estate, Near Chandivali Studio, Andheri (East), Mumbai – 400072, INDIA',
};

export default function VenuePage() {
  const googleMapUrl =
    'https://www.google.com/maps?q=A1+Wing,+3rd+Floor,+Oberoi+Garden+Estate,+Near+Chandivali+Studio,+Andheri+East,+Mumbai+400072,+India&output=embed';

  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=A1+Wing,+3rd+Floor,+Oberoi+Garden+Estate,+Near+Chandivali+Studio,+Andheri+East,+Mumbai+400072,+India';

  return (
    <main className="venue-page">
      <section className="venue-section">
        <div className="venue-header">
          <span className="venue-header-label">Event Location</span>

          <h1>Venue</h1>

          <div className="venue-header-line" />
        </div>

        <div className="venue-container">
          <div className="venue-map-column">
            <div className="venue-map-wrapper">
              <iframe
                src={googleMapUrl}
                title="ITC Maratha location"
                className="venue-map"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="venue-information">
            <span className="venue-information-label">Address</span>

            <div className="venue-name-row">
              <div className="venue-icon-box">
                <MapPin size={22} strokeWidth={2.2} />
              </div>

              <div>
                <h2>{venueDetails.name}</h2>
                <p>{venueDetails.address}</p>
              </div>
            </div>

            <div className="venue-contact-row">
              <div className="venue-contact-item">
                <Phone size={17} strokeWidth={2.2} />

                <a href={`tel:${venueDetails.phone.replace(/\s/g, '')}`}>{venueDetails.phone}</a>
              </div>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="venue-direction-button"
            >
              <Navigation size={17} strokeWidth={2.3} />
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
