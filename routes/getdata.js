const User = require('../models/User');

exports.post = async function(ctx, next) {
	if(ctx.isAuthenticated()) {

		const email = ctx.request.body.email;
		const password = ctx.request.body.password;

		const user = await User.findOne({ email });
    const data = await user.getData(password);

		ctx.body = {data: data}
	}
};