import React, {Component} from 'react';
import Constructor from "../containers/constructor-container/constructor-container";

class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-md-12">
                    <h4>WELCOME</h4>
                    <Constructor/>
                </div>
            </div>
        );
    }
}

export default HomePage;
