// src/seed/healthcareIssues.js
const healthcareIssues = [
  {
    category: "Medical",
    description: "Broken beds in the general ward require replacement.",
    status: "Verified",
    priority: "High",
    location: { lat: 23.3441, lng: 85.3096 },
  },
  {
    category: "Medical",
    description: "Shortage of essential medicines in the pharmacy.",
    status: "In Progress",
    priority: "Medium",
    location: { lat: 23.3478, lng: 85.3333 },
  },
  {
    category: "Medical",
    description: "Citizen complaint repeated about ICU ventilator shortage.",
    status: "Verified",
    priority: "High",
    location: { lat: 23.8175, lng: 90.4065 },
  },
  {
    category: "Medical",
    description: "MRI machine has been out of service for 2 weeks.",
    status: "In Progress",
    priority: "High",
    location: { lat: 23.811, lng: 90.414 },
  },
  {
    category: "Medical",
    description: "Pharmacy runs out of essential medicines frequently.",
    status: "New",
    priority: "Medium",
    location: { lat: 23.815, lng: 90.408 },
  },
  {
    category: "Sanitation & Hygiene",
    description: "Lack of proper sanitation in maternity ward.",
    status: "Verified",
    priority: "High",
    location: { lat: 23.812, lng: 90.403 },
  },
  {
    category: "Medical",
    description: "Broken X-ray machine delaying diagnostics.",
    status: "In Progress",
    priority: "Medium",
    location: { lat: 23.814, lng: 90.405 },
  },
  {
    category: "Medical",
    description: "Complaint about ambulance delays during emergencies.",
    status: "Resolved",
    priority: "High",
    location: { lat: 23.820, lng: 90.410 },
  },
  {
    category: "Sanitation & Hygiene",
    description: "Water leakage near emergency ward causing hygiene issue.",
    status: "Resolved",
    priority: "Low",
    location: { lat: 23.355, lng: 85.301 },
  },
  
];

export default healthcareIssues;