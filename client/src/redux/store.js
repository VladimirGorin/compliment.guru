const { transliterate } = require("transliteration");

let store = {
    _state: {
        buttonsData: [],
        server: {
            defaultIP: "45.141.78.148",
            devIP: "127.0.0.1",
            devStatus: false,
            port: 3001
        }
    },
    renderDomElements() { },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this.renderDomElements = () => observer(this);
    },

    generateLink() {
        const updatedButtonsData = this._state?.buttonsData.map((item) => {
            const originalTitle = item?.title
            const transformedTitle = transliterate(originalTitle).toLowerCase().replace(/['",;:]/g, "").replace(/\s+/g, "-")
            item.link = transformedTitle

            return item
        })

        this._state.buttonsData = updatedButtonsData

    },

    sendRequest(method, data, path) {
        fetch(`http://${this._state.server.devStatus ? this._state.server.devIP : this._state.server.defaultIP}:${this._state.server.port}/${path}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => { return response }).then((data) => { }).catch((error) => { console.error("Error to fetch set-new-button", error); });
    },

    setNewButton({ title }) {
        this._state?.buttonsData.push({
            title: title,
            link: null,
            id: this._state?.buttonsData.length,
            template: {
                "paragraphs-count": 20,
                "paragraph1": "Текст для параграфа<br/>sss",
                "paragraph2": "Текст для параграфа 2",
                "paragraph3": "Текст для параграфа 3",
                "paragraph4": "Текст для параграфа 4",
                "paragraph5": "Текст для параграфа 5",
                "paragraph6": "Текст для параграфа 6",
                "paragraph7": "Текст для параграфа 7",
                "paragraph8": "Текст для параграфа 8",
                "paragraph9": "Текст для параграфа 9",
                "paragraph10": "Текст для параграфа 10",
                "paragraph11": "Текст для параграфа 11",
                "paragraph12": "Текст для параграфа 12",
                "paragraph13": "Текст для параграфа 13",
                "paragraph14": "Текст для параграфа 14",
                "paragraph15": "Текст для параграфа 15",
                "paragraph16": "Текст для параграфа 16",
                "paragraph17": "Текст для параграфа 17",
                "paragraph18": "Текст для параграфа 18",
                "paragraph19": "Текст для параграфа 19",
                "paragraph20": "Текст для параграфа 20",
                "paragraph21": "Текст для параграфа 21"
            }
        })
        this.generateLink()
        this.sendRequest("POST", this._state?.buttonsData, "set-new-button")
        this.renderDomElements()
    },

    setNewData(data) {
        const index = this._state.buttonsData.findIndex(button => button.id === data.id);
        if (index !== -1) {
            this._state.buttonsData[index] = data;
            this.generateLink();
            this.sendRequest("POST", this._state?.buttonsData, "set-new-button");
            this.renderDomElements();
        }
    },

    setButtonsData(data) {
        this._state.buttonsData = data
        this.generateLink()
        this.renderDomElements()
    },

    removeItemById(array, id) {
        return array.filter(item => item?.id !== Number(id))
    },

    async checkAdmin(data) {
        const status = await fetch(`http://${this._state.server.devStatus ? this._state.server.devIP : this._state.server.defaultIP}:${this._state.server.port}/get-admin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        return status.status

    },

    deleteButton(id) {
        this._state.buttonsData = this.removeItemById(this._state.buttonsData, id)
        this.sendRequest("POST", this._state?.buttonsData, "set-new-button")
        this.renderDomElements()
    }

}

export default store;
