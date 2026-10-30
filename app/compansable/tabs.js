export const UseTabs = () => {
    return useFetch('https://dark-galaxy-table-price.vercel.app/data/tabs.json', {
        key: 'tabs'
    })
}