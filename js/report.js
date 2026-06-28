console.log("Report JS Loaded");

const reportForm = document.getElementById("reportForm");

reportForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const location = document.getElementById("location").value;
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;
    const priority = document.getElementById("priority").value;

const newIssue = {
    id: Date.now(),

    title: title,

    category: category,

    location: location,

    latitude: parseFloat(latitude),

    longitude: parseFloat(longitude),

    priority: priority,

    status: "Reported",

    reports: 1,

    verifications: 0,

    description: description,

    reportedDays: 0,

    timeline: [
        {
            stage: "Reported",
            completed: true
        },
        {
            stage: "Verified",
            completed: false
        },
        {
            stage: "Consensus",
            completed: false
        },
        {
            stage: "Solution",
            completed: false
        },
        {
            stage: "Resolved",
            completed: false
        }
    ],

    comments: [],

    solutions: []
};
// Get existing user issues
let userIssues = JSON.parse(localStorage.getItem("userIssues")) || [];
userIssues.push(newIssue);
localStorage.setItem("userIssues", JSON.stringify(userIssues));

console.log(userIssues);

});