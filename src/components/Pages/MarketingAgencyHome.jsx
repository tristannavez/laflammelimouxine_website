import React, { useEffect } from 'react';
import Cta from '../Cta';
import Div from '../Div';
import Hero5 from '../Hero/Hero5';
import LogoList from '../LogoList';
import MovingText from '../MovingText';
import Spacing from '../Spacing';
import VideoModal from '../VideoModal';
import { pageTitle } from '../../helper';
import PostSlider from '../Slider/PostSlider';
import SectionHeading from '../SectionHeading';
import TestimonialSlider from '../Slider/TestimonialSlider';
import PricingTableList from '../PricingTable/PricingTableList';
import FunFact2 from '../FunFact/FunFact2';
import PortfolioSlider2 from '../Slider/PortfolioSlider2';
import ServiceList from '../ServiceList';

export default function MarketingAgencyHome() {
  pageTitle('Marketing Agency');
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
  const funfaceData = [
    {
      title: 'Digital products',
      factNumber: '550',
    },
    {
      title: 'Global happy clients',
      factNumber: '40K',
    },
    {
      title: 'Project completed',
      factNumber: '50k',
    },
    {
      title: 'Team members',
      factNumber: '250',
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

      {/* Start Video Block Section */}
      <Div className="cs-video_block_1_wrap">
        <Div className="container">
          <VideoModal
            videoSrc="https://www.youtube.com/watch?v=e7xYgbsbImA"
            bgUrl="/images/video_bg_2.jpeg"
          />
        </Div>
      </Div>
      {/* End Video Block Section */}

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

      {/* Start PortfolioSlider Section */}
      <Spacing lg="120" md="50" />
      <Div className="container">
        <h1 className="cs-font_20 cs-m0 cs-line_height_4">
            La flamme Limouxine, entreprise de vente d’appareil de chauffage à bois et à granulé à Limoux, possède la qualification RGE Qualibois.
            Notre entreprise opère dans la vente et l’installation d’appareils de chauffage à bois et à granulés, mais nous offrons également des services d’entretien et de dépannage de chauffage bois et granulés à Limoux.
        </h1>
      </Div>
      <Spacing lg="90" md="70" />
      <PortfolioSlider2 />
      {/* End PortfolioSlider Section */}

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

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Contacez-nous"
          btnText="Contact"
          btnLink="/contact"
          bgSrc="/images/cta_bg_3.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
