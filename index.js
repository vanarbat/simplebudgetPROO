document.addEventListener("DOMContentLoaded", () => {
  // Countdown Timer
  initCountdownTimer()

  // Testimonial Slider
  initTestimonialSlider()

  // Sticky Header
  initStickyHeader()

  // Sticky CTA
  initStickyCTA()

  // Exit Intent Popup
  initExitIntentPopup()

  // Social Proof Popup
  initSocialProofPopup()
})

// Countdown Timer
function initCountdownTimer() {
  // Check if we have a saved end time in localStorage
  const savedEndTime = localStorage.getItem("countdownEndTime")
  let endTime

  if (savedEndTime) {
    endTime = Number.parseInt(savedEndTime, 10)

    // If the saved end time is in the past, set a new one
    if (endTime < Date.now()) {
      endTime = Date.now() + 24 * 60 * 60 * 1000 // 24 hours from now
      localStorage.setItem("countdownEndTime", endTime.toString())
    }
  } else {
    // No saved end time, set one for 24 hours from now
    endTime = Date.now() + 24 * 60 * 60 * 1000
    localStorage.setItem("countdownEndTime", endTime.toString())
  }

  const totalDuration = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

  const updateCountdown = () => {
    const now = Date.now()
    const timeLeft = endTime - now

    if (timeLeft <= 0) {
      // Reset the countdown if it reaches zero
      updateCountdownDisplay(0, 0, 0, 0)

      // Set a new end time
      const newEndTime = Date.now() + 24 * 60 * 60 * 1000
      localStorage.setItem("countdownEndTime", newEndTime.toString())
      return
    }

    // Calculate hours, minutes, seconds
    const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60))
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000)

    // Calculate progress percentage
    const elapsed = totalDuration - timeLeft
    const progressPercentage = 100 - (elapsed / totalDuration) * 100

    updateCountdownDisplay(hoursLeft, minutesLeft, secondsLeft, progressPercentage)
  }

  function updateCountdownDisplay(hours, minutes, seconds, progress) {
    // Main countdown
    if (document.getElementById("countdown-hours")) {
      document.getElementById("countdown-hours").textContent = hours.toString().padStart(2, "0")
      document.getElementById("countdown-minutes").textContent = minutes.toString().padStart(2, "0")
      document.getElementById("countdown-seconds").textContent = seconds.toString().padStart(2, "0")
      document.getElementById("countdown-progress-bar").style.width = `${progress}%`
    }

    // Final countdown
    if (document.getElementById("final-countdown-hours")) {
      document.getElementById("final-countdown-hours").textContent = hours.toString().padStart(2, "0")
      document.getElementById("final-countdown-minutes").textContent = minutes.toString().padStart(2, "0")
      document.getElementById("final-countdown-seconds").textContent = seconds.toString().padStart(2, "0")
    }

    // Sticky countdown
    if (document.getElementById("sticky-countdown-hours")) {
      document.getElementById("sticky-countdown-hours").textContent = hours.toString().padStart(2, "0")
      document.getElementById("sticky-countdown-minutes").textContent = minutes.toString().padStart(2, "0")
      document.getElementById("sticky-countdown-seconds").textContent = seconds.toString().padStart(2, "0")
    }
  }

  // Update immediately
  updateCountdown()

  // Then update every second
  setInterval(updateCountdown, 1000)
}

// Testimonial Slider
function initTestimonialSlider() {
  const slides = document.querySelectorAll(".testimonial-slide")
  const dots = document.querySelectorAll(".slider-dot")
  const prevBtn = document.getElementById("slider-prev")
  const nextBtn = document.getElementById("slider-next")
  let currentIndex = 0
  let interval

  function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove("active")
    })

    // Deactivate all dots
    dots.forEach((dot) => {
      dot.classList.remove("active")
    })

    // Show current slide and activate current dot
    slides[index].classList.add("active")
    dots[index].classList.add("active")

    // Update current index
    currentIndex = index
  }

  function nextSlide() {
    let newIndex = currentIndex + 1
    if (newIndex >= slides.length) {
      newIndex = 0
    }
    showSlide(newIndex)
  }

  function prevSlide() {
    let newIndex = currentIndex - 1
    if (newIndex < 0) {
      newIndex = slides.length - 1
    }
    showSlide(newIndex)
  }

  // Event listeners
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide()
      resetInterval()
    })
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide()
      resetInterval()
    })
  }

  // Add click event to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index)
      resetInterval()
    })
  })

  // Auto-advance slides
  function startInterval() {
    interval = setInterval(() => {
      nextSlide()
    }, 5000)
  }

  function resetInterval() {
    clearInterval(interval)
    startInterval()
  }

  // Start auto-advance
  startInterval()
}

