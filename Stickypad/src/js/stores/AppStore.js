var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI.js');

var CHANGE_EVENT = 'change';

var _notes = [];

var AppStore = assign({}, EventEmitter.prototype, {
    addNote: function (note) {
        _notes.push(note);
    },
    setNotes: function (notes) {
        _notes = notes;
    },
    getNotes: function () {
        return _notes;
    },
    removeNote: function (noteId) {
        var index = _notes.findIndex(x => x._id.$oid === noteId);
        _notes.splice(index, 1);
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on('change', callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);

    }
});

AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {
        case AppConstants.ADD_NOTE:
            console.log('ADDING NOTE')

            //save store
            AppStore.addNote(action.note)

            //save API
            AppAPI.addNote(action.note)
            //Emit change
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.RECIEVE_NOTES:
            console.log('Recieving NOTEs')

            //save store
            AppStore.setNotes(action.notes)

            //Emit change
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.REMOVE_NOTE:
            //Store REMOVE
            AppStore.removeNote(action.noteId)
            //API REMOVE
            AppAPI.removeNote(action.noteId)

            break;
    }

    return true
});

module.exports = AppStore;