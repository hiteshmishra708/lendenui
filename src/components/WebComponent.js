import React, { Component } from 'react';
import Responsive from 'react-responsive-decorator';
import { ScreenWidth } from '../utils/ScreenWidth';

class WebComponent extends Component {
    componentWillMount () {
        this.props.media({ maxWidth: ScreenWidth.mobileMaxWidth }, () => {
            this.setState({
                isMobile: true
            });
        });
        this.props.media({ minWidth: ScreenWidth.desktopMinWidth }, () => {
            this.setState({
                isMobile: false
            });
        });
    }

    render () {
        const { children, ...otherProps } = this.props;

        if (!this.state.isMobile) {
            return React.cloneElement(children, otherProps)
        } else {
            return (<div></div>);
        }
    }
}
export default Responsive(WebComponent);
