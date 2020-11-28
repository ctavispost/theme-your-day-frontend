const url = `http://localhost:4000/api/v1`

class themeAct {
    static allThemeActs = (themeActId) => {
        return fetch(`${url}/themeAct/`)
            .then(res => res.json()
                .catch(error => alert(error.message))
    };
}

export default themeAct;