var colors = {
    primary: "#252b33",
    accent: "#86c3c4",
    black: "#000000",
    white: "#ffffff",
    lightGray: "#ececec",
    mediumGray: "#d2d2d2",
    darkGray: "#464646",
    alert: "#f44336",
    warning: "#ff9800",
    success: "#4caf50",
    info: "#00bcd4"
};

var sizes = {
    small: "1",
    default: "2",
    large: "3"
};

var spacing = {
    radius: "0.2",
    padding: "1.2",
    margin: "1.2"
};

const theme = {
    button: {
        colors: colors,
        sizes: sizes,
        textColor: colors.white,
        fontWeight: "normal",
        radius: spacing.radius,
        padding: spacing.padding,
        margin: spacing.margin
    },
    column: {
        columns: 12,
        padding: spacing.padding,
        breakpoints: {
            small: 0,
            medium: 350,
            large: 700,
            xlarge: 1050
        }
    },
    panel: {
        default: "light",
        types: {
            light: {
                color: colors.black,
                background: colors.lightGray,
                padding: spacing.padding,
                margin: spacing.margin
            },
            dark: {
                color: colors.white,
                background: colors.primary,
                padding: spacing.padding,
                margin: spacing.margin
            },
            accent: {
                color: colors.white,
                background: colors.accent,
                padding: spacing.padding,
                margin: spacing.margin
            }
        }
    },
    icon: {
        colors: colors
    },
    input: {
        sizes: sizes,
        borderColor: colors.lightGray,
        padding: spacing.padding,
        margin: spacing.margin,
        radius: spacing.radius,
        error: {
            borderColor: colors.alert
        }
    },
    modal: {
        padding: spacing.padding,
        margin: spacing.margin,
        radius: spacing.radius,
        background: colors.white,
        closeButtonColor: colors.black
    },
    tooltip: {
        color: colors.white,
        background: colors.primary,
        padding: spacing.padding,
        margin: spacing.margin,
        radius: spacing.radius
    },
    link: {
        color: colors.black,
        colors: colors,
        fontWeight: "bold",
        textDecoration: "none"
    },
    dashboard: {
        panel: {
            bar: {
                iconSize: "1.2",
                iconColor: colors.black,
                padding: "0.5",
                background: colors.lightGray,
                fontWeight: "bold",
                fontSize: "0.9",
                titleColor: colors.white
            },
            content: {
                background: colors.lightGray
            },
            wrapper: {
                radius: spacing.radius
            },
            resize: {}
        }
    },
    dropzone: {
        default: "light",
        types: {
            light: {
                radius: 0,
                margin: spacing.margin,
                padding: spacing.padding,
                background: colors.lightGray,
                border: "4px dashed",
                color: colors.primary
            },
            dark: {
                radius: 0,
                margin: spacing.margin,
                padding: spacing.padding,
                background: colors.primary,
                border: "4px dashed " + colors.mediumGray,
                color: colors.white
            },
            accent: {
                radius: 0,
                padding: spacing.padding,
                margin: spacing.margin,
                background: colors.accent,
                border: "4px dashed",
                color: colors.primary
            }
        }
    }
};

export default theme;
