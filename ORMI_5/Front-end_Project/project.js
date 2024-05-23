document.addEventListener('DOMContentLoaded', function (event) {
  const open = document.querySelector('.open-modal-btn');

  const close = document.querySelector('.close-btn');

  const layout = document.querySelector('.modal');

  open.addEventListener('click', function () {
    layout.style.display = 'flex';
  });

  close.addEventListener('click', function () {
    layout.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === layout) {
      layout.style.display = 'none';
    }
  });
});

type = 'text/javascript';
src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=f5cdb90b532ed3fe2300f022f9450641';
var container = document.getElementById('map');
var options = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 3,
};
var map = new kakao.maps.Map(container, options);
