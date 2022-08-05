let amounts = document.querySelectorAll('.charts div .amt')


amounts.forEach((tag)=>{
   if (tag.parentElement.className == 'monday') {
        fetch('/data.json')
        .then(raw=>raw.json())
        .then((data)=>{
            tag.innerHTML = `<p>$${data[0].amount}</p>`
        })
   }

   else if(tag.parentElement.className == 'tuesday') {
    fetch('/data.json')
    .then(raw=>raw.json())
    .then((data)=>{
        tag.innerHTML = `<p>$${data[1].amount}</p>`
    })
   }

   else if(tag.parentElement.className == 'wednesday') {
    fetch('/data.json')
    .then(raw=>raw.json())
    .then((data)=>{
        tag.innerHTML = `<p>$${data[2].amount}</p>`
    })
   }

   else if(tag.parentElement.className == 'thursday') {
    fetch('/data.json')
    .then(raw=>raw.json())
    .then((data)=>{
        tag.innerHTML = `<p>$${data[3].amount}</p>`
    })
   }

   else if(tag.parentElement.className == 'friday') {
    fetch('/data.json')
    .then(raw=>raw.json())
    .then((data)=>{
        tag.innerHTML = `<p>$${data[4].amount}</p>`
    })
   }

   else if(tag.parentElement.className == 'saturday') {
    fetch('/data.json')
    .then(raw=>raw.json())
    .then((data)=>{
        tag.innerHTML = `<p>$${data[5].amount}</p>`
    })
   }

   else if(tag.parentElement.className == 'sunday') {
    fetch('/data.json')
    .then(raw=>raw.json())
    .then((data)=>{
        tag.innerHTML = `<p>$${data[6].amount}</p>`
    })
   }
})
