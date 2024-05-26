document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.header .navbar');
    const searchForm = document.querySelector('.search-form');
    const header = document.querySelector('.header');
    const menuBtn = document.querySelector('#menu-btn');
    const navClose = document.querySelector('#nav-close');
    const searchBtn = document.querySelector('#search-btn');
    const closeSearch = document.querySelector('#close-search');

    // Toggle navbar visibility
    menuBtn.addEventListener('click', () => {
        navbar.classList.add('active');
    });

    navClose.addEventListener('click', () => {
        navbar.classList.remove('active');
    });

    // Toggle search form visibility
    searchBtn.addEventListener('click', () => {
        searchForm.classList.add('active');
    });

    closeSearch.addEventListener('click', () => {
        searchForm.classList.remove('active');
    });

    // Change header style on scroll
    const toggleHeaderActiveClass = () => {
        if (window.scrollY > 0) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    };

    window.addEventListener('scroll', () => {
        navbar.classList.remove('active');
        toggleHeaderActiveClass();
    });

    // Initialize header style on page load
    toggleHeaderActiveClass();
});
