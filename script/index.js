
const allBtn = document.getElementsByClassName('click-btn');
let count = 0;
let mcount = 40;
let prize = 0;
for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {

        if (!btn.classList.contains('selected')) {
            btn.classList.add('selected')
            count = count + 1;

            if (count < 5) {
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

                btn.classList.add('bg-[#1DD100]')
                mcount = mcount - 1;
                prize = prize + 550;

                document.getElementById('selected-seat').innerText = count;
                document.getElementById('availabel-seat').innerText = mcount;


                document.getElementById('total-taka').innerText = prize;
                document.getElementById('grand-prize').innerText = prize;
            }
            else{
                alert('You can only select 4 seats');
            }
        }
        else{
            alert('You already selected this seat');
        }

        if (count < 5) {
            if (count == 4) {
                document.getElementById('apply-btn').removeAttribute('disabled');
            }
        }
    });
    function grandTotal() {
        const coupn = document.getElementById('code');
        if (coupn.value == 'NEW15') {
            const discount = prize - (prize * (15 / 100));
            const newp =document.createElement('p');
            newp.innerText = "Congratulation! you got discount.";
            document.getElementById('congo').appendChild(newp);
            newp.classList.add('w-38');
            newp.classList.add("text-center");
            document.getElementById('grand-prize').innerText = discount;
            document.getElementById('coupn-code').classList.add('hidden');
        }
        else if (coupn.value == "Couple 20") {
            const discount = prize - (prize * (20 / 100));
            const newp =document.createElement('p');
            newp.innerText = "Congratulation! you got discount";
            document.getElementById('congo').appendChild(newp);
            newp.classList.add('w-38');
            newp.classList.add("text-center");
            document.getElementById('grand-prize').innerText = discount;
            document.getElementById('coupn-code').classList.add('hidden');
        }
        else{
            alert('worng coupn code');
        }
    }
    const phnNumb = document.getElementById('phn-number');
    phnNumb.addEventListener('keyup', function () {
        if (count > 0 ) {
            document.getElementById('next').removeAttribute('disabled');
        }
    });
    console.log(phnNumb);
}