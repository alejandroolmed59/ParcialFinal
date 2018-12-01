window.onload = () => {
    app.init();
}

let app = {
    init: function () {
        this.loadContent();
    },
    addRows: function (element) {
        //console.log(element);
        var tbody = document.getElementsByClassName('tablaALlenar')[0];
        var tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${element._id}</td>
            <td>${element.Titulo}</td>
            <td>${element.Desarrolladora}</td>
            <td>${element.Ign}</td>
            `;
        tbody.appendChild(tr);
    },

    loadContent: function () {
        fetch('/api/Videojuegos', {
            method: 'GET'
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                data.datos.forEach(element => {
                    this.addRows(element);
                });
            })
    }
}
