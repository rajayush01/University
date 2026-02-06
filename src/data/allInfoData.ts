export interface DepartmentData {
  title: string;
  items: string[];
}

export const allInfoData = {
  news: {
    title: "Excellent News Updates",
    items: [
      "On-Campus Passport Drive for Students and Faculty",
      "India-Japan Talent Bridge (IJTB) Career Summit 2025 Hosted at IIT Kanpur",
      "IIT Kanpur and Pernod Ricard India Foundation Launch ‘Advaya’ Skill Program",
      "IIT Kanpur Hosts the 4th Institute Research Symposium 2025",
      "IITK Alumni Conclave Held in Hyderabad",
      "IIT Kanpur Researchers Develop AI-Based Crop Disease Detection Model",
      "IITK Secures ₹120 Crore in Sponsored Research Funding",
      "IIT Kanpur Ranked Among Top 5 Engineering Institutes in India",
      "New Supercomputing Facility Inaugurated at IIT Kanpur",
      "IITK Signs MoU with Global Universities for Student Exchange",
      "IIT Kanpur Startup Incubation Cell Launches 15 New Startups",
      "IITK Faculty Receives National Science Award 2025",
      "International Conference on Sustainable Technologies Hosted at IITK",
      "IIT Kanpur Collaborates with ISRO for Space Research",
      "IITK Launches Smart Campus Initiative",
      "IIT Kanpur Students Win Global Hackathon 2025",
      "New Innovation & Entrepreneurship Center Opens at IITK",
      "IIT Kanpur Hosts National Cybersecurity Summit",
      "IITK Develops Indigenous Drone Technology",
      "IIT Kanpur Celebrates Foundation Day with Distinguished Guests"
    ]
  },

  announcements: {
    title: "Announcements",
    items: [
      "Faculty Recruitment – Department of Intelligent Systems (DIS)",
      "Faculty Recruitment – Department of Computer Science & Engineering",
      "58th Convocation Ceremony Schedule Released",
      "ARIIA Ranking Reports Published",
      "Recruitment for Research Engineers (REOs)",
      "Non-Teaching Staff Vacancies – Administrative Positions",
      "Non-Teaching Staff Vacancies – Technical Positions",
      "Call for Proposals – Sponsored Research Projects",
      "Invitation for Industry Collaboration Proposals",
      "Applications Invited for Visiting Faculty Program",
      "Courses / Conferences / Workshops – Academic Year 2025",
      "Revised Academic Calendar for 2025–26",
      "Holiday List for Academic Year 2025",
      "Guidelines for PhD Comprehensive Examination",
      "Notice Regarding Hostel Allocation",
      "Notice on Semester Registration Process",
      "Notice for Scholarship Renewal",
      "Announcement for International Exchange Programs",
      "Notice on Campus Placement Registration",
      "Notice on Summer Internship Opportunities"
    ]
  },

  admissions: {
    title: "Admissions",
    items: [
      "Ph.D Admissions – Kotak School of Sustainability",
      "Ph.D Admissions – Department of Computer Science & Engineering",
      "Ph.D Admissions – Department of Electrical Engineering",
      "Ph.D Admissions – Department of Mechanical Engineering",
      "Online Post Graduate Program (PGP) – Data Science",
      "Online Post Graduate Program (PGP) – Artificial Intelligence",
      "VLFM 20th Batch Admissions",
      "Admission through Olympiad (2025–26)",
      "Admission Notice for PhD & MS (By Research)",
      "Admission Notice for M.Tech Programs",
      "Admission Notice for Dual Degree Programs",
      "COGJET-2025 Application Notification",
      "QIP Admission Notification",
      "CAT-Based MBA Admissions",
      "JEE Advanced Admission Reports",
      "GATE Admission Guidelines",
      "JAM Admission Notification",
      "International Student Admissions",
      "Sponsored Candidate Admissions",
      "Part-Time PhD Admission Notification",
      "Admission Guidelines for Foreign Nationals",
      "Admission Brochure 2025–26",
      "Admission Schedule & Important Dates"
    ]
  },

  alumni: {
    title: "Alumni",
    items: [
      "Distinguished Alumni Meet 2025",
      
      "Golden Jubilee Alumni Reunion",
      "Silver Jubilee Alumni Reunion",
      "Alumni Awards & Recognitions 2025",
      "Alumni Newsletter – January Edition",
      
      "Alumni Meet & Greet – Bengaluru",
      "Alumni Meet & Greet – Mumbai"
    ]
  }
};

export type DepartmentType = keyof typeof allInfoData;