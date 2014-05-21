var timeSince = function(then, now) {
  var delta = (now - then);
  if (delta < 50000) {
    return 'Just now';
  }
  else if (delta < 120000) {
    return 'About a minute ago';
  }
  else if (delta < 3000000) {
    return Math.floor(delta / 60000) + ' minutes ago';
  }
  else if (delta < 7200000) {
    return 'About an hour ago';
  }
  else if (delta < 72000000) {
    return Math.floor(delta / 3600000) + ' hours ago';
  }
  else if (delta < 172800000) {
    return 'About a day ago';
  }
  else {
    return Math.floor(delta / 86400000) + ' days ago';
  }
}

module.exports = timeSince;
