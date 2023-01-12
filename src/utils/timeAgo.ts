export const timeAgo = (someDateInThePast?: number): string => {
  if (!someDateInThePast) return 'N/A';
  let result = '';
  // Dates in second timestamps
  const difference = Math.round(Date.now() / 1000) - someDateInThePast;
  //
  const minutes = Math.floor((difference / 60) % 60);
  const hours = Math.floor((difference / 60 / 60) % 24);
  const days = Math.floor(difference / 60 / 60 / 24);
  //
  const hasMinutes = minutes > 0;
  const hasHours = hours > 0;
  const hasDays = days > 0;

  if (difference < 5) {
    return 'just now';
  } else if (difference < 90) {
    return 'moments ago';
  }

  if (hasMinutes) {
    result = `${minutes}min`;
  }

  if (hasHours) {
    result = `${hours}h, ${minutes}min`;
  }

  if (hasDays) {
    result = `${days}d, ${hours}h`;
  }

  return result + ' ago';
};
