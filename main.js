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
document.querySelectorAll('.copyBtn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        
        // هنا التعديل: نستخدم innerText لأنه أكثر دقة مع المربعات
        let textToCopy = targetElement.innerText || targetElement.textContent;

        // اختبار إذا كان النص فارغاً
        if (!textToCopy || textToCopy.trim() === "") {
            alert("لا يوجد نص لنسخه! تأكد من تشغيل الأداة أولاً.");
            return;
        }

        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = btn.textContent;
            btn.textContent = "تم النسخ!";
            setTimeout(() => btn.textContent = originalText, 2000);
        });
    });
});