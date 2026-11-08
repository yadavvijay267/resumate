/* ResuMate sample resumes — 100% original example content.
   Each sample matches the SAMPLE object shape used by builder.html:
   { title, template, personal{name,title,email,phone,location,linkedin,github,summary},
     skills (comma string), experience[{role,company,start,end,bullets}],
     education[{degree,institution,location,years,score}],
     projects[{name,tech,desc}] } */
(function () {
  window.RESUMATE_SAMPLES = {

    "software-engineer": {
      title: "Software Engineer Resume",
      template: "corporate-modern",
      personal: {
        name: "Aarav Verma",
        title: "Software Engineer",
        email: "aarav.verma@example.com",
        phone: "+91 98765 43210",
        location: "Bengaluru, India",
        linkedin: "linkedin.com/in/aaravverma",
        github: "github.com/aaravverma",
        summary: "Software engineer with 2+ years of experience building web applications with React and Node.js. Focused on clean, reliable code and fast, accessible user experiences."
      },
      skills: "JavaScript, React, Node.js, SQL, Git, Docker",
      experience: [{
        role: "Software Engineer", company: "TechNova Solutions", start: "Jan 2024", end: "Present",
        bullets: "Built a customer dashboard used by 20,000+ monthly users\nCut average page load time by 35% through code-splitting\nMentored 2 interns and reviewed pull requests for a team of 6"
      }],
      education: [{
        degree: "B.Tech in Computer Science", institution: "Visvesvaraya Technological University",
        location: "Bengaluru", years: "2020 – 2024", score: "CGPA: 8.7"
      }],
      projects: [{
        name: "TaskFlow", tech: "React, Node.js, PostgreSQL",
        desc: "A team task manager with real-time updates, role-based access and weekly progress reports."
      }]
    },

    "cs-fresher": {
      title: "Computer Science Fresher Resume",
      template: "engineering-fresher",
      personal: {
        name: "Kabir Shah",
        title: "Computer Science Graduate",
        email: "kabir.shah@example.com",
        phone: "+91 98200 12345",
        location: "Pune, India",
        linkedin: "linkedin.com/in/kabirshah",
        github: "github.com/kabirshah",
        summary: "Recent B.Tech Computer Science graduate with hands-on internship experience in full-stack development. Strong in data structures, algorithms and building small web apps end to end. Looking for a fresher software role to learn fast and ship real features."
      },
      skills: "Python, Java, JavaScript, HTML, CSS, MySQL, Git",
      experience: [{
        role: "Software Development Intern", company: "CloudKite Labs", start: "Jan 2025", end: "Jun 2025",
        bullets: "Built an internal ticket tracker with React and Flask used by 40+ support staff\nWrote unit tests that raised coverage on the payments module from 52% to 81%\nFixed 30+ bugs from the backlog and documented the setup guide for new interns"
      }],
      education: [{
        degree: "B.Tech in Computer Science", institution: "Savitribai Phule Pune University",
        location: "Pune", years: "2021 – 2025", score: "CGPA: 8.4"
      }],
      projects: [{
        name: "CampusEats", tech: "React, Firebase",
        desc: "A canteen pre-order app for students with live menus, slot booking and UPI payment status."
      }, {
        name: "AlgoVisual", tech: "JavaScript, D3.js",
        desc: "An interactive visualiser for sorting and graph algorithms used by 300+ classmates for exam prep."
      }]
    },

    "bba-analyst": {
      title: "Business Analyst Resume",
      template: "management-professional",
      personal: {
        name: "Meera Nair",
        title: "Business Analyst",
        email: "meera.nair@example.com",
        phone: "+91 98111 23456",
        location: "Mumbai, India",
        linkedin: "linkedin.com/in/meeranair",
        github: "",
        summary: "BBA graduate turned business analyst with 1+ year of experience turning messy sales and operations data into clear weekly reports. Comfortable with Excel, SQL and dashboards, and good at explaining numbers to non-technical teams."
      },
      skills: "MS Excel, SQL, Power BI, Google Sheets, Data Analysis, Stakeholder Communication",
      experience: [{
        role: "Business Analyst", company: "RetailKart India", start: "Jul 2024", end: "Present",
        bullets: "Built a weekly sales dashboard in Power BI tracking 12 stores and 4,000+ SKUs\nSpotted a slow-moving inventory pattern that cut dead stock by 18% in one quarter\nWrote requirement notes for 3 process fixes with the operations and tech teams"
      }, {
        role: "Operations Intern", company: "RetailKart India", start: "Jan 2024", end: "Jun 2024",
        bullets: "Cleaned and reconciled 6 months of vendor billing data in Excel\nPrepared daily dispatch summaries for the warehouse team"
      }],
      education: [{
        degree: "BBA (Bachelor of Business Administration)", institution: "University of Mumbai",
        location: "Mumbai", years: "2021 – 2024", score: "CGPA: 8.1"
      }],
      projects: [{
        name: "Festive Sales Review", tech: "Excel, Power BI",
        desc: "A Diwali-season sales review comparing 3 years of category performance to plan next year's buying."
      }]
    },

    "product-designer": {
      title: "Product Designer Resume",
      template: "creative",
      personal: {
        name: "Rohan Desai",
        title: "Product Designer",
        email: "rohan.desai@example.com",
        phone: "+91 98950 34567",
        location: "Ahmedabad, India",
        linkedin: "linkedin.com/in/rohandesai",
        github: "",
        summary: "Product designer with 3+ years of experience designing mobile and web products for fintech and edtech users. Runs user interviews, builds design systems and ships with engineers. Believes good design is invisible — it just makes the task feel easy."
      },
      skills: "Figma, User Research, Prototyping, Design Systems, Usability Testing, Adobe XD",
      experience: [{
        role: "Product Designer", company: "FinEdge Technologies", start: "Mar 2023", end: "Present",
        bullets: "Redesigned the loan application flow, lifting completion from 41% to 68%\nBuilt a 120-component design system that cut design-to-dev handoff time by half\nRan 25+ user interviews a quarter and turned findings into prioritised fixes"
      }, {
        role: "UI/UX Designer", company: "LearnLoop", start: "Jun 2022", end: "Feb 2023",
        bullets: "Designed the student dashboard and course player for 50,000+ learners\nCreated the first shared component library for a team of 4 designers"
      }],
      education: [{
        degree: "B.Des in Communication Design", institution: "National Institute of Design",
        location: "Ahmedabad", years: "2018 – 2022", score: "CGPA: 8.6"
      }],
      projects: [{
        name: "SpendWise App Concept", tech: "Figma, Maze",
        desc: "A budgeting app concept with a 3-tap expense flow, tested with 40 users and a 4.6/5 usability score."
      }]
    },

    "data-analyst": {
      title: "Data Analyst Resume",
      template: "modern-simple",
      personal: {
        name: "Ananya Iyer",
        title: "Data Analyst",
        email: "ananya.iyer@example.com",
        phone: "+91 98450 45678",
        location: "Chennai, India",
        linkedin: "linkedin.com/in/ananyaiyer",
        github: "github.com/ananyaiyer",
        summary: "Data analyst with 2+ years of experience building dashboards and reports for healthcare and retail clients. Works daily with SQL, Python and Tableau to answer business questions with clean, trustworthy numbers."
      },
      skills: "SQL, Python, Tableau, MS Excel, Power BI, Statistics, Data Cleaning",
      experience: [{
        role: "Data Analyst", company: "HealthMetrics Analytics", start: "Aug 2023", end: "Present",
        bullets: "Automated a monthly clinic performance report in Python, saving 12 hours of manual work each month\nBuilt Tableau dashboards tracking patient wait times across 8 clinics\nFound a billing mismatch worth ₹14 lakh a year and flagged it to finance"
      }, {
        role: "Data Analyst Intern", company: "ShopSense Retail", start: "Feb 2023", end: "Jul 2023",
        bullets: "Analysed basket data for 2 lakh+ transactions to find top cross-sell pairs\nPresented findings that shaped a bundle offer with 22% uptake"
      }],
      education: [{
        degree: "B.Sc in Statistics", institution: "University of Madras",
        location: "Chennai", years: "2019 – 2022", score: "CGPA: 8.9"
      }, {
        degree: "PG Diploma in Data Science", institution: "Indian Institute of Technology Madras",
        location: "Chennai", years: "2022 – 2023", score: "CGPA: 8.5"
      }],
      projects: [{
        name: "City Air Quality Explorer", tech: "Python, Tableau Public",
        desc: "A public dashboard comparing AQI trends across 10 Indian cities with seasonal breakdowns."
      }]
    },

    "mba-manager": {
      title: "Product Manager Resume",
      template: "business-executive",
      personal: {
        name: "Arjun Malhotra",
        title: "Product Manager",
        email: "arjun.malhotra@example.com",
        phone: "+91 98100 56789",
        location: "Gurugram, India",
        linkedin: "linkedin.com/in/arjunmalhotra",
        github: "",
        summary: "MBA graduate and product manager with 4+ years of experience shipping B2B SaaS features. Owns roadmaps, pricing experiments and cross-team launches. Known for cutting scope to what matters and getting releases out on time."
      },
      skills: "Product Strategy, Roadmapping, A/B Testing, SQL, Jira, Stakeholder Management, Pricing",
      experience: [{
        role: "Product Manager", company: "WorkStack SaaS", start: "Apr 2024", end: "Present",
        bullets: "Own the onboarding and billing roadmap for a 30,000-user B2B product\nLaunched a usage-based pricing plan that grew paid conversions by 27% in two quarters\nRun weekly reviews with engineering, design, sales and support to unblock delivery"
      }, {
        role: "Associate Product Manager", company: "PayBridge", start: "Jul 2022", end: "Mar 2024",
        bullets: "Shipped a merchant settlement dashboard that cut support tickets by 31%\nRan 12 pricing and checkout experiments with the data team"
      }],
      education: [{
        degree: "MBA (Marketing & Strategy)", institution: "Indian Institute of Management Lucknow",
        location: "Lucknow", years: "2020 – 2022", score: "CGPA: 8.2"
      }, {
        degree: "B.Com (Hons)", institution: "University of Delhi",
        location: "New Delhi", years: "2016 – 2019", score: "CGPA: 8.0"
      }],
      projects: [{
        name: "Churn Rescue Playbook", tech: "SQL, Mixpanel",
        desc: "A churn-risk scoring playbook combining usage signals and support history, adopted by the success team."
      }]
    }

  };
})();
