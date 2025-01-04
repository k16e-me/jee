import { _q, _ql } from '@scripts/snips'
import { _unsetShim } from '@scripts/store'

export default function _search() {
    const
        searchInput = document.getElementById('global-search'),
        searchStatus = document.getElementById('search-status'),
        resultsList = document.getElementById('results-list'),
        maxResults = 150

    let total = 0
    let pagefind = null
    let results = []

    // Initialize Pagefind
    async function initPagefind() {
        if (typeof window !== 'undefined') {
            const baseUrl = window.location.origin
            pagefind = await import(
                /* @vite-ignore */
                baseUrl + '/pagefind/pagefind.js'
            )

            if (pagefind) {
                pagefind.init({
                    element: '#global-search',
                    excerptLength: 15,
                })
            }
        }
    }

    // Handle search
    async function handleSearch(searchTerm) {
        if (!pagefind || !searchTerm) return

        const res = await pagefind.search(searchTerm)
        results = await Promise.all(
            res.results.slice(0, maxResults).map((r) => r.data()),
        )
        total = await results.length

        updateUI()
    }

    function updateUI() {
        if (searchInput.value) {
            searchStatus.style.display = 'flex'
            searchStatus.querySelector('h3').textContent =
                `Showing ${total} results for "${searchInput.value}"`.trim()
        } else {
            searchStatus.style.display = 'none'
        }

        resultsList.innerHTML = ''
        const displayedResults = results.slice(0, maxResults)

        displayedResults.forEach((r) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <a href="${r.url.replace('.html', '')}" class="flex items-center w-full rounded-xl group r-hide-overflow overflow-y-clip h-[6.15rem] max-w-none hover:bg-[var(--color-bg-default-elevated)]" data-search-result>
                    <div class="rounded-tl-lg rounded-bl-lg rounded-tr-2xl rounded-br-[3rem] overflow-clip h-full shrink-0 bg-[var(--color-bg-default-elevated)] w-[6.05rem]">
                        <img src="${r.meta.image}" alt="" draggable="false" class="w-full max-w-full saturate-[.8] sepia-[7%] grayscale-[5%] object-cover object-top size-full group-hover:scale-105 transition-transform duration-200" width="320" height="217"/>
                    </div>
                    <div class="px-4 flex flex-col gap-2 h-full justify-around py-2">
                        <span class="text-[1.015rem] leading-[1.325rem] md:text-[1.0625rem] font-sans font-semibold text-[var(--color-text-title)] line-clamp-2">${r.meta.title}</span>
                        <span class="text-[0.8975rem] leading-[1.0975rem] font-sans font-medium text-[var(--color-text-caption)] line-clamp-1 max-w-32 capitalize">${r.excerpt}</span>
                    </div>
                    <div class="fixed bottom-0 right-0 translate-y-4 opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                        <svg viewBox="0 0 960 560" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[10rem] text-[var(--color-emphasis)] absolute -right-[4.5rem] -bottom-[2.8rem]">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M960 241.834C947.915 241.834 932.293 242.31 918.44 242.786C878.059 244.45 820.878 248.255 737.464 260.858C654.05 273.461 567.688 295.813 461.578 335.049C310.666 390.93 127.037 471.779 0 560V291.771C12.969 266.327 277.36 142.437 311.551 129.121C510.507 50.8874 734.222 -12.6029 960 2.14017V241.597V241.834Z"
                            ></path>
                        </svg>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-5 text-white absolute right-3 bottom-2 z-10">
                            <path
                                d="M20.7806 12.5306L14.0306 19.2806C13.8899 19.4213 13.699 19.5003 13.5 19.5003C13.301 19.5003 13.1101 19.4213 12.9694 19.2806C12.8286 19.1398 12.7496 18.949 12.7496 18.7499C12.7496 18.5509 12.8286 18.36 12.9694 18.2193L18.4397 12.7499H3.75C3.55109 12.7499 3.36032 12.6709 3.21967 12.5303C3.07902 12.3896 3 12.1988 3 11.9999C3 11.801 3.07902 11.6103 3.21967 11.4696C3.36032 11.3289 3.55109 11.2499 3.75 11.2499H18.4397L12.9694 5.78055C12.8286 5.63982 12.7496 5.44895 12.7496 5.24993C12.7496 5.05091 12.8286 4.86003 12.9694 4.7193C13.1101 4.57857 13.301 4.49951 13.5 4.49951C13.699 4.49951 13.8899 4.57857 14.0306 4.7193L20.7806 11.4693C20.8504 11.539 20.9057 11.6217 20.9434 11.7127C20.9812 11.8038 21.0006 11.9014 21.0006 11.9999C21.0006 12.0985 20.9812 12.1961 20.9434 12.2871C20.9057 12.3782 20.8504 12.4609 20.7806 12.5306Z"
                            ></path>
                        </svg>
                    </div>
                </a>
            `
            resultsList.appendChild(li)
        })
    }

    // Initialize
    initPagefind()
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value))
}