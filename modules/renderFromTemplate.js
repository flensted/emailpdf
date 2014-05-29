var fs = require('fs');
var mustache = require('mustache');

// this dictionary should be generated dynamically from the contents of a templates directory
var mustacheTemplates = {
    'productsheet.html': fs.readFileSync('./templates/productsheet.html').toString()
};

var renderTemplateFile= function (templateFile, data) {
    if (!!templateFile && !!mustacheTemplates[templateFile]) {
        return mustache.render(mustacheTemplates[templateFile], data);
    }
    else {
        return '';
    }
}

var renderTemplate= function (templateString, data) {
    if (!!templateString) {
        return mustache.render(templateString, data);
    }
    else {
        return '';
    }
}


module.exports.renderTemplateFile = renderTemplateFile;
module.exports.renderTemplate = renderTemplate;
