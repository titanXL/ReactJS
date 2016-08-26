var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    searchText:function(search){
        AppDispatcher.handleViewAction({
            actionType : AppConstants.SEARCH_TEXT,
            search  : search
        });
    },
    recieveResults:function(results){
         AppDispatcher.handleViewAction({
            actionType : AppConstants.RECIEVE_RESULTS,
            results  : results
        });
    }
}

module.exports = AppActions;