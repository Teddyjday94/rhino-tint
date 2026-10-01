import { ADDRESS_LINE, BUSINESS } from '@/data/business';

export function ContactCard() {
  return (
    <div className="contact-card">
      <dl>
        <div>
          <dt>Call or text</dt>
          <dd>
            <a className="phone" href={BUSINESS.phoneHref}>
              {BUSINESS.phone}
            </a>
          </dd>
        </div>
        <div>
          <dt>Shop</dt>
          <dd>
            {ADDRESS_LINE}
            <br />
            <a className="text-link" href={BUSINESS.google.directionsUrl} target="_blank" rel="noopener">
              Get directions
            </a>
          </dd>
        </div>
        <div>
          <dt>Hours</dt>
          <dd>
            <table className="hours">
              <tbody>
                <tr>
                  <td>Monday to Saturday</td>
                  <td>8 AM to 5 PM</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </dd>
        </div>
      </dl>
    </div>
  );
}
