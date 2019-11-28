export const rawElements = {
    'Line': {
        tag: 'line',
        attrs: 4,
        attr: [
            'x1',
            'y1',
            'x2',
            'y2',
            'stroke',
            {'stroke-linecap': 'round'}
        ],
        body: []
    },
    'Rect': {
        tag: 'rect',
        attrs: 4,
        attr: [
            'x',
            'y',
            'width',
            'height',
            'stroke',
            {'stroke-linecap': 'round'}
        ],
        body: []
    },
    'Circle': {
        tag: 'circle',
        attrs: 3,
        attr: [
            'cx',
            'cy',
            'r',
            'stroke',
            {'stroke-linecap': 'round'}
        ],
        body: []
    },
    'Paper': {
        tag: 'rect',
        attrs: 4,
        attr: [
            'fill',
            {x: 0},
            {y: 0},
            {width: 100},
            {height: 100}
        ],
        body: []
    }
}