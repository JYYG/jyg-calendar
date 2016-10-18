app.factory("calConstructor", function(){
   
    var days    = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'], 
        months  = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        
    
    return {
        
        monthDates : function(month, year){
            return new Date(year, month, 0).getDate(); // Get days length in a month
        },
        getDayName : function(year, month, day){
            return new Date(year, month, day).getDay();
        },
        returnDaysName : function(){
            return days;  
        },
        returnMonth : function(month){
            return months[month];
        }
        
    }
    
});