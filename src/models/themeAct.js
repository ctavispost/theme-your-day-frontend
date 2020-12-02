const url = `http://localhost:4000/api/v1`;

class ThemeActModel {
    static allThemeActs = async (themeActId) => {
        const res = await fetch(`${url}/themeAct/`);
        return await res.json();
    }
};

export default ThemeActModel;