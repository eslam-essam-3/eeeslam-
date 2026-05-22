// js/tools/color-converter.js
export function hexToRgb(hex) {
    let r = 0, g = 0, b = 0;
    // إزالة علامة # إذا كانت موجودة
    hex = hex.replace('#', '');
    
    // تحويل الأرقام من Hex إلى RGB
    if (hex.length === 6) {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    }
    return `rgb(${r}, ${g}, ${b})`;
}