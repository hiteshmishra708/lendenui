import React, { Component } from 'react';
import Collapse, { Panel } from 'rc-collapse';
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import 'rc-collapse/assets/index.css';
import { Row, Col } from 'react-flexbox-grid';
import { styleConstants } from '../../../utils/StyleConstants';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

const AccordionHeader = ({headerText}) => {
    return (
        <div>
            <KeyboardArrowRight />
            <span>
                {headerText}
            </span>
        </div>
    )
}


const collapsibleContentRowStyle = {
    height: '100%',
    alignItems: 'stretch'
}

const collapsibleContentFirstStyle = {
    paddingRight: 0
}

const collapsibleContentLastStyle = {
    borderLeft: `1px solid ${styleConstants.accordionBorder}`
}

const rowPaddingDesktop = {
    padding: '10px 0'
}

const colPaddingMobile = {
    padding: '10px 0'
}

const delimiterStyle = {
    borderRight: `1px solid ${styleConstants.accordionBorder}`,
    marginRight: '10px'
}

/* LoanDetailsChart */
const loanDetailsData = {
    columns: [
        ['Total Loans', 10],
        ['Current Loans', 20]
    ],
    type: 'donut'
}

const donut = {
    title: '30',
    label: {
        show: false
    }
}

const loanDetailsColor = {
    pattern: ['#D85876', '#69B440']
}

const loanDetailsTooltip = {
    contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
        let dataObject = d[0],
            labelColor = `color: ${color(dataObject)}`,
            html = `<div class="tooltip-container">
                <div class="tooltip-header" style="${labelColor}">
                    ${dataObject.name}
                </div>
                <div class="value">
                    ${dataObject.value}
                </div>
            </div>`;

        return html;
    }
}

const legend = {
    item: {
        onclick: function (id) {
            this.api.toggle(id);
            this.isTargetToShow(id) ? this.api.focus(id) : this.api.revert();
            this.api.focus();
        }
    }
}

const headerStyle = {
    padding: '20px',
    color: styleConstants.textHeaderGrey,
    textAlign: 'center'
}

const LoanDetailsChart = () => {
    return (
        <div>
            <div style={headerStyle}>Loan Details</div>
            <C3Chart data={loanDetailsData} color={loanDetailsColor} tooltip={loanDetailsTooltip} donut={donut} padding={ {bottom: 10} } size={ {height: 200} } legend={legend} />
        </div>
    )
}

