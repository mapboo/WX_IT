const app = getApp()
Page({
    data: {
        title: "课程名称"
    },

    onLoad: function (options) {

        console.log(options);

        this.setData({
            title: options.title,
            url: options.num != null? options.url + "?p=" + options.num: options.url
        },function(){
            console.log("Set Finished");
        })

        // http://www.codertopic.com/?p=5870

        console.log('网址1：' + options.num);

        console.log('网址2：' + options.url + "?p=" + options.num);

        wx.setNavigationBarTitle({
            title: options.title,
        })

    }
})  