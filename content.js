// content.js
function fillForm() {
  document.getElementById('fbc_e').value = 'noreply@bstl.se';
  document.getElementById('fbc_f').value = 'smtp.postmarkapp.com';
  document.getElementById('fbc_g').value = '587';
  document.getElementById('fbc_h').value = '1af8b4ba-5b59-4231-998f-d0041b37dada';
  document.getElementById('fbc_i').value = '1af8b4ba-5b59-4231-998f-d0041b37dada';
  // ... The rest of your code for filling the form
}

// This listens for a message from your popup.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "fillForm") {
    fillForm();
    sendResponse({status: "Form filled"});
  }
  return true; // This is needed when using sendResponse asynchronously
});