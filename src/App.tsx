import React, { useState } from "react";
import InputPage from "./components/InputPage";
import DisplayPage from "./components/DisplayPage";
import { Point, Page } from "./types";
import { calculateTriangleAngles, isValidTriangle } from "./utils/mathUtils";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("input");
  const [points, setPoints] = useState<[Point, Point, Point]>([
    { x: 200, y: 100 },
    { x: 100, y: 300 },
    { x: 400, y: 350 },
  ]);

  const handlePointChange = (index: number, axis: "x" | "y", value: string) => {
    const numValue = parseInt(value) || 0;
    const newPoints = [...points] as [Point, Point, Point];
    newPoints[index] = { ...newPoints[index], [axis]: numValue };
    setPoints(newPoints);
  };

  const handleNavigate = () => {
    // Check if triangle is valid before navigating
    if (!isValidTriangle(points)) {
      alert(
        "The selected points do not form a valid triangle. Please ensure the points are not on the same line."
      );
      return;
    }
    setCurrentPage("display");
  };

  const angles = calculateTriangleAngles(points);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {currentPage === "input" ? (
        <InputPage
          points={points}
          onPointChange={handlePointChange}
          onNavigate={handleNavigate}
        />
      ) : (
        <DisplayPage
          points={points}
          angles={angles}
          onBack={() => setCurrentPage("input")}
        />
      )}
    </div>
  );
}

export default App;
