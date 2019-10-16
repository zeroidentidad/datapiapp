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
    async fetchDBs(dbmane='') {
        try {
            let response = '';
            if (dbmane!=''){
                response = await fetch(apiDev + 'gobmx.facts?slug=' + dbmane.toLowerCase(), {
                    "method": "GET"
                }); 
            }else{
                response = await fetch(apiDev + 'gobmx.facts', {
                    "method": "GET"
                }); 
            }
           
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