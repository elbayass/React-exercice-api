import React from 'react';
import './App.css';
import List from './git_user/list/Liste'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ["devrchancay", "gaearon", "bors", "cuviper", "nagisa", "Centril", "wincent", "bvaughn", "sophiebits", "zpao", "sebmarkbage", "acdlite", "petehunt", "chenglou", "vjeux", "jimfb", "jeffmo", "subtleGradient", "nhunzaker", "benjamn", "yungsters", "aweary", "syranide", "ivanzotov", "trueadm", "koba04", "cpojer", "marocchino", "kohei-takata", "keyz", "chicoxyzzy", "joshduck", "mcsheffrey", "jquense", "aickin", "Daniel15", "iamdustan", "hellendag", "NE-SmallTown", "philipp-spiess", "Simek", "raphamorim", "abiomcosta", "cody", "arkist", "bgw", "tomocchino", "iamchenxin", "mroch", "flarnie" ]
        };
    }

    render() {
        return (
            <div className="App">
                    <List items={this.state.list} />
            </div>
        );
    }
}