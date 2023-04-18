const add = document.querySelectorAll(".add");
for(var i = 0; i < add.length; i++) {
    add[i].onclick = function() {
        const value = this.parentNode.childNodes[3].textContent;
        let input = document.querySelector(".mainBox .urun #urunAdi").parentNode.childNodes[1].value;
        console.log(input);
        let fruit = document.querySelector('.shoplist').innerHTML.includes(value);
        let price = this.parentNode.childNodes[5].firstChild.textContent;
        if(fruit){
            let sepet = document.querySelectorAll(".sepet .list-item .listname");
            for(var i = 0; i < sepet.length; i++) {
                let element = sepet[i].parentNode.querySelector(".count");
                let tutar = sepet[i].parentNode.querySelector(".tutar");
                var count = parseInt(element.innerHTML);
                var tutarlar = parseInt(tutar.innerHTML);
                if(count < 10) {
                    if(sepet[i].innerHTML == value) {
                        count = count + 1;
                    } else {
                        count;
                    }
                    element.innerHTML = count;
                    tutarlar = tutarlar * count;

                }
            }
        } 
        else if(input == "" && fruit == false){
            
        document.querySelector(".shoplist").innerHTML
        +=
        `
            <div class="list-item">
                <span class="listname">${value}</span>
                <label class="tutar" id="fiyat">${price}</label>
                <label class="count" id="quantity">1</label>
                <button id="plus">+</button>
                <button id="minus">-</button>
                <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;

        } 
        else if(input != "") {
            document.querySelector(".shoplist").innerHTML
            +=
            `
                <div class="list-item">
                    <span class="listname">${input}</span>
                    <label class="tutar" id="fiyat">${price}</label>
                    <label class="count" id="quantity">1</label>
                    <button id="plus">+</button>
                    <button id="minus">-</button>
                    <button class="delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `;
            document.querySelector("#urunAdi").value = "";
            
        }

        var plus = document.querySelectorAll("#plus");
        for(var k = 0; k < plus.length; k++) {
            plus[k].onclick = function() {
                if(this.parentNode.childNodes[5].textContent < 10) {
                    this.parentNode.childNodes[5].textContent++;
                } else {
                    this.parentNode.childNodes[5].textContent = 10;
                    alert("Maksimum 10 adet alabilirsiniz!");
                }
            }
        }

        var minus = document.querySelectorAll("#minus");
        for(var l = 0; l < minus.length; l++) {
            minus[l].onclick = function() {
                if(this.parentNode.childNodes[5].textContent > 1) {
                    this.parentNode.childNodes[5].textContent--;
                } else if(this.parentNode.childNodes[5].textContent == 1) {
                    this.parentNode.remove();
                }
            }
        }

        var current_list = document.querySelectorAll(".delete");
        for(var j = 0; j < current_list.length; j++) {
            current_list[j].onclick = function() {
                this.parentNode.remove();
            }
        }
    }

}