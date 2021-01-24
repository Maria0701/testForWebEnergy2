const SECONDS_IN_TIME = {
    month: 2592000,
    days: 86400,
    hours: 3600,
    minutes: 60,
};

export class Countdown {
    constructor(element) {
        this.element = element;
        this.currentDate = null;
        this.targetDate = null;
        this.difference = null;
        this.days1 = null;
        this.days2 = null;
        this.hours1 = null;
        this.hours2 = null;
        this.minutes1 = null;
        this.minutes2 = null;
        this.init()
    }

    init() {
        this.targetDate = new Date(this.element.dataset.timer);
        this.currentDate = Date.now();
        this.difference = this.targetDate - this.currentDate;
        this.days1 = this.element.querySelector('[data-time="days1"]');
        this.days2 = this.element.querySelector('[data-time="days2"]');
        this.hours1 = this.element.querySelector('[data-time="hours1"]');
        this.hours2 = this.element.querySelector('[data-time="hours2"]');
        this.minutes1 = this.element.querySelector('[data-time="minutes1"]');
        this.minutes2 = this.element.querySelector('[data-time="minutes2"]');
        this.setTimes();
    }

    setTimes() {
        if (this.difference < 0) {
            this.element.innerHTML = '';
            this.element.innerHTML = `<span style="color:red">Акция закончилась</span>`;
            return;
        }

        let secondsLeft = this.difference / 1000;

        secondsLeft = secondsLeft % SECONDS_IN_TIME.month;

        const days = this.roundUp(parseInt(secondsLeft / SECONDS_IN_TIME.days));
        secondsLeft = secondsLeft % SECONDS_IN_TIME.days;

        const hours = this.roundUp(parseInt(secondsLeft / SECONDS_IN_TIME.hours));
        secondsLeft  = secondsLeft % SECONDS_IN_TIME.hours;

        const minutes = this.roundUp(parseInt(secondsLeft / SECONDS_IN_TIME.minutes));
        secondsLeft  = secondsLeft % SECONDS_IN_TIME.minutes;

        this.visualizeTimer(hours, days, minutes);
    }

    visualizeTimer(hours, days, minutes) {
        this.days1.innerHTML = days[0];
        this.days2.innerHTML = days[1];
        this.hours1.innerHTML = hours[0];
        this.hours2.innerHTML = hours[1];
        this.minutes1.innerHTML = minutes[0];
        this.minutes2.innerHTML = minutes[1];
    }

    roundUp(el) {
        return (el < 10 ? '0' : '') + el;
    }
}