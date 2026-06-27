console.log("Issue Details JS Loaded");
// Get issue ID from URL
const params = new URLSearchParams(window.location.search);
const issueId = parseInt(params.get("id"));

// Find the issue
const issue = issues.find(i => i.id === issueId);

if (!issue) {
    document.body.innerHTML = "<h1>Issue not found.</h1>";
    throw new Error("Issue not found");
}

console.log(issueId);
console.log(issue);
// ---------- Header ----------
document.getElementById("issue-title").textContent = issue.title;

document.getElementById("issue-meta").textContent =
    `📍 ${issue.location} • ${issue.category} • ${issue.status} • Reported ${issue.reportedDays} days ago`;

// ---------- Summary ----------
document.getElementById("issue-reports").textContent = issue.reports;

document.getElementById("issue-verifications").textContent = issue.verifications;

document.getElementById("issue-status").textContent = issue.status;

document.getElementById("issue-description").textContent = issue.description;

// ---------- Priority Score ----------

document.getElementById("priority-score").textContent =
    `${issue.priority.score} / 100`;

document.getElementById("priority-label").textContent =
    issue.priority.label;

document.getElementById("severity-breakdown").textContent =
    issue.priority.severity;

document.getElementById("reports-breakdown").textContent =
    issue.priority.reports;

document.getElementById("verifications-breakdown").textContent =
    issue.priority.verifications;

document.getElementById("age-breakdown").textContent =
    issue.priority.age;

document.getElementById("total-score").textContent =
    issue.priority.score;
// ---------- Timeline ----------

const timelineContainer = document.getElementById("timeline");

const timelineSteps = [
    { label: "Reported", active: issue.timeline.reported },
    { label: "Verified", active: issue.timeline.verified },
    { label: "Consensus", active: issue.timeline.consensus },
    { label: "Solution", active: issue.timeline.solution },
    { label: "Resolved", active: issue.timeline.resolved }
];

timelineSteps.forEach(step => {

    timelineContainer.innerHTML += `
        <div class="timeline-step ${step.active ? "active" : ""}">
            <div class="circle"></div>
            <p>${step.label}</p>
        </div>
    `;

});
// ---------- Comments ----------

const commentsContainer = document.getElementById("comments-container");

issue.comments.forEach(comment => {

    commentsContainer.innerHTML += `
        <div class="comment-card">
            <p>💬 "${comment.text}"</p>
            <span>— ${comment.user} • ${comment.likes} Likes</span>
        </div>
    `;

});
// ---------- Solutions ----------

const solutionsContainer = document.getElementById("solutions-container");

issue.solutions.forEach(solution => {

    solutionsContainer.innerHTML += `
        <div class="solution-option">
            <input type="radio" name="solution">
            <label>${solution}</label>
        </div>
    `;

});