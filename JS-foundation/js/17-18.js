function practise_1() {
    for(let i=1;i<=100;i++){
        let num=i.toString();
        if(i%3===0 || num.indexOf('3')>=0){
            console.log('PA');
        }else{
            console.log(i);
        }
    }
}

function mul_9_9() {
    const body=document.querySelector('body');
    const table=document.createElement('table');
    body.appendChild(table);
    for(let i=1;i<=9;i++){
        let tr=document.createElement('tr');
        for(let j=1;j<=i;j++){
            let td=document.createElement('td');
            td.textContent=j+'*'+i+'='+i*j+' ';
            td.style.border="1px solid red";
            td.style.margin="0";
            td.style.padding="0";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}