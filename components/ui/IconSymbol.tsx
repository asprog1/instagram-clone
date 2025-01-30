import { Ionicons } from "@expo/vector-icons";

interface IconSymbolProps {
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color: string;
  focused?: boolean;
}

export function IconSymbol({
  name,
  size = 24,
  color,
  focused = false,
}: IconSymbolProps) {
  return (
    <Ionicons
      color={color}
      size={size}
      name={
        focused ? name : (`${name}-outline` as keyof typeof Ionicons.glyphMap)
      }
    />
  );
}
