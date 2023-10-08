// const URL = "https://65191bfd818c4e98ac600e5f.mockapi.io/listphukien";
// Cách 1
function getProductList(val) {
    // nhớ phải có return
    return axios({
        url: URL,
        method: "GET",
        // những cặp key-value khai báo bên trong object params sẽ đc gửi lên url theo định dạng
        // example.com/products?key1=value1&key2=value2
        params: {
            name: val || undefined,
        },
    });
}

function delProductList(id) {
    // nhớ phải có return
    return axios({
        url: `${URL}/${id}`,
        method: "DELETE",
    });
}

function addProductList(sp) {
    // nhớ phải có return
    return axios({
        url: URL,
        method: "POST",
        data:sp,
    });
}

function editProductByID(id) {
    // nhớ phải có return
    return axios({
        url: `${URL}/${id}`,
        method: "GET",
    });
}

function updateProductByID(id, sp) {
    // nhớ phải có return
    return axios({
        url: `${URL}/${id}`,
        method: "PUT",
        // phải có data mới up lên đc APi
        data: sp,
    });
}


// Cách 2
/*
var productServ = {
    getProductList() {
        return axios({
            url: URL,
            method: "GET",
        });
    },
    delProductByID: function (id) {
        return axios({
            url: `${URL}/${id}`,
            method: "DELETE",
        });
    },
    addProductList() {
        return axios({
            url: URL,
            method: "POST",
        });
    },
}
*/















