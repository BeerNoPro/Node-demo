module.exports = function () {
    var axios = require("axios");
    var data = JSON.stringify({
        app_id: "cli_a4b0a37dd8f8d02f`",
        app_secret: "ziCKGTkVuprRLpoV17rrzcaCkjZV5lBq",
    });

    var config = {
        method: "POST",
        url: "https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
    };

    axios(config)
        .then(function (response) {
            // return response;
            console.log(response.data.tenant_access_token);
            // return response;
            // return JSON.stringify(response.data)
        })
        .catch(function (error) {
            return error;
            // console.log(error);
        });
};
