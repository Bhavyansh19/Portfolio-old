// Button for viewing CV
const viewCvBtn = document.getElementById('viewCvBtn');
viewCvBtn.addEventListener('click', () => {
    window.open('https://drive.google.com/file/d/1c6VZbXvTthSK9eJWDRyINoZugMgSnIVr/view?usp=sharing', '_blank');
});

// Button for contacting via email
const contactMeBtn = document.getElementById('contactMeBtn');
contactMeBtn.addEventListener('click', () => {
    window.location.href = 'mailto:bhavyansh.bj@gmail.com?subject=Contacting%20You&body=Hello%20Bhavyansh,';
});
