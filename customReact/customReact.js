function customRender(reactElement, mainContainer)
{
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // mainContainer.appendChild(domElement)

    // better way to write the above code

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for(const prop in reactElement.props)
        {
            domElement.setAttribute(prop, reactElement.props[prop])
        }
        mainContainer.appendChild(domElement)
  
}

// The only thing which trully exist in this reality are merly
const reactElement = {
    type :'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
