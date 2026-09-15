import type { EdgeInsets } from "react-native-safe-area-context";

export const CONTENT_SPACING = 15;

// The maximum zoom _factor_ you should be able to zoom in
export const MAX_ZOOM_FACTOR = 10;

// Button sizes
export const BUTTON_SIZE = 40;
export const CAPTURE_BUTTON_SIZE = 78;
export const BUTTON_ICON_SIZE = 24;

export interface SafeAreaPadding {
    paddingLeft: number;
    paddingTop: number;
    paddingRight: number;
    paddingBottom: number;
}

/**
 * Padding that keeps the controls clear of the safe area (status bar, notch, navigation bar).
 * Takes the insets from react-native-safe-area-context, which ships with every Mendix native template.
 */
export function getSafeAreaPadding(insets: EdgeInsets): SafeAreaPadding {
    return {
        paddingLeft: insets.left + CONTENT_SPACING,
        paddingTop: insets.top + CONTENT_SPACING,
        paddingRight: insets.right + CONTENT_SPACING,
        paddingBottom: insets.bottom + CONTENT_SPACING
    };
}
