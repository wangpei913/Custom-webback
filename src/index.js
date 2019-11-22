import './assets/styles/index.css'

function getComponent() {
    return import(/* webpackChunkName:"lodash" */'lodash').then(({ default: _ }) => {
        var element = document.createElement('div')
        element.innerHTML = _.join(['lodash', 'babel', 'webpack'], '-')
        return element
    })
}

getComponent().then(element => {
    document.body.appendChild(element)
})