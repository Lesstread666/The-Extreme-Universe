export const normalizeName = (name) => {
    return name.toLowerCase().replace(/\s+/g, " ").trim();
};