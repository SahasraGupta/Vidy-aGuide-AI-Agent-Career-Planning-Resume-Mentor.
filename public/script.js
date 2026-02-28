document.getElementById("resumeForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const resumeText = document.getElementById("resumeText").value;

    // Show loading
    document.getElementById("loading").style.display = "block";
    document.getElementById("resumeResult").innerHTML = "";

    // Fake delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Hide loading
    document.getElementById("loading").style.display = "none";

    let text = resumeText.toLowerCase();

    /* Section-wise scoring */
    let skillsScore = text.includes("skills") ? 2 : 0;
    let projectScore = text.includes("project") ? 3 : 0;
    let internshipScore = text.includes("internship") ? 2 : 0;
    let achievementScore = text.includes("achievement") ? 2 : 0;
    let educationScore = text.includes("cgpa") ? 1 : 0;

    /* Total Score */
    let score = skillsScore + projectScore + internshipScore + achievementScore + educationScore;
    if (score > 10) score = 10;

    let percentage = score * 10;

    let scoreFill = document.getElementById("scoreFill");

    // Reset bar before animating
    scoreFill.style.width = "0%";

    setTimeout(() => {
        scoreFill.style.width = percentage + "%";
    }, 100);

    // Change color based on score
    if (score >= 8) {
        scoreFill.style.background = "linear-gradient(45deg, #00c853, #64dd17)";
    } 
    else if (score >= 5) {
        scoreFill.style.background = "linear-gradient(45deg, #ffb300, #ffca28)";
    } 
    else {
        scoreFill.style.background = "linear-gradient(45deg, #d50000, #ff1744)";
    }

    document.getElementById("scoreText").innerText = "Resume Score: " + score + "/10";

    /* Suggestions Logic */
    let suggestions = "";

    if (score <= 4) {
        suggestions += "Overall resume quality is low.\n\n";
    } 
    else if (score <= 7) {
        suggestions += "Resume is average but needs improvement.\n\n";
    } 
    else {
        suggestions += "Strong resume! Minor improvements suggested.\n\n";
    }

    if (!text.includes("project")) {
        suggestions += "- Add at least 2 strong projects.\n";
    }

    if (!text.includes("internship")) {
        suggestions += "- Include internship or work experience.\n";
    }

    if (!text.includes("certification")) {
        suggestions += "- Add relevant certifications.\n";
    }

    if (!text.includes("achievement")) {
        suggestions += "- Mention measurable achievements.\n";
    }

    if (!text.includes("cgpa")) {
        suggestions += "- Include academic performance (CGPA/percentage).\n";
    }

    /* Final Output */
    let finalOutput =
        "Section Analysis:\n\n" +
        "Skills: " + (skillsScore ? "Present (+2)" : "Missing") + "\n" +
        "Projects: " + (projectScore ? "Present (+3)" : "Missing") + "\n" +
        "Internship: " + (internshipScore ? "Present (+2)" : "Missing") + "\n" +
        "Achievements: " + (achievementScore ? "Present (+2)" : "Missing") + "\n" +
        "Education (CGPA): " + (educationScore ? "Present (+1)" : "Missing") +
        "\n\nSuggestions:\n\n" +
        suggestions;

    document.getElementById("resumeResult").innerText = finalOutput;
    // Show download button
document.getElementById("downloadBtn").style.display = "inline-block";

// Store report text for download
window.generatedReport = finalOutput;
});
/* =========================
   Career Planner Logic
========================= */
/* =========================
   Advanced Career Planner
========================= */

document.getElementById("careerForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const skillsInput = document.getElementById("skills").value.toLowerCase();
    const interestsInput = document.getElementById("interests").value.toLowerCase();

    let career = "";
    let requiredSkills = [];
    let salary = "";
    let demand = "";

    /* Career Decision */

    if (skillsInput.includes("python") || interestsInput.includes("ai")) {
        career = "AI Engineer";
        requiredSkills = ["python", "machine learning", "data structures", "deep learning"];
        salary = "₹6L – ₹20L per year";
        demand = "High Demand 🚀";
    }
    else if (skillsInput.includes("java")) {
        career = "Backend Developer";
        requiredSkills = ["java", "spring boot", "sql", "api development"];
        salary = "₹5L – ₹15L per year";
        demand = "Stable & Growing 📈";
    }
    else if (skillsInput.includes("html") || skillsInput.includes("css")) {
        career = "Frontend Developer";
        requiredSkills = ["javascript", "react", "responsive design"];
        salary = "₹4L – ₹12L per year";
        demand = "High Demand 💻";
    }
    else {
        career = "Software Developer";
        requiredSkills = ["programming", "data structures", "oops"];
        salary = "₹4L – ₹10L per year";
        demand = "Always Needed 🔥";
    }

    /* Skill Gap Detection */

    let missingSkills = [];
    requiredSkills.forEach(skill => {
        if (!skillsInput.includes(skill)) {
            missingSkills.push(skill);
        }
    });
    /* Career Readiness Level */

let readiness = "";
let readinessColor = "";

if (missingSkills.length === 0) {
    readiness = "🟢 Job Ready";
    readinessColor = "#00c853";
}
else if (missingSkills.length <= 2) {
    readiness = "🟡 Almost Ready";
    readinessColor = "#ffb300";
}
else {
    readiness = "🔴 Beginner Level";
    readinessColor = "#ff1744";
}

    /* 6 Month Timeline */

    let timeline = `
Month 1-2: Learn Fundamentals
Month 3-4: Build 2 Projects
Month 5: Practice Interview Questions
Month 6: Apply for Internships/Jobs
`;
let weeklyPlan = `
This Week Action Plan:
- Study core concepts for 2 hours daily
- Practice 5 coding problems
- Work on one mini project
- Update your GitHub profile
`;
let dailyPlan = `
Today’s Task:
- Revise one concept
- Solve 2 coding problems
- Spend 30 mins on project
`;
/* Final Output */
let output = `
🎯 Recommended Career: ${career}
💰 Salary Range: ${salary}
📈 Market Demand: ${demand}
📊 Career Readiness: ${readiness}
⚠ Skill Gap:
${missingSkills.length > 0 ? missingSkills.map(s => "- " + s).join("\n") : "No major gaps detected 🎉"}
📅 6-Month Action Plan:
${timeline}
🗓 Weekly Plan:
${weeklyPlan}
✅ Today’s Action:
${dailyPlan}
`;
document.getElementById("result").innerText = output;
document.getElementById("result").innerText = output;
    document.getElementById("result").innerText = output;
});
/* =========================
   Download Resume Report
========================= */

document.getElementById("downloadBtn")?.addEventListener("click", function () {

    const blob = new Blob([window.generatedReport], { type: "text/plain" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Resume_Report.txt";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});