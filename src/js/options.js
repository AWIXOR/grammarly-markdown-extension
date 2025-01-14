// Saves options to chrome.storage
const saveOptions = () => {
  chrome.storage.sync.set({
    turndown: {
      linkStyle: document.getElementById("turndown-linkSyle").value,
      bulletListMarker: document.getElementById("turndown-bulletListMarker")
        .value,
      emDelimiter: document.getElementById("turndown-emDelimiter").value,
      strongDelimiter: document.getElementById("turndown-strongDelimiter")
        .value,
    },
    escapeBackticks: !!document.getElementById("turndown-escapeBackticks")
      .checked,
  });
  alert("Settings saved");
};

const restoreOptions = () => {
  chrome.storage.sync.get(window.G2M_DEFAULT_SETTINGS, (items) => {
    document.getElementById("turndown-linkSyle").value =
      items.turndown.linkStyle;
    document.getElementById("turndown-bulletListMarker").value =
      items.turndown.bulletListMarker;
    document.getElementById("turndown-emDelimiter").value =
      items.turndown.emDelimiter;
    document.getElementById("turndown-strongDelimiter").value =
      items.turndown.strongDelimiter;
    document.getElementById("turndown-escapeBackticks").checked =
      items.escapeBackticks;
  });
};

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions);
