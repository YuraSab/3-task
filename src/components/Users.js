import React, {Component} from 'react';
import UserService from "../services/UserService";
import User from "./User";

class Users extends Component {

    state = {users: [], chosenId: 0};

    userService = new UserService();

    async addTwoUsers2() {
        let {chosenId} = this.state;
        let users2 = await this.userService.getTwoUsers2(chosenId + 1, chosenId + 2).then(value => {
            this.setState({users: value})
        })
        this.setState({chosenId: this.state.chosenId + 2});

    }

    async addTwoMoreUsers() {
        let {chosenId} = this.state;
        let [one, two] = await this.userService.getTwoUsers2(chosenId + 1, chosenId + 2);
        // let users3 = [this.state.users, users2];
        this.setState({users: [...this.state.users, one, two]});

        this.setState({chosenId: this.state.chosenId + 2});
    }

    resetId() {
        this.setState({
            chosenId: 0,
            users: []
        })
    }

    render() {

        let {users, chosenId} = this.state;

        return (

            <div>
                <button disabled={chosenId === 10 ? true : false} onClick={() => this.addTwoMoreUsers()}>Add two more users</button>
                <button disabled={chosenId === 0 ? true : false} onClick={() => this.resetId()}>Reset</button>
                {
                    chosenId !== 0 ?
                        (
                            users.map((value, index) => {
                                return (
                                    <User
                                        item={value}
                                        key={index}
                                    />
                                )
                            })
                        )
                        :
                        (<h3>
                                Press button to show users
                        </h3>)
                }
            </div>
        );
    }


}

export default Users;