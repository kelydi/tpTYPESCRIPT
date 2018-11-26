"use strict";
//importation de la classe Task
exports.__esModule = true;
//Classe Projet
var Projet = /** @class */ (function () {
    //constructeur
    function Projet(task) {
        this._tasks = task;
    }
    Object.defineProperty(Projet.prototype, "tasks", {
        //getter
        get: function () {
            return this._tasks;
        },
        //setter
        set: function (tasks) {
            this._tasks = tasks;
        },
        enumerable: true,
        configurable: true
    });
    Projet.prototype.addtask = function (tasks, Ntask) {
        tasks[tasks.length] = Ntask;
        return tasks;
    };
    Projet.prototype.getTask = function (tasks, position) {
        var TachPosit = tasks[position];
        return TachPosit;
    };
    Projet.prototype.deleteTask = function (tasks, position) {
        tasks[position] = null;
        var permut;
        for (var _i = position; _i < tasks.length; _i++) {
            permut = tasks[_i];
            tasks[_i] = tasks[_i + 1];
            tasks[_i + 1] = permut;
        }
        return tasks;
    };
    Projet.prototype.all = function (tasks) {
        for (var _i = 0; _i < tasks.length; _i++) {
            console.log(tasks[_i]);
        }
    };
    Projet.prototype.complete = function (tasks) {
        for (var _i = 0; _i < tasks.length; _i++) {
            if (tasks[_i]._checked = true) {
                console.log(tasks[_i]);
            }
        }
    };
    Projet.prototype.uncomplete = function (tasks) {
        for (var _i = 0; _i < tasks.length; _i++) {
            if (tasks[_i]._checked = false) {
                console.log(tasks[_i]);
            }
        }
    };
    return Projet;
}());
exports.Projet = Projet;
