const daysAgo = function(date) {
  const today = new Date();
  //difference in time / number of milliseconds in a day
  return Math.round((today - date) / (1000 * 60 * 60 * 24));

};

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};