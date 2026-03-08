// ============================================
// WOULD YOU RATHER — SCRIPT.JS
// Beginner tip: This file controls what your
// website DOES. All the game logic lives here.
// ============================================

// ---- ALL YOUR QUESTIONS ARE HERE ----
// Want to add more? Just copy a question block
// and add it to the list! Keep the same format.
const ALL_QUESTIONS = [
  // 😂 FUNNY
  { id: 1, a: "Always speak in rhymes", b: "Always speak backwards", cat: "funny", funFact: "Rhyming takes about 2x longer to think!" },
  { id: 2, a: "Have a laugh that sounds like a foghorn", b: "Have a sneeze that sounds like a scream", cat: "funny", funFact: "Laughter is actually contagious — your laugh WILL spread!" },
  { id: 3, a: "Walk like a penguin forever", b: "Cluck like a chicken once an hour", cat: "funny", funFact: "Penguins actually walk 2mph — not that slow!" },
  { id: 4, a: "Hiccup after every sentence you say", b: "Randomly burst out laughing in silence", cat: "funny", funFact: "Average hiccup lasts only 5-10 minutes. Forever is different." },
  { id: 5, a: "Have everything you say auto-corrected wrong", b: "Accidentally reply-all to every email", cat: "funny", funFact: "The most famous reply-all disaster had 3 million emails!" },
  { id: 6, a: "Only be able to communicate in memes", b: "Only speak in movie quotes", cat: "funny", funFact: "The average person has seen 5,000+ memes in their life." },
  { id: 7, a: "Wear a cape everywhere you go", b: "Wear a tiara every single day", cat: "funny", funFact: "Capes were practical once — knights wore them as warmth!" },
  { id: 8, a: "Trip every time you walk through a doorway", b: "Knock everything off every table you pass", cat: "funny", funFact: "People trip over doorways 35% more when distracted." },

  // 🤢 GROSS
  { id: 9, a: "Eat a spoonful of mayonnaise every morning", b: "Drink a cup of pickle juice every night", cat: "gross", funFact: "Pickle juice actually cures muscle cramps — athletes drink it!" },
  { id: 10, a: "Have feet that permanently smell like cheese", b: "Have breath that permanently smells like garlic", cat: "gross", funFact: "The smell of feet comes from the same bacteria that makes cheese." },
  { id: 11, a: "Lick a subway pole", b: "Eat a bite of a stranger's half-eaten meal", cat: "gross", funFact: "Subway poles have 68 types of bacteria on average." },
  { id: 12, a: "Only be able to shower once a week", b: "Only be able to brush teeth once a week", cat: "gross", funFact: "You should really brush twice daily — dentists aren't joking." },
  { id: 13, a: "Eat a live earthworm", b: "Drink a glass of warm, expired milk", cat: "gross", funFact: "Earthworms are actually eaten as food in some cultures — high protein!" },
  { id: 14, a: "Have green slime come out when you sneeze", b: "Have smoke come out of your ears when you're angry", cat: "gross", funFact: "Sneezes travel at up to 100mph — slime or not!" },

  // ⚡ SUPERPOWERS
  { id: 15, a: "Be able to fly but only 2 feet off the ground", b: "Be invisible but only when nobody is looking", cat: "superpowers", funFact: "Flying 2ft off ground would still let you glide over obstacles!" },
  { id: 16, a: "Read minds but only hear complaints", b: "See the future but only 5 seconds ahead", cat: "superpowers", funFact: "5 seconds ahead would let you dodge punches and win at sports!" },
  { id: 17, a: "Have super strength but only for opening jars", b: "Have super speed but only while walking", cat: "superpowers", funFact: "The fastest human walk ever recorded was 9mph by Tom Bosworth." },
  { id: 18, a: "Speak every language in the world", b: "Talk to animals but they only complain", cat: "superpowers", funFact: "There are 7,168 known languages in the world today." },
  { id: 19, a: "Never need to sleep again", b: "Never need to eat again", cat: "superpowers", funFact: "You'd gain 3 extra years of life if you never had to sleep!" },
  { id: 20, a: "Time-travel but only to Mondays", b: "Teleport but only to places you've been before", cat: "superpowers", funFact: "If you could teleport, the average commute would save 52 days/year!" },
  { id: 21, a: "Have a rewind button for the last 10 seconds of life", b: "Have a pause button you can use once a day", cat: "superpowers", funFact: "10 seconds could undo most accidents and embarrassing moments!" },
  { id: 22, a: "Be able to copy any skill by watching it for 1 minute", b: "Never forget anything you read or hear", cat: "superpowers", funFact: "The human brain can store about 2.5 petabytes of information." },

  // 💰 MONEY
  { id: 23, a: "Get $1,000 every time it rains", b: "Get $500 every time you see a rainbow", cat: "money", funFact: "It rains about 85 days per year in average cities — that's $85k!" },
  { id: 24, a: "Find $100 on the ground once a week", b: "Win a small lottery ($500) once a year", cat: "money", funFact: "$100/week = $5,200/year — more than most annual lotteries!" },
  { id: 25, a: "Be paid $50/hour to do absolutely nothing", b: "Be paid $200/hour but only for boring tasks", cat: "money", funFact: "The average person is paid $25/hour globally." },
  { id: 26, a: "Have $1 million NOW but can never earn money again", b: "Earn double your salary for the rest of your life", cat: "money", funFact: "If you earn $40k/year for 40 years, doubling = $3.2 million total!" },
  { id: 27, a: "Everything at Starbucks is free for you forever", b: "One restaurant meal is free for you every day forever", cat: "money", funFact: "Starbucks average customer spends $1,200/year. Forever is priceless!" },

  // 🍕 FOOD
  { id: 28, a: "Only eat pizza for every meal forever", b: "Only eat tacos for every meal forever", cat: "food", funFact: "Americans eat 3 billion pizzas per year — 23 lbs per person!" },
  { id: 29, a: "Everything tastes 10x saltier than it should", b: "Everything tastes 10x sweeter than it should", cat: "food", funFact: "Too much sweetness can actually suppress other flavors completely." },
  { id: 30, a: "Have a personal chef but they only cook food you hate", b: "Cook every meal yourself but you're suddenly a genius chef", cat: "food", funFact: "Professional chefs train for 2-4 years to master their skills." },
  { id: 31, a: "Never be able to eat your favorite food again", b: "Only eat your favorite food for the next month", cat: "food", funFact: "Eating the same food daily reduces cravings — it's called 'sensory fatigue'." },
  { id: 32, a: "Eat a meal with only a toothpick as your utensil", b: "Eat every meal with giant oven mitts on", cat: "food", funFact: "Chopsticks were used for cooking first, then eating — 5,000 years ago!" },
  { id: 33, a: "All food tastes like cardboard but is perfectly healthy", b: "All food is delicious but has ZERO nutrition", cat: "food", funFact: "Astronaut food is notoriously bland — their taste buds are suppressed in zero gravity." },
  { id: 34, a: "Eat a stick of butter every day", b: "Drink a glass of olive oil every day", cat: "food", funFact: "Greeks drink olive oil daily — Greece has one of the highest olive oil consumptions." },

  // 🌍 ALL / MIXED
  { id: 35, a: "Know the exact day you'll die, but live a long life", b: "Not know when you'll die, but it could be very soon", cat: "all", funFact: "Studies show knowing your 'deadline' actually motivates better living!" },
  { id: 36, a: "Live in a world with no music", b: "Live in a world with no movies", cat: "all", funFact: "Music is 40,000+ years old. Film is only 130 years old." },
  { id: 37, a: "Always feel like you're being watched", b: "Never be noticed by anyone no matter what you do", cat: "all", funFact: "The average person is caught on CCTV camera 70 times a day in the UK." },
  { id: 38, a: "Be famous but hated by everyone", b: "Be unknown but loved by those who know you", cat: "all", funFact: "Studies show famous people report lower happiness than close-knit unknown people." },
  { id: 39, a: "Have 10 great friends", b: "Have 1,000 okay acquaintances", cat: "all", funFact: "Dunbar's number says humans can only maintain 150 genuine relationships." },
  { id: 40, a: "Go back to age 10 knowing what you know now", b: "Jump forward to see your life at age 80", cat: "all", funFact: "If you could redo age 10, compound interest on savings would make you a millionaire!" },
];

