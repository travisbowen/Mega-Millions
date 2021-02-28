
// Functions that we will probably need

import { useState } from "react"

// Date converter from 2021-02-16T00:00:00.000 to
export const dateConverter = (passedDate) => {

    let month = new Array();
    month[1] = "January";
    month[2] = "February";
    month[3] = "March";
    month[4] = "April";
    month[5] = "May";
    month[6] = "June";
    month[7] = "July";
    month[8] = "August";
    month[9] = "September";
    month[10] = "October";
    month[11] = "November";
    month[12] = "December";


    let year = passedDate.substring(0,4)
    let monthNum = parseInt(passedDate.substring(5,7))
    let day = passedDate.substring(8,10)
    
    let returnDate =  month[monthNum] + ' ' + day + ', ' + year
    return returnDate
}


    
// Filter by all time

export const allTimeSort = (passedDate) => {
    //console.log(passedDate)
    let allDates = []
    for(var i in passedDate){
        allDates.push(passedDate[i]);
    };
    return allDates

};

// Filter by year
export const yearSort = (passedDate, year) => {
    //console.log(passedDate)
    let yearDates = []
    
    
    for(var i in passedDate){
        
        if (passedDate[i].draw_date.substring(0,4) === year) {
            yearDates.push(passedDate[i]);
        }
    };
    return yearDates

};
// Filter by month

export const monthSort = (passedDate, month) => {
    //console.log(passedDate)
    let monthDates = []
    
    
    for(var i in passedDate){
        
        if (passedDate[i].draw_date.substring(5,7) === month) {
            monthDates.push(passedDate[i]);
        }
    };
    return monthDates

};
// Sort if contains number
export const numSearchSort = (passedWinners, number) => {
    //console.log(passedDate)
    let winners = []
    
    
    
    for(var i in passedWinners){
        
        if (passedWinners[i].winning_numbers.includes(number) === true) {
            winners.push(passedWinners[i]);
        }
    };

    //gives number of winning numbers with passed number
    console.log(winners.length)
    return winners

};


