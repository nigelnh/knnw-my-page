import "./style.css";
import { setupThemeToggle } from "./theme.js";
import { setupGalaxyBackground } from "./background.js";
import { setupPokemonAnimations } from "./pokemon.js";

document.querySelector("#app").innerHTML = `
  <div class="portfolio-container">
    <header class="floating-container animate-fade-in">
      <div class="profile-section">
        <h1 class="pixel-text">Nhan Nguyen</h1>
        <div class="pixel-avatar">
          <div class="pixel-face"></div>
          <div class="pixel-eyes"></div>
          <div class="pixel-mouth"></div>
        </div>
      </div>
      <button id="theme-toggle" class="pixel-button">🌙</button>
    </header>

    <section class="about-section floating-container animate-slide-in">
      <h2 class="pixel-text">About Me</h2>
      <p>I'm a passionate software engineer who loves creating pixel-perfect experiences. My current focus is on building web applications using React and TypeScript but I'm always looking to learn new technologies and frameworks.</p>
    </section>

    <section class="tech-stack-section floating-container animate-slide-in">
      <h2 class="pixel-text">Technologies I Work With</h2>
      <div class="tech-grid">
        <div class="tech-card">
          <span class="tech-icon">💻</span>
          <h3>Frontend</h3>
          <ul class="tech-list">
            <li class="pixel-tag">React</li>
            <li class="pixel-tag">Next.js</li>
            <li class="pixel-tag">TypeScript</li>
            <li class="pixel-tag">HTML/CSS</li>
          </ul>
        </div>
        <div class="tech-card">
          <span class="tech-icon">⚙️</span>
          <h3>Backend</h3>
          <ul class="tech-list">
            <li class="pixel-tag">Node.js</li>
            <li class="pixel-tag">Python</li>
            <li class="pixel-tag">Java</li>
            <li class="pixel-tag">SQL</li>
          </ul>
        </div>
        <div class="tech-card">
          <span class="tech-icon">🛠️</span>
          <h3>Tools</h3>
          <ul class="tech-list">
            <li class="pixel-tag">Git</li>
            <li class="pixel-tag">Docker</li>
            <li class="pixel-tag">AWS</li>
            <li class="pixel-tag">Linux</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="experience-section floating-container animate-slide-in">
      <h2 class="pixel-text">Work Experience</h2>
      <div class="experience-grid">
        <div class="experience-card">
          <div class="experience-header">
            <div>
              <h3>Software Engineer Intern</h3>
              <h4>Voodies</h4>
              <span class="date">December 2024 - Present</span>
            </div>
          </div>
          <ul class="skill-tags">
            <li class="pixel-tag">Dart</li>
            <li class="pixel-tag">Flutter</li>
            <li class="pixel-tag">Figma</li>
            <li class="pixel-tag">Firebase</li>
          </ul>
        </div>
        
        <div class="experience-card">
          <div class="experience-header">
            <div>
              <h3>Backend Engineer Intern</h3>
              <h4>SocialTechLabs</h4>
              <span class="date">September 2024 - December 2024</span>
            </div>
          </div>
          <ul class="skill-tags">
            <li class="pixel-tag">Go</li>
            <li class="pixel-tag">Git</li>
            <li class="pixel-tag">Redis</li>
          </ul>
        </div>

        <div class="experience-card">
          <div class="experience-header">
            <div>
              <h3>Frontend Engineer Intern</h3>
              <h4>FPT IS</h4>
              <span class="date">May 2024 - August 2024</span>
            </div>
          </div>
          <ul class="skill-tags">
            <li class="pixel-tag">JavaScript</li>
            <li class="pixel-tag">React</li>
            <li class="pixel-tag">HTML/CSS</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="projects-section animate-slide-in">
      <h2 class="pixel-text">My Projects</h2>
      <div class="projects-grid">
        <div class="project-card pixel-border hover-effect">
          <h3>Simmify</h3>
          <p> A pixel-perfect article summarizer that helps students quickly digest academic content.</p>
          <a href="https://github.com/nigelnh/simmify" class="pixel-button">View Project</a>
        </div>

        <div class="project-card pixel-border">
          <h3>Pixel Wordle</h3>
          <p>A nostalgic twist on the classic Wordle game, featuring pixel art aesthetics and Pokémon companions. </p>
          <a href="https://github.com/nigelnh/pixel-wordle" class="pixel-button">View Project</a>
        </div>

        <div class="project-card pixel-border">
          <h3>Minecraft Checklist</h3>
          <p>A Minecraft-themed todo list application that combines productivity with nostalgia.</p>
          <a href="https://github.com/nigelnh/minecraft-theme-todo" class="pixel-button">View Project</a>
        </div>
      </div>
    </section>

    <footer class="animate-fade-in">
      <p>Connect with me:</p>
      <div class="social-links">
        <a href="https://github.com/nigelnh" class="pixel-button hover-effect">GitHub</a>
        <a href="https://www.linkedin.com/in/nhan-nguyen-374543248/" class="pixel-button hover-effect">LinkedIn</a>
      </div>
    </footer>
  </div>
`;

