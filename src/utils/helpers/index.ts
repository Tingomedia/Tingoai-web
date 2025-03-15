/**
 * Truncate text to a specified length and add ellipsis if necessary.
 *
 * @param text - The text to truncate.
 * @param end - The maximum length of the truncated text.
 * @returns The truncated text with ellipsis if it exceeds the specified length.
 */
export const SliceText = (text: string | undefined | null, end: number): string => {
    if (!text) return ""; // Return an empty string if text is undefined or null
    if (text.length <= end) return text; // Return the full text if it's shorter than the limit
    return text.slice(0, end) + "..."; // Truncate and append ellipsis
  };
  
  
export const calculateDateRange = (category: string): [Date, Date] | null => {
    const now = new Date();
    switch (category) {
      case "Today": {
        return [new Date(now.setHours(0, 0, 0, 0)), new Date(now.setHours(23, 59, 59, 999))];
      }
      case "Yesterday": {
        const yesterday = new Date(now);
        yesterday.setDate(now.getDate() - 1);
        return [new Date(yesterday.setHours(0, 0, 0, 0)), new Date(yesterday.setHours(23, 59, 59, 999))];
      }
      case "1 week ago": {
        const weekAgo = new Date(now);
        weekAgo.setDate(now.getDate() - 7);
        return [new Date(weekAgo.setHours(0, 0, 0, 0)), new Date()];
      }
      case "2 weeks ago": {
        const twoWeeksAgo = new Date(now);
        twoWeeksAgo.setDate(now.getDate() - 14);
        return [new Date(twoWeeksAgo.setHours(0, 0, 0, 0)), new Date()];
      }
      case "1 month ago": {
        const monthAgo = new Date(now);
        monthAgo.setMonth(now.getMonth() - 1);
        return [new Date(monthAgo.setHours(0, 0, 0, 0)), new Date()];
      }
      case "1 year ago": {
        const yearAgo = new Date(now);
        yearAgo.setFullYear(now.getFullYear() - 1);
        return [new Date(yearAgo.setHours(0, 0, 0, 0)), new Date()];
      }
      case "2 years ago": {
        const twoYearsAgo = new Date(now);
        twoYearsAgo.setFullYear(now.getFullYear() - 2);
        return [new Date(twoYearsAgo.setHours(0, 0, 0, 0)), new Date()];
      }
      case "5 years ago": {
        const fiveYearsAgo = new Date(now);
        fiveYearsAgo.setFullYear(now.getFullYear() - 5);
        return [new Date(fiveYearsAgo.setHours(0, 0, 0, 0)), new Date()];
      }
      default:
        return null;
    }
  };
  

export const formatDateTime = (timestamp: string): string => {
  const date = new Date(timestamp);

  // Format time in 24-hour format: "HH:mm"
  const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

  // Format date as "DD/MM/YY"
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year

  // Combine the formatted parts
  return `${time} WAT-${day}/${month}/${year}`;
};


