import React, {Component} from 'react';

import './PageContent.css';

class PageContent extends Component {

    render() {
        return (
            <div id="mainContent">
                {this.props.children}
            </div>
        );
    }
}

export default PageContent;