class Overworld {
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }
    init(){
        console.log("Hello from the code!", this);
        const image = new Image();
        image.onload = () => {
            //draw image
            this.ctx.drawImage(image,0,0);

        };
        image.src = "images/maps/bg1.png";
    }
}