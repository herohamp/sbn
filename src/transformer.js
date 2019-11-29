import {rawElements} from "./elements.js"

export function transformer(ast) {

    function makeColor(num) {
        return num.substring(1);
    }

    function findParamValue(p) {
        if (p.type === 'word' && p.value.charAt(0) != "!") {
            return variables[p.value]
        }
        return p.value
    }

    function runElement(name, param, pen_color_value) {
        let e = rawElements[name];
        if (!e) {
            throw name + " is not a valid command"
        }
        let element = {
            tag: e.tag,
            attr: {},
            body: []
        }

        let attrID = 0;
        for (let attri in e.attr) {
            let attr = e.attr[attri];
            if (attr == "stroke") {
                element.attr[attr] = makeColor(pen_color_value);
            } else if (attr == "fill"){
                console.log(param[attrID]);
                element.attr[attr] = makeColor(findParamValue(param[attrID]));
            }
            else if (typeof attr == "string") {
                element.attr[attr] = findParamValue(param[attrID]);
                attrID++;
            } else if (typeof attr == "object") {
                Object.assign(element.attr, attr);
            }
        }

        return element;

    }

    var newAST = {
        tag: 'svg',
        attr: {
            width: 100,
            height: 100,
            viewBox: '0 0 100 100',
            xmlns: 'http://www.w3.org/2000/svg',
            version: '1.1'
        },
        body: []
    }

    var current_pen_color

    var variables = {}

    while (ast.body.length > 0) {
        var node = ast.body.shift()
        if (node.type === 'CallExpression' || node.type === 'VariableDeclaration') {
            if (node.name === 'Pen') {
                current_pen_color = findParamValue(node.arguments[0])
            } else if (node.name === 'Set') {
                variables[node.identifier.value] = node.value.value
            } else {
                newAST.body.push(runElement(node.name, node.arguments, current_pen_color))
            }
        }
    }

    return newAST
}
