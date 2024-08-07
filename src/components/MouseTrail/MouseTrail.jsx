import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";

const MouseTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create a new application
    const app = new PIXI.Application({
      backgroundAlpha: 0, // Make the background transparent
      resizeTo: window,
    });

    if (canvasRef.current) {
      canvasRef.current.appendChild(app.view);
    }

    const historyX = [];
    const historyY = [];
    const historySize = 4;
    const ropeSize = 100;
    const points = [];

    // Create history array
    for (let i = 0; i < historySize; i++) {
      historyX.push(0);
      historyY.push(0);
    }

    // Create rope points
    for (let i = 0; i < ropeSize; i++) {
      points.push(new PIXI.Point(0, 0));
    }

    // Create a graphics object for the trail
    const trail = new PIXI.Graphics();
    app.stage.addChild(trail);

    let mousePosition = null;

    if (!app.stage) return;
    app.stage.eventMode = "static";
    app.stage.hitArea = app.screen;

    app.stage.on("mousemove", (event) => {
      mousePosition = mousePosition || { x: 0, y: 0 };
      mousePosition.x = event.global.x;
      mousePosition.y = event.global.y;
    });

    app.ticker.add(() => {
      if (!mousePosition) return;

      // Update the mouse values to history
      historyX.pop();
      historyX.unshift(mousePosition.x);
      historyY.pop();
      historyY.unshift(mousePosition.y);

      // Clear the previous graphics and set the color
      trail.clear();
      trail.lineStyle(4, 0x00ccff, 1); // Set the color to rgb(0, 204, 255) and width of the trail
      trail.beginFill(0x000000, 0.01);

      // Draw the trail
      trail.moveTo(historyX[0], historyY[0]);
      for (let i = 1; i < historySize; i++) {
        trail.lineTo(historyX[i], historyY[i]);
      }
    });

    return () => {
      app.destroy(true, { children: true });
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{
        width: "100vw",
        height: "100vh",
        top: "0",
        left: "0",
        position: "fixed",
        zIndex: 3,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
};

export { MouseTrail };
