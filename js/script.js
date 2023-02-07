document.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        const intialContainerSection = document.querySelector('.inital_container__section');
        if (intialContainerSection) {
            intialContainerSection.classList.remove('inactive');
            intialContainerSection.classList.add('active');
        }
    }, 2000);

    const overlayCloseBtn = document.querySelector("#overlay_close__btn");

    if (overlayCloseBtn) {
        overlayCloseBtn.addEventListener('click', () => {
            const overlayContainer = document.querySelector('.inital_container__section');

            if (overlayContainer) {
                overlayContainer.classList.add('remove')
            }
        })
    }

    const closeAdBannerSection = document.querySelector("#ad_banner__close");

    if (closeAdBannerSection) {
        closeAdBannerSection.addEventListener('click', () => {
            const adBanner = document.querySelector('.ad_banner__section');
            adBanner.classList.add('remove');

        })
    }
})