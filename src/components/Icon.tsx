import { ReactElement, createElement } from "react";
import Svg, { Path } from "react-native-svg";

export interface IconProps {
    /** SVG path data on a 24x24 viewBox, for example an icon from `@mdi/js`. */
    path: string;
    size?: number;
    color?: string;
    /** Draw only the outline of the shape. Used for "off" states that have no dedicated icon. */
    outline?: boolean;
}

/**
 * Minimal SVG icon based on react-native-svg.
 *
 * react-native-svg ships with every Mendix native template, so nothing needs to be linked or bundled.
 * This replaces react-native-vector-icons, which was removed from the Mendix native template in
 * version 19 (Studio Pro 11.10 and up) and therefore broke the bundling step in Studio Pro.
 */
export function Icon({ path, size = 24, color = "white", outline = false }: IconProps): ReactElement {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
            <Path
                d={path}
                fill={outline ? "none" : color}
                stroke={outline ? color : "none"}
                strokeWidth={outline ? 1.5 : 0}
            />
        </Svg>
    );
}
