function onSubmit(that) {
	var phone = that.find("input[name='post[tel]']").val();
	var name = that.find("input[name='post[name]']").val();
	if (name == '') {
		alert('名字不能为空');
		return false;
	}
	if (phone == '') {
		alert('电话不能为空');
		return false;
	}
	
	var form = that.serializeArray();
	var obj = {};
	
	$.ajax({
		type: 'get',
		url: 'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel='+phone,
		contentType: "application/json; charset=utf-8",
		dataType: 'script',
		success: function (data) {
			var phtel = __GetZoneResult_.province;
			if (phtel == undefined) {
				phtel = '';
			}
			form.push({name: "post[telcity]", value: phtel});
			var patrn = /[`~@$%^&*+=<>"{}|,;'\\[\]·~！@￥%……&*+={}|《》？“”、；‘'，。、]/im;
			for (var data in form) {
				if (form[data]['name'] != 'post[url]') {
					if (patrn.test(form[data]['value'])) {
						alert('不能含有特殊字符');
						return false;
					}
				}
				obj[form[data]['name']] = form[data]['value'];
			}
			$.ajax({
				type: 'post',
				data: obj,
				url: 'https://ap.bangboer.cn/',
				dataType: 'json',
				success: function (data) {
					alert(data.msg);
					that[0].reset();
				},
				error: function (err) {
					alert('提交失败');
				}
			});
		},
		error: function (err) {
			alert('电话有误');
		}
	});
	return  false;
};