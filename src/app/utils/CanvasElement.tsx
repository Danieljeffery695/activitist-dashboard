"use client";
import { BezierCurve } from "../utils/Canvas";
import { useEffect, useRef } from "react";

function sectionFourCanvas(canvasElement: HTMLCanvasElement | null) {
    if (!canvasElement) return;
    const c = canvasElement.getContext("2d") as CanvasRenderingContext2D;
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;
    const testing = new BezierCurve(220 * 2, 200 * 3, 250 * 3, -20, canvasElement.width + 10, 50, "#8f68ff", 25);
    const testing1 = new BezierCurve(250, 0, 0, 200, canvasElement.width + 10, 350, "#EDDD53", 25);
    testing.draw(c, -6, canvasElement.height / 2);
    testing1.draw(c, 0, canvasElement.height / 2);
}

export default function CanvasElement() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    
    useEffect(() => {
        sectionFourCanvas(canvasRef.current);
    }, []);

    return (
        <canvas ref={canvasRef} className="w-full h-80"></canvas>
    );
}
