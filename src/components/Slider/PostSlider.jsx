import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Post from '../Post';
import config from '../../config/config';

export default function PostSlider() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(`${config.strapiUrl}/api/blog-posts?populate=*`);
        const data = await response.json();

        if (data && data.data) {
          setPostData(data.data);
        } else {
          console.error('Invalid API response:', data);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  /** Slider Settings **/
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
      <Slider {...settings} className='cs-gap-24'>
        {postData.map((item, index) => (
            <Div key={index}>
              <Post
                  url={`/blog/blog-details/${item.id}`}
                  src={`${config.strapiUrl}${item.attributes.image.data.attributes.formats.thumbnail.url}`}
                  alt={item.attributes.title}
                  date={item.attributes.date}
                  title={item.attributes.title}
              />
            </Div>
        ))}
      </Slider>
  );
}