setupThemeToggle(document.querySelector("#theme-toggle"));
setupGalaxyBackground();
setupPokemonAnimations();

// Setup project image sliders
document.querySelectorAll(".project-images").forEach(setupImageSlider);

function setupImageSlider(container) {
  const images = container.querySelectorAll(".project-image");
  const dots = container.querySelectorAll(".nav-dot");
  let currentIndex = 0;

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      images[currentIndex].classList.add("hidden");
      dots[currentIndex].classList.remove("active");
      currentIndex = index;
      images[currentIndex].classList.remove("hidden");
      dots[currentIndex].classList.add("active");
    });
  });
}

function setupDraggableAvatar() {
  const avatar = document.querySelector(".pixel-avatar");
  let isDragging = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  // Speech bubble setup
  const speechBubble = document.createElement("div");
  speechBubble.className = "speech-bubble";
  document.body.appendChild(speechBubble); // Append to body instead of avatar

  const phrases = [
    "Hi! I'm Nhan, a software engineer! 👋",
    "I love building pixel-perfect UIs! ✨",
    "React and TypeScript are my jam! 💻",
    "Want to collaborate on a project? 🤝",
    "Check out my GitHub repos! 🚀",
    "I'm currently learning Go! 📚",
    "Let's build something cool together! 🛠️",
    "I'm passionate about clean code! ✨",
  ];

  function updateSpeechBubblePosition() {
    const avatarRect = avatar.getBoundingClientRect();
    speechBubble.style.left = `${avatarRect.right + 20}px`;
    speechBubble.style.top = `${avatarRect.top + avatarRect.height / 2}px`;
  }

  function showRandomPhrase() {
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    speechBubble.textContent = phrase;
    speechBubble.classList.add("visible");
    updateSpeechBubblePosition();

    setTimeout(() => {
      speechBubble.classList.remove("visible");
    }, 3000);
  }

  // Show initial phrase and set interval
  setTimeout(showRandomPhrase, 1000); // Initial delay
  setInterval(showRandomPhrase, 5000);

  // Update speech bubble position during drag
  function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    updateSpeechBubblePosition();
  }

  function dragStart(e) {
    initialX =
      e.type === "mousedown"
        ? e.clientX - xOffset
        : e.touches[0].clientX - xOffset;
    initialY =
      e.type === "mousedown"
        ? e.clientY - yOffset
        : e.touches[0].clientY - yOffset;

    if (e.target === avatar) {
      isDragging = true;
      avatar.classList.add("dragging");
    }
  }

  function dragEnd() {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
    avatar.classList.remove("dragging");
  }

  function drag(e) {
    if (isDragging) {
      e.preventDefault();
      currentX =
        e.type === "mousemove"
          ? e.clientX - initialX
          : e.touches[0].clientX - initialX;
      currentY =
        e.type === "mousemove"
          ? e.clientY - initialY
          : e.touches[0].clientY - initialY;
      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, avatar);
    }
  }

  // Mouse events
  avatar.addEventListener("mousedown", dragStart);
  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", dragEnd);

  // Touch events
  avatar.addEventListener("touchstart", dragStart);
  document.addEventListener("touchmove", drag);
  document.addEventListener("touchend", dragEnd);
}

setupDraggableAvatar();
