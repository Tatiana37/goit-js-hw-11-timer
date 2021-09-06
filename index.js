const refs = {
    timer: document.querySelector('#timer-1'),
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    minutes: document.querySelector('[data-value="mins"]'),
    seconds: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }

    interval = setInterval(() => {
        const currentTime = Date.now();
        const delta = this.targetDate - currentTime;
        this.getTimeComponents(delta);
        this.updateTimer(delta);
    }, 1000);

    pad(value) {
        return String(value).padStart(2, '0');
    }

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const minutes = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.minutes.textContent = `${minutes}`;
        refs.seconds.textContent = `${seconds}`;
    }

    updateTimer(time) {
        if (time < 0) {
            refs.timer.textContent = 'The End!';
            refs.timer.style.textAlign = `center`;
            refs.timer.style.fontSize = `250px`;
            refs.timer.style.marginTop = `50px`;
            refs.timer.style.color = `yellow`;

        }
    }

    
};

const newTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 29, 2021'),
});