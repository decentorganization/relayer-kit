// External libraries
import React, { Component } from "react";

// Components
import RequestLoanForm from "../components/RequestLoanForm/RequestLoanForm";

// Contexts
import DharmaConsumer from "../contexts/Dharma/DharmaConsumer";

class RequestLoanFormContainer extends Component {
    constructor(props) {
        super(props);

        this.onCompletion = this.onCompletion.bind(this);
    }

    /**
     * When the loan request is created, we redirect the user back to the table that includes
     * all of the loan requests, and highlight the first row (which contains the newly added
     * loan request.)
     */
    onCompletion(id) {
        this.props.history.push(`/?highlightRow=${id}`);
    }

    render() {
        return (
            <DharmaConsumer>
                { (dharmaProps) => {
                    return <RequestLoanForm
                        dharma={ dharmaProps.dharma }
                        tokens={ dharmaProps.supportedTokens }
                        onCompletion={ this.onCompletion }
                    />;
                } }
            </DharmaConsumer>
        );
    }
}

export default RequestLoanFormContainer;
