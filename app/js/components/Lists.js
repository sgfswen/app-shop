import React, {
    Component,
    PropTypes,
} from 'react';

import List from './List'

class Lists extends Component {

    render() {
        let data = this.props.data;
        let mullist =data.map(function (cont) {
            return <List key={cont.key}
                         aLink={cont.aLink}
                         attrss={cont.attrss}
                         imgurl={cont.imgurl}
                         p1={cont.p1}
                         p2={cont.p2}
                         p3={cont.p3} />
        });

        return (
            <section className="productul">
                <ul>
                    {mullist}
                </ul>
            </section>
        );
    }
}


Lists.propTypes = {

};
Lists.defaultProps = {

};

export default Lists;
