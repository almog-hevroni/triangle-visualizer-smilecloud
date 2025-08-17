import React from "react";
import { Triangle } from "lucide-react";
import { Point, TriangleAngles } from "../types";
import TriangleCanvas from "./TriangleCanvas";
import AngleSummary from "./AngleSummary";

interface DisplayPageProps {
  points: [Point, Point, Point];
  angles: TriangleAngles;
  onBack: () => void;
}

const DisplayPage: React.FC<DisplayPageProps> = ({
  points,
  angles,
  onBack,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-5xl w-full animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
              <Triangle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Triangle
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                Visualization with calculated angles
              </p>
            </div>
          </div>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium text-gray-700 transition-all
              hover:scale-105 active:scale-95"
          >
            ← Back to Input
          </button>
        </div>

        {/* Canvas */}
        <TriangleCanvas points={points} angles={angles} />

        {/* Angle Summary */}
        <AngleSummary angles={angles} />
      </div>
    </div>
  );
};

export default DisplayPage;
