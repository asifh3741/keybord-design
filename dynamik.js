const spaceBtn = document.querySelector("#space");
const display = document.querySelector(".display");


function disp(result) {
    form.textarea.value = form.textarea.value + result;
    spaceBtn.onclick = (() => {
        form.textarea.value += " ";
    });
    display.ondbclick = (() => {
        form.textarea.value = "";
    });
}