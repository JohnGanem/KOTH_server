var game = require('../models/game');

module.exports = function (io) {
    var viewer = io.of('/viewer');

    viewer.on('connection', function (socket) {
        socket.emit('new_connexion', {connexion: 'OK'});
        socket.on('recu', function (data) {
            io.of('/viewer').emit('new_viewer');
            socket.emit("game_status", {state: game.status});
            console.log(data);
        });
    });
    
    return viewer;
}