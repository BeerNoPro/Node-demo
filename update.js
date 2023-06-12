
var getToken = require("./token");

console.log(getToken());

// var axios = require("axios");
// var data = JSON.stringify({
//     fields: {
//         delivery_status: "Pre-transit"
//     },
// });

// var config = {
//     method: "PUT",
//     url: "https://open.larksuite.com/open-apis/bitable/v1/apps/KhcHb8CvtajCzUsTNBYlzxEtgId/tables/tblcGwqrvPFHNCic/records/rec2AdxNCc",
//     headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//     },
//     data: data,
// };

// axios(config)
//     .then(function (response) {
//         console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//         console.log(error);
//     });