// ---- SIMULATED VOTE DATA (makes it feel alive!) ----
// In a real website you'd connect to a database. 
// For now, we give each question fake pre-existing votes.
function getSimulatedVotes(questionId) {
  const seed = questionId * 7919; // deterministic "random"
  const totalVotes = 1000 + (seed % 4000);
  const aPercent = 30 + (seed % 41); // between 30% and 70%
  return {
    a: Math.round(totalVotes * aPercent / 100),
    b: Math.round(totalVotes * (100 - aPercent) / 100),
  };
}

// ---- GAME STATE ----
let currentCategory = "all";
let currentQuestion = null;
let filteredQuestions = [];
let usedQuestionIds = [];
let questionsAnswered = 0;
let currentStreak = 0;
let hasVoted = false;

// ---- INIT ----
function init() {
  filterQuestions();
  loadNextQuestion();
  populateResultsGrid();
}

// ---- FILTER QUESTIONS BY CATEGORY ----
function filterQuestions() {
  if (currentCategory === "all") {
    filteredQuestions = [...ALL_QUESTIONS];
  } else {
    filteredQuestions = ALL_QUESTIONS.filter(q => q.cat === currentCategory || q.cat === "all");
  }
  // Remove already-used questions
  filteredQuestions = filteredQuestions.filter(q => !usedQuestionIds.includes(q.id));
  
  // If all questions used, reset
  if (filteredQuestions.length === 0) {
    usedQuestionIds = [];
    filterQuestions();
  }
}

