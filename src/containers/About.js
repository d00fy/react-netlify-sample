import React from 'react';
import Helmet from 'react-helmet';

const About = () => (
    <div>
        <Helmet
            title="About"
            meta={[
                { name: 'twitter:card', content: 'summary' },
                { name: 'twitter:title', content: 'About' },
                { name: 'twitter:description', content: 'description of About' },
                { name: 'twitter:image', content: 'https://imgsv.nikon-image.com/products/slr/lineup/d5300/img/sample/pic_03_l.jpg' },
                { property: 'og:title', content: 'About' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://lucid-colden-714002.netlify.com/about' },
                { property: 'og:image', content: 'https://imgsv.nikon-image.com/products/slr/lineup/d5300/img/sample/pic_03_l.jpg' },
                { property: 'og:description', content: 'description of About' },
            ]}
        />
        <h2>About</h2>
    </div>
)

export default About;