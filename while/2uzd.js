"use strict"

function countDays(t, n){
    let used_fuel = 0;
    let days_passed = 0;
    let fuel_for_next_day = 2*n;
    while ((t-used_fuel)>=fuel_for_next_day){
        days_passed++;
        if (days_passed%2 != 0){
            used_fuel+=2*n;
            fuel_for_next_day = n;
        }
        else {
            used_fuel+=n;
            fuel_for_next_day = 2*n;
        }
    }
    return days_passed;
}

console.log(`There is enough fuel for ${countDays(112, 11)} days`);
