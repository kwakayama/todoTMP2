/*global hackathonAbsinth*/

hackathonAbsinth.Controllers = hackathonAbsinth.Controllers || {};

(function() {
    'use strict';

    hackathonAbsinth.Controllers.MenuController = M.Controller.extend({

        menuView: null,

        todos: null,

        // Called from the router when the application starts
        applicationStart: function () {
            console.log('MenuController.applicationStart()');
            var layout = M.SwitchLayout.extend().create(this);
            hackathonAbsinth.setLayout(layout);
            this._initCollection();
            this._initViews();
            this._applyViews();
        },

        // Called from the router everytime the route/url matchs the controller (binding in main.js)
        show: function () {
            console.log('MenuController.show()');
            this._initCollection();
            this._initViews();
            this._applyViews();

        },

        // Called for every controller when the application is ready. applicationStart is always called before.
        applicationReady: function () {
            console.log('MenuController.applicationReady()');
        },

        _initViews: function(layout) {
            if (!this.menuView) {
                this.menuView = hackathonAbsinth.Views.MenuView.create(this, null, true);
            }
        },

        _applyViews: function(argument) {
            hackathonAbsinth.getLayout().applyViews({
                content: this.menuView
            });
        },

        _initCollection: function(argument) {
            this.currentTodo = hackathonAbsinth.Models.TodoModel.create({
                subject:''
            });
            this.todos = hackathonAbsinth.Collections.TodosCollection.create();
            this.todos.fetch({
                    success: function(){
                        M.Toast.show({text: 'YEHA', timeout: 1000});
                    },
                    error: function(){
                        M.Toast.show({text: 'BOOOM', timeout: 1000});
                    }
                });
        },

        addTodo: function() {
            this.todos.create(this.currentTodo.attributes);
        },

        removeTodo: function(event, element) {
            console.log(event, element);
            element.model.destroy();
            // element.model.destroy({
            //     success: function(){
            //         M.Toast.show({text: 'BOOOM', timeout: 1000});
            //     },
            //     error: function(){
            //         M.Toast.show({text: 'NOOOO', timeout: 1000});
            //     }
            // });
        },

        gotoMenuView: function() {
            hackathonAbsinth.navigate({
                route:''
            });
        }
    });

})();
