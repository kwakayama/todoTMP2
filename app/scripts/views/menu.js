/*global hackathonAbsinth*/

hackathonAbsinth.Views = hackathonAbsinth.Views || {};

(function() {
    'use strict';

    hackathonAbsinth.Views.MenuView = M.View.extend({
        // The properties of a view
        // The views grid
        value:'',
        grid: 'col-xs-12',

    }, {

		todoInput: M.TextfieldView.extend({
			scopeKey: 'currentTodo.subject',
			label: 'Todo',
			placeholder: 'Enter a todo',
			grid: 'col-xs-12 col-md-6'
		}),

		todoOutput: M.TextView.extend({
			scopeKey:'currentTodo.subject'
		}),

        // The childViews as object
        // e.q. button: M.ButtonView.extend({value: 'Test'})
        button: M.ButtonView.extend({
	        // The Text of the Button
	        value: 'Add Todasdfo',
	        grid: 'col-xs-12 col-md-6',
	        // The events of the button
	        events: {
	            // On tab call the scope method 'gotoMenuPage' (scope is the MenuController)
	            tap: 'addTodo',
	        }
	    }),

	    todoList: M.ListView.extend({
			scopeKey: 'todos', // Zugriff auf zugehoerigen Controller und dessen Attribute todos
			listItemView: M.ListItemView.extend({
				extendTemplate: '<span><%= deadline %></span><span><%= subject %></span>',
				events: {
		            tap: 'removeTodo'
		        }
			}),
			grid: 'col-xs-12'
	    })


    });

})();
