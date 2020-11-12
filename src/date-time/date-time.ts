const getLongDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${day}/${month}/${year}`;
}

export const formatDate = (serialisedDate: string, currentDate: Date = new Date()): string => {
  const date = new Date(serialisedDate)
  const hour = 1000 * 60 * 60
  const diff = (currentDate.getTime() - date.getTime()) / hour
  if (diff > 24) {
    return getLongDate(date)
  } else {
    return Math.ceil(diff) + "h"
  }
}
