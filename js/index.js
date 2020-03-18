$(document).ready(function(){
  $('#btnPDF').click(function() {
    savePDF(document.querySelector('#geraPDF'));
  });
});

function savePDF(codigoHTML) {
var doc = new jsPDF('portrait', 'pt', 'a4'),
    data = new Date();
margins = {
  top: 40,
  bottom: 60,
  left: 40,
  width: 1000
};
doc.fromHTML(codigoHTML,
             margins.left, // x coord
             margins.top, { pagesplit: true },
             function(dispose){
  doc.save("Relatorio - "+data.getDate()+"/"+data.getMonth()+"/"+data.getFullYear()+".pdf");
});
}