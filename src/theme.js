// Colors
export const colors = {
    primary: "#86c3c4",
    secondary: "#252b33",
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

export const sizes = {
    default: "2",
    small: "1.2",
    large: "3"
};

export const spacing = {
    radius: "0.2",
    padding: "1.2",
    margin: "1.2"
};

export const breakpoints = {
    small: 0,
    medium: 500,
    large: 700,
    xlarge: 1050
};

const theme = {
    colors: colors,
    spacing: spacing,
    darkColor: colors.background,
    lightColor: colors.white,
    navigation: {
        navLink: {
            margin: 0,
            color: colors.black,
            activeColor: colors.primary,
            padding: spacing.padding,
            textTransform: "uppercase"
        }
    },
    button: {
        height: 30,
        fontSize: 12,
        borderWidth: 1,
        borderRadius: 50,
        fontWeight: "bold",
        textTransform: "uppercase",
        textColor: colors.white,
        textColorAlt: colors.black
    },
    panel: {
        default: "secondary"
    },
    icon: {
        colors: colors
    },
    input: {
        sizes: sizes,
        borderColor: colors.lightGray,
        radius: spacing.radius,
        error: {
            color: colors.alert,
            borderColor: colors.alert
        }
    },
    modal: {
        padding: spacing.padding,
        margin: spacing.margin,
        radius: spacing.radius,
        background: colors.white,
        closeButtonColor: colors.black,
        color: colors.secondary
    },
    tooltip: {
        color: colors.white,
        background: colors.secondary,
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
                titleColor: colors.black
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
                color: colors.secondary
            },
            dark: {
                radius: 0,
                margin: spacing.margin,
                padding: spacing.padding,
                background: colors.secondary,
                border: "4px dashed " + colors.mediumGray,
                color: colors.white
            },
            primary: {
                radius: 0,
                padding: spacing.padding,
                margin: spacing.margin,
                background: colors.primary,
                border: "4px dashed",
                color: colors.secondary
            }
        }
    },
    dropdown: {
        minWidth: "20",
        background: colors.lightGray
    },
    menu: {
        color: colors.secondary,
        background: colors.white,
        hoverBackground: colors.lightGray,
        borderBottom: "1px solid " + colors.lightGray,
        padding: 0.8
    },
    steps: {
        barHeight: 20,
        spacing: -3,
        circleDiameter: 40,
        progressColor: colors.primary,
        backgroundColor: colors.white,
        borderColor: colors.secondary,
        borderRadius: 100,
        labelColor: "inherit",
        margin: spacing.margin,
        border: 1,
        padding: 4
    },
    tabordion: {
        padding: spacing.padding,
        margin: spacing.margin,
        borderThickness: "1px",
        borderColor: colors.white,
        fontWeight: "bold",
        default: {
            color: colors.white,
            background: colors.primary
        },
        active: {
            color: colors.secondary,
            background: colors.white
        },
        content: {
            color: colors.black,
            background: colors.white
        },
        dividers: {
            height: 2.5,
            padding: 0.7,
            fontSize: 0.4,
            fontWeight: "bold",
            color: colors.white,
            background: colors.primary,
            border: "1px solid " + colors.white,
            radius: 2
        },
        twisty: {
            size: 2,
            color: colors.white,
            background: "transparent",
            nonActiveIcon: "arrowDown",
            activeIcon: "arrowUp"
        },
        tabs: {
            textAlign: "center"
        },
        accordion: {
            textAlign: "left"
        }
    },
    carousel: {
        item: {
            color: colors.white,
            background: colors.secondary,
            padding: spacing.padding
        },
        arrows: {
            size: 1.5,
            color: colors.white,
            leftIcon: "arrowLeft",
            rightIcon: "arrowRight"
        },
        dots: {
            size: 0.5,
            activeBackground: colors.primary,
            background: colors.white,
            radius: 2,
            margin: 0.2
        }
    },
    userInfo: {
        spacingX: 0.8,
        spacingY: 0.2,
        padding: spacing.padding,
        height: 8,
        icon: {
            size: 1,
            color: colors.secondary
        },
        notification: {
            size: 0.7,
            top: -0.5,
            right: -0.5,
            minWidth: 1.2,
            color: colors.white,
            backgroundColor: colors.primary
        },
        title: {
            size: 1,
            color: colors.secondary
        },
        text: {
            size: 0.8,
            color: colors.primary
        },
        backgroundColor: colors.lightGray
    },
    footer: {
        background: colors.secondary,
        padding: spacing.padding
    },
    checkboxButton: {
        activeColor: "primary",
        defaultColor: "secondary"
    }
};

export default theme;
