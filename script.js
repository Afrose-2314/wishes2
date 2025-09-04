/* ===== WISH GENERATION ===== */
const quotes = [
  "You are a guide, mentor and inspiration. 🔭",
  "Teaching is the one profession that creates all other professions. ✨",
  "A teacher plants the seeds of knowledge that grow forever. 🌱",
  "You don’t just teach — you inspire dreams. 🌟",
  "A teacher takes a hand, opens a mind, and touches a heart. 💖",
  "Knowledge shared by you is a treasure for life. 📚",
  "Great teachers shape great futures. 🚀",
  "Your wisdom lights the path for many. 🕯️",
  "A teacher’s impact lasts a lifetime. ⏳",
  "You teach not just lessons, but life. 🌍",
  "Every day you make a difference. 💜",
  "Good teachers are the reason why ordinary students dream big. 💭",
  "Your guidance is a priceless gift. 🎁",
  "Teachers like you turn learning into joy. 🎶",
  "Behind every successful student is a caring teacher. 🌹",
  "You inspire curiosity, courage, and confidence. 🔑",
  "The world needs more teachers like you. 🌎",
  "A teacher is a compass that activates the magnets of curiosity. 🧭",
  "You don’t just educate, you empower. 💪",
  "Your lessons go beyond books and last a lifetime. 📖"
];

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

function buildWish(name){
  const n = name ? titleCase(name) : 'Teacher';
  const randomQuote = getRandomQuote();
  return `
  <p>🌸 <strong>Dear ${n}</strong>,</p>
  <p>${randomQuote}</p>
  <p>Wishing you a very <strong>Happy Teachers' Day!</strong> 🎉</p>
  <p>With respect and gratitude,</p>
  <p><strong>Coding Club — Department of Computer applications</strong><br/>PSVASC</p>`;
}
