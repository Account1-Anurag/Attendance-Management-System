// Handle File Upload
document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const fileInput = document.getElementById('file');
    if (fileInput.files.length > 0) {
        alert(`File "${fileInput.files[0].name}" uploaded successfully.`);
    } else {
        alert("Please select a file to upload.");
    }
});

// Handle Announcement
document.getElementById('sendAnnouncement').addEventListener('click', function () {
    const announcement = document.querySelector('.announcements textarea').value;
    if (announcement.trim()) {
        alert("Announcement sent: " + announcement);
        document.querySelector('.announcements textarea').value = "";
    } else {
        alert("Please write something before sending.");
    }
});
