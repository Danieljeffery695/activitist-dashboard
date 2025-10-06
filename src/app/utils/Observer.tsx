"use client";
import { useInView } from "react-intersection-observer";

export default function Observer(thresholdNum: number = 0, rootMarginNum: string = "0px", triggerOnceParam: boolean = false) {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: thresholdNum,
        rootMargin: rootMarginNum,
        triggerOnce: triggerOnceParam,
    });

    return {ref, inView};
}