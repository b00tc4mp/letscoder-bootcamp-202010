function showErrorMessage(msg) {
    var container = mountContainer(`<section class="error-message">
    <img src="./images/error_icon.svg" width="24" height="24" alt="Icon error"><span class="error-message__inner">${msg}</span>
</section>`);

    //container.onclick = onHome;
    return container;
}