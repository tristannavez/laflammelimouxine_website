import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Card from '../Card'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import PricingTableList from '../PricingTable/PricingTableList'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

export default function ServicesPage() {
  pageTitle('Services');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Services'
        bgSrc='images/service_hero_bg.jpg'
        pageLinkText='Services'
      />
      <Spacing lg='150' md='80'/>
      <Div className='cs-shape_wrap_4'>
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title='Les services que nous proposons'
                subtitle='Nos services'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className='col-xl-8'>
              <Div className='row'>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Vente'
                    link='/service/ui-ux-design'
                    src='https://img-ccmbg-1.lefigaro.fr/3ZrZL94XUg-8cZkPsPMQMDH2iPk=/1500x/smart/5e59febf493744ec91c589ae7a63848c/ccmcms-figaroimmobilier/29532249.jpg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Installation'
                    link='/service/reactjs-development'
                    src='https://media.istockphoto.com/id/1427260980/fr/photo/un-po%C3%AAle-%C3%A0-bois-avec-du-bois-et-des-granul%C3%A9s.jpg?s=612x612&w=0&k=20&c=rVaag8SpdLlKHdfhelTbdVfFTvEwsYPuHJm5XpoDFjw='
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Entretien'
                    link='/service/digital-marketing'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfOPwnsfrleiEdGCqDjR8uKYT5Jsa6jYWdNg&usqp=CAU'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Dépannage'
                    link='/service/technology'
                    src='https://www.agecic.fr/91-medium_default/realiser-le-depannage-des-poeles-a-granules-de-bois-pellets.jpg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='190' md='80'/>
      <Div className="container">
        <Cta 
          title='Discutons de votre<br /> <i>projet</i> ensemble'
          btnText='Nous contacter'
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
        <Spacing lg='30' md='80'/>
        <TestimonialSlider/>
      <Spacing lg='30' md='80'/>
    </>
  )
}
