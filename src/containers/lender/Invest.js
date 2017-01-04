import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import FontIcon from 'material-ui/FontIcon';

import InvestRow from '../../components/lender/InvestRow';

const iconStyle = {
    color: '#1370CB'
}

// Note: If you are changing these column widths - you need to change in the row component also
class Invest extends Component {
    constructor (props) {
        super();
    }

    componentDidMount() {
        this.props.fetchLoans();
    }

    toggleRowActive = (required_loan_id) => {
        this.props.updateRowActive(required_loan_id);
    }

    render () {
        return (
            <div className="lender-invest">
                <Row className="header-row">
                    <Col lg={1}>
                        Interest
                    </Col>
                    <Col lg={1}>
                        Tenure
                    </Col>
                    <Col lg={2}>
                        Loan
                    </Col>
                    <Col lg={1}>
                        Remaining
                    </Col>
                    <Col lg={2}>
                        Loan Purpose
                    </Col>
                    <Col lg={2}>
                        Loan ID / Borrower
                    </Col>
                    <Col lg={2}>
                        Investment Amount
                    </Col>
                    <Col lg={1} className="text-align-right">
                        <FontIcon className="material-icons" style={iconStyle}>tune</FontIcon>
                    </Col>
                </Row>
                {this.props.lender.loans.map( (loan, idx) => {
                    loan.active = loan.active || false;
                    return (
                        <InvestRow key={loan.user.user_id} loan={loan} toggleRowAction={this.toggleRowActive.bind(this)} rowActive={loan.active}/>
                    )
                })}
            </div>
        );
    }
}

export default Invest;
