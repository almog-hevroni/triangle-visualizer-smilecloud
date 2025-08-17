import React from "react";
import { Point, TriangleAngles } from "../types";
import { createArcPath, getAngleForArc } from "../utils/mathUtils";

interface TriangleCanvasProps {
  points: [Point, Point, Point];
  angles: TriangleAngles;
}

const TriangleCanvas: React.FC<TriangleCanvasProps> = ({ points, angles }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 shadow-inner">
      <svg
        width="800"
        height="800"
        className="w-full h-full"
        viewBox="0 0 800 800"
      >
        {/* Grid Background */}
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="1"
              opacity="0.5"
            />
          </pattern>
          <linearGradient
            id="triangleGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <rect width="800" height="800" fill="url(#grid)" />

        {/* Triangle */}
        <polygon
          points={`${points[0].x},${points[0].y} ${points[1].x},${points[1].y} ${points[2].x},${points[2].y}`}
          fill="rgba(99, 102, 241, 0.1)"
          stroke="url(#triangleGradient)"
          strokeWidth="3"
          strokeLinejoin="round"
          className="animate-scale-in"
        />

        {/* Angle Arcs */}
        <g className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <path
            d={createArcPath(
              points[0],
              getAngleForArc(points[0], points[1]),
              getAngleForArc(points[0], points[2])
            )}
            fill="rgba(239, 68, 68, 0.2)"
            stroke="#ef4444"
            strokeWidth="2"
          />
          <path
            d={createArcPath(
              points[1],
              getAngleForArc(points[1], points[2]),
              getAngleForArc(points[1], points[0])
            )}
            fill="rgba(34, 197, 94, 0.2)"
            stroke="#22c55e"
            strokeWidth="2"
          />
          <path
            d={createArcPath(
              points[2],
              getAngleForArc(points[2], points[0]),
              getAngleForArc(points[2], points[1])
            )}
            fill="rgba(59, 130, 246, 0.2)"
            stroke="#3b82f6"
            strokeWidth="2"
          />
        </g>

        {/* Points */}
        {points.map((point, index) => (
          <g
            key={index}
            className="animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <circle
              cx={point.x}
              cy={point.y}
              r="8"
              fill={
                index === 0 ? "#ef4444" : index === 1 ? "#22c55e" : "#3b82f6"
              }
              stroke="white"
              strokeWidth="3"
            />
            <text
              x={point.x}
              y={point.y - 20}
              textAnchor="middle"
              className="text-lg font-bold"
              fill={
                index === 0 ? "#ef4444" : index === 1 ? "#22c55e" : "#3b82f6"
              }
            >
              {String.fromCharCode(65 + index)}
            </text>
          </g>
        ))}

        {/* Angle Labels */}
        <g className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <text
            x={points[0].x - 40}
            y={points[0].y + 10}
            className="text-sm font-semibold"
            fill="#dc2626"
          >
            {angles.A.toFixed(1)}°
          </text>
          <text
            x={points[1].x - 40}
            y={points[1].y + 10}
            className="text-sm font-semibold"
            fill="#16a34a"
          >
            {angles.B.toFixed(1)}°
          </text>
          <text
            x={points[2].x + 20}
            y={points[2].y - 5}
            className="text-sm font-semibold"
            fill="#2563eb"
          >
            {angles.C.toFixed(1)}°
          </text>
        </g>
      </svg>
    </div>
  );
};

export default TriangleCanvas;
