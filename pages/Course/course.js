//index.js  
//获取应用实例 http://blog.csdn.net/xxdddail/article/details/70314211
const app = getApp()
Page({
    data: {
        title:"课程名称"
    },

    onLoad: function (options) {
        this.setData({
            title: options.name
        })

        
        wx.setNavigationBarTitle({
            title: options.name + ' ' + '课程',
        })


        
    }
})  