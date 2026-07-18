function setCopyState(button, label, text) {
    label.textContent = text;
    button.dataset.state = text.toLowerCase();
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("[data-copy-target]");

    if (!button || !navigator.clipboard) {
        return;
    }

    const label = button.querySelector(".copy-label");
    const target = document.getElementById(button.dataset.copyTarget);

    if (!label || !target) {
        return;
    }

    button.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(target.textContent.trim());
            setCopyState(button, label, "Kopiert");

            window.setTimeout(() => {
                setCopyState(button, label, "Kopieren");
            }, 1600);
        } catch (error) {
            setCopyState(button, label, "Fehler");

            window.setTimeout(() => {
                setCopyState(button, label, "Kopieren");
            }, 1600);
        }
    });
});
