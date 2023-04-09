function daysLeftBeforeNewYear() {
    const newYear = new Date('01-01-2024, 00:00:00 UTC+3').getTime();
    let countDownDays;

    function getDaysLeftBeforeNewYear() {
        const myDate = new Date().getTime();
        const leftBeforeNewYear = newYear - myDate;

        if (myDate > newYear) {
            clearInterval(countDownDays);
            return;
        };

        const days = Math.floor(leftBeforeNewYear / (1000 * 60 * 60 * 24));
        const hours = Math.floor((leftBeforeNewYear / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((leftBeforeNewYear / 1000 / 60) % 60);
        const seconds = Math.floor((leftBeforeNewYear / 1000) % 60);
        
        document.querySelector('.days-timer').innerHTML = days;
        document.querySelector('.hours-timer').innerHTML = hours;
        document.querySelector('.minutes-timer').innerHTML = minutes;
        document.querySelector('.seconds-timer').innerHTML = seconds;
    };

    getDaysLeftBeforeNewYear();
    countDownDays = setInterval(getDaysLeftBeforeNewYear, 1000);
};

daysLeftBeforeNewYear();


