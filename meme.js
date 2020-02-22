class MemeJS {
    constructor(props) {
        this.body = this.select("body")
        this.width = props.width
        this.height = props.height

        this.init()
        this.canvas = this.select("canvas")
        this.ctx = this.canvas.getContext('2d')
    }
    select(dom) {
        return document.querySelector(dom)
    }
    createCanvas(w, h, ratio) {
        var can = document.createElement("canvas");
        can.width = w * ratio;
        can.height = h * ratio;
        can.style.width = w + "px";
        can.style.height = h + "px";
        can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
        this.body.appendChild(can)
        return can;
    }
    init() {
        this.body.style.textAlign = 'center'
        this.createCanvas(this.width, this.height, 1)
    }
    setTemplate(source) {
        this.addImage({
            src: source,
            width: this.width,
            height: this.height,
            position: {x:0,y:0}
        })
    }
    addText(props) {
        if(props.font === undefined) {
            this.ctx.font = "28px Arial"
        }else {
            this.ctx.font = props.font
        }
        setTimeout(() => {
            this.ctx.fillText(props.text, props.position.x, props.position.y)
        }, 500);
    }
    addImage(props) {
        let img = new Image()
        img.src = props.src
        img.onload = () => {
            this.ctx.drawImage(img, props.position.x, props.position.y, props.width, props.height)
        }
    }
    download(filename = "meme") {
        setTimeout(() => {
            let link = document.createElement('a')
            link.download = filename + ".png"
            link.href = this.canvas.toDataURL()
            link.click()
        }, 1500);
    }
}