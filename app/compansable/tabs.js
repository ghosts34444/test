export const UseTabs = () => {
    return useFetch('http://localhost:3000/data/tabs.json', {
        key: 'tabs'
    })
}