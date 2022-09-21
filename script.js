const productContainers = [...document.querySelectorAll('.productsContainer')];
const preBtn = [...document.querySelectorAll('.preBtn')];
const nxtBtn = [...document.querySelectorAll('.nxtBtn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
});

