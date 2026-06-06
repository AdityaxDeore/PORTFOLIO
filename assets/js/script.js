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

    // Render the PDF.js resume preview when the Resume tab is activated
    if (this.innerHTML.toLowerCase() === 'resume') {
      setTimeout(() => {
        if (typeof renderResumePreview === 'function') {
          renderResumePreview();
        }
      }, 60);
    }

  });
}

/* ============================================
   PREMIUM ABOUT SECTION — VANILLA INTERACTIONS
   Scroll reveals + animated counters + subtle polish
============================================ */

function initPremiumAbout() {
  const aboutSection = document.querySelector('article[data-page="about"]');
  if (!aboutSection) return;

  // Scroll reveal using IntersectionObserver
  const revealElements = aboutSection.querySelectorAll(
    '.about-hero, .skill-capsules, .what-i-bring, .impact, .bring-card, .metric, .experience-item'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Staggered reveal
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, index * 60);

        // Trigger count animation for metrics
        if (entry.target.classList.contains('metric')) {
          const countEl = entry.target.querySelector('.count');
          if (countEl && !countEl.classList.contains('counted')) {
            animateCount(countEl);
            countEl.classList.add('counted');
          }
        }

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
  });

  // Count-up animation
  function animateCount(element) {
    const target = parseInt(element.dataset.target, 10);
    const duration = 1600;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);

      element.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target;
      }
    }

    requestAnimationFrame(update);
  }

  // Optional: gentle capsule interaction on hover (extra depth)
  const capsules = aboutSection.querySelectorAll('.skill-capsule');
  capsules.forEach(capsule => {
    capsule.addEventListener('mouseenter', () => {
      capsule.style.transitionDuration = '180ms';
    });
  });
}

// Initialize when DOM is ready and also when About tab is activated
function initAboutInteractions() {
  // Run immediately if About is already active
  const about = document.querySelector('article[data-page="about"]');
  if (about && about.classList.contains('active')) {
    initPremiumAbout();
  }

  // Listen for tab switches (existing nav system)
  document.querySelectorAll('[data-nav-link]').forEach(link => {
    link.addEventListener('click', () => {
      if (link.textContent.toLowerCase() === 'about') {
        // Small delay to allow the panel to become visible
        setTimeout(() => {
          initPremiumAbout();
        }, 80);
      }
    });
  });
}

// Boot
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAboutInteractions);
} else {
  initAboutInteractions();
}

// ============================================
// Resume PDF Preview using PDF.js
// - Fits width of content area
// - Stacked canvases = flows with main page scroll (no internal scroll)
// - High-DPI sharp rendering
// ============================================

// Set PDF.js worker (must match the version loaded in index.html)
if (typeof pdfjsLib !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

let resumePdfDoc = null;

async function renderResumePreview(force = false) {
  const viewerEl = document.querySelector('.pdf-viewer');
  if (!viewerEl) return;

  const frame = viewerEl.closest('.resume-frame') || viewerEl;

  // Loading indicator only on first render
  if (viewerEl.children.length === 0) {
    viewerEl.innerHTML = '<div style="padding:18px 12px;color:var(--light-gray);font-size:14px;text-align:center;">Loading resume preview…</div>';
  }

  try {
    if (!resumePdfDoc) {
      const loadingTask = pdfjsLib.getDocument('./assets/files/Aditya_Deore_Resume.pdf');
      resumePdfDoc = await loadingTask.promise;
    }

    viewerEl.innerHTML = '';

    const numPages = resumePdfDoc.numPages;

    // Target width: fit the frame/content column nicely (capped for readability)
    const desiredCssWidth = Math.max(320, Math.min(
      frame.clientWidth || viewerEl.clientWidth || 780,
      1100
    ));

    const outputScale = window.devicePixelRatio || 1;

    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      const page = await resumePdfDoc.getPage(pageNum);
      const unscaledViewport = page.getViewport({ scale: 1 });

      // Fit to desired width + slight zoom for readability (was previously too small)
      let baseScale = desiredCssWidth / unscaledViewport.width;
      baseScale = baseScale * 1.03;

      // Reasonable cap on ultra-wide
      if (baseScale > 2.6) baseScale = 2.6;

      const viewport = page.getViewport({ scale: baseScale });

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', { alpha: false });

      // Backing store at device resolution for crisp text
      canvas.width = Math.floor(viewport.width * outputScale);
      canvas.height = Math.floor(viewport.height * outputScale);

      // CSS display size (what user sees)
      const displayWidth = Math.floor(viewport.width);
      canvas.style.width = displayWidth + 'px';
      canvas.style.height = 'auto';
      canvas.style.display = 'block';
      canvas.style.margin = '0 auto 10px';
      canvas.style.backgroundColor = '#ffffff';
      canvas.style.boxShadow = '0 4px 18px rgba(0,0,0,0.22)';
      canvas.style.borderRadius = '4px';

      // DPI transform
      const transform = outputScale !== 1
        ? [outputScale, 0, 0, outputScale, 0, 0]
        : null;

      await page.render({
        canvasContext: ctx,
        viewport,
        transform
      }).promise;

      viewerEl.appendChild(canvas);
    }
  } catch (err) {
    console.error('Resume PDF.js render error:', err);
    viewerEl.innerHTML = '<div style="padding:18px 12px;color:var(--light-gray);font-size:14px;text-align:center;">Could not load preview.<br><a href="./assets/files/Aditya_Deore_Resume.pdf" download style="color:var(--orange-yellow-crayola);">Download PDF</a></div>';
  }
}

// Optional: re-render on significant resize while resume tab is open (debounced)
let resizeTimer = null;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const resumePage = document.querySelector('article[data-page="resume"]');
    const viewer = document.querySelector('.pdf-viewer');
    if (resumePage && resumePage.classList.contains('active') && viewer) {
      // Only re-render if already rendered once
      if (viewer.children.length > 0) {
        renderResumePreview(true);
      }
    }
  }, 350);
});

// Initial attempt in case Resume is the starting page (rare)
document.addEventListener('DOMContentLoaded', () => {
  const resumePage = document.querySelector('article[data-page="resume"]');
  if (resumePage && resumePage.classList.contains('active')) {
    setTimeout(() => renderResumePreview(), 120);
  }
});