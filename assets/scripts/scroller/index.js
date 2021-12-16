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
      location.replace('#0');
      return;
    }
    if (n >= pageCount) {
      location.replace(`#${pageCount - 1}`);
      return;
    }
    location.replace(`#${n}`);
  }

  const pageElements = document.querySelectorAll('slide-page');
  const pageCount = pageElements.length;
  pageElements.forEach((e, i) => {
    e.id = i;
  });

  window.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
      case 'Enter':
        e.preventDefault();
        setPageNum(getPageNum() + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
      case 'Backspace':
        e.preventDefault();
        setPageNum(getPageNum() - 1);
        break;
      case 'Home':
        e.preventDefault();
        setPageNum(0);
        break;
      case 'End':
        e.preventDefault();
        setPageNum(pageCount - 1);
        break;
    }
  });
})();
