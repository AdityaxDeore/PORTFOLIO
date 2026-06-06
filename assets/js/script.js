'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}


// project details modal
const projectDetailButtons = document.querySelectorAll("[data-project-details]");
const projectModalContainer = document.querySelector("[data-project-modal-container]");
const projectOverlay = document.querySelector("[data-project-overlay]");
const projectModalClose = document.querySelector("[data-project-modal-close]");
const projectModalTitle = document.querySelector("[data-project-modal-title]");
const projectProblem = document.querySelector("[data-project-problem]");
const projectWhy = document.querySelector("[data-project-why]");
const projectFeatures = document.querySelector("[data-project-features]");
const projectStack = document.querySelector("[data-project-stack]");
const projectScreenshots = document.querySelector("[data-project-screenshots]");
const projectChallenges = document.querySelector("[data-project-challenges]");
const projectRoadmap = document.querySelector("[data-project-roadmap]");
const projectGithubLink = document.querySelector("[data-project-github]");

const projectData = {
  "codecampus": {
    title: "CodeCampus",
    problem: "Students need a live, proctored platform for coding practice and assessments that connects learning with real usage metrics.",
    why: "Built to support technical events and guided learning with scalable, full-stack infrastructure for modern assessment workflows.",
    features: ["Proctored coding assessments", "Student usage analytics", "Real-time feedback", "Scalable UI for learners"],
    stack: ["React", "Node.js", "MongoDB", "TypeScript"],
    screenshots: ["./assets/images/project-1.jpg", "./assets/images/project-2.png"],
    challenges: "Coordinating assessment integrity with responsive UI and handling concurrent student sessions was a key challenge.",
    roadmap: "Add role-based dashboards, automated scoring, peer review workflows, and expanded scaling for 800+ students.",
    github: "https://github.com/AdityaxDeore"
  },
  "clarity": {
    title: "Clarity",
    problem: "Mental wellness support platforms need proactive, intelligent assistance that blends data insights with user-friendly guidance.",
    why: "Created to deliver personalized support, track wellbeing signals, and surface actionable next steps for mental health journeys.",
    features: ["AI-powered recommendations", "Mood tracking dashboards", "Secure user profiles", "Support resource library"],
    stack: ["React", "Node.js", "PostgreSQL", "TensorFlow"],
    screenshots: ["./assets/images/project-2.png", "./assets/images/project-4.png"],
    challenges: "Balancing data privacy with actionable analytics and designing an intuitive wellness interface required careful iteration.",
    roadmap: "Build mobile support, improved personalization, and integration with wellness APIs for longitudinal analytics.",
    github: "https://github.com/AdityaxDeore"
  },
  "brain-tumor": {
    title: "Brain Tumor Detection System",
    problem: "Medical imaging diagnostics require automation to detect anomalies quickly and reliably from scan data.",
    why: "Built to accelerate early detection using computer vision and machine learning models for brain tumor evaluation.",
    features: ["MRI image preprocessing", "Tumor classification", "Model confidence scoring", "Result visualization"],
    stack: ["Python", "OpenCV", "Scikit-learn"],
    screenshots: ["./assets/images/project-4.png", "./assets/images/project-3.jpg"],
    challenges: "Handling image noise, dataset imbalance, and producing accurate classification with explainable outputs was essential.",
    roadmap: "Add model explainability, larger dataset training, cloud deployment, and a clinician review dashboard.",
    github: "https://github.com/AdityaxDeore"
  }
};

const openProjectModal = function (key) {
  const data = projectData[key];
  if (!data) return;

  projectModalTitle.innerText = data.title;
  projectProblem.innerText = data.problem;
  projectWhy.innerText = data.why;
  projectChallenges.innerText = data.challenges;
  projectRoadmap.innerText = data.roadmap;
  projectGithubLink.href = data.github;

  projectFeatures.innerHTML = "";
  data.features.forEach(feature => {
    const li = document.createElement("li");
    li.innerText = feature;
    projectFeatures.appendChild(li);
  });

  projectStack.innerHTML = "";
  data.stack.forEach(item => {
    const span = document.createElement("span");
    span.innerText = item;
    projectStack.appendChild(span);
  });

  projectScreenshots.innerHTML = "";
  data.screenshots.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = data.title;
    projectScreenshots.appendChild(img);
  });

  projectModalContainer.classList.add("active");
};

for (let i = 0; i < projectDetailButtons.length; i++) {
  projectDetailButtons[i].addEventListener("click", function () {
    openProjectModal(this.dataset.projectDetails);
  });
}

const closeProjectModal = function () {
  projectModalContainer.classList.remove("active");
};

projectModalClose.addEventListener("click", closeProjectModal);
projectOverlay.addEventListener("click", closeProjectModal);


// achievement preview modal
const achievementItems = document.querySelectorAll("[data-achievement-item]");
const achievementModalContainer = document.querySelector("[data-achievement-modal-container]");
const achievementOverlay = document.querySelector("[data-achievement-overlay]");
const achievementClose = document.querySelector("[data-achievement-close]");
const achievementTitle = document.querySelector("[data-achievement-title]");
const achievementDesc = document.querySelector("[data-achievement-desc]");
const achievementImg = document.querySelector("[data-achievement-img]");

const achievementData = {
  hackerank: {
    title: "HackerRank Software Engineer Intern Certification",
    desc: "Validated performance in coding challenges and software engineering fundamentals.",
    image: "./assets/images/blog-1.jpg"
  },
  ibm: {
    title: "IBM Data Analyst Professional Certificate",
    desc: "Completed data analysis projects using Python, SQL, and visualization best practices.",
    image: "./assets/images/blog-2.jpg"
  },
  deloitte: {
    title: "Deloitte Data Analytics Job Simulation",
    desc: "Built decision-support workflows and dashboard analytics for business insights.",
    image: "./assets/images/blog-3.jpg"
  },
  mastercard: {
    title: "Mastercard Cybersecurity Virtual Experience",
    desc: "Analyzed phishing and security awareness scenarios to recommend better protections.",
    image: "./assets/images/blog-4.jpg"
  },
  tcs: {
    title: "TCS Cybersecurity Analyst Simulation",
    desc: "Explored IAM concepts and cybersecurity operations through practical simulation.",
    image: "./assets/images/blog-5.jpg"
  },
  mlsc: {
    title: "MLSC National Hackathon Round 2 Qualifier",
    desc: "Qualified for a national hackathon using AI and machine learning project solutions.",
    image: "./assets/images/blog-6.jpg"
  },
  football: {
    title: "Zonal Football Participation",
    desc: "Demonstrated teamwork and leadership by representing the school zone in football.",
    image: "./assets/images/project-7.png"
  },
  tabla: {
    title: "Tabla Certification",
    desc: "Completed classical tabla certification to support creative discipline and focus.",
    image: "./assets/images/project-8.jpg"
  }
};

const openAchievementModal = function (key) {
  const data = achievementData[key];
  if (!data) return;

  achievementTitle.innerText = data.title;
  achievementDesc.innerText = data.desc;
  achievementImg.src = data.image;
  achievementImg.alt = data.title;
  achievementModalContainer.classList.add("active");
};

for (let i = 0; i < achievementItems.length; i++) {
  achievementItems[i].addEventListener("click", function (event) {
    event.preventDefault();
    openAchievementModal(this.dataset.achievementItem);
  });
}

const closeAchievementModal = function () {
  achievementModalContainer.classList.remove("active");
};

achievementClose.addEventListener("click", closeAchievementModal);
achievementOverlay.addEventListener("click", closeAchievementModal);


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}