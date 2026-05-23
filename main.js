import * as Tools from './index.js';

// 1. وظيفة الأزرار (الربط)
function attachTool(btnId, inputId, outputId, toolFunc) {
    const btn = document.getElementById(btnId);
    if (btn) {
        btn.addEventListener('click', () => {
            const val = document.getElementById(inputId).value;
            document.getElementById(outputId).textContent = toolFunc(val);
        });
    }
}

attachTool('formatBtn', 'codeInput', 'output', Tools.formatJSON);
attachTool('colorBtn', 'hexInput', 'rgbOutput', Tools.hexToRgb);
attachTool('htmlBtn', 'htmlInput', 'htmlOutput', Tools.encodeHTML);
attachTool('timeBtn', 'timeInput', 'timeOutput', Tools.convertTimestamp);

// 2. وظيفة النسخ (موحدة ولا تكرار فيها)
document.querySelectorAll('.copyBtn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const element = document.getElementById(targetId);
        
        // استخدام innerText لجلب النص الذي يظهر للمستخدم
        const textToCopy = element ? element.innerText : "";

        if (textToCopy && textToCopy.trim() !== "") {
            navigator.clipboard.writeText(textToCopy).then(() => {
                const original = btn.textContent;
                btn.textContent = "تم النسخ!";
                setTimeout(() => btn.textContent = original, 2000);
            });
        } else {
            alert("لا يوجد نص للنسخ!");
        }
    });
});