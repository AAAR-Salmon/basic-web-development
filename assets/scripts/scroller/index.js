(() => {
  function getPageNum() {
    return Number(/(?<pageNum>\d+)/.exec(location.hash)?.groups?.pageNum ?? 0);
  }

  function setPageNum(n) {
    if (typeof n !== 'number') {
      console.warn(`typeof ${n} is not number, but ${typeof n}`);
      return;
    }
    if (n < 0) {
      location.hash = 0;
      return;
    }
    if (n >= pageCount) {
      location.hash = pageCount - 1;
      return;
    }
    location.hash = n;
  }

  const pageElements = document.querySelectorAll('slide-page');
  const pageCount = pageElements.length;
  pageElements.forEach((e, i) => {
    e.id = i;
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPageNum(getPageNum() + 1);
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPageNum(getPageNum() - 1);
    }
  });
})();
