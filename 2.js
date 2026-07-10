'use strict';

const ff = () => {
    const gg = Math.floor(Math.random() * 255);
    const hh = Math.floor(Math.random() * 255);
    const ii = Math.floor(Math.random() * 255);

    return `rgb(${gg}, ${hh}, ${ii})`;
}

const jj = () => {
    const kk = document.getElementById('bb');
    const ll = document.getElementById('cc');
    kk.style.backgroundColor = ff();
    ll.textContent = ff();
}

const mm = document.getElementById('dd');
mm.addEventListener('click', ()=> {
  jj();
})

const nn = () => {
    const oo = document.getElementById('cc');
    const pp = document.createElement('input');
    document.body.appendChild(pp);

    pp.value = oo.textContent;
    pp.select();

    document.execCommand('copy');
    document.body.removeChild(pp);
    alert('Copy to clipboard.');
};

const qq = document.getElementById('ee');
qq.addEventListener('click', () => {
    nn();
});