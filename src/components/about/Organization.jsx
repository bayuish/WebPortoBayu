import React from 'react';
import './Organization.css';

import hmttLogo from '../../assets/HMTTLOGO.jpg';
import gathrakGt from '../../assets/Gt.jpeg';
import gathrakGt2 from '../../assets/GT2.jpeg';
import teslaLogo from '../../assets/Tesla.jpg';
import tesla1 from '../../assets/Tesla1.jpeg';
import tesla2 from '../../assets/Tesla2.jpeg';
import tesla3 from '../../assets/Tesla3.jpeg';
import mojangJajakaLogo from '../../assets/PMJP.jpeg';
import moka1 from '../../assets/Moka1.jpeg';
import moka2 from '../../assets/Moka2.jpeg';
import moka3 from '../../assets/Moka3.jpeg';


function Organization() {
  return (
    <section className="organization-section">
      <h2>Organization Experience</h2>
      <div className="organization-list">
        {/* HMTT - Gathrak */}
        <div className="organization-item">
          <div className="hover-promptOrganization">
            Click me to show details
          </div>
          
          <div className="organization-header-container">
            <img 
              src={hmttLogo}
              alt="HMTT Logo" 
              className="organization-logo" 
            />
            <div className="organization-info">
              <h3>HMTT (Telecommunication Engineering Student Association)</h3>
              <p className="position">Chairman of Gathrak</p>
            </div>
          </div>
          <p className="period">2022</p>

          <div className="details-section">
            <div className="detail-item">
              <h4>Summary of Responsibilities:</h4>
              <p>
                As Chairman, I demonstrated exceptional leadership by strategically managing a dynamic team of 350 members across five specialized divisions: Events, Human Resources, Public Relations & Documentation, Design, and Logistics. My visionary approach transformed traditional orientation methods, successfully orchestrating a comprehensive program that welcomed over 450 new students while fostering unprecedented collaboration and engagement within the telecommunications engineering community.
              </p>
            </div>
            <div className="detail-item">
              <h4>Event Details:</h4>
              <p>
                Gathrak represents my creative innovation in student orientation, where I pioneered an immersive experience that seamlessly blended academic introduction with cultural immersion. Through strategic teamwork coordination, I designed interactive laboratory tours, dynamic networking sessions, and meaningful farewell ceremonies that honored Indonesian engineering traditions. My public speaking excellence was evident as I addressed diverse audiences, inspiring both team members and participants while establishing new standards for student engagement that continue to influence HMTT's orientation programs today.
              </p>
            </div>
            {/* Image Gallery untuk Gathrak */}
            <div className="event-images-container">
              <img src={gathrakGt} alt="Gathrak Event" className="event-image" />
              <img src={gathrakGt2} alt="Gathrak Event" className="event-image" />
              {/* Gambar dari URL eksternal */}
              <img 
                src="https://placehold.co/400x250/1a1a1a/ffffff?text=Gathrak+Photo+3" 
                alt="Gathrak Event" 
                className="event-image" 
              />
            </div>
          </div>
        </div>

        {/* HMTT - TESLA */}
        <div className="organization-item">
          <div className="hover-promptOrganization">
            Click me to show details
          </div>
          <div className="organization-header-container">
            <img 
              src={teslaLogo}
              alt="TESLA Logo" 
              className="organization-logo" 
            />
            <div className="organization-info">
              <h3>HMTT (Telecommunication Engineering Student Association)</h3>
              <p className="position">Head of the Gravitation Main Event (Concert)</p>
            </div>
          </div>
          <p className="period">2023</p>

          <div className="details-section">
            <div className="detail-item">
              <h4>Summary of Responsibilities:</h4>
              <p>
                Within the Event Division, I spearheaded the pinnacle of TESLA's celebration as the creative mastermind behind Gravitation. My leadership excellence shone through conceptualizing the concert's innovative theme, curating compelling event lineups, and strategically selecting high-profile guest stars. I demonstrated exceptional teamwork by coordinating seamlessly with multiple divisions while maintaining creative vision and ensuring flawless execution of this flagship entertainment experience.
              </p>
            </div>
            <div className="detail-item">
              <h4>Event Details:</h4>
              <p>
                TESLA (Telecommunication Event and Super League) showcased my ability to think creatively within complex organizational frameworks. As the three-month anniversary celebration unfolded through Supernova opening ceremony, diverse sports competitions (futsal, basketball, esports, chess), and charity initiatives, my role demanded sophisticated public speaking skills to engage various stakeholders. The Gravitation concert served as the grand finale, where my creative thinking transformed traditional celebration concepts into an unforgettable experience that elevated HMTT's cultural impact and community engagement.
              </p>
            </div>
            {/* Image Gallery untuk TESLA */}
            <div className="event-images-container">
              <img src={tesla1} alt="TESLA Event" className="event-image" />
              <img src={tesla2} alt="TESLA Event" className="event-image" />
              <img src={tesla3} alt="TESLA Event" className="event-image" />
            </div>
          </div>
        </div>

        {/* Mojang Jajaka */}
        <div className="organization-item">
          <div className="hover-promptOrganization">
            Click me to show details
          </div>
          <div className="organization-header-container">
            <img 
              src={mojangJajakaLogo}
              alt="Mojang Jajaka Purwakarta Logo" 
              className="organization-logo" 
            />
            <div className="organization-info">
              <h3>Mojang Jajaka Kabupaten Purwakarta</h3>
              <p className="position">Tourism Ambassador (Jajaka Pariwisata)</p>
            </div>
          </div>
          <p className="period">2018 - 2021</p>

          <div className="details-section">
            <div className="detail-item">
              <h4>Summary of Responsibilities:</h4>
              <p>
                As Tourism Ambassador, I served as the dynamic face of Purwakarta Regency's tourism sector, leveraging exceptional public speaking abilities to promote regional attractions and cultural heritage to diverse audiences. My leadership role involved building strategic partnerships between local tourism enterprises and government agencies, while my creative thinking enabled innovative promotional strategies. Through collaborative teamwork with various stakeholders, I facilitated economic development initiatives and established myself as a trusted liaison bridging community needs with governmental objectives.
              </p>
            </div>
            <div className="detail-item">
              <h4>Event Details:</h4>
              <p>
                My ambassadorial role demonstrated comprehensive organizational leadership through conceptualizing and executing impactful tourism events that showcased Purwakarta's unique cultural identity. I consistently delivered compelling public presentations to government officials, tourism industry leaders, and community members, while my creative approach to traditional promotional methods elevated the region's tourism profile. The collaborative partnerships I fostered resulted in enhanced regional economic development, with my innovative event planning and community mobilization strategies creating lasting positive impact on local tourism businesses and cultural preservation efforts.
              </p>
            </div>
            {/* Image Gallery untuk Mojang Jajaka */}
            <div className="event-images-container">
              <img src={moka1} alt="Mojang Jajaka Event" className="event-image" />
              <img src={moka2} alt="Mojang Jajaka Event" className="event-image" />
              <img src={moka3} alt="Mojang Jajaka Event" className="event-image" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Organization;
