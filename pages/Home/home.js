//index.js  
const app = getApp()
Page({
    data: {
        indicatorDots: true,
        autoplay: true,
        vertical: false,
        interval: 5000,
        duration: 1000,

        routers: [{
                name: 'HTML',
                url: '/pages/Course/course',
                icon: '/image/java_ico.png',
                code: '10'
            },
            {
                name: 'Java',
                url: '/pages/Course/course',
                icon: '/image/python_ico.png',
                code: '11'
            },
            {
                name: 'CSS',
                url: '/pages/Course/course',
                icon: '/image/java_ico.png',
                code: '10'
            },
            {
                name: 'PHP',
                icon: '/image/python_ico.png',
                code: '11'
            },
            {
                name: 'Python',
                url: '/pages/Course/course',
                icon: '/image/java_ico.png',
                code: '10'
            },
            {
                name: 'JavaScript',
                icon: '/image/python_ico.png',
                code: '11'
            },
            {
                name: 'C++',
                url: '/pages/Course/course',
                icon: '/image/java_ico.png',
                code: '10'
            },
            {
                name: 'Object-C',
                icon: '/image/python_ico.png',
                code: '11'
            },
            {
                name: 'Ruby',
                url: '/pages/Course/course',
                icon: '/image/java_ico.png',
                code: '10'
          }
        ]
    },
    onLoad: function() {
        wx.showLoading();

        this.loadTypeData();

        this.loadBannerData();

    },

    onItemClick: function(event) {
        // wx.showToast({
        //     title: event.target.dataset.postid + "",
        // })

        
        var posttitle = event.target.dataset.posttitle;
        var posturl = event.target.dataset.posturl;
        var postNum = posturl.split("=")[1];

        console.log("postNum:" + postNum);

        wx.navigateTo({
            url: '/pages/Web/web?title=' + posttitle + '&num=' + postNum + '&url=' + posturl,
        })


        wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
        })
    },

    loadBannerData: function() {

        var that = this;

        wx.request({
            url: 'http://api.codertopic.com/itapi/coverapi/cover.php',
            method: 'GET',
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function(res) {
                console.log(res.data);

                var result = res.data.result;

                for (var i = 0; i < result.length; i++) {

                    if (result[i].platform == 2) {
                        result.splice(i, 1);
                    }
                    // console.log(result[i].title);
                }

                that.setData({
                    swiperDataList: result,
                });

            },
            fail: function(res) {
                console.log(".....fail.....");
            },
            complete: function (res) {
                wx.hideLoading();
            }
        })
    },

    loadTypeData: function() {
        wx.request({
            url: 'http://api.codertopic.com/itapi/platformtypeapi/platformtype.php',
            // data: {
            //     startNum: '0',
            //     channelId: '3'
            // },
            method: "GET",
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function(res) {
                console.log(res.data)
            },
            complete:function(res){
                wx.hideLoading();
            }
        })
    },

    onPullDownRefresh:function(){
        wx.showLoading({
            title: '正在刷新...',
            duration:5000
        })
    },

    onReachBottom:function(){
        wx.showLoading({
            title: '正在加载更多...',
            duration: 5000
        })
    }



})