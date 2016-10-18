app.factory("getToday", function(){
    
    var date    = new Date(),
        today   = date.getDate(),
        month   = date.getMonth(),
        year    = date.getFullYear();
    
    return {
     
        getDate : function(){
            return today;
        },     
        getMonth : function(){
            return month;
        },  
        getYear : function(){
            return year;
        },
        
    };
    
});