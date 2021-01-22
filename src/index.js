function Role(option) {
    this.role = option.role;
    this.permissions = option.permissions;
}
Role.prototype.show = function () {
    let str = '是一个' + this.role + ',权限:' + this.permissions.join(',');
    console.log(str);
}
function simpleFactory(role) {
    if (role=='admin') {
        return new Role({
            role: '管理员', 
            permissions: ['设置', '删除', '新增', '创建', '开发', '推送', '提问', '评论']
        })
    } else if (role == 'developer') {
        return new Role({ 
            role: '开发者', 
            permissions: ['开发', '推送', '提问', '评论']
        });
    } else {
        throw new Error('参数只能为 admin 或 developer');
    }
}
const xm = simpleFactory('admin');
xm.show();

const xh = simpleFactory('developer');
xh.show();

const xl = simpleFactory('guest');
xl.show();