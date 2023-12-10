import React, { useEffect, useState } from 'react';
import { pageTitle } from '../../helper';
import PageHeading from '../PageHeading';
import Pagination from '../Pagination';
import PostStyle2 from '../Post/PostStyle2';
import Div from '../Div';
import Spacing from '../Spacing';
import config from '../../config/config';

export default function BlogPage() {
    pageTitle('Actualités');
    const [postData, setPostData] = useState([]);
    const strapiUrl = config.strapiUrl;

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await fetch(`${strapiUrl}/api/blog-posts?populate=*`);
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
        window.scrollTo(0, 0);
    }, [strapiUrl]);

    return (
        <>
            <PageHeading
                title="Nos actualités"
                bgSrc="/images/blog_hero_bg.jpeg"
                pageLinkText="Actualités"
            />
            <Spacing lg="150" md="80" />
            <Div className="container">
                <Div className="row">
                    <Div className="col-lg-12">
                        {postData.map((item, index) => (
                            <Div key={index}>
                                <PostStyle2
                                    title={item.attributes.title}
                                    thumb={`${strapiUrl}${item.attributes.image.data.attributes.formats.thumbnail.url}`}
                                    subtitle={item.attributes.subtitle}
                                    date={item.attributes.date}
                                    category={item.attributes.category}
                                    categoryHref="/blog" // Remplacer par la bonne valeur
                                    href={`/blog/blog-details/${item.id}`}
                                />
                                {postData.length > index + 1 && <Spacing lg="95" md="60" />}
                            </Div>
                        ))}
                        <Spacing lg="60" md="40" />
                        <Pagination />
                    </Div>
                </Div>
            </Div>
            <Spacing lg="150" md="80" />
        </>
    );
}
