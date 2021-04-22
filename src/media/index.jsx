const media = {
    images: {
        SystemDiagram: require('./images/EiTdrawing.png'),

        MainBackground: require('./images/mountainBG.png'),

        StaticBackground: require('./images/WebsitePictures/Static-wallpaper.png'),

        WebsitePictures: {
            Mountainbg: require('./images/WebsitePictures/1.jpg'),
            PowerlineOrg: require('./images/WebsitePictures/2.jpg'),
            LightbulbLight: require('./images/WebsitePictures/3.jpeg'),
            car: require('./images/WebsitePictures/4.jpg'),
            battery: require('./images/WebsitePictures/5.jpeg'),
            PowerlineLight: require('./images/WebsitePictures/6.jpg'),
            Wave: require('./images/WebsitePictures/7.jpg'),
            LightbulbDark: require('./images/WebsitePictures/8.jpg'),
            Nightsky: require('./images/WebsitePictures/9.png'),
            city: require('./images/WebsitePictures/10.jpg'),
            logo: require('./images/WebsitePictures/Logo.png'),
            chartSmall: require('./images/WebsitePictures/Chart_small.png'),
            chartBig: require('./images/WebsitePictures/Chart_big.png'),
        },

        Glitre: {
            CommunityHouse: {
                Low : {
                    HeatMMonth: require(`./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapMonth.png`),
                    HeatMWeek: require(`./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapWeek.png`),
                    MLPeakShaving: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/MaxLoadPeakShaving.png'),
                    PowerProfileY: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/PowerProfileYear.png'),
                },
                Mid : {
                    HeatMMonth: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapMonth.png'),
                    HeatMWeek: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapWeek.png'),
                    MLPeakShaving: require('./PowerFigures/Glitre/CommunityHouse/40kW_120kWh/MaxLoadPeakShaving.png'),
                    PowerProfileY: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/PowerProfileYear.png'),
                },
                High : {
                    HeatMMonth: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapMonth.png'),
                    HeatMWeek: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapWeek.png'),
                    MLPeakShaving: require('./PowerFigures/Glitre/CommunityHouse/150kW_450kWh/MaxLoadPeakShaving.png'),
                    PowerProfileY: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/PowerProfileYear.png'),
                },
            },
            Mill: {
                Low: {
                    HeatMMonth: require('./PowerFigures/Glitre/Mill/10kW_30kWh/HeatMapMonth.png'),
                    HeatMWeek: require('./PowerFigures/Glitre/Mill/10kW_30kWh/HeatMapWeek.png'),
                    MLPeakShaving: require('./PowerFigures/Glitre/Mill/10kW_30kWh/MaxLoadPeakShaving.png'),
                    PowerProfileY: require('./PowerFigures/Glitre/Mill/10kW_30kWh/PowerProfileYear.png'),
                },
                Mid: {
                    HeatMMonth: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapMonth.png'),
                    HeatMWeek: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapWeek.png'),
                    MLPeakShaving: require('./PowerFigures/Glitre/Mill/40kW_120kWh/MaxLoadPeakShaving.png'),
                    PowerProfileY: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/PowerProfileYear.png'),
                },
                High: {
                    HeatMMonth: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapMonth.png'),
                    HeatMWeek: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapWeek.png'),
                    MLPeakShaving: require('./PowerFigures/Glitre/Mill/150kW_450kWh/MaxLoadPeakShaving.png'),
                    PowerProfileY: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/PowerProfileYear.png'),
                },
            },
            Office: {
                Low: {
                    HeatMMonth: require('./PowerFigures/Glitre/Office/10kW_30kWh/HeatMapMonth.png'),
                    HeatMWeek: require('./PowerFigures/Glitre/Office/10kW_30kWh/HeatMapWeek.png'),
                    MLPeakShaving: require('./PowerFigures/Glitre/Office/10kW_30kWh/MaxLoadPeakShaving.png'),
                    PowerProfileY: require('./PowerFigures/Glitre/Office/10kW_30kWh/PowerProfileYear.png'),
                },
                Mid: {
                    HeatMMonth: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapMonth.png'),
                    HeatMWeek: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapWeek.png'),
                    MLPeakShaving: require('./PowerFigures/Glitre/Office/40kW_120kWh/MaxLoadPeakShaving.png'),
                    PowerProfileY: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/PowerProfileYear.png'),
                },
                High: {
                    HeatMMonth: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapMonth.png'),
                    HeatMWeek: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapWeek.png'),
                    MLPeakShaving: require('./PowerFigures/Glitre/Office/150kW_450kWh/MaxLoadPeakShaving.png'),
                    PowerProfileY: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/PowerProfileYear.png'),
                },
            },

        },
    },
    videos: {
        infoVideo: require('./videos/Video_with_VO.mp4'),
    },
 };

export default media;