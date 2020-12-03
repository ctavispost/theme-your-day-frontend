const url = `http://localhost:4000/api/v1`;

class ActModel {
    static allActs = () => {
        return fetch(`${url}/activity/`)
            .then(res => res.json());
    }

    static createAct = (activityInfo) => {
        return fetch(`${url}/activity`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(activityInfo)
        })
            .then(res => res.json());
    }
}

export default ActModel