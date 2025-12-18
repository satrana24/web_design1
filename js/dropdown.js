document.addEventListener('DOMContentLoaded', function() {
    const examTypes = document.querySelectorAll('.exam-type');
            
    examTypes.forEach(type => {
        type.addEventListener('click', function() {
            examTypes.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const dropdownTab = document.querySelector('.dropdown-tab');
    const dropdownMenu = document.querySelector('.dropdown-menu');
            
    dropdownTab.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
            
    document.addEventListener('click', function(e) {
        if (!dropdownTab.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});