export function convertTimestamp(ts) {
    return new Date(ts * 1000).toLocaleString();
}