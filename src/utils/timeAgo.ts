export const timeAgo = (someDateInThePast?: number): string => {
  if (!someDateInThePast) return 'N/A';
  let result = '';
  const difference = Date.now() - someDateInThePast * 1000;
  const hasMinutes = (difference % 1000) * 3600 > 0;
  const hasHours = (difference % 1000) * 3600 * 60 > 0;
  const hasDays = (difference % 1000) * 3600 * 60 * 24 > 0;

  if (difference < 5 * 1000) {
    return 'just now';
  } else if (difference < 90 * 1000) {
    return 'moments ago';
  }

  //it has minutes
  // Do not display minutes if it has hours
  if (!hasHours && hasMinutes) {
    if (Math.floor((difference / 1000 / 60) % 60) > 0) {
      const s = Math.floor((difference / 1000 / 60) % 60) === 1 ? '' : 's';
      result = `${Math.floor((difference / 1000 / 60) % 60)}min${s} `;
    }
  }

  //it has hours
  if (hasHours) {
    if (Math.floor((difference / 1000 / 60 / 60) % 24) > 0) {
      result = `${Math.floor((difference / 1000 / 60 / 60) % 24)}h${result === '' ? '' : ','} ` + result;
    }
  }

  //it has days
  if (hasDays) {
    if (Math.floor(difference / 1000 / 60 / 60 / 24) > 0) {
      result = `${Math.floor(difference / 1000 / 60 / 60 / 24)}d${result === '' ? '' : ','} ` + result;
    }
  }

  return result + ' ago';
};
