/*global hackathonAbsinth*/

hackathonAbsinth.Collections = hackathonAbsinth.Collections || {};

/**
 * A collection is just a list of models and even more.
 * It contains a bunch of helper functions, sync logic
 * and events.
 *
 * For further information go to:
 * http://the-m-project.org/docs/absinthe/Collection.html
 * http://backbonejs.org/#Collection
 */

(function() {
    'use strict';

    hackathonAbsinth.Collections.TodosCollection = M.Collection.extend({

        model: hackathonAbsinth.Models.TodoModel,
        entity: 'todos',
        // url: 'http://nerds.mway.io:8200/bikini/todos',
        url: 'http://localhost:8200/bikini/todos',
        store: M.BikiniStore.create({
			localStore: M.LocalStorageStore
        })
        // store: M.LocalStorageStore.create({
        // })
    });

})();
