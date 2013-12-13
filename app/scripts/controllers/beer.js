/*global hackathonAbsinth*/

hackathonAbsinth.Controllers = hackathonAbsinth.Controllers || {};

(function () {
    'use strict';

    hackathonAbsinth.Controllers.BeerController = M.Controller.extend({

        _beerView: null,

        applicationStart: function() {
            this._initLayout();
        },

        show: function() {
            this._setViews();
            hackathonAbsinth.getLayout().startTransition();
        },

        _initLayout: function() {
            var _layout = M.SwitchHeaderContentLayout.design(this, null, true);
            hackathonAbsinth.setLayout(_layout);
            this._setViews();
        },

        _setViews: function() {
            if(!this._beerView) {
                this._beerView = hackathonAbsinth.Views.BeerView.create(this);
            }
            hackathonAbsinth.getLayout().applyViews({
                content: this._beerView
            });
        }
    });

})();
