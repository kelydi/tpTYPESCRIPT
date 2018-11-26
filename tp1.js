var Date1 = /** @class */ (function () {
    function Date1(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    Date1.prototype.getYear = function () {
        return this.year;
    };
    Date1.prototype.getMonth = function () {
        return this.month;
    };
    Date1.prototype.getDay = function () {
        return this.day;
    };
    Date1.prototype.setYear = function (year) {
        this.year = year;
    };
    Date1.prototype.setMonth = function (month) {
        this.month = month;
    };
    Date1.prototype.setDay = function (day) {
        this.day = day;
    };
    Date1.prototype.toString = function (year, month, day) {
        var date = this.year + '-' + this.month + '-' + this.day;
        return date;
    };
    Date1.prototype.create = function (year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
        var defaultDate = this.toString(this.year, this.month, this.day);
        return defaultDate;
    };
    Date1.prototype.setDate = function (year, month, day) {
        return this.create(year, month, day);
    };
    Date1.prototype.yesterday = function () {
        if (this.day == 1) {
            if (this.day == 1) {
                return this.toString((this.year - 1), 12, 31);
            }
            else if (this.month == 11 || this.month == 9 || this.month == 6) {
                return this.toString(this.year, (this.month - 1), 31);
            }
            else if (this.month == 12 || this.month == 10 || this.month == 8) {
                return this.toString(this.year, (this.month - 1), 30);
            }
            else if (this.month == 3) {
                return this.toString(this.year, 2, 28);
            }
        }
        return this.setDate(this.year, this.month, (this.day - 1));
    };
    Date1.prototype.tomorrow = function () {
        return this.setDate(this.year, this.month, (this.day + 1));
    };
    Date1.prototype.addDay = function (day) {
        if (day === void 0) { day = 1; }
        return this.setDate(this.year, this.month, (this.day + day));
    };
    Date1.prototype.addMonth = function (month) {
        if (month === void 0) { month = 1; }
        return this.setDate(this.year, (this.month + month), this.day);
    };
    Date1.prototype.addYear = function (year) {
        if (year === void 0) { year = 1; }
        return this.setDate((this.year + year), this.month, this.day);
    };
    Date1.prototype.subDay = function (day) {
        if (day === void 0) { day = 1; }
        return this.create(this.year, this.month, (this.day - day));
    };
    Date1.prototype.subMonth = function (month) {
        if (month === void 0) { month = 1; }
        return this.create(this.year, (this.month - month), this.day);
    };
    Date1.prototype.subYear = function (year) {
        if (year === void 0) { year = 1; }
        return this.create((this.year - year), this.month, this.day);
    };
    return Date1;
}());
