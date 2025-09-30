"use client";
import { innerCircles } from "../utils/Canvas";
import { useEffect, useRef } from "react";

function canvasFunction(canvasElement: HTMLCanvasElement | null) {
    if (!canvasElement) return;
    const c = canvasElement.getContext("2d") as CanvasRenderingContext2D;
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;
    c.globalCompositeOperation = "destination-over";

    const circles = [
    new innerCircles(2, canvasElement.height -1, 200, 0, 2 * Math.PI, "purple", "gray", 5),
    new innerCircles(2, canvasElement.height -1, 350, 0, 2 * Math.PI, "purple", "Grey", 5),
    new innerCircles(2, canvasElement.height -1, 500, 0, 2 * Math.PI, "purple", "Grey", 5),
    new innerCircles(2, canvasElement.height -1, 650, 0, 2 * Math.PI, "purple", "Grey", 5)
    ];

    circles.forEach(el => el.draw(c));

}

export default function FooterCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    
    useEffect(() => {
        canvasFunction(canvasRef.current);
    }, []);

    return (
        <canvas ref={canvasRef} className="footer-canvas w-full h-full absolute"></canvas>
    );
};