// ---- LOAD A NEW QUESTION ----
function loadNextQuestion() {
  filterQuestions();
  hasVoted = false;

  // Pick a random question
  const idx = Math.floor(Math.random() * filteredQuestions.length);
  currentQuestion = filteredQuestions[idx];
  usedQuestionIds.push(currentQuestion.id);

  // Update the UI
  document.getElementById('questionNum').textContent = `Question #${questionsAnswered + 1}`;
  document.getElementById('textA').textContent = currentQuestion.a;
  document.getElementById('textB').textContent = currentQuestion.b;

  // Reset buttons
  const btnA = document.getElementById('optionA');
  const btnB = document.getElementById('optionB');
  btnA.disabled = false;
  btnB.disabled = false;
  btnA.style.opacity = '1';
  btnB.style.opacity = '1';
  btnA.style.transform = '';
  btnB.style.transform = '';

  // Reset vote bars
  document.getElementById('fillA').style.width = '0%';
  document.getElementById('fillB').style.width = '0%';
  document.getElementById('percentA').textContent = '';
  document.getElementById('percentB').textContent = '';

  // Hide result elements
  document.getElementById('resultMessage').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'none';

  // Animate card in
  const card = document.getElementById('questionCard');
  card.style.animation = 'none';
  card.offsetHeight; // trigger reflow
  card.style.animation = 'cardIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
}

// ---- WHEN USER VOTES ----
function vote(choice) {
  if (hasVoted) return;
  hasVoted = true;
  questionsAnswered++;
  currentStreak++;

  // Update counters
  document.getElementById('questionsAnswered').textContent = questionsAnswered;
  document.getElementById('currentStreak').textContent = currentStreak;

  // Get simulated votes and add the user's vote
  const votes = getSimulatedVotes(currentQuestion.id);
  if (choice === 'A') votes.a += 1;
  else votes.b += 1;

  const total = votes.a + votes.b;
  const percentA = Math.round((votes.a / total) * 100);
  const percentB = 100 - percentA;

  // Disable buttons
  document.getElementById('optionA').disabled = true;
  document.getElementById('optionB').disabled = true;

  // Highlight chosen option
  if (choice === 'A') {
    document.getElementById('optionA').style.transform = 'scale(1.03)';
    document.getElementById('optionB').style.opacity = '0.5';
  } else {
    document.getElementById('optionB').style.transform = 'scale(1.03)';
    document.getElementById('optionA').style.opacity = '0.5';
  }

  // Animate vote bars
  setTimeout(() => {
    document.getElementById('fillA').style.width = percentA + '%';
    document.getElementById('fillB').style.width = percentB + '%';
    document.getElementById('percentA').textContent = percentA + '%';
    document.getElementById('percentB').textContent = percentB + '%';
  }, 100);

  // Show fun result message
  const majority = choice === 'A' ? percentA : percentB;
  let message = '';
  if (majority >= 70) {
    message = `🔥 You're with the majority! <strong>${majority}%</strong> of people chose the same. ${currentQuestion.funFact}`;
  } else if (majority >= 50) {
    message = `😎 Close call! <strong>${majority}%</strong> agree with you. ${currentQuestion.funFact}`;
  } else {
    message = `🤔 Rare opinion! Only <strong>${majority}%</strong> chose that. You're unique! ${currentQuestion.funFact}`;
  }

  const resultMsg = document.getElementById('resultMessage');
  resultMsg.innerHTML = message;
  resultMsg.style.display = 'block';

  // Show next button
  document.getElementById('nextBtn').style.display = 'inline-flex';

  // 🎉 Confetti!
  launchConfetti();
}

