"use client";
// import { useTheme } from "next-themes";

export default function ThemeMenu() {
  // const { theme, setTheme } = useTheme();
  return (
    <span className="px-2">
      <span
        className="cursor-pointer select-none"
        onClick={() => console.log("light")}
      >
        Light
      </span>{" "}
      |{" "}
      <span
        className="cursor-pointer select-none"
        onClick={() => console.log("dark")}
      >
        Dark
      </span>{" "}
      | {["theme"]}
    </span>
  );
}
