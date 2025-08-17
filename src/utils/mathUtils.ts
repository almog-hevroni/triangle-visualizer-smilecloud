import { Point, TriangleAngles } from "../types";

/**
 * Calculate angle between three points using vector dot product
 * @param p1 First point
 * @param vertex Vertex point (where the angle is measured)
 * @param p2 Second point
 * @returns Angle in degrees
 */
export const calculateAngle = (p1: Point, vertex: Point, p2: Point): number => {
  // Create vectors from vertex to both points
  const v1 = { x: p1.x - vertex.x, y: p1.y - vertex.y };
  const v2 = { x: p2.x - vertex.x, y: p2.y - vertex.y };

  // Calculate dot product and determinant
  const dot = v1.x * v2.x + v1.y * v2.y;
  const det = v1.x * v2.y - v1.y * v2.x;

  // Calculate angle using atan2
  let angle = Math.atan2(det, dot) * (180 / Math.PI);

  // Normalize angle to be between 0 and 180
  if (angle < 0) angle += 360;
  if (angle > 180) angle = 360 - angle;

  return angle;
};

/**
 * Calculate all three angles of a triangle
 * @param points Array of three points forming the triangle
 * @returns Object with angles A, B, and C in degrees
 */
export const calculateTriangleAngles = (
  points: [Point, Point, Point]
): TriangleAngles => {
  const angleA = calculateAngle(points[2], points[0], points[1]);
  const angleB = calculateAngle(points[0], points[1], points[2]);
  const angleC = calculateAngle(points[1], points[2], points[0]);

  return { A: angleA, B: angleB, C: angleC };
};

/**
 * Get angle for arc drawing between two points
 * @param p1 Starting point
 * @param p2 Ending point
 * @returns Angle in degrees
 */
export const getAngleForArc = (p1: Point, p2: Point): number => {
  return (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
};

/**
 * Create SVG arc path for angle visualization
 * @param center Center point of the arc
 * @param startAngle Starting angle in degrees
 * @param endAngle Ending angle in degrees
 * @param radius Radius of the arc (default: 30)
 * @returns SVG path string
 */
export const createArcPath = (
  center: Point,
  startAngle: number,
  endAngle: number,
  radius: number = 30
): string => {
  const start = {
    x: center.x + radius * Math.cos((startAngle * Math.PI) / 180),
    y: center.y + radius * Math.sin((startAngle * Math.PI) / 180),
  };
  const end = {
    x: center.x + radius * Math.cos((endAngle * Math.PI) / 180),
    y: center.y + radius * Math.sin((endAngle * Math.PI) / 180),
  };

  const largeArc = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;

  return `M ${center.x} ${center.y} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y} Z`;
};

/**
 * Check if three points form a valid triangle (not collinear)
 * @param points Array of three points
 * @returns true if points form a valid triangle
 */
export const isValidTriangle = (points: [Point, Point, Point]): boolean => {
  const [p1, p2, p3] = points;

  // Calculate area using cross product
  const area =
    Math.abs((p2.x - p1.x) * (p3.y - p1.y) - (p3.x - p1.x) * (p2.y - p1.y)) / 2;

  // If area is close to 0, points are collinear
  return area > 0.1;
};
