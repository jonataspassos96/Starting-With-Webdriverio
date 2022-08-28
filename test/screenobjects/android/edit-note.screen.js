const AddNoteScreen = require("./add-note.screen");

class EditNoteScreen {
    get firstNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
    }

    get moreIcon() {
        return $('~More')
    }

    get deleteIcon() {
        return $('//*[@text="Delete"]')
    }

    get navIcon() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
    }

    get trashCanItem() {
        return $('//*[@text="Trash Can"]')
    }

    async skipTutorial() {
        await AddNoteScreen.skipBtn.click()

        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed()
    }

    async addAndSaveNote(noteHeading, noteBody) {
        await $('//*[@text="Add note"]').click()
        await $('//*[@text="Text"]').click()
        await expect($('//*[@text="Editing"]')).toBeDisplayed()

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
            .addValue(noteHeading)

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
            .addValue(noteBody)

        await driver.back()
        await driver.back()

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed()

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
            .toHaveText(noteBody)
    }
}

module.exports = new EditNoteScreen();