import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';

@inject(allStores => ({
    storeSearchTerm: allStores.store.searchTerm,
    calculateUsers: allStores.store.calculateUsers,
    listOfUsers: allStores.store.listOfUsers,
    searchedUsers: allStores.store.searchedUsers
}))
@observer
class SearchForm extends Component {
    @observable searchTerm = ""
    // @observable filteredUsers = []    
    // @action updateTerm = (e) => {
    //     // let users = this.props.calculateUsers()

    //     // this.props.searchUserList(this.searchTerm)
    // }
    @action searchUsers = (e) => {
        this.searchTerm = e.target.value
        this.props.calculateUsers().then(users => console.log(this.listOfUsers))
        // this.props.searchedUsers = users.filter(u => u.toLowerCase().includes(this.searchTerm.toLowerCase()))

    }
    render() {
        return(
            <div>
                <input className="userSearch" 
                       onChange={this.searchUsers} 
                       datalist='users'></input>
                <datalist id='users'>
                        {this.props.searchedUsers.map(
                            u => <option>{u}</option>)}
                </datalist>
                <button>Search</button>
            </div>
        )
    }
}


export default SearchForm