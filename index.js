function workingSite() {
var band = [
    'https://open.spotify.com/album/0teLd0sW4Qbn0KhDIwpHWg', 
    'https://open.spotify.com/album/6XFsP91B5p2FxMf3kOoxTW', 
    'https://open.spotify.com/album/3BhbcPNp6GMeglrIqngW67', 
    'https://open.spotify.com/album/586vIsPHVq8e7RxCk9FmSj', 
    'https://open.spotify.com/album/3Vg7Z4xuX5UnRxPxqbUhKx'
];



var generateBand = band[Math.floor(Math.random()*band.length)];
window.open(generateBand);

};







