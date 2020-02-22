# MemeJS
Create funny meme using javascript. It just simple library, just include in your html file using `<script src>` and start creating your meme. So it doesn't require any fuckin tools like npm or any else.

## Start create your first meme
```
let meme = new MemeJS({
    width: YOUR_CANVAS_WIDTH,
    height: YOUR_CANVAS_HEIGHT,
})
```

## APIs
|Method|Params|
|---|--|
|setTemplate|source `string`|
|addText|text, position (x, y) `object`|
|addImage|source, width, height, position (x, y) `object`|
|download|filename `string`|

## Example
```
let meme = new MemeJS({
    width: 600,
    height: 600
})
meme.setTemplate("./assets/bg.jpg")
meme.addImage({
    src: './assets/js.jpg',
    width: 130,
    height: 130,
    position: {
        x: 200,
        y: 305
    }
})
meme.addText({
    text: '*temen: lu kalo bikin meme gimana?',
    position: {
        x: 25, 
        y: 55
    }
})
meme.addText({
    text: 'gw :',
    position: {
        x: 25, 
        y: 105
    }
})
meme.download("meme")
```

## Contribute
Anyone can make meme. Also anyone can contribute into this weird project. Just make pull request to contribute. 
