import React, { Component } from 'react';
import { connect } from 'react-redux'
import Responsive from 'react-responsive-decorator';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
        canvasColor: '#081B24',
        textColor: '#ffffff',
        primary1Color: '#4CAF50',
        borderColor: '#9e9e9e'
    },
    textField: {
        floatingLabelColor: '#9e9e9e'
    },
    raisedButton: {
        disabledColor: '#2E454E',
        secondaryColor: '#192930'
    },
    flatButton: {
        secondaryTextColor: '#B9B8B8'
    },
    checkbox: {
        boxColor: '#2d434d',
        checkedColor: '#0099CC',
        labelColor: '#97A29C'
    },
    chip: {
      backgroundColor: '#182F39'
    }
});

class Main extends Component {
    componentDidMount () {
        this.props.media({ maxWidth: 1230 }, () => {
            this.setState({
                isMobile: true
            });
        });
    }

    render () {
        let isMobile = this.state ? this.state.isMobile : false;
        console.log('Mobile:', isMobile);
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    { React.cloneElement(this.props.children, {...this.props, isMobile}) }
                </div>
            </MuiThemeProvider>
        );
    }
}

// use this to pass state as props to the component -  so when state changes, the component will re-render
function mapStateToProps (state) {
    return state;
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}


//Responsive makes the media util available in all components
export default Responsive(connect(mapStateToProps, mapDispatchToProps)(Main));
