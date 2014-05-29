
var assert = require('assert');
var fs = require('fs');
var data = {products: [
    {
        "sku":"FPABR120814",
        "name":"7053 \"DELIFRANCE\" КРУАССАН ГАРМОНИЯ 60ГР",
        "brand":"DELIFRANCE",
        "origin":"ФРАНЦИЯ",
        "unitOfMeasure":"Шт",
        "unitSize":"100PC",
        "unitsPerPackage":"1",
        "category":"ХЛЕБОБУЛОЧНЫЕ ИЗДЕЛИЯ",
        "title":" КРУАССАН ГАРМОНИЯ, 60 ГР, DELIFRANCE",
        "description":"Традиционный французский круассан, приготовленный с использованием микса из сливочного масла и маргарина. Экономичное предложение.\nВыпекать замороженный продукт в предварительно  разогретой печи при 180 С° в течение 15-18 минут. ",
        "smallPicture":{
            "url":"https://uhrenholtstaging.blob.core.windows.net/images/FPABR120814_small.jpg"
        },
        "mediumPicture":{
            "url":"https://uhrenholtstaging.blob.core.windows.net/images/FPABR120814_big.jpg",
            "encodedUrl":"https://uhrenholtstaging.blob.core.windows.net/images/FPABR120814_big.jpg"
        },
        "published":true,
        "links":[
            {
                "rel":"self",
                "href":"https://uhrenholtcatalog.greantech.com/api/products/FPABR120814"
            },
            {
                "rel":"http://catalog.api.grean.dk/docs/rels/product",
                "href":"https://uhrenholtcatalog.greantech.com/api/products/FPABR120814"
            }
        ],
        "id":"FPABR120814",
        "cssClass":"category-bakery"
    },
    {
        "sku":"FPABR30764",
        "name":"2577   10 БЕЛЫХ БУЛОЧЕК ПЕТИ ПАН, 10*40ГР, DELIFRANCE",
        "brand":"DELIFRANCE",
        "origin":"ФРАНЦИЯ",
        "unitOfMeasure":"Шт",
        "unitSize":"1PCS",
        "unitsPerPackage":"7",
        "category":"ХЛЕБОБУЛОЧНЫЕ ИЗДЕЛИЯ",
        "title":"10 БЕЛЫХ БУЛОЧЕК ПЕТИ ПАН, 40 ГР*10, DELIFRANCE",
        "description":"Французские белые булочки с нежным мякишем и хрустящей корочкой. Потребительская упаковка.\nВыпекать замороженный продукт в предварительно разогретой печи при 200 С° в течение 8-10 минут.",
        "smallPicture":{
            "url":"https://uhrenholtstaging.blob.core.windows.net/images/FPABR30764_small.jpg"
        },
        "mediumPicture":{
            "url":"https://uhrenholtstaging.blob.core.windows.net/images/FPABR30764_big.jpg",
            "encodedUrl":"https://uhrenholtstaging.blob.core.windows.net/images/FPABR30764_big.jpg"
        },
        "published":true,
        "links":[
            {
                "rel":"self",
                "href":"https://uhrenholtcatalog.greantech.com/api/products/FPABR30764"
            },
            {
                "rel":"http://catalog.api.grean.dk/docs/rels/product",
                "href":"https://uhrenholtcatalog.greantech.com/api/products/FPABR30764"
            }
        ],
        "id":"FPABR30764",
        "cssClass":"category-bakery"
    },
    {
        "sku":"FCHBL10710",
        "name":"СЫР \"МААСДАМ\" 45%  \"FRIENDSHIP\"",
        "brand":"FRIENDSHIP",
        "origin":"НИДЕРЛАНДЫ",
        "unitOfMeasure":"кг",
        "unitSize":"1KG",
        "unitsPerPackage":"1",
        "category":"МОЛОЧНЫЕ ПРОДУКТЫ",
        "title":"СЫР МААСДАМ 45%, КРУГ 12 КГ, FRIENDSHIP",
        "description":"Полутвердый сыр. Выделяется  большими дырками и мягким ореховым привкусом. Используется в салатах, различных мясных блюдах, бутербродах и в сырном ассорти",
        "smallPicture":{
            "url":"https://uhrenholtstaging.blob.core.windows.net/images/FCHBL10710_small.jpg"
        },
        "mediumPicture":{
            "url":"https://uhrenholtstaging.blob.core.windows.net/images/FCHBL10710_big.jpg",
            "encodedUrl":"https://uhrenholtstaging.blob.core.windows.net/images/FCHBL10710_big.jpg"
        },
        "published":true,
        "links":[
            {
                "rel":"self",
                "href":"https://uhrenholtcatalog.greantech.com/api/products/FCHBL10710"
            },
            {
                "rel":"http://catalog.api.grean.dk/docs/rels/product",
                "href":"https://uhrenholtcatalog.greantech.com/api/products/FCHBL10710"
            }
        ],
        "id":"FCHBL10710",
        "cssClass":"category-dairy"
    },
    {
        "sku":"FFIFR20140N",
        "name":"КРЕВЕТКИ 40/50 В/М С/ГОЛОВОЙ В ПАНЦИРЕ \"DELIGHT\"",
        "brand":"DELIGHT",
        "origin":"КИТАЙ",
        "unitOfMeasure":"Шт",
        "unitSize":"0.85 КГ",
        "unitsPerPackage":"10",
        "category":"МОРЕПРОДУКТЫ",
        "title":"КРЕВЕТКИ 40/50 В/М С ГОЛОВОЙ, В ПАНЦИРЕ, 850 ГР, DELIGHT (КИТАЙ)",
        "description":"Неразделанные варено-мороженные креветки крупного размера свежего урожая из Китая. Обладают сладковатым привкусом. Такую креветку называют королевской. ",
        "smallPicture":{
            "url":"https://uhrenholtstaging.blob.core.windows.net/images/FFIFR20140N_small.png"
        },
        "mediumPicture":{
            "url":"https://uhrenholtstaging.blob.core.windows.net/images/FFIFR20140N_big.png",
            "encodedUrl":"https://uhrenholtstaging.blob.core.windows.net/images/FFIFR20140N_big.png"
        },
        "published":true,
        "links":[
            {
                "rel":"self",
                "href":"https://uhrenholtcatalog.greantech.com/api/products/FFIFR20140N"
            },
            {
                "rel":"http://catalog.api.grean.dk/docs/rels/product",
                "href":"https://uhrenholtcatalog.greantech.com/api/products/FFIFR20140N"
            }
        ],
        "id":"FFIFR20140N",
        "cssClass":"category-seafood"
    }
],
            host: 'catalog.uhrenholt.ru',
            testMode: 'true'
};

var pdfGenerator = require('../modules/renderFromTemplate');
var emailer = require('../modules/sendEmail');

var html = pdfGenerator.renderProducts(data);

assert(html.length > 3000, 'Mustache template not populated');

pdfGenerator.generatePdf(data, function(pdf) {
    var stream = fs.createWriteStream('testing.pdf');
    stream.write(pdf);
    stream.end();
    console.log('PDF on disk');

    emailer.sendEmail('nfj@flensted-jensen.com', 'No Reply <no-reply@grean.com>', 'Her er din PDF', 'Product Sheets are attached', pdf, 'productsheets.pdf');
})

