export const Mapper = (timestamp) => {
  const seconds = (new Date() - timestamp * 1000) / 1000;

  let interval = seconds / 31556952;

  if (interval > 1) {
    const result = `${interval.toString().split(".")[0]} years ago`;
    return result;
  }

  interval = seconds / 2592000;

  if (interval > 1) {
    const result = `${interval.toString().split(".")[0]} months ago`;
    return result;
  }

  interval = seconds / 86400;

  if (interval > 1) {
    const result = `${interval.toString().split(".")[0]} days ago`;
    return result;
  }

  interval = seconds / 3600;

  if (interval > 1) {
    const result = `${interval.toString().split(".")[0]} hours ago`;
    return result;
  }

  interval = seconds / 60;

  if (interval > 1) {
    const result = `${interval.toString().split(".")[0]} minutes ago`;
    return result;
  }

  interval = seconds;

  const result = `${interval.toString().split(".")[0]} seconds ago`;
  return result;
};
