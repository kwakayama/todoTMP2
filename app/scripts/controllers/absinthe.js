/*global hackathonAbsinth*/

hackathonAbsinth.Controllers = hackathonAbsinth.Controllers || {};

(function () {
    'use strict';

    hackathonAbsinth.Controllers.AbsintheController = M.Controller.extend({

        _absintheView: null,

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
            if(!this._absintheView) {
                this._absintheView = hackathonAbsinth.Views.AbsintheView.create(this);
            }
            hackathonAbsinth.getLayout().applyViews({
                content: this._absintheView
            });
        }
    });

})();
