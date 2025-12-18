document.addEventListener('DOMContentLoaded', function() {
    const tutorsWrapper = document.querySelector('.tutors-container');
    const tutorsPrevBtn = document.querySelector('.arrow-left');
    const tutorsNextBtn = document.querySelector('.arrow-right');
    const tutorCards = document.querySelectorAll('.tutor-card');
    const tutorsSection = document.querySelector('.tutors-section');
    
    const tutorCardWidth = 325;
    const tutorGap = 20;
    const tutorTotalWidth = tutorCardWidth + tutorGap;
    const tutorsToScroll = 2;
    
    let tutorsScrollPosition = 0;
    
    function updateTutorsArrows() {
        const tutorsWrapperWidth = tutorCards.length * tutorTotalWidth;
        const tutorsContainerWidth = tutorsSection.clientWidth - 200;
        const tutorsMaxScroll = Math.max(0, tutorsWrapperWidth - tutorsContainerWidth);
        
        if (tutorsScrollPosition <= 0) {
            tutorsPrevBtn.style.opacity = '0.5';
            tutorsPrevBtn.style.cursor = 'not-allowed';
            tutorsPrevBtn.disabled = true;
        } else {
            tutorsPrevBtn.style.opacity = '1';
            tutorsPrevBtn.style.cursor = 'pointer';
            tutorsPrevBtn.disabled = false;
        }
        
        if (tutorsScrollPosition >= tutorsMaxScroll) {
            tutorsNextBtn.style.opacity = '0.5';
            tutorsNextBtn.style.cursor = 'not-allowed';
            tutorsNextBtn.disabled = true;
        } else {
            tutorsNextBtn.style.opacity = '1';
            tutorsNextBtn.style.cursor = 'pointer';
            tutorsNextBtn.disabled = false;
        }
    }
    
    function updateTutorsPosition() {
        tutorsWrapper.style.transform = `translateX(-${tutorsScrollPosition}px)`;
        updateTutorsArrows();
    }
    
    tutorsNextBtn.addEventListener('click', () => {
        const tutorsWrapperWidth = tutorCards.length * tutorTotalWidth;
        const tutorsContainerWidth = tutorsSection.clientWidth - 200;
        const tutorsMaxScroll = Math.max(0, tutorsWrapperWidth - tutorsContainerWidth);
        
        if (tutorsScrollPosition < tutorsMaxScroll) {
            tutorsScrollPosition += tutorsToScroll * tutorTotalWidth;
            if (tutorsScrollPosition > tutorsMaxScroll) {
                tutorsScrollPosition = tutorsMaxScroll;
            }
            updateTutorsPosition();
        }
    });
    
    tutorsPrevBtn.addEventListener('click', () => {
        if (tutorsScrollPosition > 0) {
            tutorsScrollPosition -= tutorsToScroll * tutorTotalWidth;
            if (tutorsScrollPosition < 0) {
                tutorsScrollPosition = 0;
            }
            updateTutorsPosition();
        }
    });
    
    // Слайдер для отзывов
    const reviewsWrapper = document.querySelector('.reviews-container');
    const reviewsPrevBtn = document.querySelector('.reviews-arrow-left');
    const reviewsNextBtn = document.querySelector('.reviews-arrow-right');
    const reviewCards = document.querySelectorAll('.review-card');
    const reviewsSection = document.querySelector('.reviews-section');
    
    const reviewCardWidth = 454;
    const reviewGap = 20;
    const reviewTotalWidth = reviewCardWidth + reviewGap;
    const reviewsToScroll = 2;
    
    let reviewsScrollPosition = 0;
    
    function updateReviewsArrows() {
        const reviewsWrapperWidth = reviewCards.length * reviewTotalWidth;
        const reviewsContainerWidth = reviewsSection.clientWidth - 200;
        const reviewsMaxScroll = Math.max(0, reviewsWrapperWidth - reviewsContainerWidth);
        
        if (reviewsScrollPosition <= 0) {
            reviewsPrevBtn.style.opacity = '0.5';
            reviewsPrevBtn.style.cursor = 'not-allowed';
            reviewsPrevBtn.disabled = true;
        } else {
            reviewsPrevBtn.style.opacity = '1';
            reviewsPrevBtn.style.cursor = 'pointer';
            reviewsPrevBtn.disabled = false;
        }
        
        if (reviewsScrollPosition >= reviewsMaxScroll) {
            reviewsNextBtn.style.opacity = '0.5';
            reviewsNextBtn.style.cursor = 'not-allowed';
            reviewsNextBtn.disabled = true;
        } else {
            reviewsNextBtn.style.opacity = '1';
            reviewsNextBtn.style.cursor = 'pointer';
            reviewsNextBtn.disabled = false;
        }
    }
    
    function updateReviewsPosition() {
        reviewsWrapper.style.transform = `translateX(-${reviewsScrollPosition}px)`;
        updateReviewsArrows();
    }
    
    reviewsNextBtn.addEventListener('click', () => {
        const reviewsWrapperWidth = reviewCards.length * reviewTotalWidth;
        const reviewsContainerWidth = reviewsSection.clientWidth - 200;
        const reviewsMaxScroll = Math.max(0, reviewsWrapperWidth - reviewsContainerWidth);
        
        if (reviewsScrollPosition < reviewsMaxScroll) {
            reviewsScrollPosition += reviewsToScroll * reviewTotalWidth;
            if (reviewsScrollPosition > reviewsMaxScroll) {
                reviewsScrollPosition = reviewsMaxScroll;
            }
            updateReviewsPosition();
        }
    });
    
    reviewsPrevBtn.addEventListener('click', () => {
        if (reviewsScrollPosition > 0) {
            reviewsScrollPosition -= reviewsToScroll * reviewTotalWidth;
            if (reviewsScrollPosition < 0) {
                reviewsScrollPosition = 0;
            }
            updateReviewsPosition();
        }
    });
    
    updateTutorsArrows();
    updateReviewsArrows();
    window.addEventListener('resize', function() {
        updateTutorsArrows();
        updateReviewsArrows();
    });
});