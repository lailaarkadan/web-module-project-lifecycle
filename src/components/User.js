import React from 'react';
import FollowerList from "./FollowerList";

class User extends React.Component {

    render() {
        return(
            <div id="usercard">
              
                    <img src={this.props.user.avatar_url} alt="avatar" />
                
                        <h3>{this.props.user.name}</h3>
                        <p>{this.props.user.login}</p>
                        <p>Total Repos: {this.props.user.public_repos}</p>
                        <p>Total Followers: {this.props.user.followers}</p>
            
                <FollowerList followers={this.props.followers}/>
            </div>
        );
    }
}

export default User;