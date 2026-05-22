import * as Tools from './index.js';

// 1. ملمع الكود
document.getElementById('formatBtn').addEventListener('click', () => {
    const input = document.getElementById('codeInput').value;
    document.getElementById('output').textContent = Tools.formatJSON(input);
});

// 2. محول الألوان
document.getElementById('colorBtn').addEventListener('click', () => {
    const hex = document.getElementById('hexInput').value;
    document.getElementById('rgbOutput').textContent = Tools.hexToRgb(hex);
});

// 3. ترميز HTML (أضف هذا الجزء)
document.getElementById('htmlBtn').addEventListener('click', () => {
    const input = document.getElementById('htmlInput').value;
    document.getElementById('htmlOutput').textContent = Tools.encodeHTML(input);
});

// 4. تحويل التوقيت (أضف هذا الجزء)
document.getElementById('timeBtn').addEventListener('click', () => {
    const input = document.getElementById('timeInput').value;
    document.getElementById('timeOutput').textContent = Tools.convertTimestamp(input);
});