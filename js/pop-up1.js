function showModal() {
    const modal = document.getElementById('contactModal');
    modal.classList.add('active');
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
}

function closeModal() {
    const modal = document.getElementById('contactModal');
    modal.classList.remove('active');
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
}

function showThankYou() {
    const contactModal = document.getElementById('contactModal');
    const thankYouModal = document.getElementById('thankYouModal');
    
    contactModal.classList.remove('active');
    setTimeout(() => {
        thankYouModal.classList.add('active');
    }, 300);
}

function closeThankYou() {
    const thankYouModal = document.getElementById('thankYouModal');
    thankYouModal.classList.remove('active');
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
}

document.addEventListener('click', function(e) {
    const contactModal = document.getElementById('contactModal');
    const thankYouModal = document.getElementById('thankYouModal');
    
    if (contactModal && contactModal.classList.contains('active')) {
        if (e.target === contactModal) {
            closeModal();
        }
    }
    
    if (thankYouModal && thankYouModal.classList.contains('active')) {
        if (e.target === thankYouModal) {
            closeThankYou();
        }
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        closeThankYou();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const trialBtn = document.querySelector('.btn-trial');
    if (trialBtn) {
        trialBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showModal();
        });
    }
    
    const enrollBtns = document.querySelectorAll('.btn-enroll');
    enrollBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showModal();
        });
    });

    const startBtns = document.querySelectorAll('.start-button');
    startBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showModal();
        });
    });
});