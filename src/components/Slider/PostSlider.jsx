import React from 'react'
import Slider from "react-slick";
import Div from '../Div';
import Post from '../Post';

export default function PostSlider() {
  const postData = [
    {
      url:'/blog/blog-details', 
      src:'/images/post_1.jpg',
      alt:'PELLET 05 / 2023',
      date:'2 MAI 2023',
      title:'PELLET 05 / 2023'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/post_2.jpg',
      alt:'Post', 
      date:'8 MAR 2023',
      title:'Insert à granulés'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/post_3.jpg',
      alt:'Post', 
      date:'9 FÉV 2023',
      title:'Poêle rustique'
    },
    {
      url:'/blog/blog-details',
      src:'/images/post_1.jpg',
      alt:'PELLET 05 / 2023',
      date:'2 MAI 2023',
      title:'PELLET 05 / 2023'
    },
    {
      url:'/blog/blog-details',
      src:'/images/post_2.jpg',
      alt:'Post',
      date:'8 MAR 2023',
      title:'Insert à granulés'
    },
    {
      url:'/blog/blog-details',
      src:'/images/post_3.jpg',
      alt:'Post',
      date:'9 FÉV 2023',
      title:'Poêle rustique'
    }
  ]
  
  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className='cs-gap-24'>
      {postData.map((item,index)=>(
          <Div key={index}>
            <Post 
              url={item.url}
              src={item.src} 
              alt={item.alt} 
              date={item.date}
              title={item.title}
            />
          </Div>
        ))}
    </Slider>
  )
}
