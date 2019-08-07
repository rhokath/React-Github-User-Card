import React from "react";
import FollowerCard from "./FollowerCard";

class UserCard extends React.Component {
    constructor(){
        super()
        this.state = {
            followers: []
        }
    };
    componentDidMount(){
        this.fetchFollowers();
    
      }
    fetchFollowers = () => {
        fetch("https://api.github.com/users/rhokath/followers")
        .then(response => {
            return response.json();
        })
        .then(gitfollowers => {
            console.log("response in usercard", gitfollowers)
            return this.setState({followers: gitfollowers})
        })
        .catch(error => {
            console.log("there is an error", error)
        })

    }
    render(){
        console.log(this.props.userinfo)
        return(
            <div className="usercard">
                <h1>hello from usercard component</h1>
                <h1>{this.props.userinfo.login}</h1>
                <p>{this.props.userinfo.type}</p>
                <img src={this.props.userinfo.avatar_url} alt="git avatar"/>
                <FollowerCard  key={ new Date().getTime()} people={this.state.followers}/>
            </div>
            
        )
    };
};

export default UserCard;