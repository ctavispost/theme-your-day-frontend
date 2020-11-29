const url = `http://localhost:4000/api/v1`;

class UserActModel {
    static allUserActs = (userActId) => {
        return fetch(`${url}/userAct/`)
            .then(res => res.json())
                .catch(error => alert(error.message));
    }

    static deleteUserAct = (userActId) => {
        return fetch(`${url}/userAct/${userActId}`, {
            method: 'DELETE'
        })
    }
}

export default UserActModel;