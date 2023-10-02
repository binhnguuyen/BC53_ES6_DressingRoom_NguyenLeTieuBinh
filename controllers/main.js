const URL = "https://65191bfd818c4e98ac600e5f.mockapi.io/listphukien";
const nhomURL = "https://65191bfd818c4e98ac600e5f.mockapi.io/nhomphukien";

import PhuKien from "../models/ChoseItem.js"
import List from "../models/ListChosen.js"

/**
 * @param {*} getEle 
 * Chức năng: DOM tới class or id
 * Tham số: class or id
 * Chú ý: 
 */
const getEle = (selector) => {
    return document.querySelector(selector);
}


/**
 * @param {*} getPhuKien 
 * Chức năng: mock API
 * Tham số: 
 * Chú ý: 
 */
window.thuDo = (id) => {
    console.log(id);
}


/**
 * @param {*} renderPhuKien 
 * Chức năng: render phụ kiện ra giao diện
 * Tham số: 
 * Chú ý: 
 */
const renderPhuKien = (list, id) => {
    let htmlContent = "";

    list.forEach((value) => {
        console.log('value: ', value);
        htmlContent += `
            <div class="my-4 col-12 col-lg-4 col-sm-6">
                <div class="card animate__animated  animate__zoomIn">
                    <img src="${value.imgSrc_jpg}   "class="card-img-top" alt=""width="200" >
                    <div>
                        <h5>${value.name}</h5>
                    </div>
                    <button type="button" onclick="thuDo(${value.id})" class="btn btn-primary">Thử  đồ</button>
                </div>
            </div>
        
        `
    })

    getEle(`#${id}`).innerHTML = htmlContent;
}


/**
 * @param {*} getPhuKien 
 * Chức năng: mock API
 * Tham số: 
 * Chú ý: 
 */
const getPhuKien = () => {
    let restopclothes = [];    
    let resbotclothes = [];    
    let resshoes = [];    
    let reshandbags = [];    
    let resnecklaces = [];    
    let reshairstyle = [];    
    let resbackground = [];
    let typetopclothes = "topclothes";
    let typebotclothes = "botclothes";
    let typeresshoes = "shoes";
    let typehandbag = "handbags";
    let typenecklaces = "necklaces";
    let typehairstyle = "hairstyle";
    let typebackground = "background";   

    const promise = axios({
        method: "GET",
        url: URL,
    })

    promise
        //get data thành công
        .then((result) => {
            let product = result.data;            
            // console.log('product: ', product);
            for (var i = 0; i < product.length; i++) {
                if ( product[i].type === typetopclothes ){
                    restopclothes.push(product[i]);
                }
                else if ( product[i].type === typebotclothes ) {
                    resbotclothes.push(product[i]);
                }
                else if ( product[i].type === typeresshoes ) {
                    resshoes.push(product[i]);
                }
                else if ( product[i].type === typehandbag ) {
                    reshandbags.push(product[i]);
                }
                else if ( product[i].type === typenecklaces ) {
                    resnecklaces.push(product[i]);
                }
                else if ( product[i].type === typehairstyle ) {
                    reshairstyle.push(product[i]);
                }
                else if ( product[i].type === typebackground ) {
                    resbackground.push(product[i]);
                }
                else{

                }

            }         
            renderPhuKien(restopclothes, "tabTopClothes-row");
            renderPhuKien(resbotclothes, "tabBotClothes-row");
            renderPhuKien(resshoes, "tabShoes-row");
            renderPhuKien(reshandbags, "tabHandBags-row");
            renderPhuKien(resnecklaces, "tabNecklaces-row");
            renderPhuKien(reshairstyle, "tabHairStyle-row");
            renderPhuKien(resbackground, "tabBackground-row");
        })
        // get data thất bại
        .catch((err) => {
            
        })
        // luôn luôn chạy dù thành công, thất bại
        .finally(() => {
            
        })
}
getPhuKien();


/**
 * @param {*} renderPhuKien 
 * Chức năng: render phụ kiện ra giao diện
 * Tham số: 
 * Chú ý: 
 */
const renderNhomPhuKien = (list) => {
    let htmlContent = "";
    // console.log('list: ', list);
    // console.log('list[0]: ', list[0]);
    // console.log('list[0].tabName: ', list[0].tabName);

    list.forEach((value) => {
        // console.log('value: ', value);
        htmlContent += `
        <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-${value.tabName}-tab"
              data-toggle="pill"
              data-target="#${value.tabName}"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true")>
            ${value.showName}
            </button>
        </li>
        `
    })

    getEle('#nhomPhuKien').innerHTML = htmlContent;
}


/**
 * @param {*} getNhomPhuKien 
 * Chức năng: mock API
 * Tham số: 
 * Chú ý: 
 */
const getNhomPhuKien = () => {
    const promise = axios({
        method: "GET",
        url: nhomURL,
    })

    promise
        //get data thành công
        .then((result) => {
            renderNhomPhuKien(result.data);
        })
        // get data thất bại
        .catch((err) => {
            
        })
        // luôn luôn chạy dù thành công, thất bại
        .finally(() => {
            
        })
}
getNhomPhuKien();


/**
 * @param {*} thuDo 
 * Chức năng: hàm thử đồ
 * Tham số: 
 * Chú ý: 
 */






