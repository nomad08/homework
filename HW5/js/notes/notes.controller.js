;
(function (window) {

    window.NotesController = function (view, model) {
        var self = this;
        self.view = view;
        self.model = model;

        self.view.handle('addNote', function (text) {
            self.addItem(text);
        })

        self.view.handle('removeNote', function (id) {
            self.removeNote(id); // 123
        })

        self.view.handle('addToFavorite', function (isFavorite) {
            self.addToFavorite(isFavorite); 
        })
        
        self.view.handle('showFav', function (flr) {
            self.makeFav(flr); 
        })
    }

    NotesController.prototype.addItem = function (text) {
        // let data = {
        //     text: text
        // }
        var self = this;
        if (!text) {
            return;
        }
        self.model.add(text, function (data) {
            self.view.clearNewNote();
            self.view.render('showNotes', data);
            self.view.showLength(data.length);
            console.log(data);

        })
    }

    NotesController.prototype.removeNote = function (id, cb) {
        var self = this;
        self.model.remove(id, function (newData) {
            if (id === -1) {
                alert('ЧТО ТЫ ХОЧЕШЬ УДАЛИТЬ???');
            } else {
                // alert('У тебя осталось ' + newData.length + ' заметок');
                self.view.render('showNotes', newData);
                // self.view.makeFav();
                self.view.showLength(newData.length);
                // console.log(newData.length);

            }
        })
    }

    NotesController.prototype.addToFavorite = function (isFavorite) {
        var self = this;
        // debugger;

        self.model.toFav(isFavorite, function (newData) {

                // self.view.render('showNotes', newData);
        })
    }

    NotesController.prototype.makeFav = function (flr) {
        var self = this;
        if(flr === 'value2'){
            // console.log(flr);

            self.model.getFav(flr, function (newData) {
                self.view.render('showNotes', newData);
                console.log(newData);


            }) 

        }else if(flr === 'value3'){

        }
    }
    



    NotesController.prototype.initView = function () {
        var self = this;
        // var notesData = self.model.getAll();
        // self.view.render('showNotes', notesData);
        self.model.getAll(function (data) {
            self.view.render('showNotes', data);
        });
    }

}(window));