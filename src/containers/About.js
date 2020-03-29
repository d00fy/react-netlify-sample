import React, { Component } from 'react';
import Helmet from 'react-helmet';

class About extends Component {

    render() {
        return (
            <div>
                <Helmet
                    title="About"
                    meta={[
                        { name: 'twitter:card', content: 'summary' },
                        { name: 'twitter:title', content: 'About' },
                        { name: 'twitter:description', content: 'description of About' },
                        { name: 'twitter:image', content: 'this.props.location.state.text' },
                        { property: 'og:title', content: 'About' },
                        { property: 'og:type', content: 'website' },
                        { property: 'og:url', content: 'https://lucid-colden-714002.netlify.com/about' },
                        { property: 'og:image', content: 'this.props.location.state.text' },
                        { property: 'og:description', content: 'description of About' },
                    ]}
                />
                <h2>About</h2>
            </div>
        )
    }

}


export default About;