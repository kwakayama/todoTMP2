/*global $, M*/


(function(global) {
    'use strict';

    global.hackathonAbsinth = M.Application.extend().create(global.hackathonAbsinth.mconfig);

    $(document).ready(function() {

        global.hackathonAbsinth.start({
            routing: {
                routes: {
                    '': 'menu',
                    'beer': 'beerController',
                    'menu': 'menu',
                    //m:routes
                },
                absintheController: global.hackathonAbsinth.Controllers.AbsintheController.create(),
                beerController: global.hackathonAbsinth.Controllers.BeerController.create(),
                menu: global.hackathonAbsinth.Controllers.MenuController.create(),
                //m:controllers
            }
        });
    });

})(this);