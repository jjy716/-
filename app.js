// Profile Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('기획자 포트폴리오 페이지가 로드되었습니다!');
    
    // Add animation to skills
    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill, index) => {
        skill.style.animationDelay = `${index * 0.1}s`;
        skill.style.animation = 'fadeIn 0.6s ease-out forwards';
    });
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Function to display profile information
function displayProfile() {
    const profile = {
        name: '정재영',
        jobTitle: '기획자',
        phone: '01088735158',
        github: 'jjy716',
        skills: ['서비스 기획', '데이터 분석', '사용자 리서치', '시장 분석', '프로젝트 관리', 'UX/UI 기획'],
        bio: '서비스 전략 수립부터 실행까지 전 과정을 주도하는 기획자입니다. 사용자의 니즈를 분석하고, 데이터 기반의 전략을 세워 비즈니스 성과를 만들어냅니다.'
    };
    
    console.log('프로필 정보:', profile);
    return profile;
}

// Function to validate phone number format
function validatePhone(phoneNumber) {
    const phoneRegex = /^01[0-9]-?\d{3,4}-?\d{4}$/;
    return phoneRegex.test(phoneNumber);
}

// Function to get contact information
function getContactInfo() {
    const contact = {
        name: '정재영',
        jobTitle: '기획자 (Planner)',
        phone: '01088735158',
        github: 'https://github.com/jjy716'
    };
    return contact;
}

// Initialize when page loads
window.addEventListener('load', function() {
    const profile = displayProfile();
    console.log('환영합니다!', profile.name, '(' + profile.jobTitle + ')');
    
    // Add interactive feature
    const header = document.querySelector('header');
    if (header) {
        header.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        header.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});