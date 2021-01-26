scene.onOverlapTile(SpriteKind.Enemy, assets.tile`tile3`, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile4`, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sammy.vy == 0) {
        music.pewPew.play()
        sammy.setVelocity(0, -82)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    sammy.setPosition(51, 0)
    music.wawawawaa.playUntilDone()
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.confetti, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sammy.setPosition(51, 0)
    music.jumpDown.playUntilDone()
    info.changeLifeBy(-1)
})
let bone: Sprite = null
let kitty: Sprite = null
let sammy: Sprite = null
music.playMelody("E D G F B A C5 B ", 120)
sammy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . 1 . . . . 
    . . . . . . . . . . . 1 1 1 1 . 
    . . . . . . . . . . . 1 f 1 1 . 
    . . . . . . . . . . . 1 1 1 1 . 
    . . 1 1 d 1 1 1 1 1 1 1 . . 2 . 
    . 1 1 . 1 1 d 1 d 1 d d . . . . 
    . 1 . . d 1 1 1 d 1 1 1 . . . . 
    . . . . d . 1 . . 1 . 1 . . . . 
    . . . . 1 . 1 . . 1 . 1 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
info.setLife(4)
controller.moveSprite(sammy, 100, 0)
scene.cameraFollowSprite(sammy)
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999911111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999911111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999991111111111111111111111119999999999999999999999999999999999999999999111119999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999991111111111111111111111111999999999999999999999999999999999999999911111111199111199999999999999999999999999999999999999999999999
    9999999999999999999999999999999991111111111111111111111111999999999999999999999999999999999999999111111111111111111991111999999999999999999999999999999999999999
    9999999999999999999999999999999111111111111111111111111111199999999999999999999999999999911119991111111111111111111111111119999999999999999999999999999999999999
    9999999999999999999999999999999111111111111111111111111111199999999999999999999999999999111111911111111111111111111111111111999999999999999999999999999999999999
    9999999999999999999999999999991111111111111111111111111111199999999999999999999999999999111111111111111111111111111111111111199999999999999999999999999999999999
    9999999999999999999999999999911111111111111111111111111111199999999999999999999999999991111111111111111111111111111111111111119999999999999999999999999999999999
    9999999999999999999999999999911111111111111111111111111111199999999999999999999999999991111111111111111111111111111111111111119999999999999999999999999999999999
    9999999999999999999999999999111111111111111111111111111111199999999999999999999999999991111111111111111111111111111111111111111999999999999999999999999999999999
    9999999999999999999999999999111111111111111111111111111111199999999999999999999999999991111111111111111111111111111111111111111999999999999999999999999999999999
    9999999999999999999999999999111111111111111111111111111111199999999999999999999999999991111111111111111111111111111111111111111999999999999999999999999999999999
    9999999999999999999999999999111111111111111111111111111111199999999999999999999999999991111111111111111111111111111111111111111999999999999999999999999999999999
    9999999999999999999999999999111111111111111111111111111111199999999999999999999999999991111111111111111111111111111111111111111999999999999999999999999111999999
    9999999999999999999999999999111111111111119999999911111111999999999999999999999999999991111111111111111111111111111111111111111999999999999999911111111111199999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111999999999911111111111111111119999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111119999999999991111111111111111111119999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111199
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111199
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111199
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111199
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111199
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111999
    99999999fff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111999999911111999
    999999ffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999ffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999ffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999ffff7ffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999ffff7777ffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999fffff77777ffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999ffff7777777ffffff9999999999999999999999ffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99ffff7777777777fffff9999999999999999999fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99ffff77777777777ffffff9999999999999999fffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9ffff7777777777777ffffff9999999999999fffffffffff999999999fffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    fffff77777777777777ffffff99999999999ffffff888ffff99999999ffffff9999999999999999999999999999999999999999fff99999999999999999999fff9999999999999999999999999999999
    ffff77777777777777777ffffff99999999ffffff8888fffff999999fffffff9999999999999fff999999999999999999999999ffff9999999999999999999ffff999999999999999999999999999999
    fff7777777777777777777ffffff99999ffffff8888888fffff9999fffffffff99999999999fffff99999999999999999999999fffff999999999999999ffffffff999999999999999fff99999999999
    ff777777777777777777777ffffff999ffffff888888888fffff999ffff7ffff999999999ffffffff999999999999999999999fffffff99999999999999fff6ffff99999999999999fffff9999999999
    7777777777777777777777777ffff9fffffff88888888888ffff99ffff777ffff9999999ffffffffff9999999999999999999fffffffff999999999999ffff66ffff999999999999ffffff9999999999
    77777777777777777777777777fffffffff88888888888888ffff9ffff777fffff99999ffffff6fffff99999999999999999fffff7ffff99999999999fffff66fffff99999999999fffffff999999999
    777777777777777777777777777fffffff888888888888888ffffffff77777ffff9999fffff6666fffff9999999999999999ffff777ffff9999999999ffff6666fffff999999999fffffffff99999999
    77777777777777777777777777ffffff888888888888888888fffff77777777ffff9ffffff666666fffff99999999999999ffff7777fffff99999999ffff666666fffff9999999fffff8ffff99999999
    777777777777777777777777fffffff88888888888888888888fffff7777777ffffffffff66666666ffff9999999999999fffff77777fffff999999fffff6666666ffff999999fffff888ffff9999999
    77777777777777777777777ffffff88888888888888888888888ffff77777777ffffffff6666666666ffff99999999999fffff7777777fffff99999ffff666666666ffff99999ffff8888ffff9999999
    777777777777777777777fffffff8888888888888888888888888ffff7777777ffffff666666666666fffff999999999fffff777777777fffff999ffff6666666666fffff999ffff888888ffff999999
    77777777777777777777ffffff888888888888888888888888888fffff777777fffff66666666666666fffff9999999fffff77777777777fffff9fffff66666666666fffff9fffff888888ffff999999
    7777777777777777777ffffff88888888888888888888888888888fffff777ffffff6666666666666666fffff999999ffff7777777777777ffff9ffff6666666666666fffffffff88888888ffff99999
    77777777777777777ffffff88888888888888888888888888888888fffff7ffffff666666666666666666fffff9999ffff777777777777777fffffff666666666666666fffffff888888888fffff9999
    7777777777777777ffffff8888888888888888888888888888888888ffffffffff66666666666666666666fffff99fffff777777777777777fffff66666666666666666ffffff88888888888ffff9999
    77777777777777fffffff888888888888888888888888888888888888fffffff66666666666666666666666ffff9fffff77777777777777777fffff66666666666666666fffff888888888888ffff999
    7777777777777ffffff88888888888888888888888888888888888888ffffff6666666666666666666666666ffffffff7777777777777777777fffff6666666666666666ffff8888888888888ffff999
    77777777777fffffff8888888888888888888888888888888888888888fffff666666666666666666666666666fffff777777777777777777777fffff66666666666666ffff888888888888888ffff99
    7777777777ffffff8888888888888888888888888888888888888888888fffff6666666666666666666666666fffff77777777777777777777777fffff666666666666fffff888888888888888ffff99
    77777777fffffff888888888888888888888888888888888888888888888ffff6666666666666666666666666ffff7777777777777777777777777ffff66666666666fffff88888888888888888ffff9
    7777777ffffff888888888888888888888888888888888888888888888888ffff66666666666666666666666ffff777777777777777777777777777ffff6666666666ffff888888888888888888fffff
    777777ffffff8888888888888888888888888888888888888888888888888fffff666666666666666666666fffff777777777777777777777777777fffff66666666ffff88888888888888888888ffff
    7777ffffff8888888888888888888888888888888888888888888888888888fffff6666666666666666666fffff77777777777777777777777777777fffff666666fffff888888888888888888888fff
    777ffffff888888888888888888888888888888888888888888888888888888fffff66666666666666666fffff7777777777777777777777777777777fffff6666fffff8888888888888888888888fff
    7fffffff88888888888888888888888888888888888888888888888888888888ffff6666666666666666fffff777777777777777777777777777777777fffff666ffff888888888888888888888888ff
    ffffff88888888888888888888888888888888888888888888888888888888888ffff666666666666666ffff77777777777777777777777777777777777fffff6ffff888888888888888888888888888
    fffff888888888888888888888888888888888888888888888888888888888888fffff6666666666666ffff7777777777777777777777777777777777777ffff6ffff888888888888888888888888888
    fff888888888888888888888888888888888888888888888888888888888888888fffff66666666666fffff77777777777777777777777777777777777777fffffff8888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888fffff666666666fffff777777777777777777777777777777777777777fffff888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888ffff66666666fffff77777777777777777777777777777777777777777ffff888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888ffff666666fffff777777777777777777777777777777777777777777ffff888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888fffff66666ffff7777777777777777777777777777777777777777777fffff88888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888fffff666ffff777777777777777777777777777777777777777777777ffff88888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888fffff6fffff7777777777777777777777777777777777777777777777ffff8888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888fffffffff77777777777777777777777777777777777777777777777fffff888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888fffffff7777777777777777777777777777777777777777777777777ffff888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888ffffff777777777777777777777777777777777777777777777777777ffff88888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888fffff7777777777777777777777777777777777777777777777777777fffff8888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888ffff777777777777777777777777777777777777777777777777777777ffff8888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888ffff77777777777777777777777777777777777777777777777777777777ffff888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888fffff77777777777777777777777777777777777777777777777777777777fffff88888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888fffff7777777777777777777777777777777777777777777777777777777777ffff88888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888fffff777777777777777777777777777777777777777777777777777777777777ffff8888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888fffff7777777777777777777777777777777777777777777777777777777777777fffff888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888ffff777777777777777777777777777777777777777777777777777777777777777fffff88888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888ffff77777777777777777777777777777777777777777777777777777777777777777ffff88888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888fffff77777777777777777777777777777777777777777777777777777777777777777fffff8888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888fffff7777777777777777777777777777777777777777777777777777777777777777777fffff888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888fffff777777777777777777777777777777777777777777777777777777777777777777777ffff888888888888888888
    888888888888888888888888888888888888888888888888888888888888888fffff77777777777777777777777777777777777777777777777777777777777777777777777ffff88888888888888888
    888888888888888888888888888888888888888888888888888888888888888ffff777777777777777777777777777777777777777777777777777777777777777777777777ffff88888888888888888
    88888888888888888888888888888888888888888888888888888888888888ffff77777777777777777777777777777777777777777777777777777777777777777777777777ffff8888888888888888
    8888888888888888888888888888888888888888888888888888888888888fffff77777777777777777777777777777777777777777777777777777777777777777777777777fffff888888888888888
    888888888888888888888888888888888888888888888888888888888888fffff7777777777777777777777777777777777777777777777777777777777777777777777777777ffff888888888888888
    88888888888888888888888888888888888888888888888888888888888fffff777777777777777777777777777777777777777777777777777777777777777777777777777777ffff88888888888888
    8888888888888888888888888888888888888888888888888888888888fffff7777777777777777777777777777777777777777777777777777777777777777777777777777777ffff88888888888888
    888888888888888888888888888888888888888888888888888888888fffff777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff8888888888888
    888888888888888888888888888888888888888888888888888888888ffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777fffff888888888888
    88888888888888888888888888888888888888888888888888888888ffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff888888888888
    8888888888888888888888888888888888888888888888888888888fffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff88888888888
    888888888888888888888888888888888888888888888888888888fffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff88888888888
    88888888888888888888888888888888888888888888888888888fffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff8888888888
    8888888888888888888888888888888888888888888888888888fffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffff888888888
    8888888888888888888888888888888888888888888888888888ffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff888888888
    888888888888888888888888888888888888888888888888888ffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff88888888
    88888888888888888888888888888888888888888888888888fffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff88888888
    8888888888888888888888888888888888888888888888888fffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff8888888
    888888888888888888888888888888888888888888888888fffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffff888888
    88888888888888888888888888888888888888888888888fffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff888888
    88888888888888888888888888888888888888888888888ffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff88888
    8888888888888888888888888888888888888888888888ffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff88888
    888888888888888888888888888888888888888888888fffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff8888
    88888888888888888888888888888888888888888888fffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffff888
    8888888888888888888888888888888888888888888fffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff888
    888888888888888888888888888888888888888888fffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff88
    88888888888888888888888888888888888888888fffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff88
    88888888888888888888888888888888888888888ffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff8
    8888888888888888888888888888888888888888ffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffff
    888888888888888888888888888888888888888fffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff
    88888888888888888888888888888888888888fffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fff
    88888888888888888888888888888888888888ffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fff
    `)
sammy.ay = 100
for (let value of tiles.getTilesByType(assets.tile`tile5`)) {
    kitty = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f . . 
        . . . . . . . . . . . . . f f f 
        . . . . . . . . . . . . . f 5 f 
        . . . . . . . . . . . . . f f f 
        . f f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f . . 
        . f . . f . f . . . . f . f . . 
        f f . . f . f . . . . f . f . . 
        . . . . f . f . . . . f . f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(kitty, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    kitty.ay = 100
}
for (let value of tiles.getTilesByType(assets.tile`tile6`)) {
    bone = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 1 . . . . 1 1 1 1 . 
        . . . 1 3 2 1 1 1 1 1 1 3 2 1 . 
        . . . 1 2 3 2 3 2 3 2 3 2 3 1 . 
        . . . 1 3 2 3 2 3 2 3 2 3 2 1 . 
        . . . 1 2 1 1 1 1 1 1 1 1 3 1 . 
        . . . 1 1 1 . . . . . . 1 1 1 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(bone, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.x > sammy.x) {
            value.vx = -50
        } else {
            value.vx = 50
        }
    }
})
game.onUpdateInterval(500, function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (randint(0, 10) == 5) {
            value.vy = -90
        }
    }
})
