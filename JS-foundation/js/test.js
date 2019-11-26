document.getElementById('add-btn').onclick=function(){
    let a=document.getElementById('first-number').value;
    let b=document.getElementById('second-number').value;
    if(a==='' || b===''){
        document.getElementById('result').innerHTML='输入不能为空!';
    }else{
        document.getElementById('result').innerHTML=parseFloat(a)+parseFloat(b);
    }
};
document.getElementById('minus-btn').onclick=function(){
    let a=document.getElementById('first-number').value;
    let b=document.getElementById('second-number').value;
    document.getElementById('result').innerHTML=parseFloat(a)-parseFloat(b);
};
document.getElementById('times-btn').onclick=function(){
    let a=document.getElementById('first-number').value;
    let b=document.getElementById('second-number').value;
    document.getElementById('result').innerHTML=parseFloat(a)*parseFloat(b);
};
document.getElementById('divide-btn').onclick=function(){
    let a=document.getElementById('first-number').value;
    let b=document.getElementById('second-number').value;
    if(parseFloat(b)===0){
        document.getElementById('result').innerHTML='被除数不能为0';
    }else{
        document.getElementById('result').innerHTML=parseFloat(a)/parseFloat(b);
    }
};