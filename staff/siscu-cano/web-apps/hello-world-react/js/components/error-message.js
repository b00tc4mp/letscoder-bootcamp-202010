function showErrorMessage(msg) {
  var container = mountContainer(`<section className="error-message">
    <img src="./images/error_icon.svg" width="24" height="24" alt="Icon error"><span className="error-message__inner">${msg}</span>
</section>`);

  return container;
}
