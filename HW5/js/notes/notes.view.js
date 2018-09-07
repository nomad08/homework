(function (window) {

    window.NotesView = function (moduleName, template) {
        this.moduleSelector = '[data-module=' + moduleName + '] ';
        this.$field = document.querySelector(this.moduleSelector + '.notes__add-inp');
        this.$addBtn = document.querySelector(this.moduleSelector + '.notes__add-btn');
        this.$list = document.querySelector(this.moduleSelector + '.notes__list');
        this.$filterBtn = document.querySelector('.note__selector');
        
        // this.$rmButton = document.querySelector(this.moduleSelector + '.note__rm-button');
        // this.$addToFav = document.getElementsByClassName('note__is-favorite');
        this.tpl = template;
    }

    NotesView.prototype.handle = function (eventName, handler) {
        let self = this;

        if (eventName === 'addNote') {
            self.$addBtn.addEventListener('click', function () {
                let text = self.$field.value;
                // debugger;
                handler(text);
            })
        }

        if (eventName === 'removeNote') {
            // self.$rmButton.addEventListener('click', function () {
            //     var id = 12;
            //     handler(id); //notes.controller.js 14 строка
            // })
            document.addEventListener('click', function (e) {
                var btn = e.target;
                if (btn.className === 'note__rm-button') {
                    var id = $attr(btn, 'data-id');
                    // debugger;

                    handler(+id);
                }
            })
        }

        if (eventName === 'addToFavorite'){
            document.addEventListener('click', function (e) {
                var btn = e.target;
                if (btn.className === 'note__is-favorite') {
                    var id = $attr(btn, 'data-id');
                    // var isFavorite = $attr(btn, 'data-isfavorite');
                    btn.style.color = 'red';
                    // debugger;          
                    handler(+id);
                }
            })
        }

       if (eventName === 'showFav'){
            this.$filterBtn.addEventListener('change', function(){
               var flr = this.value;
            //    console.log(flr);
               handler(flr);            
            });
    //     var self = this;
    //     var btn = document.getElementsByClassName('note__is-favorite');
    //     console.log(btn);
    //     // console.log(self.data);
    //     // for(var i =0; i < btn.length; i++)
    //     // if(self.data[i].isFavorite === true){
    //     //     btn[i].style.color = 'red';

    //     // }
        }
    }

    NotesView.prototype.render = function (viewCmd, data) {
        var self = this;
        var viewCommands = {
            showNotes: function () {
                self.$list.innerHTML = self.tpl.show(data);
                // console.log(data);
            }

        }
        viewCommands[viewCmd]();
    }

     
    

    NotesView.prototype.clearNewNote = function () {
        this.$field.value = '';
    }
    
    NotesView.prototype.showLength = function(nDL){

        // console.log(nDL);
        var d = document.querySelector('#note__length');
        d.innerHTML = 'Количество заметок: '+nDL;
    }


}(window));