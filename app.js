const main = document.querySelector('main')
let recreational, dining, textbook_center, printing_services

fetch('./combined_data.json')
    .then(res => res.json())
    .then(data => {
        recreational = data['Recreation Services']
        dining = data['Dining Services']
        textbook_center = data['Textbook Rental']
        printing_services = data['Printing Services']

        const container1 = document.createElement('button')
        container1.classList.add('accordion_container')

        container1.innerHTML += `
        <div class="flex">
          <h2 class="accordion_header">Recreational Services</h2>
          <img src="./images/ic_chevron.svg" class="chevron" alt="" />
        </div>

        <div class="accordion_content">
         ${recreational}
        </div>
        `

        const container2 = document.createElement('button')
        container2.classList.add('accordion_container')

        container2.innerHTML += `
        <div class="flex">
          <h2 class="accordion_header">Dining Services</h2>
          <img src="./images/ic_chevron.svg" class="chevron" alt="" />
        </div>

        <div class="accordion_content">
         ${dining}
        </div>
        `

        const container3 = document.createElement('button')
        container3.classList.add('accordion_container')

        container3.innerHTML += `
        <div class="flex">
          <h2 class="accordion_header">Printing Services</h2>
          <img src="./images/ic_chevron.svg" class="chevron" alt="" />
        </div>

        <div class="accordion_content">
         ${printing_services}
        </div>
        `
        const container4 = document.createElement('button')
        container4.classList.add('accordion_container')

        container4.innerHTML += `
        <div class="flex">
          <h2 class="accordion_header">Textbook Rental</h2>
          <img src="./images/ic_chevron.svg" class="chevron" alt="" />
        </div>

        <div class="accordion_content">
         ${textbook_center}
        </div>
        `

        main.appendChild(container1)
        main.appendChild(container2)
        main.appendChild(container3)
        main.appendChild(container4)

        const accordion_containers = document.querySelectorAll('.accordion_container')

        accordion_containers.forEach((container, i) => {
            container.addEventListener("click", () => {
                container.classList.toggle("active")

                const accordion_content = container.querySelector('.accordion_content')

                if (container.classList.contains('active')) {
                    const height = accordion_content.scrollHeight
                    accordion_content.style.height = height + (i == 1 ? 100 : 0) + 'px'
                    accordion_content.style.marginTop = 1 + 'rem'
                } else {
                    accordion_content.style.height = 0
                    accordion_content.style.marginTop = 0
                }
            })
        })
    })
