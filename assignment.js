// https://github.com/AR-Raqeeb/js-assignment

// 1. Converting kilometer to meter

function kilometerToMeter(kilometer){
    if(kilometer < 0){
        return console.log("Enter a valid distance to convert from kilometer to meter");
    }
    else{
        var convertedValue = kilometer * 1000; //any given kilometer value will be multiplied by 1000 to convert it into Meter
        return convertedValue;
    }
    
}

var convertedMeterValue = kilometerToMeter(155);
console.log(convertedMeterValue);




// 2. Calculating total budget

function budgetCalculator(watch, phone, laptop){
    if(watch<0 || phone<0 || laptop<0){
        return console.log("Enter a valid quantity for each items"); // if someone gives negative quantity as input
    }
    else{
        var totalExpense = (watch*50) + (phone*100) + (laptop*500); // multiplying quantity and price , then adding them together
        return totalExpense;
    }
}

var totalBudgetNeeded = budgetCalculator (2, 4, 6); // input the total number of watch, phone and laptop you want to buy
console.log(totalBudgetNeeded);





// 3. Hotel Cost Management

function hotelCost(numberOfDays){
    var totalCost = numberOfDays;  // a temporary variable that holds total number of days, just to make the calculation easier
    
    if(numberOfDays>=0 && numberOfDays <=10){
        totalCost = totalCost * 100; // 100tk per night for first 10 days.
        return totalCost;
    }
    else if(numberOfDays>=11 && numberOfDays <=20){
        totalCost = (10 * 100) + ((numberOfDays - 10)*80); /* 80tk per night for days between 11 to 20. 
                                                              Here, I calculated the expense for first 10 days separately 
                                                              and then added it to the rest of the days expense */
        return totalCost;
    }
    else if(numberOfDays>=21){
        totalCost = (10 * 100) + (10 * 80) + ((numberOfDays - 20)*50); /* 50tk per night for days between 21 to infinity.
                                                                          Here, I calculated the expense for first 20 days separately 
                                                                          and then added it to the rest of the days expense.*/
        return totalCost;
    }
    else{
        return console.log("Enter a valid number of days to stay. Hint: 0 or more"); // if someone gives negative number as input
    }
}

var totalHotelExpense = hotelCost(137); // enter the total number of days you are going to stay
console.log(totalHotelExpense);






// 4. Friend with the longest name

function megaFriend(friendsName){
    var tempLongestName = friendsName [0]; // initially, keeping the first index element in a temporary variable to compare it with others

    for(var i=0; i<friendsName.length; i++){ // loop will run as many times as the length of the array
        
        if(typeof(friendsName[i])!=="string"){ 
            return console.log("Enter a valid name as array element"); // if someone enters an invalid name like, numbers or symbols
        }
        else if(friendsName [i].length > tempLongestName.length){
            tempLongestName = friendsName [i]; /* comparing the temporary variable and its next element.
                                                  If the next element is bigger in size than the one already stored in the variable,
                                                  then it will replace the value stored in temporary variable*/
        }
    }
    return tempLongestName;
}

var longestName = megaFriend (["Akash", "Shuhin", "Arif", "Maizuddin", "Shorifullah", "Sangram", "Syed Muzakkir Ali", "Syed Mozumder Ali"]);  // array element input 
console.log(longestName);