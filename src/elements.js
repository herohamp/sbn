export const rawElements = {
    'Line': {
        tag: 'line',
        attrs: 4,
        reqs: [
            "Paper", "Pen"
        ],
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
        reqs: [
            "Paper", "Pen"
        ],
        attr: [
            'x',
            'y',
            'width',
            'height',
            'stroke',
            {'stroke-linecap': 'round'},
            {'fill': 'transparent'}
        ],
        body: []
    },
    'Circle': {
        tag: 'circle',
        attrs: 3,
        reqs: [
            "Paper", "Pen"
        ],
        attr: [
            'cx',
            'cy',
            'r',
            'stroke',
            {'stroke-linecap': 'round'},
            {'fill': 'transparent'}
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