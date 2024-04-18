const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
    ];

    function tableCreate() {
        const keys = Object.keys(MOUNTAINS[0]);
        const body = document.body,
        tbl = document.createElement('table');
        tbl.setAttribute("class", "table table-bordered table-striped"); 
        //tbl.style.width = '100px';
        //tbl.style.border = '1px solid black';

        var header = tbl.createTHead();
        var tbody = tbl.createTBody();
        header.setAttribute("class", "table-dark text-center"); 
        var row = header.insertRow(0);    
        for(let i=0;i<3;i++){
            var cell = row.insertCell(i);
            var key = keys[i]
            key = key.toUpperCase();
            cell.innerHTML = key;
            //cell.style.border = '1px solid black';
        }

        for (let i = 0; i < MOUNTAINS.length; i++) {
            const tr = tbody.insertRow();
            let td = tr.insertCell();
            td.appendChild(document.createTextNode(MOUNTAINS[i].name));
            td.setAttribute("class", "text-center"); 
            //td.style.border = '1px solid black';
            td = tr.insertCell();
            td.appendChild(document.createTextNode(MOUNTAINS[i].height));
            //td.style.border = '1px solid black';
            td.style.textAlign = 'right';
            td = tr.insertCell();
            td.appendChild(document.createTextNode(MOUNTAINS[i].place));
            td.setAttribute("class", "text-center"); 
            //td.style.border = '1px solid black';
        }
        body.appendChild(tbl);
    }

    tableCreate();