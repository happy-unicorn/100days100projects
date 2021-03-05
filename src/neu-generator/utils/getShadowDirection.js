export const getShadowDirection = (direction, distance, blur, topColor, bottomColor) => {
    switch (direction) {
        case 'TL':
            return `box-shadow: ${-distance}px ${-distance}px ${blur}px #${topColor},\n\t${distance}px ${distance}px ${blur}px #${bottomColor};`;
        case 'TR':
            return `box-shadow: ${distance}px ${-distance}px ${blur}px #${topColor},\n\t${-distance}px ${distance}px ${blur}px #${bottomColor};`;
        case 'BR':
            return `box-shadow: ${distance}px ${distance}px ${blur}px #${topColor},\n\t${-distance}px ${-distance}px ${blur}px #${bottomColor};`;
        case 'BL':
            return `box-shadow: ${-distance}px ${distance}px ${blur}px #${topColor},\n\t${distance}px ${-distance}px ${blur}px #${bottomColor};`;
    }
};