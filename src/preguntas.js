const fs=require("fs")
let faq={
    bd:"./data/faqs.json",
    titulo: "Preguntas frecuentes",
    leerJSON: function() {
        let faqjson = fs.readFileSync(this.bd, 'utf-8');
        let faq = JSON.parse(faqjson);
        return faq 
     },
    listafaq:function(){
        let preg=this.leerJSON()
        let pregs=[]
        preg.faqs.forEach(function(n)
        {
          return  pregs.push(n)
        })
        return pregs
    }
}
module.exports=faq