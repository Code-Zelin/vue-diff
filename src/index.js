import vNode from "./vNode/index";

let dom = vNode.exchangeVNode({
    type: 'div',
    attr: {
        id: 'a',
        style: {
            color: 'red',
            backgroundColor: 'green'
        }
    },
    children: [
        {
            type: 'p',
            attr: {
                style: {
                    color: '#fff'
                }
            },
            children: [
                {
                    type: 'span',
                    children: '啦啦啦啦pppppp'
                },
                ', world'
            ]
        },
        {
            type: 'span',
            attr: {},
            children: '这是span'
        }
    ]
})

vNode.mount(dom, 'root')