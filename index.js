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


const openItem = item => {
  const container = item.closest(".team__item");
  const contentBlock = container.find(".team__content");
  const textBlock = contentBlock.find(".team__content-block");
  const reqHeight = textBlock.height();

  container.addClass("active-item");
  contentBlock.height(reqHeight);
}

const closeEveryItem = container => {
  const items = container.find('.team__content');
  const itemContainer = container.find(".team__item");

  itemContainer.removeClass("active")
  items.height(0);
}


$('.team__name').click(e => {
  const $this = $(e.currentTarget);
  const container = $this.closest('.team');
  const elemContainer = $this.closest(".team__item");

  if (elemContainer.hasClass("active-item")) {
    closeEveryItem(container);
  } else {
    closeEveryItem(container);
    openItem($this);
  }
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


const validateFields = (form, fieledsArray) => {

  fieledsArray.forEach((filed) => {
    filed.removeClass("input-error");
    if (field.val().trim() == "") {
      field.addClass("input-error");
    }
  });

  const errorFields = form.find(".input-error");

  return errorFields.length == 0;
}

$(".form__content").submit((e) => {
  e.preventDefault();

  const form = $(e.currentTarget);
  const name = form.find("[name='name']");
  const phone = form.find("[name='phone']");
  const comment = form.find("[name='comment']");
  const to = form.find("[name='to']");

  const modal = $("#modal");
  const content = modal.find(".modal__content");

  modal.removeClass("error-modal");

  const isValid = validateFields(form, [name, phone, comment.to]);


  if (isValid) {
    const request = $.ajax({
      url: "https://webdev-api.loftschool.com/sendmail",
      method: "post",
      data: {
        name: name.val(),
        phone: phone.val(),
        comment: comment.val(),
        to: to.val(),
      },


      error: data => { }
    });

    request.done((data) => {
      content.text(data.message);

    });

    request.fail((data) => {
      const message = data.responseJSON.message;
      content.text(message);
      modal.addClass("error-modal");



    });

    request.always(() => {
      $.fancybox.show({
        src: "#modal",
        type: "inline"
      });
    });
  }
});

$(".app-submit-button").click(e => {
  e.preventDefault();

  $.fancybox.close();

})
