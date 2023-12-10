import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Product from '../Product';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import config from '../../config/config';

export default function ProductsPage() {
    pageTitle('Produits');
    const [active, setActive] = useState('all');
    const [itemShow, setItemShow] = useState(7);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const strapiUrl = config.strapiUrl;

    useEffect(() => {
        // Récupération des produits depuis l'API Strapi
        fetch(`${strapiUrl}/api/products?populate=*`)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.data)) {
                    setProducts(data.data);
                } else {
                    console.error('Data from API is not an array:', data);
                }
            })
            .catch(error => console.error('Error fetching products:', error));

        fetch(`${strapiUrl}/api/categories`)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.data)) {
                    setCategories(data.data);
                } else {
                    console.error('Data from API is not an array:', data);
                }
            })
            .catch(error => console.error('Error fetching categories:', error));
    }, [strapiUrl]);

    return (
        <>
            <PageHeading
                title="Produits"
                bgSrc="images/portfolio_hero_bg.jpeg"
                pageLinkText="Portfolio"
            />
            <Spacing lg="145" md="80" />
            <Div className="container">
                <Div className="cs-portfolio_1_heading">
                    <SectionHeading title="Catalogue" subtitle="Nos produits" />
                    <Div className="cs-filter_menu cs-style1">
                        <ul className="cs-mp0 cs-center">
                            <li className={active === 'all' ? 'active' : ''} onClick={() => setActive('all')}>
                                <span>All</span>
                            </li>
                            {categories.map(category => (
                                <li
                                    className={active === category.attributes.name ? 'active' : ''}
                                    key={category.id}
                                    onClick={() => setActive(category.attributes.name)}
                                >
                                    <span>{category.attributes.name}</span>
                                </li>
                            ))}
                        </ul>
                    </Div>
                </Div>
                <Spacing lg="90" md="45" />
                <Div className="row">
                    {products
                        .filter(product => {
                            if (active === 'all') {
                                return true;
                            } else {
                                return product.attributes.categories.data.some(category => category.attributes.name === active);
                            }
                        })
                        .slice(0, itemShow)
                        .map((product, index) => (
                            <Div
                                className={`${
                                    index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
                                }`}
                                key={index}
                            >
                                <Product
                                    title={product.attributes.title}
                                    subtitle={product.attributes.subtitle}
                                    href={`/portfolio/${product.id}`}
                                    src={
                                        product.attributes.image &&
                                        product.attributes.image.data &&
                                        `${strapiUrl}${product.attributes.image.data.attributes.formats.thumbnail.url}`
                                    }
                                    variant="cs-style1 cs-type1"
                                />
                                <Spacing lg="25" md="25" />
                            </Div>
                        ))}
                </Div>

                <Div className="text-center">
                    {products.length <= itemShow ? (
                        ''
                    ) : (
                        <>
                            <Spacing lg="65" md="40" />
                            <span
                                className="cs-text_btn"
                                onClick={() => setItemShow(itemShow + 3)}
                            >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
                        </>
                    )}
                </Div>
            </Div>
            <Spacing lg="145" md="80" />
            <Cta title="04 68 20 07 05" bgSrc="/images/cta_bg_2.jpeg" variant="rounded-0" />
        </>
    );
}