// Sticky Header
function initStickyHeader() {
  const header = document.getElementById("site-header")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("shadow-md")
    } else {
      header.classList.remove("shadow-md")
    }
  })
}

// Sticky CTA
function initStickyCTA() {
  const stickyCta = document.getElementById("sticky-cta")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      stickyCta.classList.add("visible")
    } else {
      stickyCta.classList.remove("visible")
    }
  })
}

// Exit Intent Popup
function initExitIntentPopup() {
  const exitPopup = document.getElementById("exit-popup")
  const closeBtn = document.getElementById("exit-popup-close")
  let showOnce = false

  // Show popup when mouse leaves the window (exit intent)
  document.addEventListener("mouseleave", (e) => {
    if (e.clientY <= 0 && !showOnce) {
      exitPopup.classList.add("visible")
      showOnce = true
    }
  })

  // Close popup when close button is clicked
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      exitPopup.classList.remove("visible")
    })
  }

  // Close popup when clicking outside
  exitPopup.addEventListener("click", (e) => {
    if (e.target === exitPopup) {
      exitPopup.classList.remove("visible")
    }
  })
}

// Social Proof Popup
function initSocialProofPopup() {
  const socialProofPopup = document.getElementById("social-proof-popup")
  const proofs = [
    {
      name: "Jessica D.",
      location: "United States",
      time: "2 minutes ago",
    },
    {
      name: "Michael T.",
      location: "Canada",
      time: "5 minutes ago",
    },
    {
      name: "Amanda L.",
      location: "United Kingdom",
      time: "Just now",
    },
    {
      name: "Rebecca M.",
      location: "Australia",
      time: "7 minutes ago",
    },
    {
      name: "James T.",
      location: "Germany",
      time: "3 minutes ago",
    },
  ]

  function showRandomProof() {
    if (!socialProofPopup) return

    const randomProof = proofs[Math.floor(Math.random() * proofs.length)]

    // Update content
    socialProofPopup.querySelector("strong").textContent = `${randomProof.name} from ${randomProof.location}`
    socialProofPopup.querySelector(".social-proof-time").textContent = randomProof.time

    // Show popup
    socialProofPopup.classList.add("visible")

    // Hide after
    ;```javascript type="code" project="undefined" file="index.js"
[v0-no-op-code-block-prefix]document.addEventListener('DOMContentLoaded', function() {
  // Countdown Timer
  initCountdownTimer();
  
  // Testimonial Slider
  initTestimonialSlider();
  
  // Sticky Header
  initStickyHeader();
  
  // Sticky CTA
  initStickyCTA();
  
  // Exit Intent Popup
  initExitIntentPopup();
  
  // Social Proof Popup
  initSocialProofPopup();
});

// Countdown Timer
function initCountdownTimer() {
  // Check if we have a saved end time in localStorage
  const savedEndTime = localStorage.getItem("countdownEndTime");
  let endTime;

  if (savedEndTime) {
    endTime = Number.parseInt(savedEndTime, 10);

    // If the saved end time is in the past, set a new one
    if (endTime < Date.now()) {
      endTime = Date.now() + 24 * 60 * 60 * 1000; // 24 hours from now
      localStorage.setItem("countdownEndTime", endTime.toString());
    }
  } else {
    // No saved end time, set one for 24 hours from now
    endTime = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem("countdownEndTime", endTime.toString());
  }

  const totalDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  const updateCountdown = () => {
    const now = Date.now();
    const timeLeft = endTime - now;

    if (timeLeft <= 0) {
      // Reset the countdown if it reaches zero
      updateCountdownDisplay(0, 0, 0, 0);

      // Set a new end time
      const newEndTime = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem("countdownEndTime", newEndTime.toString());
      return;
    }

    // Calculate hours, minutes, seconds
    const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Calculate progress percentage
    const elapsed = totalDuration - timeLeft;
    const progressPercentage = 100 - (elapsed / totalDuration) * 100;

    updateCountdownDisplay(hoursLeft, minutesLeft, secondsLeft, progressPercentage);
  };

  function updateCountdownDisplay(hours, minutes, seconds, progress) {
    // Main countdown
    if (document.getElementById('countdown-hours')) {
      document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
      document.getElementById('countdown-minutes').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('countdown-seconds').textContent = seconds.toString().padStart(2, '0');
      document.getElementById('countdown-progress-bar').style.width = \`${progress}%`
  }

  // Final countdown
  if (document.getElementById("final-countdown-hours")) {
    document.getElementById("final-countdown-hours").textContent = hours.toString().padStart(2, "0")
    document.getElementById("final-countdown-minutes").textContent = minutes.toString().padStart(2, "0")
    document.getElementById("final-countdown-seconds").textContent = seconds.toString().padStart(2, "0")
  }

  // Sticky countdown
  if (document.getElementById("sticky-countdown-hours")) {
    document.getElementById("sticky-countdown-hours").textContent = hours.toString().padStart(2, "0")
    document.getElementById("sticky-countdown-minutes").textContent = minutes.toString().padStart(2, "0")
    document.getElementById("sticky-countdown-seconds").textContent = seconds.toString().padStart(2, "0")
  }
}

