export async function generateCareerAdvice(skills, interests) {
    return `
    Based on your skills: ${skills}
    And interests: ${interests}

    Recommended Career Paths:
    - Software Developer
    - Data Analyst
    - AI Engineer

    Suggested Skills to Learn:
    - DSA
    - System Design
    - Machine Learning
    `;
}

export async function analyzeResume(resumeText) {
    return `
    Resume Score: 7/10

    Suggestions:
    - Add measurable achievements
    - Include technical projects
    - Improve summary section
    `;
}