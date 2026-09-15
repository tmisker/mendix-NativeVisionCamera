import { ReactElement, createElement, useState, useEffect, Fragment } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { Camera, CameraPermissionStatus } from "react-native-vision-camera";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Style } from "@mendix/pluggable-widgets-tools";

import { CameraPage } from "./components/CameraPage";
import { NativeVisionCameraProps } from "../typings/NativeVisionCameraProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function NativeVisionCamera(props: NativeVisionCameraProps<CustomStyle>): ReactElement {
    const [cameraPermission, setCameraPermission] = useState<CameraPermissionStatus>();

    useEffect(() => {
        const cameraStatus = Camera.getCameraPermissionStatus();
        setCameraPermission(cameraStatus);
    }, []);

    if (cameraPermission == null) {
        // still loading
        return <Fragment></Fragment>;
    }

    // Own provider so the safe area insets are available even if the host app does not render one
    return (
        <SafeAreaProvider>
            <CameraPage
                mediaPath={props.mediaPath}
                onCaptureAction={props.onCaptureAction}
                outputOrientation={props.outputOrientation}
            />
        </SafeAreaProvider>
    );
}
