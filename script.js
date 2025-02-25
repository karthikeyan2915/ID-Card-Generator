document.getElementById('idCardForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const studentPhoto = document.getElementById('studentPhoto').files[0];

    if (studentName && studentPhoto) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('previewPhoto').src = e.target.result;
            document.querySelector('.student-name').textContent = studentName;
        };
        reader.readAsDataURL(studentPhoto);
    }
});