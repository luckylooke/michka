var limit = 30, // Max number of stars
  destination = document.getElementsByClassName('stars')[0];
loop = {
  //initilizeing
  start: function() {
    for (var i = 0; i <= limit; i++) {
      var star = this.newStar();
      star.style.top = this.rand() * 100 + '%';
      star.style.left = this.rand() * 100 + '%';
      star.style.webkitAnimationDelay = this.rand() + 's';
      star.style.mozAnimationDelay = this.rand() + 's';
      destination.appendChild(star);
    }
  },
  //to get random number
  rand: function() {
    return Math.random();
  },
  //createing html dom for star
  newStar: function() {
    var d = document.createElement('div');
    d.innerHTML =
      '<figure class="star">✶</figure>';
    return d.firstChild;
  },
};
loop.start();