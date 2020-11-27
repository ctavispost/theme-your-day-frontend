const url = `http://localhost:4000/api/v1`;

class ThemeModel {
    static all = () => {
        return fetch(`${url}/theme`)
            .then(res => res.json())
                .catch(error => alert(error.message)); 
    }

    static show = (gameId) => {
        return fetch(`${url}/theme/${themeId}`)
            .then(res => res.json())
                .catch(error => alert(error.message));
    }

    static create = (themeData) => {
        return fetch(`${url}/theme`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(themeData)
        })
            .then(res => res.json())
                .catch(error => alert(error.message));
    }
}

export default ThemeModel;