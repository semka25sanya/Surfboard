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
//   const validateFields = (form, fieldsArray) => {
//     fieldsArray.forEach((field) => {
//         if (field.val().trim() == "") {
//             field.addClass("input-error");
//         } else {
//             field.removeClass("input-error");
//         }
//     });
//     const errorFields = form.find(".input-error");
//     return errorFields.length == 0;
// }
//     $(".form__content").submit(e => {
//     e.preventDefault();

//     const form = $(e.currentTarget);
//     const name = form.find("[name='name']");
//     const phone = form.find("[name='phone']");
//     const comment = form.find("[name='comment']");
//     const to = form.find("[name='to']");
//     // const modal = $("#modal");
//     // const content = modal.find(".modal-content");
//     // modal.removeClass("error-modal");
//     const isValid = validateFields(form, [name, phone, comment, to]);
//     if (isValid) {
//         const request = $.ajax({
//             url: "https://webdev-api.loftschool.com/sendmail",
//             method: "post",
//             data: {
//                 name: name.val(),
//                 phone: phone.val(),
//                 comment: comment.val(),
//                 to: to.val()
//             }
//         });
//         request.done((data) => {
//             content.text(data.message);
//             e.target.reset();
//         });
//         request.fail((data) => {
//             const message = data.responseJSON.message;
//             content.text(message);
//             // modal.addClass("error-modal");
//         });
//         request.always(() => {
//             $.fancybox.open({
//                 src: "#modal",
//                 type: "inline"
//             });
//         })
//     }
// });
