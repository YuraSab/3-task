export default class UserService{
    url = 'https://jsonplaceholder.typicode.com/users';

    getUsers(){
        return fetch(this.url)
            .then(value => value.json())
    }


    getUserById(id){
        return fetch(`${this.url}/${id}`)
            .then(value => value.json())
    }


    async getTwoUsers2(idOne, idTwo) {
        let one = await fetch(`${this.url}/${idOne}`)
            .then(value => value.json());
        let two = await fetch(`${this.url}/${idTwo}`)
            .then(value => value.json());

        return [one, two];
    }

}
