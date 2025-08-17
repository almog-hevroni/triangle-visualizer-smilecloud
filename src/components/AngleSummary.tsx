import React from "react";
import { TriangleAngles } from "../types";

interface AngleSummaryProps {
  angles: TriangleAngles;
}

const AngleSummary: React.FC<AngleSummaryProps> = ({ angles }) => {
  const angleData = [
    {
      label: "Angle A",
      value: angles.A,
      color: "red",
      bgGradient: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      textColor: "text-red-600",
    },
    {
      label: "Angle B",
      value: angles.B,
      color: "green",
      bgGradient: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      textColor: "text-green-600",
    },
    {
      label: "Angle C",
      value: angles.C,
      color: "blue",
      bgGradient: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      textColor: "text-blue-600",
    },
  ];

  const sum = angles.A + angles.B + angles.C;
  const isValid = Math.abs(sum - 180) < 0.1;

  return (
    <>
      <div className="mt-8 grid grid-cols-3 gap-4">
        {angleData.map((angle, index) => (
          <div
            key={angle.label}
            className={`bg-gradient-to-br ${angle.bgGradient} rounded-xl p-4 border ${angle.borderColor} animate-slide-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">{angle.label}</span>
              <span className={`text-2xl font-bold ${angle.textColor}`}>
                {angle.value.toFixed(1)}°
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          Sum of angles:{" "}
          <span
            className={`font-semibold ${
              isValid ? "text-green-600" : "text-red-600"
            }`}
          >
            {sum.toFixed(1)}°
          </span>
        </p>
        {isValid && (
          <p className="text-xs text-green-600 mt-1">
            ✓ Valid triangle (sum = 180°)
          </p>
        )}
      </div>
    </>
  );
};

export default AngleSummary;
