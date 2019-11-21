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
    var result="";
    for(let i=1;i<=9;i++){
        for(let j=1;j<=i;j++){
            result+=j+'*'+i+'='+i*j+' ';
        }
        result+='\n';
    }
    console.log(result);
}