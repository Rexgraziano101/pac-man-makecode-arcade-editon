// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001080808080808080808080808080804050d1313140c0c0c0c0c0c0c0c0c0d06050c0c0c0a0a0a0c0c150a0a0c130c06050a0a0c0a0c0a0c0c0a0c0a0c0a0a06050c0a0c0c0c0c0c0c0c0c0c0c0a0c06050c0c0c0a0c0a0c0c0a0c0a0c0c0c060f0c0c0c0a0a0c0c0c0c0a0a0c0c0c11120c0c0c0c0a0b0b0b0b0a0c0c0c1310050c140c0c0a0c0c0c0c0a0c0c140c06050a0a0c0c0a0a0a0c0a0a0c0c0a0a06050a090a0a0c0c0a0c0a0c0a0a090a06050a0a0c0a0c0a0a0c0a0c0a0c0a0a06050a130c0a0c0a0c0c0a0c0a0c0c0a06050a0d0c0c0c0c0c0e0c140c0c0d0a06050a0a0a0a0a0a0a0a0a0a0a0a0a0a0603070707070707070707070707070702`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 2 2 . . . 2 2 . . . 2 
2 2 2 . 2 . 2 . . 2 . 2 . 2 2 2 
2 . 2 . . . . . . . . . . 2 . 2 
2 . . . 2 . 2 . . 2 . 2 . . . 2 
. . . . 2 2 . . . . 2 2 . . . . 
. . . . . 2 . . . . 2 . . . . . 
2 . . . . 2 . . . . 2 . . . . 2 
2 2 2 . . 2 2 2 . 2 2 . . 2 2 2 
2 2 . 2 2 . . 2 . 2 . 2 2 . 2 2 
2 2 2 . 2 . 2 2 . 2 . 2 . 2 2 2 
2 2 . . 2 . 2 . . 2 . 2 . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark2,myTiles.tile2,myTiles.tile3,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass2,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.builtin.forestTiles0,myTiles.tile8,myTiles.tile9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
