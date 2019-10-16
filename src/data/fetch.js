const apiDev = 'https://api.datos.gob.mx/v1/';
const apiDev2 = 'https://adela.datos.gob.mx/api/v1/';
const apiDev3 = 'https://datos.gob.mx/busca/api/3/action/package_search';

export default {
    async fetchHome(){
        try {
            const response = await fetch(apiDev + 'data-core', { "method": "GET" });
            const responseJson = await response.json();
            return responseJson.results;
        } catch (error) {
            console.log(error);
        }
    },
    async fetchDBs(dbmane) {
        //console.log(apiDev + '?' + dbmane)
        try {
            const response = await fetch(apiDev + '?' + dbmane, {
                "method": "GET"
            });            
            const responseJson = await response.json();
            return responseJson.results;
        } catch (error) {
            console.error(error);
        }
    },
    async fetchPaquetes(searchTerm) {
        try {
            const response = await fetch(apiDev3 + '?q=' + searchTerm, {
                "method": "GET"
            });
            const responseJson = await response.json();
            return responseJson.results;
        } catch (error) {
            console.error(error);
        }
    }
}