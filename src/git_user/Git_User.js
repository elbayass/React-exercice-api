import React, { Component } from 'react';
import './Git_User.css'
import User from './git_user_full/User_full'

const urlForUsername = username =>
    `https://api.github.com/users/${username}`

class Git_User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requestFailed: false
        }
        this.handleMore = this.handleMore.bind(this);
        this.state = { count: 1 };
        this.state = { string : 'Bonjour tout le monde'}
    }
    handleMore() {
        if (this.state.count === 0)
            this.setState({ count: 1 });
        else
            this.setState({ count: 0 });
    }
    componentDidMount() {
        fetch(urlForUsername(this.props.username))
            .then(response => {
                if (!response.ok) {
                    throw Error("Network request failed")
                }
                return response
            })
            .then(d => d.json())
            .then(d => {
                this.setState({
                    githubData: d
                })
            }, () => {
                this.setState({
                    requestFailed: true
                })
            })
    }
    render() {
        let isLoggedIn = this.state.count;
        if (this.state.requestFailed) return <p></p>
        if (!this.state.githubData) return <p></p>
        let div_state;
        let dev = this.state.githubData.bio;
        
        if(this.state.githubData.bio === null)
            dev = 'DEV';
            
        if (isLoggedIn === 0)
            div_state = <User followers={this.state.githubData.followers} name={this.state.githubData.name} public_repos={this.state.githubData.public_repos} bio={dev}></User>
        else
            div_state = <div></div>
            
        return (
            <div className="container_user">
                <div className="container_cart">
                    <img src={this.state.githubData.avatar_url} alt="profile" className="background" />
                    <img src={this.state.githubData.avatar_url} alt="profile" className="profile" />
                    <div className='info_cart'>
                        <h3>{this.state.githubData.login}<span className='plus' onClick={this.handleMore}>Voir plus</span></h3>
                    </div >
                    <div>{div_state}</div>
                </div>
            </div>
        )
    }
}
export default Git_User;