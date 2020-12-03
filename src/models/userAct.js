const url = `http://localhost:4000/api/v1`;

class UserActModel {
    static allUserActs = (userActId) => {
        return fetch(`${url}/userAct/`)
            .then(res => res.json())
    }

    static createUserAct = (userActInfo) => {
        return fetch(`${url}/userAct`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(userActInfo)
        })
            .then(res => res.json())
    }

    static deleteUserAct = (userActId) => {
        return fetch(`${url}/userAct/${userActId}`, {
            method: 'DELETE'
        })
    }
}

export default UserActModel;