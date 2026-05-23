import * as Tools from './index.js';

// 1. دالة لربط الأداة بـ الـ IDs الخاصة بها
function attachTool(btnId, inputId, outputId, toolFunc) {
    const btn = document.getElementById(btnId);
    if (btn) {
        btn.addEventListener('click', () => {
            const input = document.getElementById(inputId).value;
            const outputElement = document.getElementById(outputId);
            if (outputElement) {
                outputElement.textContent = toolFunc(input);
            }
        });
    }
}

// ربط الأدوات الأربع
attachTool('formatBtn', 'codeInput', 'output', Tools.formatJSON);
attachTool('colorBtn', 'hexInput', 'rgbOutput', Tools.hexToRgb);
attachTool('htmlBtn', 'htmlInput', 'htmlOutput', Tools.encodeHTML);
attachTool('timeBtn', 'timeInput', 'timeOutput', Tools.convertTimestamp);

// 2. كود النسخ الموحد (يُكتب مرة واحدة فقط)
document.querySelectorAll('.copyBtn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const element = document.getElementById(targetId);
        
        if (element && element.textContent.trim() !== "") {
            navigator.clipboard.writeText(element.textContent).then(() => {
                const originalText = btn.textContent;
                btn.textContent = "تم النسخ!";
                setTimeout(() => btn.textContent = originalText, 2000);
            });
        } else {
            alert("لا يوجد نص للنسخ! تأكد من توليد النتيجة أولاً.");
        }
    });
});