const menuList = [{
        title: '首页',
        key: '/admin/home'
    },
    {
        title: 'UI',
        key: '/admin/ui',
        children: [{
                title: '按钮',
                key: '/admin/ui/buttons'
            },
            {
                title: '弹窗',
                key: '/admin/ui/modals'
            },
            {
                title: 'Loading',
                key: '/admin/ui/Loading'
            }
        ]
    },
    {
        title: '权限设置',
        key: '/admin/permission'
    }
]
export default menuList;