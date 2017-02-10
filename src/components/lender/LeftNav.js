import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import logo from '../../assets/Logo-lendenclub.png';
import {List, ListItem} from 'material-ui/List';

import MobileComponent from '../MobileComponent';

const iconStyle = {
    color: '#6E7580'
}

const leftNavDrawerStyle = {
    boxShadow: 'none'
}

const listStyle = {
    padding: '0px'
}

class LeftNav extends Component {
    render () {
        let isMobile = this.props.isMobile,
            drawerWidth = isMobile ? 250 : 80,
            docked = !isMobile;
        return (
            <Drawer containerStyle={leftNavDrawerStyle} width={drawerWidth} docked={docked} open={this.props.leftNavOpen} onRequestChange={this.props.toggleLeftNav}>
                <div  className="lender-left-nav">
                    <div className="app-logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <List style={listStyle}>
                        <ListItem className="nav-list-item">
                            <Link to={'/app/lender/invest'} activeClassName="active" className="left-nav-item" onClick={this.props.toggleLeftNav}>
                                <FontIcon className="material-icons" style={iconStyle}>format_list_bulleted</FontIcon>
                                <MobileComponent><span className="tooltip">Invest</span></MobileComponent>
                            </Link>
                        </ListItem>
                        <ListItem className="nav-list-item">
                            <Link to={'/app/lender/dashboard'} activeClassName="active" className="left-nav-item" onClick={this.props.toggleLeftNav}>
                                <FontIcon className="material-icons" style={iconStyle}>dashboard</FontIcon>
                                <MobileComponent><span className="tooltip">Dashboard</span></MobileComponent>
                            </Link>
                        </ListItem>
                        <ListItem className="nav-list-item">
                            <Link to={'/app/lender/my-investments'} activeClassName="active" className="left-nav-item" onClick={this.props.toggleLeftNav}>
                                <FontIcon className="material-icons" style={iconStyle}>repeat_one</FontIcon>
                                <MobileComponent><span className="tooltip">My Investments</span></MobileComponent>
                            </Link>
                        </ListItem>
                        <ListItem className="nav-list-item">
                            <Link to={'/app/lender/account'} activeClassName="active" className="left-nav-item" onClick={this.props.toggleLeftNav}>
                                <FontIcon className="material-icons" style={iconStyle}>account_balance_wallet</FontIcon>
                                <MobileComponent><span className="tooltip">Account</span></MobileComponent>
                            </Link>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        );
    }
}

export default LeftNav;
