Template.postSubmit.events({
  'submit form': function (event) {
    event.preventDefault();

    var post = {
      url: $(event.target).find('[name=url]').val(),
      title: $(event.target).find('[name=title]').val()
    };

    Meteor.call('postInsert', post, function (err, res) {
      if (err)
        return alert(err.reason);

      if (res.postExists)
        alert('This link has already been posted');

      Router.go('postPage', {_id: res._id});
    });
  }
});
