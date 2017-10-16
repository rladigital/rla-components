const theme = {
    columns: 12,
    breakpoints: {
        small: 0,
        medium: 350,
        large: 700,
        xlarge: 1050
    },
    colors: {
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
    },
    sizes: {
        small: "1",
        default: "2",
        large: "3"
    },
    radius: "0.2",
    padding: "1.2",
    margin: "1.2",
    headings: "'Montserrat', sans-serif",
    button: {
        background: "accent"
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
        }
    }
};

export default theme;
