import React, { Component } from 'react';
import AccountBalance from '../../components/lender/dashboard/AccountBalance';
import AnnualizedReturns from '../../components/lender/dashboard/AnnualizedReturns';
import SuggestedProfiles from '../../components/lender/dashboard/SuggestedProfiles';
import InvestmentSummary from '../../components/lender/dashboard/InvestmentSummary';
import ProfileAssetAllocation from '../../components/lender/dashboard/ProfileAssetAllocation';
import MonthlySplit from '../../components/lender/dashboard/MonthlySplit';
import MyInvestments from '../../components/lender/dashboard/MyInvestments';
import { Row, Col } from 'react-flexbox-grid';

const rowStyle = {
    alignItems: 'stretch',
    marginBottom: '30px'
}

class Dashboard extends Component {
    render () {
        return (
            <div className="dashboard">
                <Row style={rowStyle}>
                    <Col lg={3} xs={12}>
                        <AccountBalance />
                    </Col>
                    <Col lg={3}>
                        <AnnualizedReturns />
                    </Col>
                    <Col lg={6}>
                        <SuggestedProfiles />
                    </Col>
                </Row>

                <Row style={rowStyle}>
                    <Col lg={12}>
                        <InvestmentSummary />
                    </Col>
                </Row>

                <Row style={rowStyle}>
                    <Col lg={3}>
                        <ProfileAssetAllocation />
                    </Col>
                    <Col lg={6}>
                        <MonthlySplit />
                    </Col>
                    <Col lg={3}>
                        <MyInvestments />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;
