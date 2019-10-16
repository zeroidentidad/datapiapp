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
    async fetchDBs(dbname='') {
        try {
            let response = '';
            if (dbname!=''){
                response = await fetch(apiDev + 'gobmx.facts?slug=' + dbname.toLowerCase(), {
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
    },
    async fetchOrgs(tipo = '') {
        try {
            let response = '';
            if (tipo != '') {

                let q = '';
                switch (tipo.toLowerCase()) {
                    case 'estatal':
                    q = 'state';
                    break;
                    case 'autonoma':
                    q = 'autonomous';
                    break;
                    default:
                    q = tipo.toLowerCase();
                    break;
                }                

                response = await fetch(apiDev3 + 'organizations?gov_type=' + q, {
                    "method": "GET"
                });
            } else {
                response = await fetch(apiDev3 + 'organizations', {
                    "method": "GET"
                });
            }

            const responseJson = await response.json();
            return responseJson.results;
        } catch (error) {
            console.error(error);
        }
    },
    async fetchApis(apiname='') {
        try {
            let response = '';
            if (apiname!=''){
                response = await fetch(apiDev + 'api-catalog?endpoint=' + apiname, {
                    "method": "GET"
                }); 
            }else{
                response = await fetch(apiDev + 'api-catalog', {
                    "method": "GET"
                }); 
            }
           
            const responseJson = await response.json();
            return responseJson.results;
        } catch (error) {
            console.error(error);
        }
    }        
}