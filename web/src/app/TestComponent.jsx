
import React from 'react';
import TestSender from "./bussiness_logic/TestSender";

export default class TestComponent extends React.Component {

    state = {
        data: []
    }

    async sendRequest() {
        const sender = new TestSender();

        sender.send().then(data => {
            this.setState({
                data: data
            });
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.sendRequest.bind(this)}>Click here to load</button>

                <div>
                    <ul>
                        {this.state.data.map(item => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
