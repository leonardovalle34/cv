document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector("h1");
  const text = title.textContent;
  title.textContent = "";

  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      title.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };

  setTimeout(typeWriter, 500);

  const elements = document.querySelectorAll(
    ".profile-card, .language-selector"
  );
  elements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
  });

  let delay = 300;
  elements.forEach((el) => {
    setTimeout(() => {
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, delay);
    delay += 200;
  });
});
