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
        // 1. تحديد المربع الهدف بناءً على data-target
        const targetId = btn.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const textToCopy = targetElement.textContent || targetElement.value;
            
            // 2. محاولة النسخ
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalText = btn.textContent;
                btn.textContent = "تم النسخ!";
                btn.style.backgroundColor = "#27ae60"; // لون أخضر للنجاح
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.backgroundColor = ""; // يعود للونه الأصلي
                }, 2000);
            }).catch(err => {
                console.error('فشل النسخ: ', err);
            });
        } else {
            console.error("خطأ: لم أجد المربع الذي يحمل id=" + targetId);
        }
    });
});