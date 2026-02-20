document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-tabs]").forEach((tabs) => {
    const buttons = tabs.querySelectorAll(".tab-btn");
    const panels = tabs.querySelectorAll(".tab-panel");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-tab");

        buttons.forEach((b) => b.classList.remove("is-active"));
        panels.forEach((p) => p.classList.remove("is-active"));

        btn.classList.add("is-active");
        const panel = tabs.querySelector(`#${target}`);
        if (panel) panel.classList.add("is-active");
      });
    });
  });
});
