window.onload=() =>{
    app.init();
}

let app={
    init:function(){
        this.loadContent();
    },
    addRows: function(element){
        var tbody= document.getElementsByClassName('formRegistro');
        var tr = document.createElement('tr');
        tr.innerHTML=` ` ;
        tbody.appendChild(tr);
    },
    loadContent:function(){
        fetch('/api/Videojuegos',{
            method:'GET'
        })
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            console.log(data);
            if(data.ok){
                data.datos.forEach(function(element){
                    this.addRows(element);
                })
            }
        })
    }
}
