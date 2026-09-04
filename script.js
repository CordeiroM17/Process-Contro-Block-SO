/* ============================================================
   PCB — Process Control Block | Grupo 3 | Sistemas Operativos
   script.js — menú responsive + lógica del quiz
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  /* ---------- Menú hamburguesa (mobile) ---------- */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Cierra el menú al elegir una sección (en mobile)
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Quiz interactivo ---------- */
  var quiz = document.getElementById("quiz");
  if (!quiz) return;

  var questions = quiz.querySelectorAll(".quiz-question");
  var totalQuestions = questions.length;
  var answered = 0;
  var correctCount = 0;

  var summary = document.getElementById("quizSummary");
  var scoreEl = document.getElementById("quizScore");
  var scoreMsg = document.getElementById("quizScoreMsg");
  var restartBtn = document.getElementById("quizRestart");

  function handleAnswer(question, chosenBtn) {
    var options = question.querySelectorAll(".quiz-option");
    var feedback = question.querySelector(".quiz-feedback");
    var isCorrect = chosenBtn.dataset.correct === "true";

    // Deshabilita todas las opciones de esta pregunta
    options.forEach(function (opt) {
      opt.disabled = true;
      if (opt.dataset.correct === "true") {
        opt.classList.add("correct");
      }
    });

    if (!isCorrect) {
      chosenBtn.classList.add("incorrect");
    } else {
      correctCount++;
    }

    if (feedback) {
      var explanation = isCorrect
        ? feedback.dataset.correctMsg
        : feedback.dataset.incorrectMsg;
      feedback.textContent =
        (isCorrect ? "✔ ¡Correcto! " : "✘ No es correcto. ") + explanation;
      feedback.classList.add("show");
    }

    answered++;
    if (answered === totalQuestions) {
      showSummary();
    }
  }

  questions.forEach(function (question) {
    var options = question.querySelectorAll(".quiz-option");
    options.forEach(function (opt) {
      opt.addEventListener("click", function () {
        handleAnswer(question, opt);
      });
    });
  });

  function showSummary() {
    if (!summary || !scoreEl) return;
    scoreEl.textContent = correctCount + " / " + totalQuestions;

    var msg;
    var pct = correctCount / totalQuestions;
    if (pct === 1) {
      msg = "¡Excelente! Entendieron bien el rol y el funcionamiento del PCB.";
    } else if (pct >= 0.5) {
      msg =
        "Vas bien encaminado. Repasá las explicaciones de arriba para afirmar los conceptos que fallaron.";
    } else {
      msg =
        "Convendría repasar la sección de Concepto y Funcionamiento antes de seguir.";
    }
    if (scoreMsg) scoreMsg.textContent = msg;
    summary.classList.add("show");
    summary.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (restartBtn) {
    restartBtn.addEventListener("click", function () {
      window.location.reload();
    });
  }
});
