import { observable, autorun, computed, action } from "mobx";
import axios from 'axios'

class TreeStore {
    @observable searchTerm = "";
    @observable user = [];
    @observable listOfUsers = [];
    @observable searchedUsers = [];
 
    @action searchUser(user) {
        axios.get('http://localhost:8080/searchUser/:user')
        
    }
    // @action searchUserList(term) {
        // this.searchedUsers = this.listOfUsers.filter(u => u.toLowerCase().includes(term.toLowerCase()))

    // }
    @action calculateUsers() {
        return axios.get('http://localhost:8080/findUsers')
        .then(users => {
            for (let user of users.data) 
                {this.listOfUsers.push(user.userName)
                console.log(this.listOfUsers)}
            }
        )
    }
}

const store = new TreeStore();
export default store;