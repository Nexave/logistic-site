const phoneBlock = document.querySelector('.call-inner');
const callBtn = document.querySelector('.call');

if (callBtn) {
    callBtn.addEventListener('click', function () {
        phoneBlock.classList.toggle('hidden');
        callBtn.classList.toggle('active');
    })
}

// Cut long text for blog section
const blogHeadlines = document.getElementsByClassName('blog__item-headline');
const blogHeadArray = [...blogHeadlines];

const blogTexts = document.getElementsByClassName('blog__item-descr');
const blogTextsArray = [...blogTexts];

function truncateText(array, maxLength) {
    array.forEach(elem => {
        if (elem.innerText.length > maxLength) {
            elem.innerText = elem.innerText.substring(0, maxLength) + "...";
        }
    })
}

truncateText(blogHeadArray, 40);
truncateText(blogTextsArray, 230);

// Custom upload button
const actualBtn = document.getElementById('actual-btn');

const fileChosen = document.getElementById('file-chosen');
if (actualBtn) {
    actualBtn.addEventListener('change', function () {
        fileChosen.textContent = this.files[0].name
    })
}
//main menu 


if (actualBtn) {
    actualBtn.addEventListener('change', function () {
        fileChosen.textContent = this.files[0].name;
    })
}

const serviceBlock = document.querySelector('.one-service__parag-wrap');
if (serviceBlock) {
    new PerfectScrollbar(serviceBlock);
}

const mobileCitiesDropdown = document.querySelector(".mobile-cities-dropdown")
if (mobileCitiesDropdown) {
    mobileCitiesDropdown.addEventListener('click', function () {
        let ps

        if (!mobileCitiesDropdown.classList.contains("active")) {
            let citiesList = document.querySelector('.mobile-cities-list')
            mobileCitiesDropdown.classList.add('active')
            ps = new PerfectScrollbar(citiesList)
            scrollLock.disablePageScroll();
        } else {
            scrollLock.enablePageScroll();
            mobileCitiesDropdown.classList.remove('active')


        }
    })
}

const dropdownList = document.querySelectorAll('.dropdown')
dropdownList.forEach((elem) => {
    elem.addEventListener('click', function (e) {
        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active')
        } else {
            let activeElement = document.querySelector('.dropdown.active');
            if (activeElement) {
                activeElement.classList.remove('active')
            }
            e.target.classList.add('active');
            const windowInnerWidth = window.innerWidth
            let serviceList = elem.querySelector(".submenu-list-wrapper.services")
            let addServiceList = elem.querySelector(".submenu-list-wrapper.additional-services")
            let citiesList = elem.querySelector(".submenu-list-wrapper.cities")
            if (serviceList && windowInnerWidth < 1280) {
                let ps2 = new PerfectScrollbar(serviceList, {
                    suppressScrollX: true
                })

            }
            if (addServiceList && windowInnerWidth < 1280) {
                let ps2 = new PerfectScrollbar(addServiceList, {
                    suppressScrollX: true
                })

            }

            if (citiesList && windowInnerWidth < 1280) {
                let ps2 = new PerfectScrollbar(citiesList, {
                    suppressScrollX: true
                })

            }
        }

    })
})

let mobileBtn = document.querySelector(".mobile-menu-btn")
let ps2;
let ps3;
let ps4;
if (mobileBtn) {
    mobileBtn.addEventListener('click', function () {
        let mobileMenu = document.querySelector('.header-menu-wrapper');
        let header = document.querySelector(".header")
        let menuList = mobileMenu.querySelector(".header-menu-list")

        if (!mobileBtn.classList.contains('active') && !mobileMenu.classList.contains('active')) {
            let submenuAddServices = document.querySelector(".submnenu-list-wrapper.additional-services");
            let submenuServices = document.querySelector(".submnenu-list-wrapper.services");
            mobileBtn.classList.add('active');
            mobileMenu.classList.add('active');
            header.classList.add('active');
            scrollLock.disablePageScroll();
            ps2 = new PerfectScrollbar(mobileMenu)

        } else {
            mobileBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            header.classList.remove('active');
            scrollLock.enablePageScroll();
            ps2.destroy()

        }

    })
}
document.addEventListener('click', function (e) {
    if (!e.target.classList.contains("active")) {
        let active = document.querySelector('.dropdown.active')
        if (active) {
            active.classList.remove('active')
        }

    }
    if (!e.target.classList.contains("active") && !e.target.classList.contains("call-inner")) {
        callBtn.classList.remove('active');
        phoneBlock.classList.add('hidden');
    }



})
//custom select 
let select = document.getElementById('choices-single-custom-templates')

if (select) {
    const choices = new Choices(select, {
        searchEnabled: false,
        shouldSort: false,
        position: 'bottom'
    });
}
//select cities
let currentCity = document.querySelector('.current-city')
if (currentCity) {
    let mapCityWarapper = document.querySelector(".map-cities-wrapper")
    let citiesWarapper = document.querySelector(".map-cities-list")
    currentCity.addEventListener('click', function () {
        if (mapCityWarapper.classList.contains('active')) {

            mapCityWarapper.classList.remove("active")

            scrollLock.enablePageScroll();
        }
        else {
            mapCityWarapper.classList.add("active");
            scrollLock.disablePageScroll();
            ps = new PerfectScrollbar(citiesWarapper)
        }
    })
}
//services slider
let servicesList = document.querySelector('.services-list')
if (servicesList) {
    const swiper2 = new Swiper(servicesList, {
        slidesPerView: 4,
        autoHeight: true,
        loop: true,



        navigation: {
            nextEl: '.services-navigation-next',
            prevEl: '.services-navigation-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            1440: {
                slidesPerView: 4,
            },
            1100: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            },
        }

    });
}
//reviews slider
let reviewList = document.querySelector(".review-list");
if (reviewList) {
    const swiper3 = new Swiper(reviewList, {
        slidesPerView: 1,
        autoHeight: true,
        loop: true,


        navigation: {
            nextEl: '.reviews-navigation-next',
            prevEl: '.reviews-navigation-prev',
        },

        breakpoints: {
            // when window width is >= 320px
            320: {

            },
        }

    });
}

