export function formatJSON(input) {
    const parsed = JSON.parse(input);
    return JSON.stringify(parsed, null, 4);
}