// ---- NEXT QUESTION ----
function nextQuestion() {
  loadNextQuestion();
}

// ---- SKIP QUESTION ----
function skipQuestion() {
  currentStreak = 0;
  document.getElementById('currentStreak').textContent = 0;
  loadNextQuestion();
}

// ---- CATEGORY BUTTONS ----
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    currentCategory = this.dataset.cat;
    document.getElementById('categoryLabel').textContent = 
      currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
    usedQuestionIds = [];
    loadNextQuestion();
  });
});

// ---- SHARE FUNCTIONS ----
function getCurrentQuestionText() {
  if (!currentQuestion) return '';
  return `Would You Rather...\n\nA) ${currentQuestion.a}\n\nOR\n\nB) ${currentQuestion.b}\n\nAnswer at: ${window.location.href}`;
}

function shareQuestion() {
  if (navigator.share) {
    navigator.share({
      title: 'Would You Rather? 🤯',
      text: getCurrentQuestionText(),
      url: window.location.href,
    });
  } else {
    copyLink();
  }
}

function shareTwitter() {
  const text = encodeURIComponent(`Would You Rather? 🤯\n\nA) ${currentQuestion?.a || ''}\n\nOR\n\nB) ${currentQuestion?.b || ''}\n\nSo hard to choose! 👇`);
  const url = encodeURIComponent(window.location.href);
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function shareWhatsapp() {
  const text = encodeURIComponent(getCurrentQuestionText());
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const note = document.getElementById('copyNote');
    note.style.display = 'block';
    setTimeout(() => { note.style.display = 'none'; }, 3000);
  });
}

// ---- CONFETTI ANIMATION ----
function launchConfetti() {
  const colors = ['#ff4d6d', '#4cc9f0', '#ffd60a', '#7c3aed', '#06d6a0'];
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.cssText = `
        left: ${Math.random() * 100}vw;
        top: -10px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        transform: rotate(${Math.random() * 360}deg);
        animation-duration: ${1 + Math.random()}s;
        animation-delay: ${Math.random() * 0.5}s;
      `;
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 2000);
    }, i * 30);
  }
}

// ---- POPULATE RESULTS GRID ----
function populateResultsGrid() {
  const grid = document.getElementById('resultsGrid');
  // Show 5 sample "most debated" questions
  const samples = ALL_QUESTIONS.slice(0, 5);
  
  grid.innerHTML = samples.map((q, i) => {
    const votes = getSimulatedVotes(q.id);
    const total = votes.a + votes.b;
    const percA = Math.round(votes.a / total * 100);
    return `
      <div class="result-item" style="animation-delay: ${i * 0.08}s">
        <div class="result-q">
          <span>A:</span> ${q.a} <br>
          <span style="color: var(--accent-b)">B:</span> ${q.b}
        </div>
        <div class="result-votes">
          A: ${percA}%<br>
          B: ${100 - percA}%<br>
          <span style="color: var(--text-dim)">${(total/1000).toFixed(1)}k votes</span>
        </div>
      </div>
    `;
  }).join('');
}

// ---- START THE GAME! ----
window.addEventListener('DOMContentLoaded', init);
