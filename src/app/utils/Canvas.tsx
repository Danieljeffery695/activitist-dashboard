export class BezierCurve {
    cp1x: number;
    cp1y: number;
    cp2x: number;
    cp2y: number;
    x: number;
    y: number;
    color: string;
    width: number;

    constructor(cp1x: number, cp1y: number, cp2x: number, cp2y:number, x:number, y:number, color:string, width:number) {
        this.cp1x = cp1x;
        this.cp1y = cp1y;
        this.cp2x = cp2x;
        this.cp2y = cp2y;
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
    }

    draw(c: CanvasRenderingContext2D, x: number, y: number) {
        c.beginPath();
        c.moveTo(x, y);
        c.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y);
        c.strokeStyle = this.color;
        c.lineWidth = this.width;
        c.stroke();
    }


} 
