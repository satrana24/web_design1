function showPaymentModal() {
    const modal = document.getElementById('paymentModal');
    if (modal) {
        modal.classList.add('active');
        document.documentElement.classList.add('modal-open');
        document.body.classList.add('modal-open');
    }
}

function closePaymentModal() {
    const modal = document.getElementById('paymentModal');
    if (modal) {
        modal.classList.remove('active');
        document.documentElement.classList.remove('modal-open');
        document.body.classList.remove('modal-open');
    }
}

function showThankYou() {
    const modal = document.getElementById('thankYouModal');
    if (modal) {
        modal.classList.add('active');
        document.documentElement.classList.add('modal-open');
        document.body.classList.add('modal-open');
    }
}

function closeThankYou() {
    const modal = document.getElementById('thankYouModal');
    if (modal) {
        modal.classList.remove('active');
        document.documentElement.classList.remove('modal-open');
        document.body.classList.remove('modal-open');
    }
}

function processPayment() {
    console.log('Оплата обрабатывается...');
    
    closePaymentModal();

    setTimeout(() => {
        showThankYou();
    }, 300);
}

document.addEventListener('click', function(e) {
    const paymentModal = document.getElementById('paymentModal');
    const thankYouModal = document.getElementById('thankYouModal');
    
    if (paymentModal && paymentModal.classList.contains('active')) {
        if (e.target === paymentModal) {
            closePaymentModal();
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
        closePaymentModal();
        closeThankYou();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const paymentBtns = document.querySelectorAll('.btn-enroll2');
    paymentBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showPaymentModal();
        });
    });
    
    const trialBtn = document.querySelector('.btn-trial');
    if (trialBtn) {
        trialBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showPaymentModal();
        });
    }
});