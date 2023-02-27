let btnAll = document.querySelectorAll("input");
// console.log('Data', btnAll)
btnAll.forEach((btn, index) =>{
    btn.addEventListener("click", function (){
        // console.log(btn, index); /*test nút*/
        // console.log(btn.checked); /*test true fasle*/
        if (btn.checked){
            switch (index){
                case 0:
                    if (btnAll[1].checked && btnAll[2].checked){
                        btnAll[2].checked = false;
                    }
                    break;
                case 1:
                    if (btnAll[0].checked && btnAll[2].checked){
                        btnAll[0].checked = false;
                    }
                    break;
                case 2:
                    if (btnAll[0].checked && btnAll[1].checked){
                        btnAll[1].checked = false;
                    }
            }
        }
    })
})