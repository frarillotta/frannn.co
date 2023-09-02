'use client';
export let isSafari = false;
if (typeof window !== 'undefined') {

    const navigator = window?.navigator;
    isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

}

