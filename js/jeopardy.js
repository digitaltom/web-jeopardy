// https://etherpad.nue.suse.com/p/praxistag-jeopardy
var dataEndpoint = "jeopardy-data.json";

$.getJSON(dataEndpoint)
  .done(function (data) {
    console.log(data)
    $.each(data, function (id, category) {
      console.log(category)
      category_div = $('.category').first().clone()
      category_div.hide()
      category_div.removeClass('hidden')
      category_div.appendTo("#category-container")
      category_div.find(".category-heading").html(category['name'])
      category_div.find(".category-desc").html(category['description'])
      category_div.fadeIn()

      $.each(category['questions'], function (id, question) {
        console.log(question)
        question_div = category_div.find('.question').first().clone()
        question_div.hide()
        question_div.removeClass('hidden')
        question_div.appendTo(category_div)
        question_div.html("<b>" + question['label'] + "</b>")
        question_div.data('question', question['q'])
        question_div.data('answer', question['a'])
        question_div.fadeIn()
      })
    })
  })

$(document).on('click', '.question', function(){
  console.log($(this).data('question'))
  $( this ).removeClass('btn-success')
  $( this ).addClass('btn-secondary')
  $('#question-modal').find('.modal-frage').html($(this).data('question'))
  $('#answer-modal').find('.modal-body').load($(this).data('answer'))
})

$(document).on('click', '#answer-modal', function(){
  $("#question-modal").modal('hide')
  $("#answer-modal").modal('hide')
})
