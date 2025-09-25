//Métodos de propiedad

const player = {
    playlist : function(id){
        console.log("playlist song", id);
    },
    play : function(id){
        console.log("Playing song...", id);
    },
    pause : function(id){
console.log(`Paused..., ${id}`);
    },
    delete : function(id){
        console.log(`Deleted song..., ${id}`);
    }
}

console.log(player);
player.playlist(217);
player.play(217);
player.pause(217);
player.delete(217);