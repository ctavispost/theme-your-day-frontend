const url = `http://localhost:4000/api/v1`;

class ThemeActModel {
    static allThemeActs = (themeActId) => {
        return fetch(`${url}/themeAct/`)
            .then(res => res.json())
                .catch(error => alert(error.message))
    }
};

export default ThemeActModel;