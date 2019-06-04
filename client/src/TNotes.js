const BL_URL = '/api/';

state = {};

deleteAllNotesHandler() {
    this.deleteAllNotes().then(() => {
      this.reloadNotes();
    })
  }

  deleteNoteHandler(id) {
    this.deleteNote(id).then(() => {
      this.reloadNotes();
    })
  }

 addNoteHandler(text) {
    this.addNote(text).then(() => {
      this.reloadNotes();
    })
  }

editNoteHandler(id, text) {
    this.editNote(id, text).then(() => {
      this.reloadNotes();
    })
  }

reloadNotes() {
    let options = {
      method: 'GET',
      url: BL_URL + 'notes',
      headers: {
        'cache-control': 'no-cache'
      }
    };
    
    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (error) {
          console.log('Couldn\'t load notes');
          console.log(error);
          reject();
        } else {
          let notes = JSON.parse(body);
          console.log('Notes loaded successfully');
          console.log(notes);
          this.setState({'notes': notes})
          resolve();
        }      
      });
    });
  }

 addNote(text) {
    let options = {
      method: 'POST',
      url: BL_URL + 'notes',
      headers: {
        'cache-control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: {
        'content': text
      }
    };

    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (error) {
          console.log(error);
          reject();
        } else {
          console.log('note added successfully');
          let note = JSON.parse(body);
          console.log(note);
          resolve();
        }      
      });
    });
  }
    

editNote(id, text) {
    let options = {
      method: 'PUT',
      url: BL_URL + 'notes/' + id,
      headers: {
        'cache-control': 'no-cache'      
      },
      form: {
        'content': text
      }
    };

    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (error) {
          console.log('Couldn\'t update note');
          console.log(error);
          reject();
        } else {
          console.log('Note updated successfully');
          resolve();
        }      
      });
    });
  }

  deleteNote(id) {
    let options = {
      method: 'DELETE',
      url: BL_URL + 'notes/' + id,
      headers: {
        'cache-control': 'no-cache'
      }
    };

    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (error) {
          console.log('Couldn\'t delete note');
          console.log(error);
          reject();
        } else {
          console.log('Note deleted successfully');
          resolve();
        }      
      });
    });
  }

  deleteAllNotes() {
    let options = {
      method: 'DELETE',
      url: BL_URL + 'notes',
      headers: {
        'cache-control': 'no-cache'
      }
    };

    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (error) {
          console.log(error);
          reject();
        } else {
          console.log('Notes deleted successfully');
          resolve();
        }      
      });
    });
  }