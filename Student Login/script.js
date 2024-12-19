document.addEventListener('DOMContentLoaded', () => {
    const dateOptionSelect = document.getElementById('date-option-select');
    const singleDateInput = document.querySelector('.single-date');
    const rangeStartInput = document.querySelector('.range-start');
    const rangeEndInput = document.querySelector('.range-end');
    const studentClassesContainer = document.getElementById('student-classes');
    const attendanceFilter = document.getElementById('attendance-filter');

    const demoData = [
        { date: '2024-11-01', subject: 'Theory of Computation', code: 'CS501', status: 'present' },
        { date: '2024-11-02', subject: 'DBMS', code: 'CS502', status: 'absent' },
        { date: '2024-11-03', subject: 'Cyber Security', code: 'CS503', status: 'present' },
        { date: '2024-11-04', subject: 'Internet of Things', code: 'CS504', status: 'present' },
    ];

    function renderClasses(classes) {
        studentClassesContainer.innerHTML = '';
        classes.forEach(item => {
            const classCard = document.createElement('div');
            classCard.className = 'class-card';

            classCard.innerHTML = `
                <div>
                    <h3>${item.subject} - ${item.code}</h3>
                    <p>${item.date}</p>
                </div>
                <div class="status ${item.status}">${item.status.charAt(0).toUpperCase() + item.status.slice(1)}</div>
            `;

            studentClassesContainer.appendChild(classCard);
        });
    }

    renderClasses(demoData);

    attendanceFilter.addEventListener('change', () => {
        const filterValue = attendanceFilter.value;
        const filteredData = filterValue === 'all'
            ? demoData
            : demoData.filter(item => item.status === filterValue);
        renderClasses(filteredData);
    });

    dateOptionSelect.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        singleDateInput.style.display = selectedValue === 'single' ? 'block' : 'none';
        rangeStartInput.style.display = selectedValue === 'range' ? 'inline-block' : 'none';
        rangeEndInput.style.display = selectedValue === 'range' ? 'inline-block' : 'none';
    });
});
