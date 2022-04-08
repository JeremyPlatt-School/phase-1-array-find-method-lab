// code your solution here

function findWin(record){
    if (record.result === 'W'){
        
        return record.year;
    } else{
        return undefined;
    }
}

function superbowlWin(record){
    let findYear = record.find(findWin);
    if(findYear != undefined){
     let foundYear = findYear.year;
     console.log(foundYear);
     return foundYear;
    } else {
        return undefined;
    }

}

