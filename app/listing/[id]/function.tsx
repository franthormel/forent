// TODO: Unit test
/**
 * Returns the pluralizedd appending text with the number of items.
 * Example: 12 items, 4 apples, or 1 dog.
 * 
 * Does not work well with irregular nouns like:
 * children, cacti, mice, men, women, etc.
 * 
 * @param count Item(s) count
 * @param base Appending text (must be in singular form)
 * @returns Item(s) count + pluralized text
 */
export function pluralize(count: number, base: string): string {
    const value = `${count} ${base}`;

    if (count > 1) {
        return value + "s";
    }

    return value;
} 
