document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {

            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            tabPanes.forEach(pane => pane.classList.remove("active"));
            const targetPane = document.getElementById(tab.dataset.tab);
            targetPane.classList.add("active");
        });
    });
});
