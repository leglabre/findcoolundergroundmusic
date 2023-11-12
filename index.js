function workingSite() {
var band = new set(['https://open.spotify.com/album/7uDX4DjHqn19vrtTYCGcUM', 'https://open.spotify.com/album/0J2TlWaut2IAlWdBRHLIHf', 'https://open.spotify.com/album/1WXUFnkSXHvBSPyqeuZ7Qd', 'https://open.spotify.com/album/5AI0KCzgLqhLxjRSF3ZhJW]);  

var generateBand = band[Math.floor(Math.random()*band.length)];
window.open(generateBand);

};







