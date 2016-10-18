/**
 *  ANGULARJS BOOTSTRAP APP
 *
 *  @desc
 *
 *  @examples
 *
 *  @author Jean-Yves GATEAU <jeanyves.gateau@gmail.com>
 *
 */

// APP INIT
var app = angular.module('app', ['ngRoute']);


// MAIN CTRL
app.controller('MainCtrl', function($scope, getToday, calConstructor){
    
    var day = parseInt(getToday.getDate()),
        month = parseInt(getToday.getMonth()),
        year = parseInt(getToday.getYear());    

    
    /* ---- */
    
    // Days Name 
    $scope.daysName = calConstructor.returnDaysName();
    
    // Current Month
    $scope.currentMonth = calConstructor.returnMonth(month);
    
    // Month length
    $scope.monthDates = function(){
        var results = [];
        for(var i = 1; i <= calConstructor.monthDates(month, year) + 1; i++){
            results.push(i);
        }
        return results;
    };
    
    // Previous Month Dates
    $scope.prevMonthDates = function(){
        var results = [],
            firstDayNum = calConstructor.getDayName(year, month, 1);
        for(var i = 0; i < firstDayNum; i++){
            results.push(i);
        }
        return results;
    };
    
    // Next Month Dates
    $scope.nextMonthDates = function(){
        var results = [],
            firstDayNum = calConstructor.getDayName(year, month, 0);
        for(var i = 0; i < firstDayNum; i++){
            results.push(i);
        }
        return results;
    };
    
    
    /* ---- */
    
    
    $scope.prevMonth = function(){
        var day = day - 1,
            month = month - 1,
            year = year - 1;
        console.log('prevMonth');      
    }    
    
    $scope.nextMonth = function(){
        var day = day + 1,
            month = month + 1,
            year = year + 1;
        console.log('nextMonth');      
    }
    
});