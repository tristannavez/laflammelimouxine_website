import React from 'react'
import Div from '../Div'
import ContactInfoWidget from '../Widget/ContactInfoWidget'
import MenuWidget from '../Widget/MenuWidget'
import Newsletter from '../Widget/Newsletter'
import SocialWidget from '../Widget/SocialWidget'
import TextWidget from '../Widget/TextWidget'
import './footer.scss'

export default function Footer({copyrightText, logoSrc, logoAlt, text}) {
  const copyrightLinks = [
    {
      title: 'Mentions légales',
      href: '/'
    }
  ]
  
  const serviceMenu = [
    {
      title: 'Vente',
      href: '/service/service-details'
    },
    {
      title: 'Installation',
      href: '/service/service-details'
    },
    {
      title: 'Entretien',
      href: '/service/service-details'
    },
    {
      title: 'Dépannage',
      href: '/service/service-details'
    },
  ]

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-6 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget 
                  logoSrc='/images/logo.png'
                  logoAlt='Logo'
                  text ='Vente, installation, entretien et dépannage de chauffage bois et granulé à Limoux'
                />
                <SocialWidget/>
              </Div>
            </Div>
            <Div className="col-lg-2 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading='Services'/>
              </Div>
            </Div>
            <Div className="col-lg-4 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title='Nous contacter'/>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © La Flamme Limouxine.</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=' cs-style2'/>
          </Div>
        </Div>
      </Div>
    </footer>
  )
}
