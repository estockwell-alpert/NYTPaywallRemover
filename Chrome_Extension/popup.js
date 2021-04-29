let changeColor = document.getElementById("changeColor");

changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
	console.log("Removing paywall!");
    document.getElementById("gateway-content").remove();
    document.getElementsByClassName("css-mcm29f")[0].style.position = "initial";
    document.getElementsByClassName("css-1bd8bfl")[0].style.background = "none";
  });
}