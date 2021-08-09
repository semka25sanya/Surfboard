var burger = document.querySelector(".hamburger")
var menu = document.querySelector(".burger-menu")
var item = document.querySelector(".burger-menu__item")
var link = document.querySelectorAll(".burger-menu__link")
var closemenu = document.querySelector(".burger-menu__close");

burger.addEventListener("click", function (e) {
  e.preventDefault()
});

burger.addEventListener("click", function (e) {
  menu.classList.add("open");
});

closemenu.addEventListener("click", function (e) {
  menu.classList.remove("open");
});

item.addEventListener("click", function (e) {
  menu.classList.remove("open");
});

const findBlockByAllias = (alias) => {
  return $(".review").filter((ndx, item) => {
    return $(item).attr("data-linked-with") == alias;
  });
};

$(".paginator__link").click((e) => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-open");
  const itemToShow = findBlockByAllias(target);
  const curItem = $this.closest(".paginator__item");

  itemToShow.addClass("review--active").siblings().removeClass("review--active");
  curItem.addClass("active").siblings().removeClass("active");
});



$(".team__item").on("click", function (event) {
  $(this).toggleClass("is_open").siblings().removeClass('is_open');
});

const slider = $('.products__slider').bxSlider({
  pager: false,
  controls: false
});

$('.left-scroll-button').click(e => {
  e.preventDefault();
  slider.goToPrevSlide();
})

$('.right-scroll-button').click(e => {
  e.preventDefault();
  slider.goToNextSlide();
  });

  const validateFields = (form, fieldsArray) => {
    fieldsArray.forEach((field) => {
        if (field.val().trim() == "") {
            field.addClass("input-error");
        } else {
            field.removeClass("input-error");
        }
    });
    const errorFields = form.find(".input-error");
    return errorFields.length == 0;
}
$(".form__content").submit(e => {
    e.preventDefault();
    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");
    const modal = $("#modal");
    const content = modal.find(".modal__message");
    modal.removeClass("error-modal");
    const isValid = validateFields(form, [name, phone, comment, to]);
    if (isValid) {
        const request = $.ajax({
            url: "https://webdev-api.loftschool.com/sendmail",
            method: "post",
            data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val()
            }
        });
        request.done((data) => {
            content.text(data.message);
            e.target.reset();
        });
        request.fail((data) => {
            const message = data.responseJSON.message;
            content.text(message);
            modal.addClass("error-modal");
        });
        request.always(() => {
            $('.modal').addClass("open");
        })
    }
});
$(".app-submit-button").on("click", function (event) {
    $('.modal').removeClass("open");
});

let player;
const playerContainer = $(".video-player");

let eventsInit = () => {
  $(".video-player__icon--start").click(e =>{
    e.preventDefault();

    if(playerContainer.hasClass("paused")) {
      playerContainer.removeClass("paused");
      player.pauseVideo();
    } else {
      playerContainer.addClass("paused");
        player.playVideo();

    }
  });


$(".video-player__lenght-scale").click(e => {
  const bar = $(e.currentTarget);
  const clickedPosition = e.originalEvent.layerX;
  const newButtonPositionPercent = (clickedPosition / bar.width()) * 100 ;
 const newPlayPositionSec = (player.getDuration()/100) * newButtonPositionPercent;

 $(".video-player__circle").css({
   left: `${newButtonPositionPercent}%`
 });
 player.seekTo(newPlayPositionSec);
});
};


 $(".video-player__splash").click(e => {
   player.playVideo();
 })


const onPlayerStateChange = event => {
  switch (event.data) {
    case 1:
      playerContainer.addClass("video-player--active");
      playerContainer.addClass("video-player--paused")
      break;

      case 2:
        playerContainer.removeClass("video-player--active");
        playerContainer.removeClass("video-player--paused")
        break;

  }
};
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('yt-video-player', {
          height: '405',
          width: '660',
          videoId: 'LXb3EKWsInQ',
          events: {
            // 'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange
          },
          playerVars: {
            controls:0,
            disablekb:0,
            showinfo:0,
            rel:0,
            autoplay:0,
            modestbranding:0
          }
        });
      }

      eventsInit();
    
    let myMap;

    const init = () => {
      myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7
      });
    }

    ymaps.ready(init);

    const verticalAcc = () => {
      const links = document.querySelectorAll(".menu-section__link");
      const body = document.querySelector('body');

      const calculateWidth = () => {
        const windowWidth = window.innerWidth;

        const MAX_WIDTH = 550;

        const linksWidth = links[0].offsetWidth;

        const reqWidth = windowWidth - (linksWidth * links.length);

        return reqWidth > MAX_WIDTH ? MAX_WIDTH : reqWidth;
    
      };

      function closeItem(activeElement) {
        const activeText = activeElement.querySelector(".menu-section__content");
        activeText.style.width = "0px";
        activeElement.classList.remove("active--item");
      }
      links.forEach(function(elem){
        elem.addEventListener("click", function(e){
          e.preventDefault();
          const link = e.target.closest(".menu-section__link");

          const active = document.querySelector("active--item");
          console.log(active)

          if(active) {
            closeItem(active);
          }

          if (!active || active.querySelector(".menu-section__link") !== link) {
            const current = link.closest(".menu-section__item");
          current.classList.add("active--item");
          const currentText = current.querySelector(".menu-section__content");
          if (body.offsetWidth> 480) {
            currentText.style.width = calculateWidth() + 'px';

          } else {
            currentText.style.width = '100%';
          }
          }
        });

      });
    }