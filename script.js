const instruction = document.getElementById("instruction");
const startBtn = document.getElementById("start");
const openSound = document.getElementById("openSound");

startBtn.addEventListener("click", () => {
  instruction.innerText = "Close your eyes.";
  startBtn.style.display = "none";

  setTimeout(() => {
    instruction.innerText = "Wait until you feel a tug...";

    const tugDelay = Math.floor(Math.random() * 5000) + 3000;

    setTimeout(() => {
      document.body.classList.add("shake");

      setTimeout(() => {
        document.body.classList.remove("shake");
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";

        setTimeout(() => {
          instruction.innerHTML += "<br><br><em>You may open your eyes now.</em>";
          openSound.volume = 0.4;
          openSound.play();

          const returnBtn = document.createElement("button");
          returnBtn.innerText = "Return to Sender";
          returnBtn.id = "return";
          document.querySelector(".center-screen").appendChild(returnBtn);

          const responses = [
            "The sender thanks you.",
            "A new string is now attached.",
            "You have been seen."
          ];

          returnBtn.addEventListener("click", () => {
            const randomMessage = responses[Math.floor(Math.random() * responses.length)];
            instruction.innerHTML = randomMessage;

            setTimeout(() => {
              instruction.classList.add("fade-out");
            }, 3000); 

            returnBtn.remove();
          });

        }, 3000);
      }, 1000);
    }, tugDelay);
  }, 2000);
});