//map cities
//header connect popup
let connect = document.querySelector('.button-connect')
let mobileConnect = document.querySelector('.button-connect-laptop')
if (connect) {
    let modalWrapper = document.querySelector('.modal-wrapper');
    let form = modalWrapper.querySelector('form');
    let ps;
    connect.addEventListener('click', function () {
        let modal = document.querySelector(".modal")
        modalWrapper.classList.add('active')
        scrollLock.disablePageScroll();
        ps = new PerfectScrollbar(modal)
    })
    mobileConnect.addEventListener('click', function () {
        let modal = document.querySelector(".modal")
        modalWrapper.classList.add('active')
        scrollLock.disablePageScroll();
        ps = new PerfectScrollbar(modal)
    })
    let closeBtn = document.querySelector(".close-btn");
    let background = document.querySelector(".background");
    closeBtn.addEventListener('click', closeModal)
    background.addEventListener('click', closeModal)

    function closeModal() {
        modalWrapper.classList.remove('active')
        // const scrollbar = document.querySelector(".choices__list--dropdown .choices__list");
        scrollLock.enablePageScroll();
        ps.destroy();
        form.reset();
    }

}
//leave reviev popup
let addComment = document.querySelector(".add-comment")
if (addComment) {
    let modalWrapper = document.querySelector('.modal-review-wrapper');
    let form = modalWrapper.querySelector('form');
    addComment.addEventListener('click', function () {
        let modal = modalWrapper.querySelector(".modal")
        modalWrapper.classList.add('active')
        scrollLock.disablePageScroll();
        ps3 = new PerfectScrollbar(modal)
    })
    let closeBtn = modalWrapper.querySelector(".close-btn");
    let background = modalWrapper.querySelector(".background");
    closeBtn.addEventListener('click', closeModal)
    background.addEventListener('click', closeModal)

    function closeModal() {
        modalWrapper.classList.remove('active')
        scrollLock.enablePageScroll();
        form.reset();
    }

}
//count price popup
let countPrice = document.querySelector(".count-price");
if (countPrice) {
    let modalWrapper = document.querySelector('.modal-price-wrapper');



    let form = modalWrapper.querySelector('form');
    countPrice.addEventListener('click', function () {

        let modal = modalWrapper.querySelector(".modal")
        modalWrapper.classList.add('active')
        let scrolable = document.querySelectorAll(".choices__list--dropdown");
        let wW = window.innerWidth;
        if (wW > 767) {
            ps3 = new PerfectScrollbar(modal);
        }
        scrolable.forEach(function (item) {
            item.classList.add("ps__child--consume");
        })
        scrollLock.disablePageScroll(modal);
    })
    let closeBtn = modalWrapper.querySelector(".close-btn");
    let background = modalWrapper.querySelector(".background");
    closeBtn.addEventListener('click', closeModal);
    background.addEventListener('click', closeModal)

    function closeModal() {
        modalWrapper.classList.remove('active')
        scrollLock.enablePageScroll();
        form.reset();
    }

}
//order popup

let order = document.querySelectorAll(".order-btn");
if (order.length > 0) {
    let orderModalWrapper = document.querySelector('.order-modal-wrapper');
    let form = orderModalWrapper.querySelector('form');

    order.forEach((elem) => {
        elem.addEventListener('click', function () {
            orderModalWrapper.classList.add('active')
            scrollLock.disablePageScroll();


        })
    });
    let modal = orderModalWrapper.querySelector(".modal");
    ps3 = new PerfectScrollbar(modal)
    let closeBtn = orderModalWrapper.querySelector(".close-btn");
    let background = orderModalWrapper.querySelector(".background");
    closeBtn.addEventListener('click', closeModal)
    background.addEventListener('click', closeModal)


    function closeModal() {
        orderModalWrapper.classList.remove('active')
        scrollLock.enablePageScroll();
        form.reset();
    }

}
//youtube video
const videoPopup = document.getElementById('j-video-popup');
const videoIframe = document.getElementById('videoIframe');
const videoPopupClose = document.querySelector('.j-video-close-popup');
const playVideo = document.getElementById('play');
const videoOverlayClose = document.querySelector('.modal__overlay_video');
let videoSrc;
if (playVideo) {
    playVideo.addEventListener('click', function () {
        videoSrc = this.dataset.src;
        videoIframe.setAttribute('src', videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    });
}
if (videoOverlayClose) {
    videoOverlayClose.addEventListener('click', function () {
        videoIframe.setAttribute('src', "");
    })
}
if (videoPopupClose) {
    videoPopupClose.addEventListener('click', function () {
        videoIframe.setAttribute('src', "");
    })
}

// form validation
const transportationForm = document.getElementById("transportationForm");
const contactForm = document.getElementById("contactForm");
const reviewForm = document.getElementById("reviewForm");
const feedbackForm = document.getElementById("feedback");

formFieldsValidate(transportationForm);
formFieldsValidate(contactForm);
formFieldsValidate(reviewForm);
formFieldsValidate(feedbackForm);

function formFieldsValidate(form) {
    if (form) {
        const pristine = new Pristine(form);
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var valid = pristine.validate();
            if (!valid) {
                form.classList.add('invalid');

            } else {
                form.classList.remove('invalid')
            }
        });
    }
}