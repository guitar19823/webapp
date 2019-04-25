exports.get = async function(ctx, next) {
   ctx.body = ctx.render('index.pug');
};

exports.post = async function(ctx, next) {
  ctx.body = {
		login: ctx.isAuthenticated()
	};
};