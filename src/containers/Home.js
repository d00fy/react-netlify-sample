import React from 'react';
import Helmet from 'react-helmet';

const Home = () => (
    <div>
        <Helmet
            title="Home"
            meta={[
                { name: 'twitter:card', content: 'summary' },
                { name: 'twitter:title', content: 'Home' },
                { name: 'twitter:description', content: 'description of Home' },
                { name: 'twitter:image', content: 'http://arch.casio.jp/image/dc/images/fh20_gallery_pic04_b.jpg' },
                { property: 'og:title', content: 'Home' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://lucid-colden-714002.netlify.com/' },
                { property: 'og:image', content: 'http://arch.casio.jp/image/dc/images/fh20_gallery_pic04_b.jpg' },
                { property: 'og:description', content: 'description of Home' },
            ]}
        />
        <h2>Home</h2>
    </div>
)

export default Home;