const optns = ["rock", "paper", "scissors"];
const emojis = { rock: "🪨", paper: "📄", scissors: "✂️" };
let plyrScore = 0, comptrScore = 0;

function play(userCh) {
  const compt = optns[Math.floor(Math.random() * 3)];
  const wins = { rock: "scissors", paper: "rock", scissors: "paper" };

  let result =
    userCh === compt
      ? "It's a tie!"
      : wins[userCh] === compt
      ? "You win!"
      : "Computer wins!";

  if (result === "You win!") plyrScore++;
  else if (result === "Computer wins!") comptrScore++;

  document.getElementById("rps-user-choice").textContent = `You chose: ${emojis[userCh]} ${userCh}`;
  document.getElementById("rps-computer-choice").textContent = `Computer chose: ${emojis[compt]} ${compt}`;
  document.getElementById("rps-result").textContent = result;
  document.getElementById("rps-player-score").textContent = plyrScore;
  document.getElementById("rps-computer-score").textContent = comptrScore;
}

function resetGame() {
  plyrScore = comptrScore = 0;
  ["rps-user-choice", "rps-computer-choice", "rps-result"].forEach(id => {
    document.getElementById(id).textContent = "";
  });
  document.getElementById("rps-player-score").textContent = "0";
  document.getElementById("rps-computer-score").textContent = "0";
}

