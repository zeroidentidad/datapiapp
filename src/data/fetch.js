const apiDev = 'https://api.datos.gob.mx/v1/';
const apiDev2 = 'https://datos.gob.mx/busca/api/3/action/package_search';
const apiDev3 = 'https://adela.datos.gob.mx/api/v1/';

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
    async fetchPaquetes(searchTerm = 'BUSQUEDA') {
        try {
            const response = await fetch(apiDev2 + '?q=' + searchTerm, {
                "method": "GET"
            });
            
            const responseJson = await response.json();
            return responseJson.result.results;
        } catch (error) {
            console.error(error);
        }
    }
}