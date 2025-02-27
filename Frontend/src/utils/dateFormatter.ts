export function formatDate(dateStr: string): string {
  // Parse the input string to a Date object
  const dateObj = new Date(dateStr);

  // Format the date to the desired string format: YYYY-MM-DD HH:MM:SS
  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
  const day = dateObj.getDate().toString().padStart(2, "0");
  const hours = dateObj.getHours().toString().padStart(2, "0");
  const minutes = dateObj.getMinutes().toString().padStart(2, "0");
  const seconds = dateObj.getSeconds().toString().padStart(2, "0");

  // Combine the parts into the formatted string
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return formattedDate;
}

