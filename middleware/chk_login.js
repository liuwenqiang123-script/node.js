function chk_login() {
	/* 登录页面不需要验证 */
	return function (req, res, next) {
		// 把不需要验证的地址屏蔽掉

		if (req.session.admin) {
			//如果没有session的值 跳到登录页
			if (req.url == "/login.html" || req.url == "/login") {
				res.redirect("/admin");
			} else {
				next();
			}
		} else {
			if (req.url == "/login.html" || req.url == "/login") {
				next();
			} else {
				return res.send(
					'<script>top.location.href="/admin/login.html"</script>'
				);
			}
		}
	};
}

module.exports = chk_login;
