const EditNoteScreen = require("../../screenobjects/android/edit-note.screen")

describe('Delete Notes', () => {
    it('Delete a note & check the note in trash can', async () => {
        await EditNoteScreen.skipTutorial()
        await EditNoteScreen.addAndSaveNote("TV Show", "Friend\nBreakingBad\nPeakyBlinders")

        await driver.back()

        const note = await EditNoteScreen.firstNote.getText()

        await EditNoteScreen.firstNote.click()

        await EditNoteScreen.moreIcon.click()

        await EditNoteScreen.deleteIcon.click()

        await driver.acceptAlert()

        await EditNoteScreen.navIcon.click()

        await EditNoteScreen.trashCanItem.click()

        const trashCanItem = await EditNoteScreen.firstNote

        expect(trashCanItem).toHaveText(note)
    })
})