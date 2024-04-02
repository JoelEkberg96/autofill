// popup.js
document.addEventListener('DOMContentLoaded', function() {
  var fillButton = document.getElementById('fillButton');
  fillButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {action: "fillForm"}, function(response) {
              if (chrome.runtime.lastError) {
                  console.error(chrome.runtime.lastError.message);
              } else if (response) {
                  console.log(response.status);
              }
          });
      });
  }, false);
});
