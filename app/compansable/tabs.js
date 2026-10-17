export const UseTabs = () => {
    return useFetch('http://localhost:3000/data/tabs.json', {
        //ссылку потом поменяем на ссылку верселя (делаем перед сборкой!)
        key: 'tabs'
    })
}