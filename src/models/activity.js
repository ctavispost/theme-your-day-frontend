const url = `http://localhost:4000/api/v1`;

class ActModel {
    static allActs = (actId) => {
        return fetch(`${url}/activity/`)
            .then(res => res.json()
                .catch(error => alert(error.message))
    }

    static createAct = (activityInfo) => {
        return fetch(`${url}/activity`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(activityInfo)
        })
            .then(res => res.json()
                .catch(error => alert(error.message))
    }
}

export default ActModel