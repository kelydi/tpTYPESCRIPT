"use strict";
//importations de la classe priority et date
exports.__esModule = true;
// Classe task
var Task = /** @class */ (function () {
    //constructeurs 
    function Task(content, date, priority, checked) {
        this._checked = false;
        this._content = content;
        this._date = date;
        this._priority = priority;
        this._checked = checked;
    }
    Object.defineProperty(Task.prototype, "content", {
        //getters
        get: function () {
            return this._content;
        },
        //setters
        set: function (content) {
            this._content = content;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (date) {
            this._date = date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        set: function (priority) {
            this._priority = priority;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (checked) {
            this._checked = checked;
        },
        enumerable: true,
        configurable: true
    });
    //les méthodes 
    Task.prototype.add = function (content, date, priority) {
        var id = Math.random() * 58;
        return id;
    };
    Task.prototype.update = function (content, date, priority, checked) {
        this._content = content;
        this._date = date;
        this._priority = priority;
        this._checked = checked;
    };
    Task.prototype.close = function (checked) {
        return true;
    };
    Task.prototype.toString = function (content, date, priority, checked) {
        content = this._content;
        date = this._date;
        priority = this._priority;
        checked = this._checked;
        var tach = " CONTENU : " + content + "\n DATE : " + date + "\n PRIORITE : " + priority + "\n ETAT : " + checked;
        return tach;
    };
    return Task;
}());
exports["default"] = Task;
