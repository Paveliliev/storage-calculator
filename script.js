const fields = ["BUF_E", "BUF_C", "SH_L", "SH_W", "SH_H", "OC_L", "OC_W", "OC_H", "CL_L", "CL_W", "CL_H", "UK4W_L", "UK4W_W", "UK4W_H", "EURO_L", "EURO_W", "EURO_H"];
const factory = { "BUF_E":80, "BUF_C":100, "SH_L":55, "SH_W":32, "SH_H":30, "OC_L":51.5, "OC_W":33.5, "OC_H":34, "CL_L":238, "CL_W":41.5, "CL_H":36, "UK4W_L":120, "UK4W_W":100, "UK4W_H":167, "EURO_L":120, "EURO_W":80, "EURO_H":167 };
let clickCount = 0; 
let lastClick = 0;

function handleThemeClick() {
    const now = Date.now();
    if (now - lastClick < 900) clickCount++; else clickCount = 1;
    lastClick = now;
    if (clickCount >= 5) { 
        document.body.classList.toggle('matrix-mode'); 
        clickCount = 0; 
    } else { 
        document.body.classList.remove('matrix-mode'); 
        document.body.classList.toggle('dark-mode'); 
    }
}

function saveAndClose() {
    fields.forEach(id => localStorage.setItem(id, document.getElementById(id).value));
    document.getElementById('settings-modal').style.display='none';
}

function resetToFactory() {
    if(confirm("Restore defaults?")) {
        fields.forEach(id => { 
            document.getElementById(id).value = factory[id]; 
            localStorage.setItem(id, factory[id]); 
        });
        document.getElementById('settings-modal').style.display='none';
    }
}

function copyResults() {
    const textToCopy = window.copyText || "No results to copy";
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy).then(() => updateButton());
    } else {
        fallbackCopy(textToCopy);
    }
}

function fallbackCopy(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed"; 
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    try { 
        document.execCommand('copy'); 
        updateButton(); 
    } catch (err) {}
    document.body.removeChild(textArea);
}

function updateButton() {
    const btn = document.getElementById('copy-btn');
    const oldText = btn.innerText;
    btn.innerText = "✅ Results Copied!";
    setTimeout(() => btn.innerText = oldText, 2500);
}

window.onload = () => {
    fields.forEach(id => { 
        if(localStorage.getItem(id)) {
            document.getElementById(id).value = localStorage.getItem(id); 
        }
    });
};