// Update immediately
updateCountdown()

// Then update every second
setInterval(updateCountdown, 1000)
\
}

// Testimonial Slider
function initTestimonialSlider() {
  const slides = document.querySelectorAll(".testimonial-slide")
  const dots = document.querySelectorAll(".slider-dot")
  const prevBtn = document.getElementById("slider-prev")
  const nextBtn = document.getElementById("slider-next")
  let currentIndex = 0
  let interval

  function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove("active")
    })

    // Deactivate all dots
    dots.forEach((dot) => {
      dot.classList.remove("active")
    })

    // Show current slide and activate current dot
    slides[index].classList.add("active")
    dots[index].classList.add("active")

    // Update current index
    currentIndex = index
  }

  function nextSlide() {
    let newIndex = currentIndex + 1
    if (newIndex >= slides.length) {
      newIndex = 0
    }
    showSlide(newIndex)
  }

  function prevSlide() {
    let newIndex = currentIndex - 1
    if (newIndex < 0) {
      newIndex = slides.length - 1
    }
    showSlide(newIndex)
  }

  // Event listeners
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide()
      resetInterval()
    })
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide()
      resetInterval()
    })
  }

  // Add click event to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index)
      resetInterval()
    })
  })

  // Auto-advance slides
  function startInterval() {
    interval = setInterval(() => {
      nextSlide()
    }, 5000)
  }

  function resetInterval() {
    clearInterval(interval)
    startInterval()
  }

  // Start auto-advance
  startInterval()
}

// Sticky Header
function initStickyHeader() {
  const header = document.getElementById("site-header")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("shadow-md")
    } else {
      header.classList.remove("shadow-md")
    }
  })
}

// Sticky CTA
function initStickyCTA() {
  const stickyCta = document.getElementById("sticky-cta")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      stickyCta.classList.add("visible")
    } else {
      stickyCta.classList.remove("visible")
    }
  })
}

// Exit Intent Popup
function initExitIntentPopup() {
  const exitPopup = document.getElementById("exit-popup")
  const closeBtn = document.getElementById("exit-popup-close")
  let showOnce = false

  // Show popup when mouse leaves the window (exit intent)
  document.addEventListener("mouseleave", (e) => {
    if (e.clientY <= 0 && !showOnce) {
      exitPopup.classList.add("visible")
      showOnce = true
    }
  })

  // Close popup when close button is clicked
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      exitPopup.classList.remove("visible")
    })
  }

  // Close popup when clicking outside
  exitPopup.addEventListener("click", (e) => {
    if (e.target === exitPopup) {
      exitPopup.classList.remove("visible")
    }
  })
}

// Social Proof Popup
function initSocialProofPopup() {
  const socialProofPopup = document.getElementById("social-proof-popup")
  const proofs = [
    {
      name: "Jessica D.",
      location: "United States",
      time: "2 minutes ago",
    },
    {
      name: "Michael T.",
      location: "Canada",
      time: "5 minutes ago",
    },
    {
      name: "Amanda L.",
      location: "United Kingdom",
      time: "Just now",
    },
    {
      name: "Rebecca M.",
      location: "Australia",
      time: "7 minutes ago",
    },
    {
      name: "James T.",
      location: "Germany",
      time: "3 minutes ago",
    },
  ]

  function showRandomProof() {
    if (!socialProofPopup) return

    const randomProof = proofs[Math.floor(Math.random() * proofs.length)]

    // Update content
    socialProofPopup.querySelector("strong").textContent = `${randomProof.name} from ${randomProof.location}`
    socialProofPopup.querySelector(".social-proof-time").textContent = randomProof.time

    // Show popup
    socialProofPopup.classList.add("visible")

    // Hide after 5 seconds
    setTimeout(() => {
      socialProofPopup.classList.remove("visible")
    }, 5000)
  }

  // Show first popup after 15 seconds
  setTimeout(() => {
    showRandomProof()

    // Show random popups periodically
    setInterval(() => {
      showRandomProof()
    }, 45000) // Every 45 seconds
  }, 15000)
}
