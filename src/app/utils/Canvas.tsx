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


export class innerCircles {
    x: number;
    y: number;
    radius: number;
    startPoint: number;
    endPoint: number;
    color: string;
    color1: string;
    width: number;

    constructor(x: number, y: number, radius: number, startPoint: number, endPoint: number, color: string, color1: string, width: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.color = color;
        this.color1 = color1;
        this.width = width;
    }

    draw(c1: CanvasRenderingContext2D) {
        c1.beginPath();
        c1.arc(this.x, this.y, this.radius, this.startPoint, this.endPoint);
        c1.fillStyle = this.color1;
        c1.fill();
        c1.lineWidth = this.width;
        c1.strokeStyle = this.color;
        c1.stroke();
    }
}
