import React, {
    Component,
    PropTypes,
} from 'react';

class List extends Component {
    render() {
        return (
            <li>
                <a href={this.props.aLink}>
                    <div className="triangle-topleft"></div>
                    <span className="shuxing">{this.props.attrss}</span>
                    <div className="leftimages fl">
                        <img src={this.props.imgurl} />
                    </div>
                    <div className="productcontent fr">
                        <p className="ptitle pl10">{this.props.p1}</p>
                        <p className="pdes pl10">{this.props.p2}</p>
                        <p className="pprice pl10">价格：<span className="green">{this.props.p3}</span></p>
                    </div>
                </a>
            </li>
        );
    }
}

List.propTypes = {};
List.defaultProps = {};

export default List;
