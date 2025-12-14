"use strict"

function getStatOnBook(chapters){
    let chapters_read=0;
    let reading_days=0;
    do {
        reading_days+=1;
        chapters_read+=reading_days;
    }
    while (chapters_read<=chapters);

    return [reading_days, (chapters/reading_days.toFixed(2))];
}

const [days, chapters]=getStatOnBook(17);
console.log(`It takes ${days} days to read the book with ${chapters} chapters per day on average`);

