
const allBtn = document.getElementsByClassName('click-btn');
let count = 0;
let mcount = 40;
let prize = 0;
for(const btn of allBtn){
    btn.addEventListener('click', function(e){
        count = count +1;
        btn.classList.toggle('selected')
        if(count < 5){
            btn.classList.add('bg-[#1DD100]')
            mcount = mcount -1;
        prize = prize + 500;

        document.getElementById('selected-seat').innerText = count;
        document.getElementById('availabel-seat').innerText = mcount;
        
        const li = document.createElement('li')
        const p = document.createElement('p');
        p.innerText = btn.innerText;
        const p2 = document.createElement('p');
        p2.innerText = 'Economy';
        const p3 = document.createElement('p');
        p3.innerText = document.getElementById('taka').innerText;

        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        li.classList.add('flex');
        li.classList.add('justify-between');
        p.classList.add('px-4');

        document.getElementById('list-seat').appendChild(li);
        document.getElementById('total-taka').innerText = prize;
        
        if(count == 4){
            document.getElementById('apply-btn').removeAttribute('disabled');
        }
        document.getElementById('grand-prize').innerText = prize;
        }
        
        
        
    });
    function grandTotal(){
        const coupn = document.getElementById('code');
    if(coupn.value == 'NEW15'){
        const discount = prize - (prize*(15/100));
        document.getElementById('grand-prize').innerText = discount;
        document.getElementById('coupn-code').classList.add('hidden')
    } 
    if( coupn == "Couple 20"){
        const discount = prize - (prize*(20/100));
        document.getElementById('grand-prize').innerText = discount;
    }
    }
    const phnNumb = document.getElementById('phn-number');
    phnNumb.addEventListener('keyup',function(){
        if(count > 0){
            document.getElementById('next').removeAttribute('disabled');
        }
    });
    console.log(phnNumb);
    

}