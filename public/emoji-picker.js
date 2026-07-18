function updateEmojiButtons(input) {
    document.querySelectorAll(`[data-emoji-target="${input.id}"]`).forEach((button) => {
        const value = button.dataset.emojiValue;
        const isActive = value === "random" || value === ""
            ? input.value === value
            : input.value.includes(value);

        button.classList.toggle("is-active", isActive);
    });
}

function insertAtCursor(input, value) {
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;

    input.value = input.value.slice(0, start) + value + input.value.slice(end);
    input.selectionStart = start + value.length;
    input.selectionEnd = start + value.length;
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".emoji-input").forEach((input) => {
        updateEmojiButtons(input);

        input.addEventListener("input", () => {
            updateEmojiButtons(input);
        });
    });

    document.querySelectorAll("[data-emoji-target]").forEach((button) => {
        button.addEventListener("click", () => {
            const input = document.getElementById(button.dataset.emojiTarget);

            if (!input) {
                return;
            }

            if (button.dataset.emojiValue === "" || button.dataset.emojiValue === "random") {
                input.value = button.dataset.emojiValue;
            } else {
                if (input.value === "random") {
                    input.value = "";
                }

                insertAtCursor(input, button.dataset.emojiValue);
            }

            input.focus();
            updateEmojiButtons(input);
        });
    });
});
