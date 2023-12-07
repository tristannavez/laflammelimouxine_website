import React, { useEffect } from 'react';
import Div from '../Div';
import Hero5 from '../Hero/Hero5';
import LogoList from '../LogoList';
import MovingText from '../MovingText';
import Spacing from '../Spacing';
import { pageTitle } from '../../helper';
import PostSlider from '../Slider/PostSlider';
import SectionHeading from '../SectionHeading';
import ServiceList from '../ServiceList';

export default function MarketingAgencyHome() {
  pageTitle('La Flamme Limouxine');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const heroSocialLinks = [
    {
      name: 'Linkedin',
      links: '/',
    },
    {
      name: 'Twitter',
      links: '/',
    },
  ];

  return (
    <>
      {/* Start Hero Section */}
      <Hero5
        title="La Flamme Limouxine"
        subtitle="Vente, installation, entretien et dépannage de solutions énergétiques dans le secteur de Limoux."
        btnLink="contact"
        btnText="Nous contacter"
        socialLinksHeading="Suis nous"
        heroSocialLinks={heroSocialLinks}
      />
      {/* End Hero Section */}


      {/* Start Services Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Nos services"
          subtitle="Services"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <ServiceList />
      </Div>
      {/* End Services Section */}

      <Spacing lg="120" md="50" />
      <Div className="container">
        <h1 className="cs-font_20 cs-m0 cs-line_height_4">
            La flamme Limouxine, entreprise de vente d’appareil de chauffage à bois et à granulé à Limoux, possède la qualification RGE Qualibois.
            Notre entreprise opère dans la vente et l’installation d’appareils de chauffage à bois et à granulés, mais nous offrons également des services d’entretien et de dépannage de chauffage bois et granulés à Limoux.
        </h1>
      </Div>

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Nos publications récentes"
                subtitle="Nos actualités"
                btnText="Voir plus"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Nos partenaires réputés mondialement" />
      <Spacing lg="100" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="130" md="80" />
      {/* End LogoList Section */}

        <Div className="cs-google_map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.8621130634433!2d2.2254321986985675!3d43.086394158707854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12afcd5b7658ca65%3A0x83fb1df70881ad99!2sLa%20Flamme%20Limouxine!5e0!3m2!1sen!2sfr!4v1701859661139!5m2!1sen!2sfr"
                allowFullScreen
                title="Google Map"
            />
        </Div>
    </>


  );


}
