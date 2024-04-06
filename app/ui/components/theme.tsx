import { useTheme } from "next-themes";
export default function ThemeMenu() {
  const { theme, setTheme } = useTheme();
  return (
    <span className="px-2">
      <span
        className="cursor-pointer select-none"
        onClick={() => setTheme("light")}
      >
        Light
      </span>{" "}
      |{" "}
      <span
        className="cursor-pointer select-none"
        onClick={() => setTheme("dark")}
      >
        Dark
      </span>{" "}
      | {[theme]}
    </span>
  );
}
