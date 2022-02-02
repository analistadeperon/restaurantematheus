const loadProducts = (produtos, idDivParent) => {
    const parentDiv = document.querySelector(idDivParent)
    produtos.forEach( produto => {

        const html = `
        <article class="prato">
        <img src="${produto.image}" alt = "${produto.title}">
        <h4>${produto.title}</h4>
        <h4>${produto.value}</h4>
        <p>${produto.description}</p>
            <button type="button"onclick="modalTrigger(${produto.id})">Quero este prato</button>
            </article> 
            `
        parentDiv.insertAjancentHTML('beforeend', html)
     
    }); 
}

const modaltrigger = (productId) =>{
    const modal = document.querySelector('.modal')

    if(productId != null){
        const produto = produtos.filter(produto => produto.id = productId)[0]

        if(produto != null){
            modal.querySelector('#title').value = produto.title
        }
    }
    modal.classList.contains('.hide')== true ?modal.classList.remove('.hide'):  modal.classList.add('.hide')
}

const whatssaplinkGenerator=(phoneNumber,productTitle,productQuantity,byerName,byerAddress,byerPayment)=>'https://api.whatsapp.com/send?phone=${phoneNumber}&text=ola eu quero: ${productQuantity}${productTitle}- Entrega para ${byername } no endereco:${byerAddress} - a forma de pagamento ser´ra: ${byerPayment}'

const checkout= phoneNumber =>{
    const form = document.querySelector('#form-product')
    form.addEventListener('submit', e =>{
        e.preventDefault()
        const productTitle = form.querySelector('input#title').value
        const productQuantity = form.querySelector('input#quantity').value
        const byerName = form.querySelector('input#name').value
        const byerAddress = form.querySelector('input#address').value
        const byerPayment = form.querySelector('select#payment').value
       const whatsappUrl= whatssaplinkGenerator(phoneNumber,productTitle,productQuantity, byername,byerAddress,byerPayment)
       window.location.href = whatsappUrl
    })
}

loadProducts(produtos,'#product-div')
checkout('559699999999')