import React, { useState } from 'react';

// Planner Profile Component
const PlannerProfileComponent = () => {
    const [profile] = useState({
        name: '정재영',
        jobTitle: '기획자',
        phone: '01088735158',
        github: 'jjy716',
        bio: '서비스 전략 수립부터 실행까지 전 과정을 주도하는 기획자입니다. 사용자의 니즈를 분석하고, 데이터 기반의 전략을 세워 비즈니스 성과를 만들어냅니다.',
        skills: ['서비스 기획', '데이터 분석', '사용자 리서치', '시장 분석', '프로젝트 관리', 'UX/UI 기획'],
        expertise: [
            {
                id: 1,
                title: '디지털 서비스 기획',
                description: '모바일/웹 서비스의 전략 수립, 기능 정의, 로드맵 구성',
                icon: '🌐'
            },
            {
                id: 2,
                title: '데이터 기반 의사결정',
                description: '사용자 행동 분석, 비즈니스 인사이트 도출, KPI 관리',
                icon: '📊'
            },
            {
                id: 3,
                title: '사용자 중심 설계',
                description: '사용자 리서치, 페르소나 개발, 고객 여정 맵핑',
                icon: '👥'
            },
            {
                id: 4,
                title: '팀 협업 리더십',
                description: '개발팀, 디자인팀, 마케팅팀 등 크로스펑셔널 협업 경험',
                icon: '🤝'
            }
        ],
        values: [
            { title: '사용자 중심', description: '항상 사용자의 관점에서 생각합니다' },
            { title: '데이터 기반', description: '직관이 아닌 데이터로 결정합니다' },
            { title: '실행 중심', description: '아이디어를 현실로 만들어냅니다' }
        ]
    });

    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <div className="profile-container">
            <header className="profile-header">
                <div className="profile-intro">
                    <h1>{profile.name}</h1>
                    <p className="job-title">{profile.jobTitle}</p>
                    <p className="bio">{profile.bio}</p>
                </div>
            </header>

            <main className="profile-main">
                {/* Contact Section */}
                <section className="contact-section">
                    <h2>📞 연락처</h2>
                    <div className="contact-grid">
                        <div className="contact-item">
                            <strong>이름:</strong> {profile.name}
                        </div>
                        <div className="contact-item">
                            <strong>직무:</strong> {profile.jobTitle}
                        </div>
                        <div className="contact-item">
                            <strong>전화:</strong> {profile.phone}
                        </div>
                        <div className="contact-item">
                            <strong>GitHub:</strong>{' '}
                            <a 
                                href={`https://github.com/${profile.github}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                @{profile.github}
                            </a>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="skills-section">
                    <h2>🎯 역량 & 전문분야</h2>
                    <div className="skills-grid">
                        {profile.skills.map((skill, index) => (
                            <div
                                key={index}
                                className="skill-card"
                                onMouseEnter={() => setHoveredSkill(index)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                style={{
                                    transform: hoveredSkill === index ? 'scale(1.1)' : 'scale(1)',
                                    transition: 'transform 0.3s ease'
                                }}
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Expertise Section */}
                <section className="expertise-section">
                    <h2>💼 주요 경험분야</h2>
                    <div className="expertise-grid">
                        {profile.expertise.map((item) => (
                            <div key={item.id} className="expertise-card">
                                <span className="expertise-icon">{item.icon}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Values Section */}
                <section className="values-section">
                    <h2>🎨 기획 철학</h2>
                    <div className="values-grid">
                        {profile.values.map((value, index) => (
                            <div key={index} className="value-card">
                                <h4>{value.title}</h4>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="profile-footer">
                <p>&copy; 2026 {profile.name}. All rights reserved.</p>
            </footer>
        </div>
    );
};

// Export for use in other files
export default PlannerProfileComponent;

// Example usage in main App
export const App = () => {
    return (
        <div className="app">
            <PlannerProfileComponent />
        </div>
    );
};