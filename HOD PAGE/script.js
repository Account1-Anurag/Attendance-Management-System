        // JavaScript to handle dynamic calendar and events
        const calendarGrid = document.querySelector('.calendar-grid');
        const noticesContainer = document.querySelector('.notices');
        const eventInput = document.getElementById('eventInput');
        const addEventBtn = document.getElementById('addEventBtn');

        let selectedDate = null;
        const events = {}; // Store events as { 'YYYY-MM-DD': ['Event 1', 'Event 2'] }

        // Helper: Get today's date in YYYY-MM-DD
        function getToday() {
            const today = new Date();
            return today.toISOString().split('T')[0];
        }

        // Helper: Get first and last day of the current month
        function getMonthDays(year, month) {
            const firstDay = new Date(year, month, 1).getDay();
            const lastDate = new Date(year, month + 1, 0).getDate();
            return { firstDay, lastDate };
        }

        // Generate calendar
        function generateCalendar() {
            const today = new Date();
            const year = today.getFullYear();
            const month = today.getMonth();
            const { firstDay, lastDate } = getMonthDays(year, month);

            calendarGrid.innerHTML = '';
            for (let i = 0; i < firstDay; i++) {
                calendarGrid.innerHTML += `<div></div>`; // Empty cells
            }
            for (let date = 1; date <= lastDate; date++) {
                const fullDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
                const isToday = fullDate === getToday();
                calendarGrid.innerHTML += `<div class="${isToday ? 'today' : ''}" data-date="${fullDate}">${date}</div>`;
            }
        }

        // Add event
        addEventBtn.addEventListener('click', () => {
            if (!selectedDate) {
                alert('Please select a date first!');
                return;
            }
            const eventText = eventInput.value.trim();
            if (!eventText) {
                alert('Please enter an event!');
                return;
            }
            if (!events[selectedDate]) {
                events[selectedDate] = [];
            }
            events[selectedDate].push(eventText);
            updateNotices();
            eventInput.value = '';
        });

        // Update Notice Board
        function updateNotices() {
            noticesContainer.innerHTML = '';
            for (const [date, eventList] of Object.entries(events)) {
                eventList.forEach(event => {
                    noticesContainer.innerHTML += `
                        <div class="notice">
                            <div class="notice-title"><strong>${date}</strong></div>
                            <p>${event}</p>
                        </div>
                    `;
                });
            }
        }

        // Handle date selection
        calendarGrid.addEventListener('click', (e) => {
            const date = e.target.dataset.date;
            if (!date) return;
            selectedDate = date;
            alert(`Selected Date: ${selectedDate}`);
        });

        // Initialize calendar
        generateCalendar();
