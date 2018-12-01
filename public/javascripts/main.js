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
        tr.innerHTML = `<td></td>
                        <td>${element._id}</td>
                        <td>${element.Titulo}</td>
                        <td>${element.Desarrolladora}</td>
                        <td>${element.Ign}</td>
                        <td>
                            <a class="delete"><i class="fas fa-ban"></i>
                            <a class="actualizar"><i class="fas fa-pencil-alt"></i>
                        </td>`;
        tr.getElementsByClassName('delete')[0].addEventListener("click", (event) => {
            this.delete(event, element, tr, tbody);
        });
        tbody.appendChild(tr);
    },
    delete: function (event, element, tr, tbody) {
        event.preventDefault();
        fetch('/' + element._id, {
            method: 'DELETE'
        })
            .then(res => {
                return res.json();
            })
            .then(element =>  {
                tbody.removeChild(tr);
            });
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
