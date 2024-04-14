$(function () {
  $('.quotes-btn').on('click', function () {
    $.getJSON(
      'https://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=jsonp&jsonp=?',
    )
      .done(updateQuote)
      .fail(handleErr)
    function updateQuote(response) {
      const quoteText = response.quoteText
      const quoteAuthor = response.quoteAuthor

      $('.quote:first-child').before(
        `<div class="quote"><div class="quote-text">${quoteText}</div>${
          quoteAuthor &&
          `<div class="quote-autor">© <span>${quoteAuthor}</span>`
        }</div></div>`,
      )

      if ($('.quote').length > 1) {
        $('.quote:last-child').hide()
      }
    }
    function handleErr(jqxhr, textStatus, err) {
      alert('Ошибка: ' + textStatus + ', ' + err)
    }
  })
})
