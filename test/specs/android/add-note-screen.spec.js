const AddNoteScreen = require("../../screenobjects/android/add-note.screen")

describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        await AddNoteScreen.skipBtn.click()

        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed()
    })

    it('add a note, save changes & verify note', async () => {
        await AddNoteScreen.addNoteTxt.click()
        await AddNoteScreen.textOption.click()
        await expect(AddNoteScreen.textEditing).toBeDisplayed()

        await AddNoteScreen.noteHeading.addValue("Fav anime List")

        await AddNoteScreen.noteBody.addValue("Naruto\nOnePiece\nAOT")

        await AddNoteScreen.saveNote()

        await expect(AddNoteScreen.editBtn).toBeDisplayed()
        await expect(AddNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT")
    })
})