class InvestRowCollapsible extends Component {
    render () {
        let loan = this.props.loan,
            user = loan.user,
            creditDetails = loan.credit_details,
            isMobile = this.props.isMobile,
            rowPadding = isMobile ? {} : rowPaddingDesktop,
            colPadding = isMobile ? {...colPaddingMobile, textAlign: 'left'} : {textAlign: 'left'},
            colValueStyle = isMobile ? {...colPaddingMobile, textAlign: 'right'} : {textAlign: 'right', paddingRight: '15px'},
            colDelimiter = isMobile ?  colValueStyle : {...colValueStyle, ...delimiterStyle},
            colDescriptionStyle =  isMobile ? { padding: '10px 0'} : {};

        return (
            <Row style={collapsibleContentRowStyle}>
                <Col lg={9} sm={12} xs={12} style={collapsibleContentFirstStyle}>
                    <Collapse accordion={true}>
                        <Panel showArrow={false} header={ <AccordionHeader headerText="Loan Details" /> }>
                            <Row>
                                <Col lg={12} sm={12}>
                                    <Row style={rowPadding}>
                                        <Col lg={3} sm={6} xs={6} style={colPadding} className="text-header-grey"> No. of Lenders </Col>
                                        <Col lg={1} sm={6} xs={6} style={colDelimiter}> 6 </Col>
                                        <Col lg={3} sm={6} xs={6} style={colPadding} className="text-header-grey"> EMI </Col>
                                        <Col lg={1} sm={6} xs={6} style={colValueStyle}> 9476 </Col>
                                    </Row>
                                    <Row style={rowPadding}>
                                        <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Description </Col>
                                        <Col lg={8} sm={6} xs={6} style={colDescriptionStyle}> {loan.description} </Col>
                                    </Row>

                                    <Row style={rowPadding}>
                                        <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> LenDen Comment </Col>
                                        <Col lg={8} sm={6} xs={6} style={colDescriptionStyle}> {loan.lenden_comment || "NA"} </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel showArrow={false} header={ <AccordionHeader headerText="Personal Details" /> } >
                            <Row>
                                <Col lg={5} sm={12} xs={12} style={colDelimiter}>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey">Gender </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> {user.gender} </Col>
                                    </Row>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey"> Age </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> {user.age} </Col>
                                    </Row>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey">Qualification </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> Other </Col>
                                    </Row>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey"> Total Family Member </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> 4 </Col>
                                    </Row>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey"> Stay </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> {user.permanent_address.stay_type} </Col>
                                    </Row>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey"> Total Family Member </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> Car </Col>
                                    </Row>
                                </Col>
                                <Col lg={5} sm={12} xs={12} style={colPadding}>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey"> Marital Status </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> {user.marital_status} </Col>
                                    </Row>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey"> City </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> {user.permanent_address.city} </Col>
                                    </Row>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey"> Specialization </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> Engineering </Col>
                                    </Row>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey"> Earning Family Members </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> 3 </Col>
                                    </Row>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey"> Monthly Income </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> ₹80000.00 </Col>
                                    </Row>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey"> Current EMI </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> ₹9000 </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel showArrow={false} header={ <AccordionHeader headerText="Credit Details" /> } >
                            <Row>
                                <Col lg={5} sm={12} xs={12} style={colDelimiter}>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey"> Total Number of Credit Cards </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> {creditDetails.number_of_credit_cards} </Col>
                                    </Row>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey"> First Loan Availment Date </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> {creditDetails.first_loan_availment_date} </Col>
                                    </Row>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey"> Credit Score </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> {creditDetails.lenden_score} </Col>
                                    </Row>
                                </Col>
                                <Col lg={5} sm={12} xs={12} style={colPadding}>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey"> Total Credit Limit </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> {creditDetails.sum_of_all_credit_card_limits} </Col>
                                    </Row>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey"> Credit Bureau Score </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> {creditDetails.cibil_score} </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel showArrow={false} header={ <AccordionHeader headerText="Professional Details" /> } >
                            <Row>
                                <Col lg={5} sm={12} xs={12} style={colDelimiter}>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey"> Employer Name </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> Technimont Pvt. Ltd. </Col>
                                    </Row>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey"> Designation </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> Designer Civil </Col>
                                    </Row>
                                </Col>
                                <Col lg={5} sm={12} xs={12} style={colPadding}>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey"> Working Since </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> 9 years </Col>
                                    </Row>
                                    <Row style={rowPadding}>
                                        <Col lg={6} sm={6} xs={6} style={colPadding} className="text-header-grey"> Total Experience </Col>
                                        <Col lg={6} sm={6} xs={6} style={colValueStyle}> 16 years </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel showArrow={false} header={ <AccordionHeader headerText="Delinquency Details" /> } >
                            <Row style={rowPadding}>
                                <Col lg={5} sm={6} xs={6} style={colPadding} className="text-header-grey"> Current Delinquency Amount </Col>
                                <Col lg={5} sm={6} xs={6} style={colValueStyle}> {creditDetails.delinquent_amount} </Col>
                            </Row>
                            <Row style={rowPadding}>
                                <Col lg={5} sm={6} xs={6} style={colPadding} className="text-header-grey"> Month Since Last Delinquency </Col>
                                <Col lg={5} sm={6} xs={6} style={colValueStyle}> {creditDetails.months_since_last_delinquency} </Col>
                            </Row>
                        </Panel>
                        <Panel showArrow={false} header={ <AccordionHeader headerText="Default History" /> } >
                            <Row style={rowPadding}>
                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Bank Defaulter </Col>
                                <Col lg={3} sm={6} xs={6} style={colDelimiter}> {creditDetails.bank_defaulter} </Col>

                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Default Date </Col>
                                <Col lg={3} sm={6} xs={6} style={colValueStyle}> {creditDetails.default_date} </Col>
                            </Row>
                        </Panel>
                    </Collapse>
                </Col>
                <Col lg={3} sm={12} xs={12} style={collapsibleContentLastStyle}>
                    <LoanDetailsChart />
                </Col>
            </Row>
        )
    }
}

export default InvestRowCollapsible;
