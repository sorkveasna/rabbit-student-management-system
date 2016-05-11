renderTemplate = function (template, data) {
    var node = document.createElement("div");
    document.body.appendChild(node);
    Blaze.renderWithData(template, data, node);
    return node;
};
// var render = function (layout, regions) {
//     if (typeof regions !== 'object') {
//         regions = {content: regions};
//     }
//
//     BlazeLayout.render(layout, regions);
// };
