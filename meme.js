class MemeJS {
    constructor(props) {
        this.body = this.select("body")

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
        this.createCanvas(600, 600, 4)
    }
    inits() {
        this.body.style.textAlign = 'center'
        let canvas = document.createElement('canvas')
        canvas.style.width = '600px'
        canvas.style.height = '600px'
        canvas.style.marginTop = '2%'
        this.body.appendChild(canvas)
    }
    setBackground(source) {
        // this.canvas.style.background = `url(${source})`
        // this.canvas.style.backgroundSize = '600px 600px'
        // this.canvas.style.backgroundRepeat = `no-repeat`
        // this.canvas.style.backgroundPosition = `center center`
        this.addImage({
            src: source,
            width: 600,
            height: 600,
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
    download(filename = "meme.png") {
        let lnk = document.createElement('a'), e
        lnk.download = filename
        lnk.href = this.canvas.toDataURL('image/png')
        if (document.createEvent) {
            e = document.createEvent("MouseEvents");
            e.initMouseEvent("click", true, true, window,
                            0, 0, 0, 0, 0, false, false, false,
                            false, 0, null);

            lnk.dispatchEvent(e);
        } else if (lnk.fireEvent) {
            lnk.fireEvent("onclick");
        }
    }
}