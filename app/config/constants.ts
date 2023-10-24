export const accentColor = "#EF761F";
export const bgColor = "#F8F8F1";

export const IS_SERVER = typeof window === "undefined";
export const IS_CLIENT = typeof window !== "undefined";

export const toDay = new Date();

export const fonts = [
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap",
];

export const LINE_NB_POINTS = 1000;
export const CURVE_DISTANCE = 250;
export const CURVE_AHEAD_CAMERA = 0.008;
export const CURVE_AHEAD_AIRPLANE = 0.02;
export const AIRPLANE_MAX_ANGLE = 35;
export const FRICTION_DISTANCE = 42;
