class ListScreen {
    get createListBtn() {
        return $('//XCUIElementTypeStaticText[@name="Create list"]')
    }

    get listNameInput() {
        return $('//*[@value=List Name]')
    }

    get createBtn() {
        return $('~Create')
    }

    get listNameField(name) {
        return $(`~${name}`)
    }
}

module.exports = new ListScreen()