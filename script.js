const textarea = document.getElementById('message');
const counter = document.getElementById('counter');
const warning = document.getElementById('warning');
const maxChars = 200;

textarea.addEventListener('input', () => {
    const textLength = textarea.value.length;

    if (textLength > maxChars) {
        textarea.value = textarea.value.substring(0, maxChars);
        warning.textContent = "You have reached the maximum character limit!";
    } else {
        warning.textContent = "";
    }

    counter.textContent = `${textarea.value.length}/${maxChars} characters`;
});
