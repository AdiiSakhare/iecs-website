// Contact page: live "Open now / Closed" badge and copy-to-clipboard buttons

(function () {
    // ---------- Business hours (Mon-Sat 9:30 AM - 6:30 PM, India time) ----------
    // PLACEHOLDER HOURS: keep in sync with the hours shown in contact.html
    const OPEN_MIN = 9 * 60 + 30;
    const CLOSE_MIN = 18 * 60 + 30;
    const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    function initHoursStatus() {
        const badge = document.getElementById('hours-status');
        const text = document.getElementById('hours-status-text');
        if (!badge || !text) return;

        // Read the clock in India time regardless of the visitor's own time zone
        const parts = new Intl.DateTimeFormat('en-US', {
            timeZone: 'Asia/Kolkata',
            weekday: 'short',
            hour: 'numeric',
            minute: 'numeric',
            hourCycle: 'h23'
        }).formatToParts(new Date());
        const get = type => parts.find(p => p.type === type).value;

        const day = DAY_NAMES.indexOf(get('weekday'));
        const minutes = parseInt(get('hour'), 10) * 60 + parseInt(get('minute'), 10);
        const isWorkingDay = day >= 1 && day <= 6;

        let state, label;
        if (isWorkingDay && minutes >= OPEN_MIN && minutes < CLOSE_MIN) {
            state = 'open';
            label = 'Open now · closes 6:30 PM';
        } else {
            state = 'closed';
            let next;
            if (isWorkingDay && minutes < OPEN_MIN) next = 'today';
            else if (day >= 1 && day <= 5) next = 'tomorrow';
            else next = 'Monday'; // Saturday after close, or Sunday
            label = `Closed · opens ${next} 9:30 AM`;
        }

        badge.dataset.state = state;
        text.textContent = label;
        badge.hidden = false;
    }

    // ---------- Copy buttons ----------
    function initCopyButtons() {
        const buttons = document.querySelectorAll('.copy-btn');
        if (!navigator.clipboard) {
            buttons.forEach(btn => btn.remove());
            return;
        }

        buttons.forEach(btn => {
            let timer;
            btn.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(btn.dataset.copy);
                } catch (err) {
                    return;
                }
                btn.classList.add('copied');
                btn.setAttribute('aria-label', 'Copied');
                clearTimeout(timer);
                timer = setTimeout(() => {
                    btn.classList.remove('copied');
                    btn.setAttribute('aria-label', btn.dataset.copy.includes('@') ? 'Copy email address' : 'Copy phone number');
                }, 1600);
            });
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        initHoursStatus();
        initCopyButtons();
    });
})();
