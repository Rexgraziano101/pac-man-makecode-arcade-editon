namespace SpriteKind {
    export const Berries = SpriteKind.create()
    export const Power = SpriteKind.create()
    export const Ghost = SpriteKind.create()
    export const Health = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 . . . . 5 . . . . 
        . . . . 5 5 5 . . . . 5 5 . . . 
        . . . 5 5 5 5 . . . . 5 5 5 . . 
        . . 5 5 5 5 5 . . . . 5 5 5 5 . 
        . . 5 5 f 1 f 5 5 5 5 5 5 5 5 . 
        . . 5 5 f f f 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 f 1 f 5 5 5 5 5 5 5 5 . . 
        . 5 5 f f f 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Berries, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ghost, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.splash("Very good ,you have found the button")
    game.over(true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 f f 5 5 5 5 5 5 . . . 
        . 5 5 5 5 1 f 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 f f 5 5 5 5 5 5 5 . . 
        . . . . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . . 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 f f 5 5 5 5 5 5 5 . . . 
        . 5 5 5 1 f 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 f f 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile5`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 f f 5 5 5 . . 
        . . 5 5 5 5 5 5 5 f 1 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 f f 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 f f 5 5 . . 
        . . 5 5 5 5 5 5 5 5 f 1 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 f f 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Health, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 f f f 5 5 . . 
        . 5 5 5 5 5 5 5 5 f 1 f 5 5 . . 
        . 5 5 5 5 . . . . 5 5 5 5 5 . . 
        . . 5 5 5 . . . . 5 5 5 5 . . . 
        . . . 5 5 . . . . 5 5 5 . . . . 
        . . . . 5 . . . . 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 f f f 5 5 . 
        . . 5 5 5 5 5 5 5 5 f 1 f 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Power, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(100)
})
let Health: Sprite = null
let Ghost: Sprite = null
let Super_Berries: Sprite = null
let Sweet_Berries: Sprite = null
let mySprite: Sprite = null
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 f f 5 5 f f 5 5 5 5 . . 
    . 5 5 5 f 1 5 5 1 f 5 5 5 5 . . 
    . 5 5 5 f f 5 5 f f 5 5 5 5 . . 
    . 5 5 5 5 5 1 1 5 5 5 5 5 5 . . 
    . 5 5 5 1 1 1 1 1 1 1 5 5 5 . . 
    . 5 5 1 1 1 1 1 1 1 1 1 5 5 . . 
    . 5 5 5 5 2 2 2 2 5 5 5 5 5 . . 
    . . 5 5 5 2 2 2 2 5 5 5 5 . . . 
    . . . 5 5 3 3 3 3 5 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.splash("Find The Button And Face Some Trouble")
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 f f 5 5 5 5 5 5 . . 
    . . 5 5 5 5 1 f 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 f f 5 5 5 5 5 5 5 . 
    . . . . . . 5 5 5 5 5 5 5 5 5 . 
    . . . . . . 5 5 5 5 5 5 5 5 5 . 
    . . . . . . 5 5 5 5 5 5 5 5 5 . 
    . . . . . . 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass2)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
music.setVolume(5000)
for (let value of tiles.getTilesByType(sprites.castle.tilePath5)) {
    Sweet_Berries = sprites.create(img`
        . 5 5 5 . 
        5 5 5 5 5 
        5 5 5 5 5 
        5 5 5 5 5 
        . 5 5 5 . 
        `, SpriteKind.Berries)
    tiles.placeOnTile(Sweet_Berries, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(sprites.castle.tileGrass1)) {
    Super_Berries = sprites.create(img`
        . 4 4 4 4 4 . 
        4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 
        . 4 4 4 4 4 . 
        `, SpriteKind.Power)
    tiles.placeOnTile(Super_Berries, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(sprites.builtin.forestTiles0)) {
    Ghost = sprites.create(img`
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . . 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 1 1 8 8 1 1 8 8 8 8 . 
        . . . 8 8 1 f 8 8 f 1 8 8 8 8 . 
        . . 8 8 8 1 1 8 8 1 1 8 8 8 8 . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . 8 8 8 . 8 8 8 . 8 8 . 8 8 8 8 
        `, SpriteKind.Ghost)
    tiles.placeOnTile(Ghost, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    Ghost.follow(mySprite, 10)
}
for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
    Health = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
        1 1 1 1 2 2 2 2 2 2 2 2 1 1 1 1 
        1 1 1 1 2 2 2 2 2 2 2 2 1 1 1 1 
        1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Health)
    tiles.placeOnTile(Health, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
music.playMelody("G A B G F - B G ", 120)
forever(function () {
    music.playMelody("D B D B D B D B ", 400)
})
