import React from "react";
import { ChevronRight, Triangle, Sparkles } from "lucide-react";
import { Point } from "../types";

interface InputPageProps {
  points: [Point, Point, Point];
  onPointChange: (index: number, axis: "x" | "y", value: string) => void;
  onNavigate: () => void;
}

const InputPage: React.FC<InputPageProps> = ({
  points,
  onPointChange,
  onNavigate,
}) => {
  const pointColors = [
    "bg-gradient-to-br from-red-400 to-red-600",
    "bg-gradient-to-br from-green-400 to-green-600",
    "bg-gradient-to-br from-blue-400 to-blue-600",
  ];

  return (
    <div className="flex items-center justify-center min-h-screen p-8 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full transform transition-all hover:scale-[1.01] animate-scale-in">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
            <Triangle className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Triangle Visualizer
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Enter three points to create your triangle
            </p>
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${pointColors[index]}`}
                >
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="text-gray-700 font-medium">
                  Point {index + 1}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <label className="absolute -top-2 left-3 bg-white px-2 text-xs text-gray-500">
                    X Coordinate
                  </label>
                  <input
                    type="number"
                    value={point.x}
                    onChange={(e) => onPointChange(index, "x", e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all hover:border-gray-300"
                    min="0"
                    max="800"
                  />
                </div>
                <div className="relative">
                  <label className="absolute -top-2 left-3 bg-white px-2 text-xs text-gray-500">
                    Y Coordinate
                  </label>
                  <input
                    type="number"
                    value={point.y}
                    onChange={(e) => onPointChange(index, "y", e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all hover:border-gray-300"
                    min="0"
                    max="800"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          onClick={onNavigate}
          className="mt-8 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg
            hover:from-blue-600 hover:to-purple-700 transform transition-all hover:scale-[1.02] active:scale-[0.98]
            flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
        >
          <Sparkles className="w-5 h-5" />
          Show Triangle
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Instructions */}
        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
          <p className="text-sm text-gray-600 text-center">
            💡 Enter coordinates between 0 and 800 for each point
          </p>
        </div>
      </div>
    </div>
  );
};

export default InputPage;
