exports.post = async function(ctx, next) {
  ctx.logout();

  ctx.body = {
		login: ctx.isAuthenticated()
	};
};