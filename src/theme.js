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
        color: colors.black,
        background: colors.lightGray,
        padding: spacing.padding,
        margin: spacing.margin
    },
    icon: {
        colors: colors
    },
    input: {
        sizes: sizes,
        borderColor: colors.lightGray,
        padding: spacing.padding,
        margin: spacing.margin,
        radius: spacing.radius
    },
    modal: {
        padding: spacing.padding,
        margin: spacing.margin,
        radius: spacing.radius,
        background: colors.white,
        closeButtonColor: colors.black
    },
    tile: {
        baseSizes: {
            // breakpoints - how many columns 1 tile space is sized
            small: 6,
            medium: 3
        },
        tileSizes: {
            // names of tiles - how many tile spaces a tile uses
            small: 1,
            medium: 2,
            large: 4
        },
        padding: spacing.padding,
        background: colors.lightGray
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
    }
};

export default theme;
