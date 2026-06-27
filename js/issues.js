const issues = [
{
    id: 1,

    title: "Missing Crosswalk",

    category: "Safety",

    location: "Harmony Hills High School",

    priority: "High",

    severity: "High",

    status: "Verified",

    reportedDays: 7,

    reports: 23,

    verifications: 18,

    verificationPercent: 78,

    priority: {
    score: 88,
    label: "🔴 HIGH PRIORITY",
    severity: "High (40 pts)",
    reports: "23 (20 pts)",
    verifications: "14 (18 pts)",
    age: "7 Days (10 pts)"
},

    description:
        "Students cross this road every day without a designated pedestrian crossing, creating a significant safety risk during school hours.",

    timeline: {
        reported: true,
        verified: true,
        consensus: false,
        solution: false,
        resolved: false
    },

    comments: [
        {
            user: "Ahmed",
            text: "Cars rarely stop for children here.",
            likes: 12
        },

        {
            user: "Sarah",
            text: "This should be fixed before the next school term.",
            likes: 8
        },

        {
            user: "Ali",
            text: "I've witnessed several near misses.",
            likes: 15
        }
    ],

    solutions: [
        "Install Zebra Crossing",
        "Add Traffic Signal",
        "Hire Crossing Guard",
        "Improve Road Signage"
    ]
},

{
    id: 2,

    title: "Broken Streetlight",

    category: "Infrastructure",

    location: "Downtown Square",

    priority: "Medium",

    severity: "Medium",

    status: "Open",

    reportedDays: 14,

    reports: 14,

    verifications: 11,

    verificationPercent: 69,

    priority: {
    score: 72,
    label: "🟠 MEDIUM PRIORITY",
    severity: "Medium (30 pts)",
    reports: "14 (15 pts)",
    verifications: "11 (17 pts)",
    age: "14 Days (10 pts)"
},

    description:
        "The streetlight has remained broken for over two weeks, reducing visibility and increasing safety concerns at night.",

    timeline: {
        reported: true,
        verified: false,
        consensus: false,
        solution: false,
        resolved: false
    },

    comments: [
        {
            user: "Maria",
            text: "It's very dark after sunset.",
            likes: 6
        },

        {
            user: "John",
            text: "Several lights nearby are also flickering.",
            likes: 4
        }
    ],

    solutions: [
        "Replace the Bulb",
        "Install LED Streetlight",
        "Inspect Entire Electrical Line"
    ]
},

{
    id: 3,

    title: "Illegal Dumping",

    category: "Environment",

    location: "River Park",

    priority: "High",

    severity: "High",

    status: "Consensus",

    reportedDays: 12,

    reports: 31,

    verifications: 26,

    verificationPercent: 84,

    priority: {
    score: 91,
    label: "🔴 HIGH PRIORITY",
    severity: "High (40 pts)",
    reports: "31 (25 pts)",
    verifications: "26 (20 pts)",
    age: "6 Days (6 pts)"
},
    description:
        "Residents have reported repeated illegal dumping near the park entrance, creating environmental and health concerns.",

    timeline: {
        reported: true,
        verified: true,
        consensus: true,
        solution: false,
        resolved: false
    },

    comments: [
        {
            user: "Emma",
            text: "This keeps happening every weekend.",
            likes: 17
        },

        {
            user: "Noah",
            text: "Security cameras may help.",
            likes: 11
        }
    ],

    solutions: [
        "Install CCTV",
        "Increase Waste Collection",
        "Higher Fines",
        "Community Cleanup Events"
    ]
},

{
    id: 4,

    title: "Damaged Sidewalk",

    category: "Accessibility",

    location: "Maple Grove",

    priority: "Low",

    severity: "Low",

    status: "Resolved",

    reportedDays: 30,

    reports: 9,

    verifications: 7,

    verificationPercent: 91,

    priority: {
    score: 55,
    label: "🟡 LOW PRIORITY",
    severity: "Low (20 pts)",
    reports: "9 (10 pts)",
    verifications: "7 (10 pts)",
    age: "20 Days (15 pts)"
},

    description:
        "Cracked pavement makes the sidewalk difficult for wheelchair users, parents with strollers, and pedestrians.",

    timeline: {
        reported: true,
        verified: true,
        consensus: true,
        solution: true,
        resolved: true
    },

    comments: [
        {
            user: "Sophia",
            text: "Glad this is finally getting attention.",
            likes: 9
        }
    ],

    solutions: [
        "Replace Sidewalk",
        "Temporary Ramp",
        "Repair Cracked Sections"
    ]
}
];