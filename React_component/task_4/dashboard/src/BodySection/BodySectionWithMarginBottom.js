import React, {Component} from "react";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBottom.css";
import * as propTypes from "prop-types";

class BodySectionWithMarginBottom extends Component {
    render () {
        return (
            <div className="bodySectionWithMargin">
                <BodySection {...this.props} />
            </div>
        )
    }
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        propTypes.string,
        propTypes.element,
    ])
};

BodySectionWithMarginBottom.defaultProps = {
    children: <React.Fragment />
}

export default BodySectionWithMarginBottom;
