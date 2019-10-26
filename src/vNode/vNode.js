export function exchangeVNode(vNode) {
    console.log(vNode)
    let vNodeDom = null;
    switch(getObjType(vNode)) {
        case "Object":
            const { type, attr, children } = vNode;
            vNodeDom = document.createElement(type);
            setAttr(vNodeDom, attr);

            // 如果是数组，则遍历添加，如果不是，直接添加
            if(getObjType(children) === 'Array') {
                children.map((item) => {
                    vNodeDom.appendChild(exchangeVNode(item));
                })
            } else {
                vNodeDom.appendChild(exchangeVNode(children));
            }
            break;
        case "Number":
        case "String":
            vNodeDom = document.createTextNode(vNode);
            break;
        default:
            break;
    }
    return vNodeDom;
}

function setAttr(vNodeDom, attrs) {
    for(let attr in attrs) {
        if(attr !== 'style') {
            vNodeDom[attr] = attrs[attr];
        } else {
            for(let style in attrs[attr]) {
                vNodeDom.style[style] = attrs[attr][style];
            }
        }
    }
}

function getObjType(obj) {
    let a = Object.prototype.toString.apply(obj);
    return a.slice(8, -1);
}

export function mount(vNodeDom, id) {
    document.getElementById(id).appendChild(vNodeDom);
}