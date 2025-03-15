export const formatTimeHelper = (timestamp: string): string => {
  const date = new Date(timestamp); // ✅ Parses ISO format
  const now = new Date();

  const timeDiff = now.getTime() - date.getTime();
  const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in one day

  if (timeDiff < oneDay && now.getDate() === date.getDate()) {
    return "Today";
  } else if (timeDiff < 2 * oneDay && now.getDate() - date.getDate() === 1) {
    return "Yesterday";
  } else if (timeDiff < 7 * oneDay) {
    return "Last 7 days";
  } else if (now.getFullYear() === date.getFullYear()) {
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
  } else {
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }
};
